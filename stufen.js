/* Zusätzliche Niveaus (★★ mittel, ★★★ schwierig) */
window.STUFEN = window.STUFEN || {};
/* Block a */
Object.assign(window.STUFEN, {
"dl-schwingen": {
  2: { vor: "Welche Regeln braucht ein Kampfsport, damit er fair ist?",
    dauer: "ca. 200 Wörter", text: "Schwingen ist eine traditionelle Form des Ringens und gilt als Schweizer Nationalsport. Gekämpft wird in einem runden Ring, der mit Sägemehl gefüllt ist. Die beiden Schwinger tragen über ihren Kleidern eine kurze Hose aus robustem Stoff, die Schwinghose. An dieser Hose müssen sie den Gegner während des ganzen Kampfes festhalten, mindestens mit einer Hand.\n\nGewonnen hat, wer den Gegner auf den Rücken legt, sodass beide Schulterblätter gleichzeitig das Sägemehl berühren. Damit das Ergebnis klar ist, beobachten Kampfrichter jeden Gang genau. Ein Gang dauert meistens wenige Minuten. Endet er ohne Sieger, gibt es einen «Gestellten», also ein Unentschieden.\n\nEine Besonderheit ist, dass es beim Schwingen keine Gewichtsklassen gibt. Deshalb kann ein kleinerer, aber technisch starker Schwinger einen viel schwereren Gegner besiegen. Die Schwinger kennen Dutzende von Griffen, zum Beispiel den «Kurz» oder den «Hüfter».\n\nDas wichtigste Fest ist das Eidgenössische Schwing- und Älplerfest, das alle drei Jahre stattfindet. Während zwei Tagen kämpft jeder Schwinger mehrere Gänge. Die besten erhalten einen Kranz aus Eichenlaub, und der Sieger des Schlussgangs wird Schwingerkönig. Preisgeld gibt es keines. Stattdessen können die Schwinger Preise aus dem «Gabentempel» auswählen, und der Hauptpreis ist ein lebendiger Stier. Trotzdem verdienen die besten Schwinger heute über Sponsoren recht viel Geld.",
    wort: [["robust","stark, hält viel aus"],["der Gang","ein einzelner Kampf beim Schwingen"],["der Kampfrichter","Person, die entscheidet, wer gewonnen hat"],["das Unentschieden","niemand gewinnt"],["die Gewichtsklasse","Einteilung der Sportler nach ihrem Körpergewicht"],["der Sponsor","Firma, die Geld gibt und dafür Werbung bekommt"]],
    mc: [
      { q: "Was muss ein Schwinger während des Kampfes immer tun?", o: ["Den Gegner an der Schwinghose festhalten","Barfuss kämpfen","Nach jeder Minute eine Pause machen","Den Kampfrichter begrüssen"], a: 0 },
      { q: "Was ist ein «Gestellter»?", o: ["Ein besonders starker Griff","Ein Gang ohne Sieger, also ein Unentschieden","Ein Schwinger aus den Bergen","Ein Preis aus dem Gabentempel"], a: 1 },
      { q: "Warum kann beim Schwingen ein kleinerer Schwinger einen schwereren besiegen?", o: ["Weil der schwerere Schwinger mit einer Hand kämpfen muss","Weil es keine Gewichtsklassen gibt und Technik sehr wichtig ist","Weil kleinere Schwinger mehr Punkte bekommen","Weil die Kampfrichter kleinere Schwinger bevorzugen"], a: 1 },
      { q: "Was bekommen die besten Schwinger am Eidgenössischen?", o: ["Eine Goldmedaille","Einen Kranz aus Eichenlaub","Ein Preisgeld von 100 000 Franken","Einen Pokal"], a: 1 }
    ],
    rf: [
      { s: "Das Eidgenössische dauert zwei Tage.", a: true },
      { s: "Beim Schwingen gibt es verschiedene Gewichtsklassen.", a: false, x: "Es gibt keine Gewichtsklassen." },
      { s: "Die besten Schwinger verdienen heute über Sponsoren Geld.", a: true }
    ],
    offen: [
      { q: "Erkläre mit eigenen Worten, wann ein Schwinger einen Gang gewonnen hat.", l: "Wenn er den Gegner auf den Rücken legt und beide Schulterblätter gleichzeitig das Sägemehl berühren." },
      { q: "Beim Eidgenössischen gibt es kein Preisgeld. Findest du das gut? Begründe deine Meinung in zwei bis drei Sätzen.", l: "Individuelle Antwort mit Begründung, z. B. Tradition und Ehre stehen im Vordergrund – oder: Sportler sollten für ihre Leistung bezahlt werden." }
    ] },
  3: { vor: "Was macht eine Tradition aus? Und darf sich eine Tradition verändern?",
    dauer: "ca. 310 Wörter", text: "Schwingen gilt als Schweizer Nationalsport, und kaum ein anderer Anlass verbindet Sport, Brauchtum und Volksfest so stark wie ein Schwingfest. Die Wurzeln dieses Ringkampfes reichen weit zurück: Bereits im Mittelalter haben Hirten und Bauern in den Alpen ihre Kräfte gemessen, und ein Relief in der Kathedrale von Lausanne aus dem 13. Jahrhundert zeigt zwei Männer, die einander ähnlich wie heutige Schwinger an den Hosen packen. 1895 wurde der Eidgenössische Schwingerverband gegründet, der bis heute die Regeln festlegt.\n\nDie Regeln sind einfach zu verstehen, aber schwierig umzusetzen. Die Schwinger halten sich an einer kurzen Zwilchhose fest und versuchen, den Gegner mit einem von zahlreichen Griffen ins Sägemehl zu bringen. Ein Gang gilt als gewonnen, sobald beide Schulterblätter des Gegners den Boden berühren. Da es keine Gewichtsklassen gibt, entscheiden nicht nur Kraft und Gewicht, sondern vor allem Technik, Gleichgewicht und Taktik.\n\nIn den letzten Jahrzehnten hat sich das Schwingen stark verändert. Während früher vor allem Landwirte und Handwerker antraten, trainieren die besten Schwinger heute fast wie Profis: mit Krafttraining, Ernährungsplänen und Videoanalysen. Das Eidgenössische Schwing- und Älplerfest, das alle drei Jahre stattfindet, zieht mehrere hunderttausend Besucherinnen und Besucher an und wird live im Fernsehen übertragen. Grosse Firmen treten als Sponsoren auf, und einzelne Schwinger verdienen mit Werbung beachtliche Summen, obwohl am Fest selbst kein Preisgeld verteilt wird.\n\nDiese Entwicklung wird unterschiedlich beurteilt. Kritiker befürchten, dass das Geld den ursprünglichen Charakter des Schwingens zerstört, der auf Bescheidenheit und Ehre beruht. Befürworter halten dagegen, dass eine Tradition nur überlebt, wenn sie sich anpasst und junge Menschen begeistert. Auch die Frauen gehören inzwischen dazu: Sie schwingen in einem eigenen Verband und führen eigene Feste durch, auch wenn sie noch deutlich weniger Aufmerksamkeit erhalten als die Männer.\n\nEines ist jedoch gleich geblieben: Nach jedem Gang wischt der Sieger dem Verlierer das Sägemehl vom Rücken. Diese Geste zeigt, dass beim Schwingen der Respekt vor dem Gegner wichtiger ist als der Sieg.",
    wort: [["das Brauchtum","alte Sitten und Traditionen eines Volkes"],["das Relief","ein Bild, das aus Stein herausgearbeitet ist"],["umsetzen","etwas in die Tat bringen, praktisch machen"],["die Taktik","geplantes Vorgehen, um ein Ziel zu erreichen"],["beachtlich","ziemlich gross, bemerkenswert"],["die Bescheidenheit","wenn man sich selbst nicht wichtiger nimmt als nötig"],["die Geste","eine Bewegung mit Bedeutung"]],
    mc: [
      { q: "Was zeigt das Relief in der Kathedrale von Lausanne?", o: ["Einen Schwingerkönig mit einem Stier","Zwei Männer, die einander ähnlich wie Schwinger an den Hosen packen","Ein Schwingfest mit Zuschauern","Die Gründung des Schwingerverbands"], a: 1 },
      { q: "Was entscheidet laut Text beim Schwingen vor allem über den Sieg?", o: ["Das Körpergewicht","Das Alter","Technik, Gleichgewicht und Taktik","Die Grösse der Schwinghose"], a: 2 },
      { q: "Was befürchten Kritiker?", o: ["Dass zu wenige Zuschauer kommen","Dass das Geld den ursprünglichen Charakter des Schwingens zerstört","Dass die Regeln zu kompliziert werden","Dass Frauen nicht mehr schwingen dürfen"], a: 1 },
      { q: "Welche Aussage passt zur Meinung der Befürworter?", o: ["Eine Tradition darf sich nie verändern.","Eine Tradition überlebt nur, wenn sie sich anpasst und junge Menschen begeistert.","Schwingen sollte abgeschafft werden.","Nur Landwirte sollten schwingen dürfen."], a: 1 }
    ],
    rf: [
      { s: "Der Eidgenössische Schwingerverband wurde 1895 gegründet.", a: true },
      { s: "Am Eidgenössischen bekommen die Sieger ein hohes Preisgeld.", a: false, x: "Am Fest selbst wird kein Preisgeld verteilt; Geld verdienen einzelne Schwinger über Werbung." },
      { s: "Frauen schwingen in einem eigenen Verband.", a: true },
      { s: "Heute trainieren die besten Schwinger ähnlich wie Profisportler.", a: true }
    ],
    offen: [
      { q: "Beschreibe, wie sich das Schwingen in den letzten Jahrzehnten verändert hat. Nenne mindestens drei Veränderungen aus dem Text.", l: "Früher v. a. Landwirte und Handwerker, heute Training fast wie Profis (Krafttraining, Ernährungspläne, Videoanalysen); sehr viele Zuschauer, Fernsehübertragung; Sponsoren und Werbeeinnahmen; Frauen schwingen in einem eigenen Verband." },
      { q: "Erkläre, warum die Geste am Schluss des Gangs für den Text so wichtig ist.", l: "Sie zeigt, dass Respekt vor dem Gegner wichtiger ist als der Sieg – das ist trotz aller Veränderungen gleich geblieben und steht für den ursprünglichen Charakter des Schwingens." },
      { q: "Soll sich eine Tradition wie das Schwingen verändern dürfen? Nimm Stellung und begründe mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme mit zwei Argumenten, z. B. pro: Anpassung hält die Tradition lebendig, begeistert Junge, ermöglicht Frauen die Teilnahme; contra: Geld und Kommerz gefährden Werte wie Bescheidenheit und Ehre." }
    ] }
},
"dl-esport": {
  2: { vor: "Was braucht man, um in einem Game richtig gut zu werden?",
    dauer: "ca. 200 Wörter", text: "In ausverkauften Hallen sitzen junge Menschen konzentriert vor ihren Bildschirmen, während Tausende Zuschauer jubeln und Millionen die Spiele im Internet verfolgen. Was nach einem Fussballfinal klingt, ist E-Sport: organisierte Wettkämpfe in Videospielen. Die grössten Turniere werden in Spielen wie «League of Legends» oder «Counter-Strike» ausgetragen, und die besten Teams kämpfen um Preisgelder in Millionenhöhe.\n\nFür viele Jugendliche ist eine Karriere als Profi-Gamer ein Traum. Doch nur ein winziger Teil schafft es tatsächlich an die Spitze. Profis trainieren oft acht bis zehn Stunden pro Tag. Sie spielen nicht einfach zum Spass, sondern analysieren eigene Fehler und die Taktiken der Gegner, üben Abläufe immer wieder und arbeiten an ihrer Reaktionszeit. Wer nicht ständig besser wird, verliert schnell seinen Platz im Team. Zudem sind die Karrieren kurz: Viele Spieler hören mit Mitte zwanzig wieder auf.\n\nOb E-Sport ein «richtiger» Sport ist, wird heftig diskutiert. Befürworter betonen, dass Gamer eine enorme Konzentration, Reaktionsschnelligkeit und Teamarbeit brauchen. Kritiker entgegnen, dass zu einem Sport auch körperliche Bewegung gehört.\n\nAuch die Gesundheit ist ein Thema. Langes Sitzen kann zu Rückenschmerzen führen, und wer bis spät in die Nacht spielt, schläft zu wenig. Deshalb beschäftigen viele Profi-Teams inzwischen Fitnesstrainer, Ernährungsberater und sogar Psychologen.",
    wort: [["ausverkauft","alle Tickets sind verkauft"],["das Preisgeld","Geld, das die Gewinner bekommen"],["die Spitze","der beste Platz, ganz oben"],["die Reaktionszeit","wie schnell man auf etwas reagiert"],["betonen","besonders hervorheben"],["der Psychologe / die Psychologin","Fachperson für Gefühle, Gedanken und Verhalten"]],
    mc: [
      { q: "Was ist E-Sport?", o: ["Sport mit Elektrovelos","Organisierte Wettkämpfe in Videospielen","Fernsehsendungen über Sport","Ein Training mit elektrischen Geräten"], a: 1 },
      { q: "Was machen Profi-Gamer im Training laut Text NICHT?", o: ["Eigene Fehler analysieren","Taktiken der Gegner studieren","Die Reaktionszeit trainieren","Nur zum Spass ohne Ziel spielen"], a: 3 },
      { q: "Was ist das Hauptargument der Kritiker?", o: ["Zu einem Sport gehört körperliche Bewegung","Games sind zu teuer","Die Preisgelder sind zu klein","Gamer arbeiten nicht im Team"], a: 0 },
      { q: "Warum beschäftigen viele Teams Fitnesstrainer und Psychologen?", o: ["Weil es gesetzlich vorgeschrieben ist","Wegen gesundheitlicher Probleme durch langes Sitzen und wenig Schlaf","Weil die Gamer auch Fussball spielen","Weil sie Werbung machen wollen"], a: 1 }
    ],
    rf: [
      { s: "Viele Profi-Gamer hören mit Mitte zwanzig wieder auf.", a: true },
      { s: "Die meisten Jugendlichen, die davon träumen, werden Profi-Gamer.", a: false, x: "Nur ein winziger Teil schafft es an die Spitze." },
      { s: "Langes Sitzen kann zu Rückenschmerzen führen.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum die Karriere als Profi-Gamer sehr unsicher ist. Nenne zwei Gründe aus dem Text.", l: "Nur sehr wenige schaffen es an die Spitze; wer nicht ständig besser wird, verliert seinen Platz; die Karriere ist kurz (Ende mit Mitte zwanzig)." },
      { q: "Ist E-Sport für dich ein Sport? Nimm Stellung mit einem Argument aus dem Text und einem eigenen Argument.", l: "Individuelle Antwort mit zwei Argumenten (z. B. Konzentration, Teamarbeit vs. fehlende Bewegung)." }
    ] },
  3: { vor: "Sollten E-Sport-Turniere an Olympischen Spielen stattfinden? Was denkst du spontan?",
    dauer: "ca. 320 Wörter", text: "Was vor wenigen Jahrzehnten als Freizeitbeschäftigung in Kinderzimmern begann, hat sich zu einer milliardenschweren Industrie entwickelt. Bei grossen E-Sport-Turnieren füllen sich Stadien, die sonst für Konzerte oder Basketballspiele genutzt werden, und auf Streaming-Plattformen verfolgen Millionen Menschen die Partien live. Die erfolgreichsten Teams werden von Investoren finanziert, haben eigene Trainingszentren und beschäftigen Coaches, Analysten, Fitnesstrainer und Psychologen. Manche Universitäten in den USA vergeben sogar Stipendien an talentierte Gamer.\n\nTrotz dieses Glanzes ist der Weg an die Spitze äusserst schwierig. Von den unzähligen Jugendlichen, die davon träumen, mit Gamen ihren Lebensunterhalt zu verdienen, schafft es nur ein verschwindend kleiner Teil. Profis trainieren oft acht bis zehn Stunden täglich, und zwar nicht spielerisch, sondern systematisch: Sie werten Aufzeichnungen ihrer Spiele aus, besprechen Strategien im Team und wiederholen bestimmte Abläufe so lange, bis sie automatisch funktionieren. Gleichzeitig ist der Druck enorm, denn wer seine Leistung nicht hält, wird ersetzt. Da die Reaktionsfähigkeit mit zunehmendem Alter leicht nachlässt, endet eine Karriere häufig schon mit Mitte zwanzig, und nicht alle haben dann eine Ausbildung, auf die sie zurückgreifen können.\n\nSeit Jahren wird darüber gestritten, ob E-Sport als Sport anerkannt werden soll. Befürworter argumentieren, dass Profi-Gamer Fähigkeiten brauchen, die auch im traditionellen Sport zählen: blitzschnelle Entscheidungen, präzise Feinmotorik, strategisches Denken und Teamgeist. Gegner wenden ein, dass die körperliche Anstrengung zu gering sei und dass viele Spiele Gewalt darstellen, was nicht zu den Werten des Sports passe. Das Internationale Olympische Komitee hat sich dem Thema zwar angenähert und eigene Veranstaltungen mit virtuellen Sportarten organisiert, doch die bekanntesten Kampf- und Shooter-Games bleiben dabei bisher aussen vor.\n\nFachleute weisen zudem auf die Schattenseiten hin. Wer stundenlang sitzt, riskiert Rücken- und Haltungsschäden, und nächtelanges Spielen führt zu Schlafmangel. Bei manchen Jugendlichen kann Gamen zudem zu einem Suchtverhalten führen. Gleichzeitig zeigen Studien, dass massvolles Spielen durchaus positive Effekte haben kann, etwa auf das räumliche Denken oder die Zusammenarbeit im Team. Entscheidend ist also, wie viel und auf welche Weise gespielt wird.",
    wort: [["die Industrie","ein ganzer Wirtschaftszweig mit vielen Firmen"],["der Investor","Person oder Firma, die Geld in etwas steckt, um Gewinn zu machen"],["das Stipendium","Geld, das jemand für eine Ausbildung bekommt"],["systematisch","nach einem klaren Plan"],["die Feinmotorik","kleine, genaue Bewegungen, z. B. der Finger"],["aussen vor bleiben","nicht dabei sein, nicht berücksichtigt werden"],["massvoll","nicht zu viel, mit Mass"]],
    mc: [
      { q: "Was zeigt laut Text, dass E-Sport zu einer Industrie geworden ist?", o: ["Gamer spielen nur noch im Kinderzimmer","Investoren finanzieren Teams, es gibt Trainingszentren und Stipendien","Videospiele sind billiger geworden","Es gibt weniger Zuschauer als früher"], a: 1 },
      { q: "Warum endet eine Profi-Karriere oft schon mit Mitte zwanzig?", o: ["Weil man ab 25 nicht mehr spielen darf","Weil die Reaktionsfähigkeit mit zunehmendem Alter leicht nachlässt","Weil die Spiele dann zu Ende sind","Weil Profis dann Trainer werden müssen"], a: 1 },
      { q: "Welches Argument bringen die Gegner der Anerkennung als Sport?", o: ["Gamer brauchen keine Konzentration","Die körperliche Anstrengung ist zu gering und viele Spiele stellen Gewalt dar","Es gibt zu wenig Zuschauer","E-Sport ist zu teuer"], a: 1 },
      { q: "Welche Schlussfolgerung zieht der Text am Ende?", o: ["Gamen ist immer schädlich","Gamen ist immer gesund","Entscheidend ist, wie viel und auf welche Weise gespielt wird","Jugendliche sollten Profi-Gamer werden"], a: 2 }
    ],
    rf: [
      { s: "Manche Universitäten in den USA vergeben Stipendien an talentierte Gamer.", a: true },
      { s: "Profis trainieren vor allem spielerisch und ohne Plan.", a: false, x: "Sie trainieren systematisch: Aufzeichnungen auswerten, Strategien besprechen, Abläufe wiederholen." },
      { s: "Das IOC hat alle bekannten Shooter-Games in seine Veranstaltungen aufgenommen.", a: false, x: "Die bekanntesten Kampf- und Shooter-Games bleiben bisher aussen vor." },
      { s: "Laut Studien kann massvolles Spielen positive Effekte haben.", a: true }
    ],
    offen: [
      { q: "Der Text nennt Risiken einer Profi-Karriere im E-Sport. Fasse sie in zwei bis drei Sätzen zusammen.", l: "Nur sehr wenige schaffen es; enormer Leistungsdruck, wer nicht liefert, wird ersetzt; kurze Karriere; nicht alle haben danach eine Ausbildung; gesundheitliche Risiken." },
      { q: "Vergleiche die Argumente von Befürwortern und Gegnern der Anerkennung von E-Sport als Sport.", l: "Befürworter: schnelle Entscheidungen, Feinmotorik, Strategie, Teamgeist wie im Sport. Gegner: zu wenig körperliche Anstrengung, Gewalt in Spielen passt nicht zu Werten des Sports." },
      { q: "Sollte E-Sport an den Olympischen Spielen stattfinden? Schreibe eine begründete Stellungnahme (mindestens vier Sätze).", l: "Individuelle Stellungnahme mit klarer Position und mindestens zwei Argumenten, idealerweise mit Bezug auf den Text." }
    ] }
},
"dl-schiedsrichterin": {
  2: { vor: "Warum gibt es zu wenige Schiedsrichter? Was vermutest du?",
    dauer: "ca. 230 Wörter", text: "Jeden Samstag zieht Lea ihr schwarzes Trikot an, kontrolliert ihre Pfeife, die Karten und die Uhr und fährt mit dem Velo zum Fussballplatz. Die 16-Jährige leitet als Schiedsrichterin Spiele von Junioren-Mannschaften. Damit gehört sie zu einer Gruppe, die im Schweizer Fussball dringend gebraucht wird: Viele Vereine finden zu wenige Schiedsrichterinnen und Schiedsrichter.\n\nAngefangen hat alles vor zwei Jahren. Leas Trainer machte sie darauf aufmerksam, dass der Verband neue Leute sucht. Lea besuchte einen Grundkurs, in dem sie die Regeln, das richtige Laufen auf dem Platz und den Umgang mit Konflikten lernte. Danach bestand sie eine Prüfung. Seither pfeift sie fast jedes Wochenende und erhält pro Spiel eine kleine Entschädigung.\n\n«Am meisten freut es mich, wenn ein Spiel fair verläuft und sich am Schluss alle die Hand geben», erzählt Lea. Doch es gibt auch schwierige Situationen. Manche Eltern schreien am Spielfeldrand, und Spieler reklamieren lautstark, wenn eine Entscheidung gegen sie fällt. Einmal wurde Lea von einem Vater beleidigt. Sie unterbrach das Spiel, sprach mit dem Trainer und bat ihn, für Ruhe zu sorgen. «Ich habe gelernt, dass ich nicht alles persönlich nehmen darf», sagt sie.\n\nDas Pfeifen hat Lea selbstbewusster gemacht. Sie muss in Sekunden entscheiden und ihre Entscheidung auch gegen Widerstand vertreten. Diese Fähigkeit hilft ihr auch bei der Lehrstellensuche. Ihr grosses Ziel ist es, einmal ein Spiel in der Super League zu leiten.",
    wort: [["dringend","sehr nötig, sofort"],["der Konflikt","ein Streit, eine schwierige Situation zwischen Menschen"],["lautstark","sehr laut"],["beleidigen","mit bösen Worten verletzen"],["selbstbewusst","von sich selbst überzeugt"],["vertreten","für etwas einstehen, es verteidigen"]],
    mc: [
      { q: "Warum werden Schiedsrichterinnen wie Lea dringend gebraucht?", o: ["Weil es zu viele Spiele im Fernsehen gibt","Weil viele Vereine zu wenige Schiedsrichter finden","Weil die Regeln geändert wurden","Weil Lea besonders schnell ist"], a: 1 },
      { q: "Was lernte Lea im Grundkurs NICHT?", o: ["Die Regeln","Das richtige Laufen auf dem Platz","Den Umgang mit Konflikten","Wie man Tore schiesst"], a: 3 },
      { q: "Was tat Lea, als ein Vater sie beleidigte?", o: ["Sie zeigte ihm die rote Karte","Sie unterbrach das Spiel und bat den Trainer, für Ruhe zu sorgen","Sie verliess den Platz","Sie rief die Polizei"], a: 1 },
      { q: "Was meint Lea mit dem Satz «Ich darf nicht alles persönlich nehmen»?", o: ["Sie soll keine Geschenke annehmen","Kritik bei einem Spiel richtet sich nicht gegen sie als Person","Sie soll allen Leuten Recht geben","Sie darf nicht allein pfeifen"], a: 1 }
    ],
    rf: [
      { s: "Lea hat eine Prüfung über die Regeln bestanden.", a: true },
      { s: "Lea pfeift Spiele der Super League.", a: false, x: "Sie leitet Junioren-Spiele. Die Super League ist ihr Ziel." },
      { s: "Das Pfeifen hat Lea selbstbewusster gemacht.", a: true }
    ],
    offen: [
      { q: "Welche Fähigkeiten lernt Lea als Schiedsrichterin, die ihr auch bei der Lehrstellensuche helfen? Erkläre.", l: "Schnell entscheiden, Entscheidungen auch gegen Widerstand vertreten, ruhig bleiben, Konflikte lösen, Selbstbewusstsein." },
      { q: "Wie sollten sich Eltern und Spieler gegenüber Schiedsrichtern verhalten? Schreibe zwei bis drei Regeln.", l: "Z. B. respektvoll bleiben, nicht beleidigen, Entscheidungen akzeptieren, Kritik ruhig und nach dem Spiel anbringen." }
    ] },
  3: { vor: "Warum ist es für Schiedsrichter oft schwierig, Respekt zu bekommen?",
    dauer: "ca. 330 Wörter", text: "Jeden Samstag wiederholt sich bei Lea das gleiche Ritual: Sie zieht das schwarze Trikot an, kontrolliert Pfeife, Karten und Stoppuhr und fährt zu einem Fussballplatz irgendwo in der Region. Die 16-Jährige ist Schiedsrichterin und leitet Spiele von Junioren-Mannschaften. Damit gehört sie zu einer Personengruppe, die im Amateurfussball immer knapper wird. Viele Verbände klagen seit Jahren, dass zu wenige junge Menschen bereit sind, diese Aufgabe zu übernehmen, und dass zahlreiche Schiedsrichter nach kurzer Zeit wieder aufhören.\n\nEin wichtiger Grund dafür ist der Umgang mit den Unparteiischen. Lea hat die Erfahrung selbst gemacht. Zwar erlebt sie viele faire Spiele, doch manchmal eskaliert die Stimmung: Eltern beschimpfen sie vom Spielfeldrand aus, Spieler umringen sie nach einem Pfiff, und Trainer machen ihre Entscheidungen öffentlich lächerlich. Besonders ein Vorfall ist ihr in Erinnerung geblieben, als ein Vater sie während eines Spiels heftig beleidigte. Lea unterbrach die Partie, forderte den Trainer auf, für Ruhe zu sorgen, und meldete den Vorfall anschliessend dem Verband. «Früher hätte ich danach vielleicht aufgegeben», erzählt sie. «Heute weiss ich, dass ich mich wehren darf und dass der Verband hinter mir steht.»\n\nWarum macht sie trotzdem weiter? Lea nennt mehrere Gründe. Zum einen liebt sie den Fussball und will, dass auch die Jüngsten fair spielen können. Zum anderen hat ihr das Pfeifen geholfen, sich persönlich weiterzuentwickeln. Sie muss innerhalb von Sekunden entscheiden, ihre Entscheidung klar kommunizieren und sie auch gegen Widerstand durchsetzen. Gleichzeitig muss sie fähig sein, einen Fehler zuzugeben, ohne an Autorität zu verlieren. Diese Mischung aus Durchsetzungsvermögen und Selbstkritik wird auch in der Berufswelt geschätzt, und Lea erwähnt ihr Hobby deshalb in jeder Bewerbung.\n\nUm mehr Schiedsrichter zu gewinnen und zu halten, setzen manche Verbände auf neue Massnahmen: Erfahrene Schiedsrichter begleiten Anfänger als Coaches, es gibt Kampagnen für mehr Respekt, und wer Unparteiische beleidigt, muss mit Strafen rechnen. Lea findet das richtig, glaubt aber, dass sich vor allem die Haltung am Spielfeldrand ändern muss. «Ohne Schiedsrichter gibt es kein Spiel», sagt sie. «Das sollten alle bedenken, bevor sie schreien.»",
    wort: [["das Ritual","ein Ablauf, der immer gleich wiederholt wird"],["knapp","es gibt fast zu wenig davon"],["der/die Unparteiische","andere Bezeichnung für Schiedsrichter; jemand, der zu keiner Mannschaft hält"],["eskalieren","schlimmer werden, ausser Kontrolle geraten"],["die Autorität","Ansehen und Macht, die andere respektieren"],["das Durchsetzungsvermögen","die Fähigkeit, sich gegen Widerstand zu behaupten"],["die Massnahme","eine Handlung, um etwas zu verändern"]],
    mc: [
      { q: "Welches Problem beschreibt der erste Abschnitt?", o: ["Es gibt zu viele Schiedsrichter","Im Amateurfussball gibt es immer weniger Schiedsrichter","Die Spiele dauern zu lange","Die Vereine haben kein Geld"], a: 1 },
      { q: "Wie reagierte Lea auf die Beleidigung des Vaters?", o: ["Sie beendete ihre Karriere","Sie ignorierte ihn einfach","Sie unterbrach die Partie, sprach den Trainer an und meldete den Vorfall dem Verband","Sie beleidigte ihn zurück"], a: 2 },
      { q: "Welche Fähigkeit muss eine Schiedsrichterin laut Text zusätzlich zur Durchsetzungskraft haben?", o: ["Einen Fehler zugeben können, ohne an Autorität zu verlieren","Besonders schnell laufen können","Viele Tore schiessen","Alle Spieler persönlich kennen"], a: 0 },
      { q: "Was muss sich laut Lea vor allem ändern?", o: ["Die Fussballregeln","Die Grösse der Spielfelder","Die Haltung der Leute am Spielfeldrand","Die Bezahlung der Schiedsrichter"], a: 2 }
    ],
    rf: [
      { s: "Viele Schiedsrichter hören nach kurzer Zeit wieder auf.", a: true },
      { s: "Lea verschweigt ihr Hobby in Bewerbungen.", a: false, x: "Sie erwähnt es in jeder Bewerbung, weil die Fähigkeiten geschätzt werden." },
      { s: "Manche Verbände lassen Anfänger von erfahrenen Schiedsrichtern begleiten.", a: true },
      { s: "Wer Schiedsrichter beleidigt, muss nie mit Strafen rechnen.", a: false, x: "Wer Unparteiische beleidigt, muss mit Strafen rechnen." }
    ],
    offen: [
      { q: "Nenne die Gründe, warum Lea trotz schwieriger Erlebnisse weitermacht.", l: "Sie liebt den Fussball und will, dass auch die Jüngsten fair spielen können; das Pfeifen hilft ihr, sich persönlich weiterzuentwickeln (Entscheidungen, Kommunikation, Durchsetzung, Selbstkritik); der Verband steht hinter ihr." },
      { q: "Erkläre den Satz «Ohne Schiedsrichter gibt es kein Spiel» und was Lea damit erreichen will.", l: "Ohne Unparteiische können keine geregelten Spiele stattfinden. Lea will die Leute daran erinnern, dass sie Schiedsrichter brauchen und sie deshalb respektieren sollten." },
      { q: "Welche Massnahme findest du am sinnvollsten, um mehr Jugendliche für das Schiedsrichteramt zu gewinnen? Begründe ausführlich und schlage eine eigene Idee vor.", l: "Individuelle, begründete Antwort mit Bezug auf eine Massnahme aus dem Text (Coaches, Respekt-Kampagnen, Strafen) und einer eigenen Idee." }
    ] }
},
"dl-fitness": {
  2: { vor: "Was hält dich davon ab, mehr Sport zu treiben?",
    dauer: "ca. 210 Wörter", text: "Viele Jugendliche möchten fitter werden, doch ein Abonnement im Fitnessstudio kostet oft mehrere hundert Franken pro Jahr. Die gute Nachricht lautet: Wer sich gesund bewegen will, braucht weder teure Geräte noch ein Studio.\n\nDas wichtigste Trainingsgerät ist der eigene Körper. Übungen wie Liegestütze, Kniebeugen, Ausfallschritte oder der Unterarmstütz, auch «Plank» genannt, trainieren mehrere Muskelgruppen gleichzeitig. Man nennt das Training mit dem eigenen Körpergewicht auch «Bodyweight-Training». Entscheidend ist eine saubere Ausführung, denn wer Übungen falsch macht, riskiert Verletzungen. Es lohnt sich deshalb, mit wenigen Wiederholungen zu beginnen und die Anzahl langsam zu steigern.\n\nWer lieber draussen trainiert, findet in vielen Schweizer Gemeinden einen Vita-Parcours. Auf diesen Rundwegen im Wald zeigen Tafeln an jeder Station eine Übung. Zusätzlich gibt es in zahlreichen Städten Outdoor-Fitnessanlagen, die gratis benutzt werden dürfen.\n\nAm einfachsten lässt sich Bewegung jedoch in den Alltag einbauen: mit dem Velo zur Schule fahren, Treppen statt Lift benutzen oder einen Abendspaziergang mit Kollegen machen. Fachleute empfehlen Jugendlichen, sich täglich mindestens eine Stunde zu bewegen, davon mehrmals pro Woche so intensiv, dass man ins Schwitzen kommt.\n\nWichtig ist zudem die Erholung. Muskeln wachsen nicht während des Trainings, sondern in den Pausen danach. Wer jeden Tag bis zur Erschöpfung trainiert, wird nicht schneller fit, sondern eher verletzt.",
    wort: [["die Muskelgruppe","mehrere Muskeln, die zusammenarbeiten"],["die Ausführung","wie man etwas macht"],["die Wiederholung","wenn man eine Übung noch einmal macht"],["steigern","mehr machen, erhöhen"],["intensiv","mit viel Kraft und Anstrengung"],["die Erschöpfung","wenn man keine Kraft mehr hat"]],
    mc: [
      { q: "Was ist «Bodyweight-Training»?", o: ["Training mit schweren Gewichten","Training mit dem eigenen Körpergewicht","Training nur auf dem Velo","Training im Wasser"], a: 1 },
      { q: "Warum soll man mit wenigen Wiederholungen beginnen?", o: ["Weil es sonst langweilig wird","Weil falsche oder zu viele Übungen zu Verletzungen führen können","Weil es so vorgeschrieben ist","Weil man sonst zu schnell fit wird"], a: 1 },
      { q: "Was empfehlen Fachleute für Jugendliche?", o: ["Einmal pro Woche eine Stunde Sport","Täglich mindestens eine Stunde Bewegung, mehrmals pro Woche intensiv","Jeden Tag bis zur Erschöpfung trainieren","Nur am Wochenende Sport machen"], a: 1 },
      { q: "Wann wachsen die Muskeln laut Text?", o: ["Während des Trainings","In den Pausen nach dem Training","Nur im Fitnessstudio","Nur am Morgen"], a: 1 }
    ],
    rf: [
      { s: "Outdoor-Fitnessanlagen dürfen in vielen Städten gratis benutzt werden.", a: true },
      { s: "Der Unterarmstütz heisst auch «Plank».", a: true },
      { s: "Wer jeden Tag bis zur Erschöpfung trainiert, wird schneller fit.", a: false, x: "Man wird eher verletzt, denn Muskeln brauchen Erholung." }
    ],
    offen: [
      { q: "Erkläre, warum Erholung für das Training wichtig ist.", l: "Muskeln wachsen in den Pausen nach dem Training. Ohne Erholung wird man nicht fitter, sondern riskiert Verletzungen." },
      { q: "Erstelle einen kleinen Bewegungsplan für eine Woche ohne Fitnessstudio. Nenne mindestens drei Aktivitäten.", l: "Individueller Plan, z. B. täglich Velo zur Schule, 2× Bodyweight-Training (Liegestütze, Kniebeugen, Plank), 1× Vita-Parcours, Spaziergang mit Kollegen." }
    ] },
  3: { vor: "Warum bewegen sich viele Jugendliche heute weniger als früher?",
    dauer: "ca. 340 Wörter", text: "Bewegungsmangel gilt als eines der grossen Gesundheitsprobleme unserer Zeit, und er betrifft zunehmend auch Jugendliche. Gemäss Empfehlungen von Fachleuten sollten sich junge Menschen täglich mindestens eine Stunde bewegen, mehrmals pro Woche so intensiv, dass sie ins Schwitzen geraten. Viele erreichen diesen Wert nicht. Gründe dafür gibt es zahlreiche: Schule und Hausaufgaben beanspruchen viel Zeit, Freizeit wird oft vor Bildschirmen verbracht, und Vereinssport ist für manche Familien zu teuer oder zeitlich schwer zu organisieren. Auch ein Abonnement im Fitnessstudio können sich nicht alle leisten.\n\nDabei ist Fitness keine Frage des Geldes. Das sogenannte Bodyweight-Training, also das Training mit dem eigenen Körpergewicht, gilt unter Sportwissenschaftlern als sehr wirksam. Übungen wie Liegestütze, Kniebeugen, Ausfallschritte oder der Unterarmstütz beanspruchen mehrere Muskelgruppen gleichzeitig und verbessern neben der Kraft auch die Stabilität und das Gleichgewicht. Entscheidend ist allerdings eine korrekte Technik, denn eine falsch ausgeführte Übung kann Gelenke und Rücken belasten. Ebenso wichtig ist das Prinzip der langsamen Steigerung: Der Körper passt sich an wachsende Anforderungen an, braucht dafür aber Zeit.\n\nEin oft unterschätzter Faktor ist die Erholung. Beim Training entstehen in den Muskeln kleinste Verletzungen, die der Körper in der Ruhephase repariert und dabei verstärkt. Wer sich keine Pausen gönnt, schwächt sich deshalb eher, als dass er Fortschritte macht. Genügend Schlaf und eine ausgewogene Ernährung gehören also genauso zu einem erfolgreichen Training wie die Übungen selbst.\n\nNeben dem gezielten Training spielt die Bewegung im Alltag eine grosse Rolle. Wer regelmässig mit dem Velo fährt, Treppen steigt oder Wege zu Fuss zurücklegt, erreicht einen beträchtlichen Teil der empfohlenen Bewegungszeit, ohne dafür extra Zeit einplanen zu müssen. Zahlreiche Gemeinden unterstützen dies mit kostenlosen Angeboten wie Vita-Parcours oder Outdoor-Fitnessanlagen.\n\nVorsicht ist allerdings bei Fitness-Inhalten auf Social Media geboten. Neben seriösen Anleitungen finden sich dort viele unrealistische Versprechen, etwa ein «Sixpack in 14 Tagen», sowie Körperbilder, die nur mit Filtern oder extremen Diäten zustande kommen. Wer sich daran misst, verliert schnell die Motivation. Sinnvoller ist es, sich realistische Ziele zu setzen und Bewegung als etwas zu betrachten, das Freude macht und guttut.",
    wort: [["der Bewegungsmangel","wenn man sich zu wenig bewegt"],["beanspruchen","brauchen, belasten"],["die Stabilität","Festigkeit, sicherer Stand"],["das Gelenk","Verbindung zwischen zwei Knochen, z. B. das Knie"],["ausgewogen","im richtigen Verhältnis, nicht einseitig"],["beträchtlich","ziemlich gross"],["unrealistisch","nicht möglich, nicht wirklichkeitsnah"]],
    mc: [
      { q: "Welcher Grund für Bewegungsmangel wird im Text NICHT genannt?", o: ["Viel Zeit für Schule und Hausaufgaben","Freizeit vor Bildschirmen","Zu teurer Vereinssport","Zu schlechtes Wetter in der Schweiz"], a: 3 },
      { q: "Was verbessert Bodyweight-Training laut Text neben der Kraft?", o: ["Die Stabilität und das Gleichgewicht","Die Sehkraft","Die Noten in der Schule","Die Körpergrösse"], a: 0 },
      { q: "Was passiert laut Text in der Ruhephase nach dem Training?", o: ["Die Muskeln werden schwächer","Kleinste Verletzungen in den Muskeln werden repariert und die Muskeln verstärkt","Der Körper vergisst das Training","Nichts"], a: 1 },
      { q: "Warum warnt der Text vor Fitness-Inhalten auf Social Media?", o: ["Weil alle Videos falsch sind","Wegen unrealistischer Versprechen und bearbeiteter Körperbilder, die demotivieren können","Weil Social Media teuer ist","Weil man dort keine Übungen findet"], a: 1 }
    ],
    rf: [
      { s: "Laut Text ist Fitness vor allem eine Frage des Geldes.", a: false, x: "Fitness ist keine Frage des Geldes; Bodyweight-Training ist gratis und wirksam." },
      { s: "Eine falsch ausgeführte Übung kann Gelenke und Rücken belasten.", a: true },
      { s: "Schlaf und Ernährung gehören laut Text zu einem erfolgreichen Training.", a: true },
      { s: "Bewegung im Alltag zählt nicht zur empfohlenen Bewegungszeit.", a: false, x: "Alltagsbewegung macht einen beträchtlichen Teil der empfohlenen Bewegungszeit aus." }
    ],
    offen: [
      { q: "Erkläre das «Prinzip der langsamen Steigerung» und warum es wichtig ist.", l: "Man erhöht die Anforderungen schrittweise, weil sich der Körper anpasst, dafür aber Zeit braucht. Zu schnelle Steigerung führt zu Überlastung und Verletzungen." },
      { q: "Der Text nennt verschiedene Gründe, warum Jugendliche sich zu wenig bewegen. Welche Lösungen bietet er dafür an? Ordne mindestens zwei Lösungen den passenden Gründen zu.", l: "Zu teuer → Bodyweight-Training, Vita-Parcours, Outdoor-Anlagen gratis; zu wenig Zeit → Bewegung in den Alltag einbauen (Velo, Treppe); Bildschirm/Motivation → realistische Ziele, Freude an Bewegung." },
      { q: "Wie beurteilst du Fitness-Videos auf Social Media? Schreibe eine begründete Meinung mit einem Beispiel (mindestens vier Sätze).", l: "Individuelle Stellungnahme: Vorteile (Anleitungen, Motivation) und Nachteile (unrealistische Versprechen, Filter, Druck) abwägen, mit Beispiel." }
    ] }
},
"dl-lauberhorn": {
  2: { vor: "Was macht ein Skirennen spannend? Und was macht es gefährlich?",
    dauer: "ca. 210 Wörter", text: "Jedes Jahr im Januar richten sich die Blicke der Skiwelt auf Wengen, ein autofreies Dorf im Berner Oberland. Hier findet das Lauberhornrennen statt, das 1930 zum ersten Mal ausgetragen wurde und damit zu den ältesten Skirennen der Welt gehört.\n\nDas Herzstück ist die Abfahrt. Mit rund viereinhalb Kilometern ist sie die längste Strecke im Weltcup. Die besten Fahrer brauchen etwa zweieinhalb Minuten, was für eine Abfahrt ungewöhnlich lang ist. Am Ende spüren viele ein starkes Brennen in den Oberschenkeln, denn sie müssen die tiefe Hocke lange halten, um möglichst wenig Luftwiderstand zu haben.\n\nDie Strecke ist berühmt für ihre Schlüsselstellen. Beim «Hundschopf» springen die Fahrer zwischen Felsen hindurch über eine Kante. Im «Haneggschuss» erreichen sie Geschwindigkeiten von über 150 Kilometern pro Stunde. Bei solchen Tempi kann schon ein kleiner Fehler zu einem schweren Sturz führen. Deshalb sind Helm und Rückenpanzer Pflicht, und entlang der Piste stehen hohe Fangnetze.\n\nDas Rennen ist aber nicht nur ein Sportanlass, sondern auch ein Volksfest. Zehntausende Zuschauer reisen mit der Zahnradbahn an, schwenken Fahnen und läuten Kuhglocken. Für die Region ist das Wochenende wirtschaftlich sehr wichtig, denn Hotels und Restaurants sind ausgebucht. Gleichzeitig gibt es Diskussionen über die hohen Kosten und darüber, wie Skirennen in Zukunft mit weniger Schnee wegen des Klimawandels durchgeführt werden können.",
    wort: [["autofrei","ohne Autoverkehr"],["die Hocke","Haltung mit stark gebeugten Knien"],["der Luftwiderstand","Kraft der Luft, die bremst"],["die Schlüsselstelle","besonders wichtige und schwierige Stelle"],["das Tempo (Tempi)","die Geschwindigkeit"],["ausgebucht","alle Plätze sind reserviert"]],
    mc: [
      { q: "Warum brennen den Fahrern am Ende die Oberschenkel?", o: ["Weil die Piste sehr kalt ist","Weil sie lange in der tiefen Hocke fahren","Weil sie bergauf laufen müssen","Weil sie Kuhglocken tragen"], a: 1 },
      { q: "Warum fahren die Fahrer in der Hocke?", o: ["Um weniger Luftwiderstand zu haben","Um besser zu sehen","Weil es vorgeschrieben ist","Um weniger zu frieren"], a: 0 },
      { q: "Was passiert beim «Hundschopf»?", o: ["Die Fahrer machen eine Pause","Die Fahrer springen zwischen Felsen hindurch über eine Kante","Die Fahrer erreichen das Ziel","Die Fahrer fahren durch einen Tunnel"], a: 1 },
      { q: "Warum ist das Rennen für die Region wirtschaftlich wichtig?", o: ["Weil die Fahrer Steuern bezahlen","Weil Hotels und Restaurants ausgebucht sind","Weil neue Strassen gebaut werden","Weil die Zahnradbahn gratis ist"], a: 1 }
    ],
    rf: [
      { s: "Das Lauberhornrennen wurde 1930 zum ersten Mal ausgetragen.", a: true },
      { s: "Im Haneggschuss fahren die Fahrer über 150 km/h.", a: true },
      { s: "Über die Zukunft der Skirennen gibt es keine Diskussionen.", a: false, x: "Es wird über Kosten und Klimawandel diskutiert." }
    ],
    offen: [
      { q: "Mit welchen Massnahmen werden die Fahrer geschützt? Nenne zwei.", l: "Helm, Rückenpanzer, hohe Fangnetze entlang der Piste." },
      { q: "Der Text sagt, das Rennen sei «auch ein Volksfest». Erkläre, was damit gemeint ist.", l: "Es kommen Zehntausende Zuschauer, die feiern, Fahnen schwenken und Kuhglocken läuten. Es geht nicht nur um Sport, sondern auch um Gemeinschaft und Feiern." }
    ] },
  3: { vor: "Hat der Skirennsport angesichts des Klimawandels eine Zukunft?",
    dauer: "ca. 330 Wörter", text: "Wenn im Januar die besten Abfahrer der Welt in Wengen am Start stehen, verwandelt sich das autofreie Dorf im Berner Oberland für einige Tage in den Mittelpunkt des Skisports. Das Lauberhornrennen, das seit 1930 ausgetragen wird, ist eines der ältesten und traditionsreichsten Skirennen überhaupt. Seine Abfahrt gilt mit rund viereinhalb Kilometern als längste im Weltcup und verlangt den Fahrern alles ab: Wer die etwa zweieinhalb Minuten lange Fahrt in der aerodynamischen Hocke durchstehen will, braucht nicht nur Mut, sondern auch eine enorme Kraftausdauer.\n\nBerühmt-berüchtigt sind die Schlüsselstellen der Strecke. Beim «Hundschopf» springen die Fahrer durch eine enge Lücke zwischen Felsen, im «Haneggschuss» werden Geschwindigkeiten von deutlich über 150 Kilometern pro Stunde erreicht. Weil bereits kleinste Fehler gravierende Folgen haben können, wurde die Sicherheit über die Jahrzehnte ständig verbessert: Helme und Rückenprotektoren sind Pflicht, die Piste wird mit hohen Fangnetzen gesichert, und Helikopter stehen für Notfälle bereit. Dennoch kommt es immer wieder zu schweren Stürzen, was regelmässig die Frage aufwirft, wie viel Risiko der Sport verlangen darf.\n\nNeben der sportlichen hat das Rennen auch eine grosse wirtschaftliche Bedeutung. Zehntausende Zuschauerinnen und Zuschauer reisen mit der Zahnradbahn an, und die Fernsehbilder mit der Kulisse von Eiger, Mönch und Jungfrau gehen um die Welt. Für Tourismusregionen sind solche Bilder unbezahlbare Werbung. Auf der anderen Seite sind die Kosten für Organisation, Pistenpräparation und Sicherheit sehr hoch, und um die Verteilung der Einnahmen gab es in der Vergangenheit wiederholt Streit zwischen den Organisatoren und dem Skiverband.\n\nDie grösste Herausforderung für die Zukunft ist jedoch das Klima. Die Winter in den Alpen werden im Durchschnitt wärmer, und unterhalb gewisser Höhen fällt immer weniger Schnee. Viele Rennen sind bereits heute auf technisch erzeugten Schnee angewiesen, was viel Wasser und Energie verbraucht. Kritikerinnen und Kritiker fragen deshalb, ob es noch zeitgemäss ist, mit grossem Aufwand Pisten zu präparieren und Tausende Menschen anreisen zu lassen. Befürworter verweisen hingegen auf die Tradition, die Arbeitsplätze und darauf, dass das Lauberhornrennen dank der Anreise mit der Bahn vergleichsweise umweltfreundlich organisiert ist.",
    wort: [["aerodynamisch","so geformt, dass die Luft wenig bremst"],["die Kraftausdauer","Fähigkeit, eine Kraftanstrengung lange auszuhalten"],["berühmt-berüchtigt","sehr bekannt, vor allem weil es gefährlich ist"],["gravierend","sehr schwer, ernst"],["die Kulisse","der Hintergrund, die Umgebung"],["technisch erzeugter Schnee","Kunstschnee aus Schneekanonen"],["zeitgemäss","passend zur heutigen Zeit"]],
    mc: [
      { q: "Was brauchen die Fahrer laut Text neben Mut, um die Abfahrt durchzustehen?", o: ["Eine enorme Kraftausdauer","Eine besonders lange Ausrüstung","Viel Erfahrung als Skilehrer","Einen Helikopter"], a: 0 },
      { q: "Welche Frage werfen schwere Stürze laut Text immer wieder auf?", o: ["Ob das Rennen in eine andere Stadt soll","Wie viel Risiko der Sport verlangen darf","Ob die Zuschauer zu laut sind","Warum Wengen autofrei ist"], a: 1 },
      { q: "Warum sind die Fernsehbilder für Tourismusregionen so wertvoll?", o: ["Weil sie Geld kosten","Weil sie wie unbezahlbare Werbung wirken","Weil sie die Sicherheit verbessern","Weil sie Schnee erzeugen"], a: 1 },
      { q: "Welches Argument nennen die Befürworter des Rennens?", o: ["Das Rennen braucht keinen Schnee","Tradition, Arbeitsplätze und die vergleichsweise umweltfreundliche Anreise mit der Bahn","Die Fahrer verdienen sehr viel","Es gibt keine Stürze mehr"], a: 1 }
    ],
    rf: [
      { s: "Die Sicherheit wurde über die Jahrzehnte verbessert.", a: true },
      { s: "Seit den Sicherheitsmassnahmen gibt es keine schweren Stürze mehr.", a: false, x: "Es kommt dennoch immer wieder zu schweren Stürzen." },
      { s: "Zwischen Organisatoren und Skiverband gab es Streit um die Einnahmen.", a: true },
      { s: "Technisch erzeugter Schnee braucht kaum Wasser und Energie.", a: false, x: "Er verbraucht viel Wasser und Energie." }
    ],
    offen: [
      { q: "Erkläre in eigenen Worten, welche Bedeutung das Rennen für die Wirtschaft hat, und nenne auch die Schattenseite.", l: "Viele Zuschauer, ausgebuchte Hotels, weltweite Fernsehbilder als Werbung für den Tourismus; aber sehr hohe Kosten und Streit um die Verteilung der Einnahmen." },
      { q: "Welche Folgen hat der Klimawandel für Skirennen? Fasse die Informationen aus dem letzten Abschnitt zusammen.", l: "Wärmere Winter, weniger Schnee in tieferen Lagen, Abhängigkeit von Kunstschnee mit hohem Wasser- und Energieverbrauch; Diskussion, ob der Aufwand noch zeitgemäss ist." },
      { q: "Sollen grosse Skirennen wie das Lauberhornrennen weiterhin durchgeführt werden? Nimm Stellung und berücksichtige Argumente beider Seiten.", l: "Individuelle Stellungnahme, die Pro (Tradition, Arbeitsplätze, Bahnanreise) und Contra (Klima, Kunstschnee, Risiko, Kosten) abwägt und zu einer begründeten Meinung kommt." }
    ] }
},
"dl-schnupperlehre": {
  2: { vor: "Was möchtest du bei einer Schnupperlehre unbedingt herausfinden?",
    dauer: "ca. 210 Wörter", text: "Wer in der Schweiz eine Lehrstelle sucht, kommt an der Schnupperlehre kaum vorbei. Während einer Schnupperlehre arbeitet man meistens zwei bis fünf Tage in einem Betrieb mit und erhält einen Einblick in den Berufsalltag. Viele Jugendliche schnuppern in mehreren Berufen, bevor sie sich entscheiden.\n\nDie Schnupperlehre dient zwei Seiten. Einerseits finden die Jugendlichen heraus, ob ihnen die Arbeit wirklich gefällt. Sie erleben, wie früh der Arbeitstag beginnt, ob man viel steht oder sitzt, ob man im Team oder allein arbeitet und wie der Umgang mit Kundinnen und Kunden ist. Andererseits lernt der Betrieb die Jugendlichen kennen. Für viele Firmen ist die Schnupperlehre wichtiger als die Noten, denn hier zeigt sich, wie jemand arbeitet und sich verhält.\n\nBesonders geachtet wird auf Pünktlichkeit, Zuverlässigkeit und Interesse. Wer Fragen stellt, mitdenkt und auch bei unangenehmen Aufgaben wie Aufräumen mithilft, hinterlässt einen positiven Eindruck. Das Handy bleibt während der Arbeitszeit ausgeschaltet. Auch die passende Kleidung ist wichtig: In einer Werkstatt braucht es andere Kleider als in einem Büro. Darum lohnt es sich, vorher nachzufragen.\n\nAm Schluss der Schnupperlehre findet oft ein Auswertungsgespräch statt. Manchmal erhält man einen schriftlichen Schnupperbericht, den man später seiner Bewerbung beilegen kann. Fachleute empfehlen, nach jedem Schnuppertag kurz aufzuschreiben, was einem gefallen hat und was nicht. So lassen sich verschiedene Berufe später besser vergleichen.",
    wort: [["der Einblick","ein erster Eindruck von etwas"],["der Berufsalltag","wie ein normaler Arbeitstag in einem Beruf aussieht"],["die Zuverlässigkeit","wenn man sich auf jemanden verlassen kann"],["hinterlassen","zurücklassen, z. B. einen Eindruck"],["das Auswertungsgespräch","Gespräch, in dem man bespricht, wie etwas war"],["beilegen","zu einem Brief oder einer Bewerbung dazulegen"]],
    mc: [
      { q: "Wie lange dauert eine Schnupperlehre meistens?", o: ["Ein paar Stunden","Zwei bis fünf Tage","Einen Monat","Ein halbes Jahr"], a: 1 },
      { q: "Was finden Jugendliche bei der Schnupperlehre heraus?", o: ["Wie viel Lohn der Chef verdient","Ob ihnen die Arbeit wirklich gefällt","Wie man eine Firma gründet","Welche Noten sie brauchen"], a: 1 },
      { q: "Warum ist die Schnupperlehre für viele Firmen wichtiger als die Noten?", o: ["Weil Noten nicht wichtig sind","Weil sich hier zeigt, wie jemand arbeitet und sich verhält","Weil die Firmen keine Zeugnisse lesen","Weil man in der Schnupperlehre Prüfungen schreibt"], a: 1 },
      { q: "Warum soll man vorher nach der passenden Kleidung fragen?", o: ["Weil man sonst nicht hinein darf","Weil verschiedene Arbeitsplätze verschiedene Kleider brauchen","Weil die Firma Kleider verkauft","Weil es ein Test ist"], a: 1 }
    ],
    rf: [
      { s: "Viele Jugendliche schnuppern in mehreren Berufen.", a: true },
      { s: "Bei unangenehmen Aufgaben wie Aufräumen muss man nicht helfen.", a: false, x: "Wer auch dort mithilft, hinterlässt einen positiven Eindruck." },
      { s: "Den Schnupperbericht kann man später der Bewerbung beilegen.", a: true }
    ],
    offen: [
      { q: "Nenne drei Dinge, die Jugendliche während der Schnupperlehre über den Berufsalltag herausfinden können.", l: "Wann der Tag beginnt, ob man steht oder sitzt, ob man im Team oder allein arbeitet, wie der Kontakt mit Kunden ist." },
      { q: "Warum ist es sinnvoll, nach jedem Schnuppertag Notizen zu machen? Erkläre mit einem Beispiel.", l: "So kann man die Berufe später vergleichen, z. B.: «Im Spital hat mir der Kontakt mit Menschen gefallen, in der Werkstatt war es zu laut.»" }
    ] },
  3: { vor: "Wie entscheidet man sich für einen Beruf, den man vielleicht 40 Jahre ausüben wird?",
    dauer: "ca. 290 Wörter", text: "Mit vierzehn oder fünfzehn Jahren eine Entscheidung zu treffen, die das ganze Berufsleben prägen kann, ist keine leichte Aufgabe. Das Schweizer Bildungssystem setzt deshalb auf ein Instrument, das in vielen anderen Ländern kaum bekannt ist: die Schnupperlehre. Während einiger Tage arbeiten Jugendliche in einem Betrieb mit, beobachten Fachpersonen und erledigen erste einfache Aufgaben. Auf diese Weise erhalten sie einen realistischen Eindruck vom Berufsalltag, der sich oft deutlich von den Vorstellungen unterscheidet, die man aus Broschüren oder Videos gewinnt.\n\nFür die Jugendlichen ist das Schnuppern vor allem eine Gelegenheit, Klarheit zu gewinnen. Manche stellen fest, dass ein Traumberuf in der Realität körperlich anstrengender, eintöniger oder lauter ist als gedacht. Andere entdecken einen Beruf, an den sie zuvor nie gedacht hatten. Berufsberaterinnen empfehlen deshalb, bewusst auch in Berufen zu schnuppern, die nicht auf den ersten Blick attraktiv erscheinen, und nach jedem Einsatz festzuhalten, welche Tätigkeiten Freude bereitet haben und welche nicht.\n\nGleichzeitig ist die Schnupperlehre für die Betriebe ein wichtiges Auswahlverfahren. Viele Lehrbetriebe vergeben ihre Lehrstellen fast ausschliesslich an Jugendliche, die sie beim Schnuppern kennengelernt haben. Denn ein Zeugnis zeigt zwar die schulischen Leistungen, sagt aber wenig darüber aus, ob jemand pünktlich erscheint, Anweisungen versteht, Verantwortung übernimmt und mit dem Team harmoniert. Gerade für Jugendliche mit schwächeren Noten ist das eine Chance: Wer im Betrieb durch Einsatz, Zuverlässigkeit und echtes Interesse überzeugt, kann eine Lehrstelle erhalten, auch wenn das Zeugnis nicht perfekt ist.\n\nAllerdings verlangt das Schnuppern auch Eigeninitiative. Plätze werden selten automatisch vergeben; die Jugendlichen müssen selbst anrufen, E-Mails schreiben oder sich vor Ort vorstellen. Gerade Jugendliche, deren Eltern das Schweizer Bildungssystem nicht aus eigener Erfahrung kennen, haben es dabei manchmal schwerer. Schulen, Berufsinformationszentren und Mentoring-Programme versuchen, diese Ungleichheit auszugleichen, indem sie bei der Suche und Vorbereitung unterstützen.",
    wort: [["prägen","stark beeinflussen, formen"],["das Instrument","hier: ein Mittel, ein Werkzeug, um etwas zu erreichen"],["eintönig","immer gleich, langweilig"],["das Auswahlverfahren","Methode, um aus vielen Personen die passende auszuwählen"],["harmonieren","gut zusammenpassen"],["die Eigeninitiative","etwas von sich aus tun, ohne dass jemand es verlangt"],["die Ungleichheit","wenn nicht alle die gleichen Chancen haben"]],
    mc: [
      { q: "Warum ist die Berufswahl laut Text keine leichte Aufgabe?", o: ["Weil es zu wenige Berufe gibt","Weil man sehr jung eine Entscheidung trifft, die das Berufsleben prägen kann","Weil die Schnupperlehre zu kurz ist","Weil alle Berufe gleich sind"], a: 1 },
      { q: "Was empfehlen Berufsberaterinnen laut Text?", o: ["Nur im Traumberuf schnuppern","Auch in Berufen schnuppern, die nicht sofort attraktiv wirken","Nicht mehr als einmal schnuppern","Nur Videos über Berufe anschauen"], a: 1 },
      { q: "Warum ist die Schnupperlehre gerade für Jugendliche mit schwächeren Noten eine Chance?", o: ["Weil die Betriebe keine Zeugnisse verlangen","Weil man durch Einsatz und Interesse überzeugen kann, auch mit einem nicht perfekten Zeugnis","Weil sie dort Nachhilfe bekommen","Weil sie mehr Lohn bekommen"], a: 1 },
      { q: "Warum haben es manche Jugendliche bei der Suche schwerer?", o: ["Weil ihre Eltern das Schweizer Bildungssystem nicht aus eigener Erfahrung kennen","Weil sie zu alt sind","Weil sie zu viele Plätze bekommen","Weil sie kein Handy haben"], a: 0 }
    ],
    rf: [
      { s: "Die Schnupperlehre ist in vielen anderen Ländern kaum bekannt.", a: true },
      { s: "Ein Zeugnis zeigt genau, ob jemand gut mit dem Team harmoniert.", a: false, x: "Ein Zeugnis sagt wenig darüber aus, wie jemand im Betrieb arbeitet und sich verhält." },
      { s: "Schnupperplätze werden meistens automatisch vergeben.", a: false, x: "Plätze werden selten automatisch vergeben; man braucht Eigeninitiative." },
      { s: "Mentoring-Programme unterstützen Jugendliche bei der Suche.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum die Schnupperlehre «zwei Seiten dient». Was haben die Jugendlichen davon, was die Betriebe?", l: "Jugendliche: realistischer Eindruck vom Beruf, Klarheit, neue Berufe entdecken. Betriebe: Auswahlverfahren, sie sehen, ob jemand pünktlich, zuverlässig, interessiert ist und ins Team passt." },
      { q: "Der Text spricht von einer «Ungleichheit». Erkläre, was gemeint ist und wie man sie verringern kann.", l: "Jugendliche, deren Eltern das System nicht kennen, erhalten weniger Hilfe bei der Suche. Schulen, Berufsinformationszentren und Mentoring-Programme unterstützen; auch eigene Ideen sind möglich." },
      { q: "Beschreibe deine eigene Erfahrung mit dem Schnuppern oder deine Pläne. Was hast du gelernt oder was möchtest du herausfinden? (mindestens vier Sätze)", l: "Individuelle Antwort mit konkreten Beispielen." }
    ] }
},
"dl-dossier": {
  2: { vor: "Wie kann eine Bewerbung aus vielen anderen herausstechen?",
    dauer: "ca. 190 Wörter", text: "Wer sich um eine Lehrstelle bewirbt, sendet dem Betrieb ein Bewerbungsdossier. Heute geschieht dies meistens elektronisch, entweder per E-Mail oder über ein Formular auf der Website der Firma. Das Dossier ist oft der erste Kontakt mit dem Betrieb und entscheidet darüber, ob man zu einem Gespräch eingeladen wird.\n\nIm Zentrum steht der Bewerbungsbrief, auch Motivationsschreiben genannt. Darin erklärt man, weshalb man sich für diesen Beruf interessiert, was man bereits darüber weiss und warum man gut in genau diesen Betrieb passt. Ein guter Brief ist höchstens eine Seite lang, persönlich formuliert und enthält konkrete Beispiele, etwa aus einer Schnupperlehre oder einem Hobby. Kopierte Standardsätze erkennen Lehrmeister sofort.\n\nDer Lebenslauf gibt einen übersichtlichen Überblick über die Person: Personalien, besuchte Schulen, Sprachkenntnisse, Hobbys und allenfalls Referenzen. Ein freundliches, aktuelles Foto gehört dazu. Ergänzt wird das Dossier durch die Zeugnisse der Oberstufe, die Resultate eines Eignungstests wie Multicheck oder Stellwerk sowie durch Schnupperberichte.\n\nVor dem Absenden lohnt sich eine gründliche Kontrolle. Rechtschreibfehler hinterlassen einen schlechten Eindruck, ebenso eine falsch geschriebene Anrede. Es ist ratsam, alle Dokumente als ein einziges PDF zu speichern und eine seriöse E-Mail-Adresse zu verwenden. Eine Adresse wie «coolboy2010@…» wirkt wenig professionell.",
    wort: [["elektronisch","über den Computer oder das Internet"],["formulieren","etwas in Worte fassen"],["konkret","genau, mit einem echten Beispiel"],["die Referenz","Person, die Auskunft über dich geben kann"],["der Eignungstest","Test, der zeigt, ob man für etwas geeignet ist"],["ratsam","empfehlenswert, klug"]],
    mc: [
      { q: "Was entscheidet das Dossier oft?", o: ["Wie viel Lohn man bekommt","Ob man zu einem Gespräch eingeladen wird","Welche Schule man besucht","Wann die Lehre beginnt"], a: 1 },
      { q: "Was gehört in einen guten Bewerbungsbrief?", o: ["Kopierte Standardsätze","Konkrete Beispiele, z. B. aus einer Schnupperlehre","Möglichst viele Seiten","Ein Foto der Familie"], a: 1 },
      { q: "Was ist ein Beispiel für einen Eignungstest?", o: ["Der Multicheck","Der Lebenslauf","Das Zeugnis","Der Schnupperbericht"], a: 0 },
      { q: "Warum sollte man eine seriöse E-Mail-Adresse verwenden?", o: ["Weil andere Adressen nicht funktionieren","Weil eine unseriöse Adresse wenig professionell wirkt","Weil es gesetzlich vorgeschrieben ist","Weil der Betrieb sonst nicht antworten kann"], a: 1 }
    ],
    rf: [
      { s: "Lehrmeister erkennen kopierte Standardsätze sofort.", a: true },
      { s: "Der Bewerbungsbrief sollte mindestens drei Seiten lang sein.", a: false, x: "Höchstens eine Seite." },
      { s: "Es ist ratsam, alle Dokumente als ein einziges PDF zu speichern.", a: true }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen Bewerbungsbrief und Lebenslauf.", l: "Bewerbungsbrief: erklärt persönlich die Motivation, warum Beruf und Betrieb passen. Lebenslauf: übersichtliche Fakten zur Person (Personalien, Schulen, Sprachen, Hobbys, Referenzen, Foto)." },
      { q: "Schreibe zwei Sätze, die du in einem Bewerbungsbrief verwenden könntest. Sie sollen ein konkretes Beispiel enthalten.", l: "Z. B.: «In meiner Schnupperlehre bei der Garage Meier durfte ich beim Reifenwechsel helfen. Dabei habe ich gemerkt, dass mir die Arbeit mit den Händen grosse Freude macht.»" }
    ] },
  3: { vor: "Was denkst du: Wie lange schaut sich ein Lehrbetrieb eine Bewerbung an?",
    dauer: "ca. 310 Wörter", text: "Für viele Lehrbetriebe beginnt die Suche nach neuen Lernenden mit einem Stapel von Bewerbungen, und nicht selten bewerben sich auf eine einzige Lehrstelle Dutzende von Jugendlichen. Personalverantwortliche haben deshalb oft nur wenig Zeit pro Dossier. Studien und Erfahrungsberichte deuten darauf hin, dass beim ersten Durchsehen manchmal nur wenige Minuten zur Verfügung stehen. In dieser kurzen Zeit muss das Dossier überzeugen: Es muss vollständig, übersichtlich und fehlerfrei sein und gleichzeitig einen persönlichen Eindruck vermitteln.\n\nDas wichtigste Element ist der Bewerbungsbrief. Er soll nicht einfach wiederholen, was im Lebenslauf steht, sondern die Motivation erklären. Lehrmeisterinnen und Lehrmeister möchten wissen, wie man auf den Beruf gekommen ist, welche Erfahrungen man bereits gesammelt hat und weshalb man sich gerade für diesen Betrieb interessiert. Wer sich vorher über die Firma informiert und beispielsweise erwähnt, dass ihn deren Spezialisierung auf Elektrofahrzeuge besonders interessiert, zeigt echtes Interesse. Allgemeine Floskeln wie «Ich bin motiviert und teamfähig» wirken dagegen beliebig, solange sie nicht mit einem konkreten Beispiel belegt werden.\n\nDer Lebenslauf sollte auf einer, höchstens zwei Seiten die wichtigsten Informationen strukturiert darstellen. Neben Personalien und Schullaufbahn gehören Sprachkenntnisse dazu, wobei Mehrsprachigkeit ausdrücklich als Stärke aufgeführt werden sollte. Auch Hobbys oder ein Nebenjob können aussagekräftig sein, wenn sie Eigenschaften wie Ausdauer oder Verantwortungsbewusstsein zeigen. Ergänzt wird das Dossier durch Zeugnisse, Ergebnisse von Eignungstests wie Multicheck oder Stellwerk und, falls vorhanden, durch Schnupperberichte.\n\nZunehmend spielen auch digitale Kanäle eine Rolle. Manche Firmen nutzen Online-Formulare, die nur bestimmte Dateiformate akzeptieren, andere schauen sich zusätzlich die Social-Media-Profile von Bewerbenden an. Was öffentlich im Internet steht, kann daher ebenfalls zum Eindruck beitragen, den ein Betrieb von einer Person gewinnt. Fachleute raten, die eigenen Profile kritisch zu überprüfen und private Inhalte entsprechend zu schützen.\n\nSchliesslich gehört auch der Umgang mit Absagen zum Bewerbungsprozess. Fast alle Jugendlichen erhalten mehrere davon. Wer höflich nachfragt, woran es gelegen hat, erhält manchmal wertvolle Hinweise, um das nächste Dossier zu verbessern.",
    wort: [["der/die Personalverantwortliche","Person in einer Firma, die neue Mitarbeitende auswählt"],["vermitteln","hier: zeigen, ausdrücken"],["die Floskel","eine leere, oft benutzte Redewendung ohne viel Inhalt"],["beliebig","austauschbar, ohne Besonderheit"],["belegen","beweisen, mit einem Beispiel zeigen"],["aussagekräftig","etwas zeigt viel, ist bedeutsam"],["die Absage","eine negative Antwort"]],
    mc: [
      { q: "Warum muss ein Dossier schnell überzeugen?", o: ["Weil Personalverantwortliche oft nur wenig Zeit pro Dossier haben","Weil die Bewerbung sonst gelöscht wird","Weil es nur eine Bewerbung pro Stelle gibt","Weil die Firma das Dossier nur am Wochenende liest"], a: 0 },
      { q: "Warum wirkt der Satz «Ich bin motiviert und teamfähig» oft beliebig?", o: ["Weil er grammatisch falsch ist","Weil er ohne konkretes Beispiel nichts beweist","Weil Teamfähigkeit nicht wichtig ist","Weil er zu lang ist"], a: 1 },
      { q: "Wann sind Hobbys im Lebenslauf laut Text aussagekräftig?", o: ["Wenn sie teuer sind","Wenn sie Eigenschaften wie Ausdauer oder Verantwortungsbewusstsein zeigen","Wenn es möglichst viele sind","Wenn sie mit Games zu tun haben"], a: 1 },
      { q: "Was raten Fachleute in Bezug auf Social Media?", o: ["Alle Profile löschen","Eigene Profile kritisch überprüfen und private Inhalte schützen","Möglichst viele Fotos posten","Den Lehrmeister als Freund hinzufügen"], a: 1 }
    ],
    rf: [
      { s: "Der Bewerbungsbrief soll vor allem den Lebenslauf wiederholen.", a: false, x: "Er soll die Motivation erklären, nicht den Lebenslauf wiederholen." },
      { s: "Mehrsprachigkeit sollte als Stärke im Lebenslauf aufgeführt werden.", a: true },
      { s: "Manche Firmen schauen sich die Social-Media-Profile von Bewerbenden an.", a: true },
      { s: "Nach einer Absage sollte man nie nachfragen.", a: false, x: "Höfliches Nachfragen kann wertvolle Hinweise für die nächste Bewerbung geben." }
    ],
    offen: [
      { q: "Erkläre anhand des Beispiels mit den Elektrofahrzeugen, wie man im Bewerbungsbrief echtes Interesse zeigen kann.", l: "Man informiert sich vorher über die Firma und nennt etwas Konkretes, das einen an genau diesem Betrieb interessiert. So wird klar, dass der Brief nicht für alle Firmen gleich ist." },
      { q: "Verbessere die Floskel «Ich bin zuverlässig» zu einem überzeugenden Satz mit einem konkreten Beispiel.", l: "Z. B.: «Seit zwei Jahren trage ich jeden Samstagmorgen pünktlich Zeitungen aus. Mein Arbeitgeber kann sich darauf verlassen, dass alle Kunden ihre Zeitung rechtzeitig erhalten.»" },
      { q: "Welche Rolle sollten Social-Media-Profile bei der Auswahl von Lernenden spielen? Nimm Stellung (mindestens vier Sätze).", l: "Individuelle Stellungnahme, z. B. Abwägung zwischen Privatsphäre und dem berechtigten Interesse der Firma, mit eigener begründeter Position." }
    ] }
},
"dl-gespraech": {
  2: { vor: "Welche Fragen könnten in einem Vorstellungsgespräch gestellt werden?",
    dauer: "ca. 240 Wörter", text: "Arta hat eine E-Mail erhalten: Die Apotheke in ihrem Dorf lädt sie zu einem Vorstellungsgespräch ein. Sie möchte Pharma-Assistentin werden und hat dort bereits drei Tage geschnuppert. Arta freut sich sehr, ist aber auch nervös, denn es ist ihr erstes richtiges Bewerbungsgespräch.\n\nAm Abend vorher bereitet sie sich gründlich vor. Sie liest die Website der Apotheke noch einmal und notiert sich, welche Dienstleistungen angeboten werden, zum Beispiel Impfungen oder Blutdruckmessungen. Dann überlegt sie sich Antworten auf typische Fragen: Warum möchtest du diesen Beruf lernen? Was sind deine Stärken und Schwächen? Wie gehst du mit Stress um? Ihre ältere Schwester spielt die Chefin und stellt ihr die Fragen. Arta übt, laut, deutlich und in ganzen Sätzen zu antworten.\n\nAm nächsten Tag zieht sie saubere, gepflegte Kleider an und ist zehn Minuten vor dem Termin da. Frau Keller, die Inhaberin, begrüsst sie mit Handschlag. Arta schaut ihr in die Augen und lächelt, obwohl ihr Herz schnell klopft.\n\nIm Gespräch erzählt Arta, dass sie gerne mit Menschen arbeitet und dass Biologie ihr Lieblingsfach ist. Als Frau Keller nach ihren Schwächen fragt, antwortet sie ehrlich: «Ich bin manchmal ungeduldig, aber ich arbeite daran.» Ausserdem erwähnt sie, dass sie Albanisch, Deutsch und etwas Englisch spricht. Frau Keller ist erfreut, denn viele Kundinnen sprechen Albanisch.\n\nAm Schluss stellt Arta zwei vorbereitete Fragen, unter anderem, wie die Berufsschule organisiert ist. Eine Woche später klingelt das Telefon: Arta bekommt die Lehrstelle.",
    wort: [["die Dienstleistung","eine Arbeit, die man für andere macht, z. B. Impfen"],["die Inhaberin","die Besitzerin eines Geschäfts"],["gepflegt","sauber und ordentlich"],["ungeduldig","man kann schlecht warten"],["erwähnen","kurz etwas sagen"],["erfreut","froh, zufrieden"]],
    mc: [
      { q: "Was hatte Arta bereits gemacht, bevor sie eingeladen wurde?", o: ["Sie hatte drei Tage geschnuppert","Sie hatte dort schon zwei Jahre gearbeitet","Sie war Kundin mit Rezept","Sie hatte nichts gemacht"], a: 0 },
      { q: "Wozu liest Arta die Website der Apotheke?", o: ["Um die Öffnungszeiten zu prüfen","Um die Dienstleistungen kennenzulernen","Um ein Medikament zu bestellen","Um die Adresse zu finden"], a: 1 },
      { q: "Wie antwortet Arta auf die Frage nach ihren Schwächen?", o: ["Sie sagt, sie habe keine","Sie antwortet ehrlich und sagt, dass sie daran arbeitet","Sie wechselt das Thema","Sie lacht nur"], a: 1 },
      { q: "Was fragt Arta am Schluss unter anderem?", o: ["Wie viel sie verdienen wird","Wie die Berufsschule organisiert ist","Wann sie Ferien hat","Ob sie das Handy benutzen darf"], a: 1 }
    ],
    rf: [
      { s: "Es ist Artas erstes richtiges Bewerbungsgespräch.", a: true },
      { s: "Frau Keller ist die Mutter von Arta.", a: false, x: "Frau Keller ist die Inhaberin der Apotheke." },
      { s: "Arta übt, in ganzen Sätzen zu antworten.", a: true }
    ],
    offen: [
      { q: "Warum ist die Antwort zu den Schwächen eine gute Antwort? Erkläre.", l: "Sie ist ehrlich, nennt eine echte Schwäche und zeigt gleichzeitig, dass Arta daran arbeitet. Das wirkt glaubwürdig und reif." },
      { q: "Wie würdest du die Frage «Wie gehst du mit Stress um?» beantworten? Schreibe zwei bis drei Sätze.", l: "Individuelle Antwort, möglichst mit Beispiel (z. B. Planung, Pausen, ruhig bleiben, um Hilfe fragen)." }
    ] },
  3: { vor: "Was ist in einem Vorstellungsgespräch wichtiger: was man sagt oder wie man es sagt?",
    dauer: "ca. 340 Wörter", text: "Als Arta die E-Mail der Apotheke öffnet, spürt sie gleichzeitig Freude und Anspannung. Nach drei Schnuppertagen lädt Frau Keller, die Inhaberin, sie zu einem Vorstellungsgespräch für die Lehrstelle als Pharma-Assistentin ein. Arta weiss, dass sie nicht die einzige Kandidatin ist, und will deshalb nichts dem Zufall überlassen.\n\nIhre Vorbereitung beginnt mit Recherche. Sie liest die Website der Apotheke, notiert sich das Angebot, etwa Impfungen, Blutdruckmessungen oder die Beratung bei Reisemedikamenten, und überlegt, was sie davon bereits in der Schnupperlehre beobachtet hat. Anschliessend bereitet sie Antworten auf Fragen vor, die in solchen Gesprächen häufig gestellt werden: nach der Motivation, nach Stärken und Schwächen, nach dem Umgang mit Stress oder nach einer Situation, in der sie einen Fehler gemacht hat. Ihre ältere Schwester übernimmt die Rolle der Chefin und stellt auch unerwartete Fragen. Dabei merkt Arta, dass auswendig gelernte Antworten unnatürlich klingen. Sie entscheidet sich deshalb, sich nur Stichworte und passende Beispiele zu merken.\n\nAm Tag des Gesprächs ist sie zehn Minuten zu früh, gepflegt gekleidet und begrüsst Frau Keller mit einem festen Händedruck. Ein Ratgeber hatte ihr erklärt, dass die Körpersprache einen grossen Teil des ersten Eindrucks ausmacht: aufrechte Haltung, Blickkontakt und ein offenes Lächeln signalisieren Interesse und Selbstvertrauen, selbst wenn man innerlich nervös ist.\n\nIm Gespräch erzählt Arta, wie sie in der Schnupperlehre einer älteren Kundin geholfen hat, die Packungsbeilage eines Medikaments zu verstehen, und dass ihr gerade dieser Kontakt mit Menschen gefallen hat. Auf die Frage nach ihren Schwächen antwortet sie ehrlich, dass sie manchmal ungeduldig sei, und erklärt, wie sie daran arbeite. Als sie erwähnt, dass sie neben Deutsch auch Albanisch und etwas Englisch spricht, reagiert Frau Keller sichtlich interessiert, denn viele Kundinnen und Kunden der Apotheke sprechen Albanisch.\n\nZum Schluss stellt Arta zwei Fragen: wie die Berufsschultage organisiert seien und welche Aufgaben Lernende im ersten Lehrjahr übernehmen würden. Frau Keller wird später sagen, dass gerade diese Fragen den Ausschlag gegeben hätten, denn sie hätten gezeigt, dass Arta sich ernsthaft mit der Lehre auseinandersetze. Eine Woche später erhält Arta die Zusage.",
    wort: [["die Anspannung","Gefühl von Nervosität und Druck"],["die Recherche","gezielte Suche nach Informationen"],["unerwartet","nicht vorhergesehen, überraschend"],["die Körpersprache","was man mit Haltung, Gesicht und Bewegungen ausdrückt"],["signalisieren","zeigen, ein Zeichen geben"],["die Packungsbeilage","Zettel in einer Medikamentenpackung mit Informationen"],["den Ausschlag geben","entscheidend sein"]],
    mc: [
      { q: "Warum will Arta «nichts dem Zufall überlassen»?", o: ["Weil sie nicht die einzige Kandidatin ist","Weil sie die Apotheke nicht kennt","Weil sie schon eine andere Lehrstelle hat","Weil ihre Schwester es verlangt"], a: 0 },
      { q: "Was merkt Arta beim Üben mit ihrer Schwester?", o: ["Dass sie alle Antworten auswendig lernen muss","Dass auswendig gelernte Antworten unnatürlich klingen","Dass ihre Schwester eine schlechte Chefin ist","Dass sie keine Schwächen hat"], a: 1 },
      { q: "Was signalisiert eine offene Körpersprache laut Text?", o: ["Langeweile","Interesse und Selbstvertrauen","Ungeduld","Müdigkeit"], a: 1 },
      { q: "Was gab laut Frau Keller den Ausschlag für Arta?", o: ["Ihre guten Noten","Ihre Kleidung","Ihre Fragen am Schluss, die ernsthaftes Interesse zeigten","Dass sie zu früh kam"], a: 2 }
    ],
    rf: [
      { s: "Arta merkt sich für das Gespräch nur Stichworte und Beispiele.", a: true },
      { s: "In der Schnupperlehre hat Arta einer Kundin eine Packungsbeilage erklärt.", a: true },
      { s: "Arta behauptet im Gespräch, keine Schwächen zu haben.", a: false, x: "Sie nennt ehrlich ihre Ungeduld und erklärt, wie sie daran arbeitet." },
      { s: "Arta erhält die Zusage sofort am Ende des Gesprächs.", a: false, x: "Die Zusage kommt eine Woche später." }
    ],
    offen: [
      { q: "Beschreibe Artas Vorbereitung in drei Schritten.", l: "1. Recherche über die Apotheke (Website, Angebot). 2. Antworten auf typische Fragen mit Stichworten und Beispielen vorbereiten. 3. Üben mit der Schwester, die auch unerwartete Fragen stellt." },
      { q: "Warum ist das Beispiel mit der älteren Kundin überzeugender als die Aussage «Ich arbeite gern mit Menschen»?", l: "Weil es konkret zeigt, dass Arta die Eigenschaft wirklich hat und schon Erfahrung gesammelt hat. Ein Beispiel ist glaubwürdiger als eine allgemeine Behauptung." },
      { q: "Was ist im Vorstellungsgespräch wichtiger: der Inhalt oder die Art, wie man spricht? Nimm mit Bezug auf den Text Stellung (mindestens vier Sätze).", l: "Individuelle Stellungnahme, die Körpersprache/erster Eindruck und inhaltliche Vorbereitung (Beispiele, Fragen) abwägt." }
    ] }
},
"dl-lohn": {
  2: { vor: "Welche Kosten hat man jeden Monat, wenn man selbst Geld verdient?",
    dauer: "ca. 240 Wörter", text: "Dario ist im ersten Lehrjahr als Logistiker. Ende August erhält er seinen ersten Lehrlingslohn: 750 Franken. Für ihn ist das viel Geld, und er hat das Gefühl, sich endlich etwas leisten zu können.\n\nAm ersten Wochenende geht er mit Kollegen in die Stadt. Er kauft Sneakers für 160 Franken, lädt alle zu Burgern ein und bestellt am Sonntag noch ein neues Game für 70 Franken. Nach zwei Wochen ist auf seinem Konto fast nichts mehr übrig, obwohl der Monat noch lange nicht vorbei ist.\n\nDann kommen die Rechnungen. Das Handy-Abo kostet 45 Franken pro Monat. Seine Mutter erklärt ihm, dass er ab jetzt das Zugabo selbst bezahlen und 100 Franken an die Kosten für das Essen zu Hause beitragen soll. Dario ist schockiert, denn diese festen Kosten hatte er nicht eingeplant.\n\nSein Berufsbildner gibt ihm einen wichtigen Rat: «Mach ein Budget.» Ein Budget ist ein Plan, in dem man aufschreibt, wie viel Geld hereinkommt und wofür es ausgegeben wird. Zuerst notiert man die festen Kosten, also Ausgaben, die jeden Monat gleich bleiben. Danach plant man einen Betrag zum Sparen ein, zum Beispiel für den Führerschein oder für unerwartete Ausgaben. Erst was dann übrig bleibt, steht für Freizeit, Kleider und Ausgang zur Verfügung.\n\nDario probiert es aus. Er richtet einen Dauerauftrag ein, damit am Zahltag automatisch 50 Franken auf ein Sparkonto überwiesen werden. Nach einem Jahr hat er so 600 Franken gespart, ohne dass es ihm schwergefallen ist.",
    wort: [["der Lehrlingslohn","Lohn, den man während der Lehre bekommt"],["sich etwas leisten","genug Geld für etwas haben"],["beitragen","einen Teil dazugeben"],["der Betrag","eine Geldsumme"],["der Dauerauftrag","Auftrag an die Bank, regelmässig Geld zu überweisen"],["der Zahltag","Tag, an dem der Lohn kommt"]],
    mc: [
      { q: "Warum ist Dario nach zwei Wochen fast ohne Geld?", o: ["Weil sein Lohn gestohlen wurde","Weil er am Anfang viel für Sneakers, Essen und ein Game ausgegeben hat","Weil er alles gespart hat","Weil er keinen Lohn bekommen hat"], a: 1 },
      { q: "Was sind «feste Kosten»?", o: ["Ausgaben für Freizeit","Ausgaben, die jeden Monat gleich bleiben","Geld, das man spart","Ein Geschenk der Eltern"], a: 1 },
      { q: "In welcher Reihenfolge plant man laut Text ein Budget?", o: ["Freizeit – Sparen – feste Kosten","Feste Kosten – Sparen – Freizeit","Sparen – Freizeit – feste Kosten","Freizeit – feste Kosten – Sparen"], a: 1 },
      { q: "Wozu dient der Dauerauftrag?", o: ["Damit automatisch jeden Monat Geld aufs Sparkonto geht","Damit Dario mehr Lohn bekommt","Damit das Handy-Abo billiger wird","Damit die Mutter Geld bekommt"], a: 0 }
    ],
    rf: [
      { s: "Dario hatte die festen Kosten am Anfang nicht eingeplant.", a: true },
      { s: "Sparen kann man zum Beispiel für den Führerschein.", a: true },
      { s: "Dario fiel das Sparen mit dem Dauerauftrag sehr schwer.", a: false, x: "Er sparte 600 Franken, ohne dass es ihm schwergefallen ist." }
    ],
    offen: [
      { q: "Erstelle für Dario ein einfaches Budget mit seinen Einnahmen und mindestens vier Ausgaben. Wie viel bleibt für die Freizeit?", l: "Einnahmen 750 Fr.; Handy 45, Essen zu Hause 100, Sparen 50, Zugabo (z. B. 80) → Rest z. B. 475 Fr. für Freizeit, Kleider, Ausgang (Betrag je nach angenommenem Zugabo)." },
      { q: "Warum ist es klug, zuerst zu sparen und erst danach Geld für die Freizeit auszugeben? Erkläre.", l: "Weil sonst oft nichts übrig bleibt. Wer zuerst spart, hat sicher Geld für Ziele und unerwartete Ausgaben." }
    ] },
  3: { vor: "Warum haben viele junge Erwachsene in der Schweiz Schulden?",
    dauer: "ca. 340 Wörter", text: "Der erste Lohn ist für viele Jugendliche ein besonderer Moment. Zum ersten Mal verfügen sie über eigenes Geld, das sie selbst verdient haben. Für Dario, der im ersten Lehrjahr als Logistiker arbeitet, sind es 750 Franken, ein Betrag, der ihm zunächst riesig vorkommt. Innerhalb von zwei Wochen gibt er jedoch fast alles aus: neue Sneakers, Essen mit Kollegen, ein Game. Als danach die Rechnung für das Handy-Abo eintrifft und seine Mutter ihn bittet, einen Teil der Haushaltskosten und das Zugabo selbst zu übernehmen, merkt er, dass er den Überblick verloren hat.\n\nDarios Erfahrung ist typisch. Fachstellen für Schuldenprävention beobachten, dass viele junge Erwachsene in finanzielle Schwierigkeiten geraten, oft schon kurz nach dem Eintritt ins Berufsleben. Die Gründe sind vielfältig: Konsum wird durch Werbung und Social Media ständig angeregt, Online-Shops bieten bequemes Bezahlen auf Rechnung oder in Raten an, und Abonnemente für Handy, Streaming oder Fitness summieren sich unauffällig. Hinzu kommt, dass in vielen Familien wenig über Geld gesprochen wird und Jugendliche daher kaum Erfahrung im Umgang mit einem Budget haben.\n\nEin Budget ist im Grunde eine einfache Gegenüberstellung von Einnahmen und Ausgaben. Entscheidend ist die Reihenfolge der Planung. Zuerst werden die festen Kosten berücksichtigt, die jeden Monat anfallen. Danach folgen Rückstellungen für unregelmässige Ausgaben wie Zahnarzt, Velo-Reparaturen oder Geschenke. Erst der verbleibende Betrag steht für den persönlichen Konsum zur Verfügung. Viele Fachleute empfehlen zudem das Prinzip «Pay yourself first»: Am Zahltag wird ein fester Betrag automatisch auf ein Sparkonto überwiesen, bevor man überhaupt die Möglichkeit hat, ihn auszugeben.\n\nDario folgt schliesslich dem Rat seines Berufsbildners. Er erfasst seine Ausgaben in einer App, richtet einen Dauerauftrag über 50 Franken für das Sparkonto ein und legt fest, wie viel er pro Woche für Freizeit ausgeben darf. Nach einem Jahr hat er nicht nur 600 Franken gespart, sondern auch ein besseres Gefühl für den Wert des Geldes entwickelt. «Ich überlege mir jetzt vor jedem Kauf, wie viele Stunden ich dafür arbeiten muss», sagt er. Diese einfache Frage, so erklären Budgetberaterinnen, gehört zu den wirksamsten Mitteln gegen unüberlegte Ausgaben.",
    wort: [["verfügen über","haben, besitzen"],["die Schuldenprävention","Massnahmen, damit Menschen keine Schulden machen"],["der Konsum","das Kaufen und Verbrauchen von Waren"],["anregen","dazu bringen, etwas zu tun"],["sich summieren","zusammengezählt eine grosse Summe ergeben"],["die Rückstellung","Geld, das man für spätere Ausgaben zur Seite legt"],["unüberlegt","ohne nachzudenken"]],
    mc: [
      { q: "Was beobachten Fachstellen für Schuldenprävention?", o: ["Dass Jugendliche keine Schulden haben","Dass viele junge Erwachsene kurz nach dem Berufseinstieg in finanzielle Schwierigkeiten geraten","Dass nur ältere Menschen Schulden haben","Dass Budgets nicht helfen"], a: 1 },
      { q: "Welcher Grund für finanzielle Probleme wird im Text NICHT genannt?", o: ["Werbung und Social Media regen den Konsum an","Zahlung auf Rechnung oder in Raten","Abonnemente summieren sich","Zu hohe Löhne in der Lehre"], a: 3 },
      { q: "Was bedeutet das Prinzip «Pay yourself first»?", o: ["Zuerst sich selbst etwas Schönes kaufen","Am Zahltag zuerst automatisch einen festen Betrag sparen","Zuerst die Schulden der Freunde bezahlen","Den Lohn bar abheben"], a: 1 },
      { q: "Welche Frage stellt sich Dario heute vor jedem Kauf?", o: ["Ob seine Freunde das auch haben","Wie viele Stunden er dafür arbeiten muss","Ob es im Ausverkauf ist","Ob seine Mutter es erlaubt"], a: 1 }
    ],
    rf: [
      { s: "In vielen Familien wird wenig über Geld gesprochen.", a: true },
      { s: "Bei der Budgetplanung kommt der persönliche Konsum zuerst.", a: false, x: "Zuerst feste Kosten, dann Rückstellungen, erst danach der persönliche Konsum." },
      { s: "Zahnarzt oder Velo-Reparaturen sind Beispiele für unregelmässige Ausgaben.", a: true },
      { s: "Dario erfasst seine Ausgaben in einer App.", a: true }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen festen Kosten und Rückstellungen und nenne je zwei Beispiele.", l: "Feste Kosten fallen jeden Monat gleich an (Handy-Abo, Zugabo, Beitrag an Essen). Rückstellungen sind Geld für unregelmässige Ausgaben (Zahnarzt, Velo-Reparatur, Geschenke)." },
      { q: "Warum ist die Frage «Wie viele Stunden muss ich dafür arbeiten?» ein wirksames Mittel gegen unüberlegte Ausgaben?", l: "Sie macht den Wert des Geldes greifbar: Man sieht, wie viel Arbeit hinter einem Kauf steckt, und überlegt sich bewusster, ob es sich lohnt." },
      { q: "Was sollten Schulen tun, damit Jugendliche besser mit Geld umgehen können? Mache zwei begründete Vorschläge.", l: "Individuelle Vorschläge, z. B. Budget-Unterricht mit echten Beispielen, Besuch einer Schuldenberatung, Projekt zu Online-Käufen auf Rechnung – jeweils begründet." }
    ] }
},
"dl-bm": {
  2: { vor: "Welche Weiterbildungen kennst du nach einer Lehre?",
    dauer: "ca. 210 Wörter", text: "Viele Jugendliche glauben, dass man nach einer Berufslehre nicht mehr studieren kann. Das stimmt nicht. Das Schweizer Bildungssystem gilt als besonders durchlässig. Das bedeutet, dass man auch später noch auf einen anderen Bildungsweg wechseln kann. Ein Motto der Berufsbildung lautet deshalb: «Kein Abschluss ohne Anschluss.»\n\nEin wichtiger Weg ist die Berufsmaturität, abgekürzt BM. Sie ergänzt die Lehre mit einer erweiterten Allgemeinbildung in Fächern wie Deutsch, Französisch, Englisch, Mathematik, Wirtschaft oder Naturwissenschaften. Je nach Beruf gibt es verschiedene Ausrichtungen, zum Beispiel Technik, Wirtschaft oder Gesundheit und Soziales.\n\nEs gibt zwei Möglichkeiten. Bei der BM 1 besucht man die Berufsmaturitätsschule bereits während der Lehre, was mehr Schultage pro Woche bedeutet. Bei der BM 2 macht man die Berufsmaturität nach der Lehre, entweder ein Jahr lang Vollzeit oder berufsbegleitend in Teilzeit. Für den Eintritt braucht es meistens gute Noten oder eine Aufnahmeprüfung.\n\nMit der Berufsmaturität kann man ohne weitere Prüfung an einer Fachhochschule studieren. Eine Fachfrau Gesundheit kann zum Beispiel Pflege studieren, ein Logistiker Betriebsökonomie. Mit einer zusätzlichen Prüfung, der «Passerelle», ist sogar ein Studium an einer Universität möglich.\n\nAber auch ohne BM stehen viele Wege offen. Nach einigen Jahren Berufserfahrung kann man eine Berufsprüfung, eine höhere Fachprüfung oder eine höhere Fachschule absolvieren. Viele Führungskräfte in der Schweiz haben ihre Karriere mit einer Lehre begonnen.",
    wort: [["durchlässig","so, dass man von einem Weg auf einen anderen wechseln kann"],["ergänzen","etwas hinzufügen, vervollständigen"],["die Ausrichtung","Schwerpunkt, Richtung"],["berufsbegleitend","neben der Arbeit"],["die Passerelle","Zusatzprüfung für den Weg an die Universität"],["absolvieren","eine Ausbildung oder Prüfung machen und abschliessen"]],
    mc: [
      { q: "Was bedeutet das Motto «Kein Abschluss ohne Anschluss»?", o: ["Nach jedem Abschluss gibt es eine Möglichkeit weiterzulernen","Ohne Abschluss bekommt man keinen Job","Man darf nur einen Abschluss machen","Man braucht einen Internetanschluss"], a: 0 },
      { q: "Was ist der Unterschied zwischen BM 1 und BM 2?", o: ["BM 1 ist während der Lehre, BM 2 nach der Lehre","BM 1 ist für Mädchen, BM 2 für Knaben","BM 1 ist schwieriger als BM 2","Es gibt keinen Unterschied"], a: 0 },
      { q: "Was kann man mit der Berufsmaturität ohne weitere Prüfung machen?", o: ["An einer Fachhochschule studieren","An jeder Universität Medizin studieren","Direkt Lehrer werden","Nichts Besonderes"], a: 0 },
      { q: "Wozu dient die «Passerelle»?", o: ["Zur Aufnahme in die Lehre","Um mit der BM an einer Universität studieren zu können","Um den Führerschein zu machen","Um die Lehre abzubrechen"], a: 1 }
    ],
    rf: [
      { s: "Die BM gibt es in verschiedenen Ausrichtungen.", a: true },
      { s: "Die BM 2 kann man auch berufsbegleitend in Teilzeit machen.", a: true },
      { s: "Ohne BM gibt es nach der Lehre keine Weiterbildung.", a: false, x: "Auch ohne BM gibt es z. B. Berufsprüfungen und höhere Fachschulen." }
    ],
    offen: [
      { q: "Erkläre mit eigenen Worten, was «durchlässig» im Zusammenhang mit dem Bildungssystem bedeutet.", l: "Man ist nicht für immer auf einen Weg festgelegt, sondern kann auch später noch wechseln und weiterlernen, z. B. von der Lehre an eine Fachhochschule." },
      { q: "Welche Vor- und Nachteile hat die BM 1 während der Lehre? Nenne je einen.", l: "Vorteil: Man ist nach der Lehre direkt fertig mit der BM. Nachteil: mehr Schultage, weniger Zeit im Betrieb und mehr Belastung." }
    ] },
  3: { vor: "Warum gilt das Schweizer Berufsbildungssystem international als Vorbild?",
    dauer: "ca. 340 Wörter", text: "In vielen Ländern gilt ein Universitätsstudium als einziger Weg zu einer erfolgreichen Karriere. In der Schweiz ist das anders: Rund zwei Drittel der Jugendlichen entscheiden sich nach der obligatorischen Schulzeit für eine berufliche Grundbildung. Das duale System, bei dem die Lernenden gleichzeitig im Betrieb arbeiten und die Berufsfachschule besuchen, wird international häufig als Vorbild genannt, weil es junge Menschen praxisnah ausbildet und die Jugendarbeitslosigkeit vergleichsweise tief hält.\n\nEin zentrales Merkmal des Systems ist seine Durchlässigkeit. Wer eine Lehre beginnt, legt sich nicht für immer auf einen Weg fest. Unter dem Motto «Kein Abschluss ohne Anschluss» stehen nach jeder Ausbildung weitere Möglichkeiten offen. Der bekannteste Weg ist die Berufsmaturität. Sie ergänzt die Lehre um eine vertiefte Allgemeinbildung und kann entweder während der Lehre (BM 1) oder im Anschluss daran (BM 2) erworben werden. Die BM berechtigt zum prüfungsfreien Studium an einer Fachhochschule in einem verwandten Bereich, und mit der Zusatzprüfung Passerelle ist sogar der Zugang zu einer Universität möglich.\n\nDaneben existiert die höhere Berufsbildung, die sich an Berufsleute mit Erfahrung richtet. Mit eidgenössischen Berufsprüfungen, höheren Fachprüfungen oder einem Abschluss an einer höheren Fachschule können sie sich spezialisieren und Führungsaufgaben übernehmen. Diese Abschlüsse sind auf dem Arbeitsmarkt sehr gefragt, weil sie Theorie und Praxis verbinden.\n\nTrotz dieser Möglichkeiten bestehen auch Herausforderungen. Die BM 1 bedeutet für viele Lernende eine hohe Belastung, da sie weniger Zeit im Betrieb verbringen und gleichzeitig anspruchsvollen Schulstoff bewältigen müssen. Manche Betriebe sehen es zudem nicht gern, wenn ihre Lernenden häufiger abwesend sind. Kritiker weisen ausserdem darauf hin, dass das Ansehen der Berufslehre in manchen Familien geringer ist als jenes des Gymnasiums, besonders wenn die Eltern das Schweizer System nicht aus eigener Erfahrung kennen. Fachleute betonen deshalb, wie wichtig es ist, Jugendliche und Eltern frühzeitig über die vielfältigen Wege nach der Lehre zu informieren.\n\nDie Bilanz fällt dennoch positiv aus. Zahlreiche Führungskräfte, Unternehmerinnen und sogar Bundesräte haben ihre Laufbahn mit einer Lehre begonnen. Für viele Fachleute ist dies der beste Beweis dafür, dass die Berufslehre keine Sackgasse, sondern ein solides Fundament für eine erfolgreiche Karriere ist.",
    wort: [["obligatorisch","vorgeschrieben, Pflicht"],["das duale System","Ausbildung gleichzeitig im Betrieb und in der Schule"],["praxisnah","nah an der echten Arbeit"],["prüfungsfrei","ohne Aufnahmeprüfung"],["die Belastung","Druck, Anstrengung"],["das Ansehen","wie viel Respekt etwas in der Gesellschaft hat"],["die Sackgasse","Weg ohne Ausgang; hier: Situation ohne Möglichkeit weiterzugehen"]],
    mc: [
      { q: "Warum wird das duale System international als Vorbild genannt?", o: ["Weil es keine Prüfungen gibt","Weil es praxisnah ausbildet und die Jugendarbeitslosigkeit tief hält","Weil es nur für gute Schüler ist","Weil es sehr billig ist"], a: 1 },
      { q: "An wen richtet sich die höhere Berufsbildung?", o: ["An Schulkinder","An Berufsleute mit Erfahrung","Nur an Studierende der Universität","An Pensionierte"], a: 1 },
      { q: "Welche Herausforderung der BM 1 nennt der Text?", o: ["Sie ist gratis","Hohe Belastung durch weniger Zeit im Betrieb und anspruchsvollen Schulstoff","Sie dauert zehn Jahre","Sie ist nur auf Englisch"], a: 1 },
      { q: "Was soll das Beispiel der Führungskräfte und Bundesräte zeigen?", o: ["Dass man eine Lehre vermeiden sollte","Dass die Berufslehre ein solides Fundament für eine Karriere ist","Dass nur Politiker eine Lehre machen","Dass das Gymnasium besser ist"], a: 1 }
    ],
    rf: [
      { s: "Rund zwei Drittel der Jugendlichen wählen eine berufliche Grundbildung.", a: true },
      { s: "Mit der BM kann man prüfungsfrei an einer Fachhochschule in einem verwandten Bereich studieren.", a: true },
      { s: "Alle Betriebe sehen es gern, wenn Lernende häufiger in der Schule sind.", a: false, x: "Manche Betriebe sehen die häufigere Abwesenheit nicht gern." },
      { s: "Laut Kritikern hat die Berufslehre in manchen Familien ein geringeres Ansehen als das Gymnasium.", a: true }
    ],
    offen: [
      { q: "Beschreibe die drei Wege nach der Lehre, die der Text nennt.", l: "1. Berufsmaturität (BM 1 oder BM 2) → Fachhochschule, mit Passerelle Universität. 2. Höhere Berufsbildung: Berufsprüfung, höhere Fachprüfung. 3. Höhere Fachschule." },
      { q: "Erkläre die Metapher «keine Sackgasse, sondern ein solides Fundament».", l: "Eine Sackgasse führt nicht weiter; ein Fundament ist die Basis, auf der man aufbauen kann. Die Lehre ist also kein Ende, sondern der Anfang für weitere Ausbildungen und Karriere." },
      { q: "Wie könnte man Eltern, die das Schweizer System nicht kennen, besser informieren? Mache zwei begründete Vorschläge.", l: "Individuelle Vorschläge, z. B. Informationsabende in verschiedenen Sprachen, Erklärvideos, Gespräche mit Lernenden und Berufsleuten – jeweils begründet." }
    ] }
},
"dl-fakenews": {
  2: { vor: "Woher bekommst du deine Nachrichten? Wem vertraust du?",
    dauer: "ca. 210 Wörter", text: "«Schule fällt morgen wegen Hitze aus!» Diese Nachricht verbreitet sich an einem Sonntagabend blitzschnell in mehreren Klassenchats. Viele freuen sich und stellen den Wecker ab. Am nächsten Morgen findet der Unterricht jedoch ganz normal statt. Die Meldung war erfunden.\n\nSolche falschen Meldungen, die wie echte Nachrichten aussehen, nennt man Fake News. Die Gründe für ihre Verbreitung sind unterschiedlich. Manche Leute erfinden sie aus Spass. Andere wollen Geld verdienen, denn jeder Klick auf eine Website bringt Werbeeinnahmen. Wieder andere möchten gezielt die Meinung von Menschen beeinflussen, zum Beispiel vor Wahlen. Besonders schnell verbreiten sich Meldungen, die überraschen, empören oder Angst machen, weil Menschen sie oft spontan weiterleiten.\n\nUm Fake News zu erkennen, helfen einige Fragen. Wer steckt hinter der Meldung? Gibt es einen Namen, ein Impressum oder eine bekannte Zeitung? Berichten auch andere seriöse Medien darüber? Wenn nur eine einzige, unbekannte Seite davon schreibt, ist Vorsicht angebracht. Passt das Foto wirklich zur Meldung? Mit einer umgekehrten Bildersuche lässt sich herausfinden, ob ein Bild älter ist oder von einem ganz anderen Ort stammt.\n\nSchwieriger wird es durch künstliche Intelligenz. Mit KI lassen sich heute täuschend echte Fotos und Videos herstellen, sogenannte Deepfakes. Darum gilt umso mehr: erst prüfen, dann teilen. Wer eine Information nicht überprüfen kann, sollte sie lieber nicht weiterleiten.",
    wort: [["erfunden","nicht wahr, ausgedacht"],["die Werbeeinnahmen","Geld, das man durch Werbung verdient"],["empören","wütend machen"],["das Impressum","Angaben, wer für eine Website verantwortlich ist"],["die umgekehrte Bildersuche","man sucht mit einem Bild, wo es sonst im Internet vorkommt"],["täuschend echt","so gut gemacht, dass man es für echt hält"]],
    mc: [
      { q: "Warum verdienen manche Leute mit Fake News Geld?", o: ["Weil jeder Klick auf eine Website Werbeeinnahmen bringt","Weil der Staat sie bezahlt","Weil Zeitungen Fake News kaufen","Weil Leser dafür spenden"], a: 0 },
      { q: "Welche Meldungen verbreiten sich besonders schnell?", o: ["Langweilige Meldungen","Meldungen, die überraschen, empören oder Angst machen","Sehr lange Meldungen","Meldungen ohne Bild"], a: 1 },
      { q: "Wozu dient eine umgekehrte Bildersuche?", o: ["Um ein Bild schöner zu machen","Um herauszufinden, ob ein Bild älter ist oder von einem anderen Ort stammt","Um Bilder zu löschen","Um Bilder zu verkaufen"], a: 1 },
      { q: "Was sind Deepfakes?", o: ["Sehr lange Artikel","Mit KI hergestellte, täuschend echte Fotos und Videos","Seriöse Nachrichten","Werbung im Fernsehen"], a: 1 }
    ],
    rf: [
      { s: "Manche Fake News sollen vor Wahlen die Meinung beeinflussen.", a: true },
      { s: "Wenn nur eine unbekannte Seite über etwas schreibt, ist Vorsicht angebracht.", a: true },
      { s: "Durch künstliche Intelligenz wird es einfacher, Fake News zu erkennen.", a: false, x: "Es wird schwieriger, weil KI täuschend echte Bilder und Videos herstellen kann." }
    ],
    offen: [
      { q: "Nenne drei Gründe, warum Menschen Fake News verbreiten.", l: "Aus Spass, um Geld zu verdienen (Werbeeinnahmen durch Klicks), um gezielt Meinungen zu beeinflussen." },
      { q: "Du bekommst im Chat eine schockierende Meldung mit Foto. Beschreibe Schritt für Schritt, wie du sie überprüfst.", l: "Absender/Impressum prüfen, schauen, ob seriöse Medien darüber berichten, umgekehrte Bildersuche machen, nicht sofort weiterleiten." }
    ] },
  3: { vor: "Wer trägt die Verantwortung, wenn sich falsche Informationen verbreiten?",
    dauer: "ca. 310 Wörter", text: "Noch nie war es so einfach, Informationen zu verbreiten wie heute. Jede Person mit einem Smartphone kann innerhalb von Sekunden Texte, Bilder und Videos mit Tausenden von Menschen teilen. Diese Entwicklung hat viele Vorteile, doch sie hat auch eine Kehrseite: Falschmeldungen, sogenannte Fake News, können sich schneller und weiter verbreiten als je zuvor.\n\nForschende haben untersucht, wie sich wahre und falsche Meldungen in sozialen Netzwerken ausbreiten. Dabei zeigte sich, dass falsche Nachrichten oft häufiger weitergeleitet werden als wahre. Eine mögliche Erklärung ist, dass Falschmeldungen meist neuartiger und emotionaler wirken. Sie lösen Überraschung, Empörung oder Angst aus, und genau solche Gefühle bringen Menschen dazu, einen Beitrag spontan zu teilen. Hinzu kommen die Algorithmen der Plattformen, die Inhalte mit vielen Reaktionen bevorzugt anzeigen und so ihre Reichweite zusätzlich vergrössern.\n\nDie Absichten hinter Fake News sind unterschiedlich. Manche entstehen aus Unwissen oder als schlechter Scherz. Andere werden gezielt produziert, um mit Klicks Werbeeinnahmen zu erzielen. Besonders problematisch ist Desinformation, also absichtlich verbreitete Falschinformation, mit der politische Ziele verfolgt werden, etwa um Wahlen zu beeinflussen oder das Vertrauen in Institutionen zu schwächen.\n\nDurch künstliche Intelligenz hat sich die Lage weiter verschärft. Mit wenigen Klicks lassen sich realistische Bilder, Stimmen und Videos erzeugen, auf denen Menschen Dinge sagen oder tun, die nie passiert sind. Solche Deepfakes sind für Laien kaum noch zu erkennen. Medienfachleute raten deshalb zu einer Haltung des «gesunden Zweifels»: Man sollte bei jeder Information fragen, wer sie veröffentlicht hat, ob unabhängige Quellen sie bestätigen und welches Interesse hinter ihr stehen könnte. Hilfreich sind auch Faktencheck-Seiten, die verbreitete Behauptungen überprüfen.\n\nUmstritten ist, wer die Verantwortung trägt. Die einen fordern, dass die grossen Plattformen Falschinformationen konsequenter löschen oder kennzeichnen. Andere warnen davor, dass dadurch die Meinungsfreiheit eingeschränkt werden könnte, weil nicht immer eindeutig ist, was wahr und was falsch ist. Einig sind sich die meisten jedoch darin, dass Medienkompetenz in den Schulen eine wichtige Rolle spielen muss.",
    wort: [["die Kehrseite","die negative Seite einer Sache"],["der Algorithmus","Regel eines Computerprogramms, die z. B. bestimmt, welche Inhalte man sieht"],["die Reichweite","wie viele Menschen etwas erreicht"],["die Desinformation","absichtlich verbreitete falsche Information"],["die Institution","wichtige öffentliche Einrichtung, z. B. Gericht oder Parlament"],["sich verschärfen","schlimmer werden"],["die Medienkompetenz","die Fähigkeit, Medien kritisch und sinnvoll zu nutzen"]],
    mc: [
      { q: "Was haben Forschende über die Verbreitung von Falschmeldungen herausgefunden?", o: ["Sie werden seltener geteilt als wahre","Sie werden oft häufiger weitergeleitet als wahre","Sie verbreiten sich gar nicht","Sie werden nur von Erwachsenen geteilt"], a: 1 },
      { q: "Welche Rolle spielen die Algorithmen der Plattformen?", o: ["Sie löschen alle Fake News","Sie zeigen Inhalte mit vielen Reaktionen bevorzugt an und vergrössern ihre Reichweite","Sie prüfen jede Meldung auf Wahrheit","Sie spielen keine Rolle"], a: 1 },
      { q: "Was unterscheidet Desinformation von anderen Fake News?", o: ["Sie ist immer lustig","Sie wird absichtlich verbreitet, oft mit politischen Zielen","Sie ist immer wahr","Sie stammt nur von Kindern"], a: 1 },
      { q: "Warum warnen manche davor, dass Plattformen zu viel löschen?", o: ["Weil das zu teuer ist","Weil die Meinungsfreiheit eingeschränkt werden könnte, da nicht immer klar ist, was wahr ist","Weil dann niemand mehr Social Media nutzt","Weil Löschen illegal ist"], a: 1 }
    ],
    rf: [
      { s: "Falschmeldungen wirken oft neuartiger und emotionaler als wahre Meldungen.", a: true },
      { s: "Deepfakes sind für Laien leicht zu erkennen.", a: false, x: "Sie sind für Laien kaum noch zu erkennen." },
      { s: "Faktencheck-Seiten überprüfen verbreitete Behauptungen.", a: true },
      { s: "Laut Text sind sich die meisten einig, dass Medienkompetenz in der Schule wichtig ist.", a: true }
    ],
    offen: [
      { q: "Erkläre in eigenen Worten, warum sich Fake News oft schneller verbreiten als wahre Meldungen. Nenne zwei Gründe.", l: "Sie wirken neu und emotional (Überraschung, Empörung, Angst) und werden spontan geteilt; Algorithmen bevorzugen Inhalte mit vielen Reaktionen und vergrössern so die Reichweite." },
      { q: "Was bedeutet «gesunder Zweifel»? Wende die drei Fragen aus dem Text auf ein selbst gewähltes Beispiel an.", l: "Kritisch bleiben, ohne alles abzulehnen. Fragen: Wer hat es veröffentlicht? Bestätigen unabhängige Quellen? Welches Interesse steckt dahinter? – angewendet auf ein konkretes Beispiel." },
      { q: "Sollten Plattformen Falschinformationen löschen müssen? Wäge beide Positionen ab und begründe deine Meinung (mindestens fünf Sätze).", l: "Individuelle Erörterung: Pro (Schutz vor Desinformation) und Contra (Meinungsfreiheit, unklare Grenzen) abwägen, eigene begründete Position." }
    ] }
},
"dl-cybermobbing": {
  2: { vor: "Wo hört Spass auf und wo fängt Mobbing an?",
    dauer: "ca. 230 Wörter", text: "Von Mobbing spricht man, wenn eine Person über längere Zeit immer wieder absichtlich geplagt, ausgelacht, bedroht oder ausgeschlossen wird. Geschieht dies über das Internet oder das Handy, nennt man es Cybermobbing. Typische Beispiele sind gemeine Kommentare unter Fotos, peinliche Bilder, die ohne Erlaubnis verbreitet werden, gefälschte Profile oder der gezielte Ausschluss aus einem Gruppenchat.\n\nCybermobbing unterscheidet sich in mehreren Punkten von Mobbing auf dem Pausenplatz. Erstens hört es nie auf: Die Nachrichten erreichen die Betroffenen auch abends, am Wochenende und in den Ferien. Zweitens können sehr viele Menschen zuschauen, und Inhalte verbreiten sich in kurzer Zeit. Drittens bleibt das, was einmal online ist, oft lange sichtbar. Und viertens fühlen sich Täterinnen und Täter hinter dem Bildschirm sicherer und schreiben Dinge, die sie jemandem nie ins Gesicht sagen würden.\n\nFür Betroffene ist es wichtig, nicht zurückzuschlagen, sondern Beweise zu sichern, zum Beispiel mit Screenshots. Danach sollte man die Person blockieren und den Inhalt auf der Plattform melden. Am wichtigsten ist es, mit einer Vertrauensperson zu sprechen: mit den Eltern, einer Lehrperson oder der Schulsozialarbeit. In der Schweiz bietet Pro Juventute unter der Nummer 147 rund um die Uhr gratis Beratung an.\n\nAuch wer nur zuschaut, trägt Verantwortung. Wer mitlacht oder Bilder weiterleitet, macht mit. Wer hingegen der betroffenen Person beisteht oder Erwachsene informiert, kann Mobbing stoppen. Übrigens kann Cybermobbing auch strafbar sein, zum Beispiel bei Drohungen oder beim Verbreiten von intimen Bildern.",
    wort: [["absichtlich","mit Absicht, nicht aus Versehen"],["der Ausschluss","wenn jemand nicht mehr dazugehören darf"],["die Betroffenen","Personen, denen etwas Schlimmes passiert"],["der Täter / die Täterin","Person, die etwas Böses tut"],["die Vertrauensperson","jemand, dem man vertraut und alles erzählen kann"],["beistehen","jemandem helfen, an seiner Seite sein"]],
    mc: [
      { q: "Was ist ein typisches Beispiel für Cybermobbing?", o: ["Ein Geburtstagsgruss im Chat","Peinliche Bilder ohne Erlaubnis verbreiten","Ein gemeinsames Online-Game","Eine Nachricht an die Lehrperson"], a: 1 },
      { q: "Warum fühlen sich Täter beim Cybermobbing oft sicherer?", o: ["Weil sie hinter dem Bildschirm sind","Weil es erlaubt ist","Weil die Polizei nichts tun kann","Weil niemand das Handy benutzt"], a: 0 },
      { q: "Was ist laut Text am wichtigsten für Betroffene?", o: ["Zurückschlagen","Das Handy verkaufen","Mit einer Vertrauensperson sprechen","Die Schule wechseln"], a: 2 },
      { q: "Wann kann Cybermobbing strafbar sein?", o: ["Nie","Bei Drohungen oder beim Verbreiten von intimen Bildern","Nur wenn Erwachsene beteiligt sind","Nur in den Ferien"], a: 1 }
    ],
    rf: [
      { s: "Die Nummer 147 bietet rund um die Uhr gratis Beratung an.", a: true },
      { s: "Cybermobbing hört am Abend und am Wochenende auf.", a: false, x: "Die Nachrichten erreichen Betroffene auch abends, am Wochenende und in den Ferien." },
      { s: "Zuschauer können Mobbing stoppen, wenn sie der betroffenen Person beistehen.", a: true }
    ],
    offen: [
      { q: "Nenne die vier Unterschiede zwischen Cybermobbing und Mobbing auf dem Pausenplatz.", l: "Es hört nie auf; viele Menschen können zuschauen und es verbreitet sich schnell; Inhalte bleiben lange sichtbar; Täter fühlen sich hinter dem Bildschirm sicherer." },
      { q: "Warum soll man Beweise sichern, statt zurückzuschlagen? Erkläre.", l: "Mit Beweisen können Erwachsene, die Plattform oder die Polizei helfen. Zurückschlagen macht die Situation schlimmer und man wird selbst zum Täter." }
    ] },
  3: { vor: "Warum greifen viele Menschen nicht ein, wenn jemand online fertiggemacht wird?",
    dauer: "ca. 310 Wörter", text: "Cybermobbing bezeichnet das absichtliche und wiederholte Beleidigen, Bedrohen, Blossstellen oder Ausgrenzen einer Person mithilfe digitaler Medien. Befragungen unter Jugendlichen in der Schweiz zeigen, dass ein beträchtlicher Teil schon einmal selbst betroffen war oder Cybermobbing in seinem Umfeld beobachtet hat. Die Formen sind vielfältig: herabwürdigende Kommentare, das Verbreiten von peinlichen oder manipulierten Bildern, gefälschte Profile im Namen einer anderen Person oder der gezielte Ausschluss aus Gruppenchats.\n\nObwohl Mobbing kein neues Phänomen ist, hat die digitale Form besondere Eigenschaften, die sie für Betroffene oft besonders belastend machen. Da Smartphones ständig dabei sind, gibt es keinen geschützten Rückzugsort mehr; die Angriffe verfolgen die Betroffenen bis ins eigene Zimmer. Zudem kann das Publikum riesig sein, und einmal verbreitete Inhalte lassen sich kaum vollständig löschen. Schliesslich senkt die scheinbare Anonymität die Hemmschwelle: Wer nicht in das Gesicht seines Opfers blicken muss, verhält sich oft rücksichtsloser. Fachleute sprechen in diesem Zusammenhang vom «Online-Enthemmungseffekt». Die Folgen für Betroffene können gravierend sein und reichen von Schlafproblemen und Leistungsabfall in der Schule bis zu Angststörungen und Depressionen.\n\nEine zentrale Rolle spielen die Zuschauenden. Psychologen beschreiben den sogenannten Zuschauereffekt: Je mehr Personen eine Situation beobachten, desto geringer ist die Wahrscheinlichkeit, dass jemand eingreift, weil sich jeder auf die anderen verlässt. Wer jedoch schweigt, mitlacht oder Inhalte weiterleitet, verstärkt das Mobbing, denn Täterinnen und Täter suchen meist Anerkennung bei ihrem Publikum. Umgekehrt zeigen Untersuchungen, dass bereits eine einzige Person, die öffentlich widerspricht oder der betroffenen Person privat Unterstützung anbietet, die Dynamik verändern kann.\n\nFür Betroffene empfehlen Beratungsstellen ein klares Vorgehen: nicht reagieren, Beweise mit Screenshots sichern, die Person blockieren, den Inhalt melden und sich unbedingt einer Vertrauensperson anvertrauen. In der Schweiz bietet Pro Juventute unter der Nummer 147 kostenlose und vertrauliche Beratung an. Zudem ist wichtig zu wissen, dass es zwar keinen eigenen Straftatbestand «Cybermobbing» gibt, viele Handlungen aber trotzdem strafbar sind, etwa Drohung, Ehrverletzung, Erpressung oder das Verbreiten von intimen Aufnahmen ohne Einwilligung.",
    wort: [["blossstellen","jemanden vor anderen lächerlich machen"],["herabwürdigend","verächtlich, beleidigend"],["der Rückzugsort","Ort, an dem man sicher ist und Ruhe hat"],["die Hemmschwelle","innere Grenze, die einen davon abhält, etwas Schlechtes zu tun"],["der Zuschauereffekt","je mehr Leute zuschauen, desto seltener hilft jemand"],["die Dynamik","wie sich eine Situation entwickelt und bewegt"],["die Einwilligung","Zustimmung, Erlaubnis"]],
    mc: [
      { q: "Warum gibt es bei Cybermobbing laut Text keinen «geschützten Rückzugsort» mehr?", o: ["Weil Betroffene kein eigenes Zimmer haben","Weil Smartphones ständig dabei sind und die Angriffe bis nach Hause reichen","Weil die Schule immer offen ist","Weil es keine Ferien gibt"], a: 1 },
      { q: "Was beschreibt der «Online-Enthemmungseffekt»?", o: ["Menschen sind online höflicher","Menschen verhalten sich ohne direkten Blickkontakt oft rücksichtsloser","Menschen benutzen weniger Emojis","Menschen schalten das Handy aus"], a: 1 },
      { q: "Was bedeutet der Zuschauereffekt?", o: ["Je mehr Leute zuschauen, desto eher hilft jemand","Je mehr Leute zuschauen, desto seltener greift jemand ein","Zuschauer sind immer die Täter","Zuschauer bekommen Geld"], a: 1 },
      { q: "Was kann laut Untersuchungen die Dynamik beim Mobbing verändern?", o: ["Wenn alle schweigen","Wenn bereits eine Person widerspricht oder Unterstützung anbietet","Wenn die betroffene Person zurückschlägt","Wenn man den Chat verlässt"], a: 1 }
    ],
    rf: [
      { s: "Täter suchen meist Anerkennung bei ihrem Publikum.", a: true },
      { s: "In der Schweiz gibt es einen eigenen Straftatbestand «Cybermobbing».", a: false, x: "Es gibt keinen eigenen Straftatbestand, aber viele Handlungen sind trotzdem strafbar." },
      { s: "Folgen von Cybermobbing können Schlafprobleme und Angststörungen sein.", a: true },
      { s: "Einmal verbreitete Inhalte lassen sich leicht vollständig löschen.", a: false, x: "Sie lassen sich kaum vollständig löschen." }
    ],
    offen: [
      { q: "Erkläre, warum Zuschauende beim Cybermobbing eine so wichtige Rolle spielen. Beziehe dich auf den Zuschauereffekt.", l: "Viele verlassen sich darauf, dass andere eingreifen, und tun nichts. Wer schweigt oder mitlacht, verstärkt das Mobbing, weil Täter Anerkennung suchen. Schon eine Person, die widerspricht oder hilft, kann die Situation verändern." },
      { q: "Welche strafbaren Handlungen nennt der Text? Erkläre an einem Beispiel, warum eine dieser Handlungen bestraft werden sollte.", l: "Drohung, Ehrverletzung, Erpressung, Verbreiten intimer Aufnahmen ohne Einwilligung; Beispiel mit Begründung (Schaden für das Opfer, Schutz der Würde)." },
      { q: "Entwirf drei Regeln für einen Klassenchat, die Cybermobbing verhindern sollen, und begründe jede Regel.", l: "Individuelle Regeln mit Begründung, z. B. keine Fotos ohne Erlaubnis, niemand wird aus Gruppen ausgeschlossen, bei Problemen sofort Lehrperson informieren." }
    ] }
},
"dl-schulden": {
  2: { vor: "Hast du schon einmal etwas gekauft und es später bereut?",
    dauer: "ca. 210 Wörter", text: "Neue Kopfhörer, eine Jacke oder ein Game sind im Internet nur wenige Klicks entfernt. Viele Online-Shops bieten an, die Ware sofort zu liefern und erst später zu bezahlen, etwa nach 30 Tagen. Andere ermöglichen eine Ratenzahlung: Man bezahlt den Preis in kleinen Beträgen, zum Beispiel jeden Monat 20 Franken. Diese Angebote heissen oft «Buy now, pay later», also «jetzt kaufen, später zahlen».\n\nWas bequem klingt, kann schnell zum Problem werden. Wer mehrere solche Käufe macht, verliert leicht den Überblick, denn jede einzelne Rechnung wirkt klein. Wird eine Rechnung nicht rechtzeitig bezahlt, folgt eine Mahnung, oft mit zusätzlichen Gebühren. Nach mehreren Mahnungen kann der Betrag an ein Inkassobüro übergeben werden, das noch höhere Kosten verlangt. So wird aus einer Rechnung von 50 Franken schnell das Doppelte.\n\nBezahlt man gar nicht, kann der Gläubiger eine Betreibung einleiten. Das ist ein offizielles Verfahren, um Schulden einzutreiben. Ein Eintrag im Betreibungsregister kann später unangenehme Folgen haben, zum Beispiel bei der Wohnungssuche, denn Vermieter verlangen häufig einen Auszug aus diesem Register.\n\nFachleute für Schuldenprävention geben einfache Tipps: Nur kaufen, was man sofort bezahlen kann. Bei grösseren Anschaffungen eine Nacht darüber schlafen. Offene Rechnungen notieren und Zahlungsfristen im Kalender eintragen. Und wer bereits in Schwierigkeiten steckt, sollte sich früh bei einer Schuldenberatung melden, statt Briefe ungeöffnet liegen zu lassen.",
    wort: [["die Ratenzahlung","man bezahlt einen Preis in mehreren Teilen"],["die Mahnung","Erinnerung an eine unbezahlte Rechnung"],["das Inkassobüro","Firma, die für andere Schulden eintreibt"],["der Gläubiger","Person oder Firma, der man Geld schuldet"],["die Betreibung","offizielles Verfahren, um Schulden einzutreiben"],["die Zahlungsfrist","Zeit, bis wann man bezahlen muss"]],
    mc: [
      { q: "Was bedeutet «Buy now, pay later»?", o: ["Gratis einkaufen","Jetzt kaufen, später zahlen","Nur bar bezahlen","Gebraucht kaufen"], a: 1 },
      { q: "Warum verliert man bei solchen Käufen leicht den Überblick?", o: ["Weil jede einzelne Rechnung klein wirkt","Weil man keine Rechnungen bekommt","Weil die Ware nicht kommt","Weil das Internet langsam ist"], a: 0 },
      { q: "Was macht ein Inkassobüro?", o: ["Es verschenkt Geld","Es treibt Schulden für andere ein und verlangt zusätzliche Kosten","Es repariert Handys","Es berät beim Einkaufen"], a: 1 },
      { q: "Warum kann ein Eintrag im Betreibungsregister bei der Wohnungssuche schaden?", o: ["Weil Vermieter oft einen Auszug verlangen","Weil man dann keine Wohnung mieten darf","Weil die Wohnung teurer wird","Weil man umziehen muss"], a: 0 }
    ],
    rf: [
      { s: "Nach einer Mahnung kommen oft zusätzliche Gebühren dazu.", a: true },
      { s: "Bei Schulden soll man Briefe lieber ungeöffnet liegen lassen.", a: false, x: "Man sollte sich früh bei einer Schuldenberatung melden." },
      { s: "Zahlungsfristen im Kalender einzutragen, ist ein Tipp der Fachleute.", a: true }
    ],
    offen: [
      { q: "Beschreibe in der richtigen Reihenfolge, was passiert, wenn man eine Rechnung nicht bezahlt.", l: "Mahnung (mit Gebühren) → weitere Mahnungen → Inkassobüro mit höheren Kosten → Betreibung → Eintrag im Betreibungsregister." },
      { q: "Welcher Tipp der Fachleute ist für dich am hilfreichsten? Begründe.", l: "Individuelle Antwort mit Begründung." }
    ] },
  3: { vor: "Ist es eher die Verantwortung der Firmen oder der Kundinnen und Kunden, Schulden zu verhindern?",
    dauer: "ca. 320 Wörter", text: "Der Kauf auf Rechnung gehört in der Schweiz seit Langem zum Alltag. Mit dem Online-Handel haben sich jedoch neue Zahlungsformen verbreitet, die besonders bei jungen Menschen beliebt sind. Unter dem Schlagwort «Buy now, pay later» bieten Zahlungsdienstleister an, Waren sofort zu erhalten und erst Wochen später oder in mehreren Raten zu bezahlen. Die Anbieter betonen die Flexibilität und Bequemlichkeit. Fachstellen für Schuldenprävention sehen darin hingegen ein Risiko, weil die Hürde zum Kauf deutlich sinkt.\n\nDas Problem liegt weniger in einem einzelnen Kauf als in der Summe. Wer bei mehreren Shops gleichzeitig offene Beträge hat, unterschätzt leicht, wie viel er insgesamt schuldet. Psychologisch spielt dabei eine Rolle, dass späteres Bezahlen weniger «weh tut» als sofortiges: Der Zeitpunkt des Genusses und der Zeitpunkt der Zahlung fallen auseinander. Verpasst man eine Frist, folgen Mahnungen mit Gebühren, und nach einiger Zeit werden die Forderungen häufig an Inkassofirmen abgetreten, die weitere Kosten verrechnen. Kleine Beträge können so in kurzer Zeit erheblich anwachsen.\n\nBleibt eine Forderung unbezahlt, kann der Gläubiger beim Betreibungsamt eine Betreibung einleiten. Ein Eintrag im Betreibungsregister bleibt mehrere Jahre sichtbar und wird zum Beispiel von Vermieterinnen oder manchen Arbeitgebern verlangt. Für junge Erwachsene, die eine erste Wohnung suchen, kann dies zu einem ernsthaften Hindernis werden. Studien zeigen zudem, dass Schulden oft mit psychischem Stress verbunden sind, der wiederum die Leistungsfähigkeit in Schule und Beruf beeinträchtigen kann.\n\nWie man dieses Problem lösen soll, ist umstritten. Konsumentenschutzorganisationen fordern strengere Regeln, etwa eine bessere Prüfung der Zahlungsfähigkeit oder deutlichere Warnhinweise bei Ratenkäufen. Vertreter des Handels argumentieren dagegen, dass Erwachsene selbst für ihre Entscheidungen verantwortlich seien und dass zu strenge Vorschriften alle Kundinnen und Kunden bevormunden würden. Einig sind sich beide Seiten darin, dass finanzielle Bildung möglichst früh beginnen sollte.\n\nPraktisch empfehlen Beratungsstellen einige einfache Grundsätze: nur kaufen, was man sofort bezahlen könnte, alle offenen Rechnungen schriftlich festhalten, Fristen konsequent einhalten und bei Problemen früh Hilfe suchen. Viele Kantone bieten kostenlose Schuldenberatungen an, die auch Jugendliche unterstützen.",
    wort: [["der Zahlungsdienstleister","Firma, die das Bezahlen organisiert"],["die Hürde","Hindernis, Schwierigkeit"],["die Forderung","Geldbetrag, den jemand von dir verlangt"],["abtreten","an jemand anderen weitergeben"],["erheblich","sehr stark, bedeutend"],["beeinträchtigen","negativ beeinflussen, stören"],["bevormunden","für andere entscheiden, als ob sie es nicht selbst könnten"]],
    mc: [
      { q: "Warum sehen Fachstellen in «Buy now, pay later» ein Risiko?", o: ["Weil die Waren schlechter sind","Weil die Hürde zum Kauf deutlich sinkt","Weil man nicht online bezahlen kann","Weil es verboten ist"], a: 1 },
      { q: "Welche psychologische Erklärung nennt der Text?", o: ["Späteres Bezahlen tut weniger weh, weil Genuss und Zahlung zeitlich auseinanderfallen","Menschen kaufen lieber im Laden","Junge Menschen rechnen besser","Rechnungen machen glücklich"], a: 0 },
      { q: "Was fordern Konsumentenschutzorganisationen?", o: ["Die Abschaffung des Online-Handels","Strengere Regeln wie bessere Prüfung der Zahlungsfähigkeit und deutlichere Warnhinweise","Höhere Gebühren für Mahnungen","Dass nur Erwachsene über 30 online einkaufen dürfen"], a: 1 },
      { q: "Worin sind sich beide Seiten einig?", o: ["Dass Ratenkäufe verboten werden sollen","Dass finanzielle Bildung möglichst früh beginnen sollte","Dass es keine Schulden gibt","Dass Inkassofirmen abgeschafft werden sollen"], a: 1 }
    ],
    rf: [
      { s: "Ein Eintrag im Betreibungsregister bleibt mehrere Jahre sichtbar.", a: true },
      { s: "Laut Text liegt das Problem vor allem in einem einzelnen grossen Kauf.", a: false, x: "Das Problem liegt eher in der Summe vieler kleiner offener Beträge." },
      { s: "Schulden können mit psychischem Stress verbunden sein.", a: true },
      { s: "Vertreter des Handels fordern strengere Vorschriften.", a: false, x: "Sie argumentieren, dass Erwachsene selbst verantwortlich sind und zu strenge Vorschriften bevormunden." }
    ],
    offen: [
      { q: "Erkläre, wie aus einem kleinen offenen Betrag in kurzer Zeit ein erheblicher Betrag werden kann.", l: "Verpasste Frist → Mahnungen mit Gebühren → Forderung wird an Inkassofirma abgetreten, die weitere Kosten verrechnet → Betrag wächst stark an, ggf. Betreibung." },
      { q: "Vergleiche die Positionen von Konsumentenschutz und Handel. Welche Argumente überzeugen dich mehr?", l: "Konsumentenschutz: strengere Regeln, Prüfung der Zahlungsfähigkeit, Warnhinweise. Handel: Eigenverantwortung, keine Bevormundung. Eigene begründete Einschätzung." },
      { q: "Schreibe einen kurzen Ratgebertext (5–6 Sätze) für Jugendliche, die zum ersten Mal online auf Rechnung bestellen.", l: "Individueller Text mit konkreten Tipps (nur kaufen, was man bezahlen kann, Rechnungen notieren, Fristen im Kalender, bei Problemen Beratung), in verständlicher Sprache." }
    ] }
},
"dl-sprachen": {
  2: { vor: "In welchen Situationen wechselst du die Sprache?",
    dauer: "ca. 210 Wörter", text: "Zu Hause spricht Elif mit ihren Eltern Türkisch, in der Schule Hochdeutsch und auf dem Pausenplatz Schweizerdeutsch. Abends schaut sie Serien auf Englisch. Wie Elif wachsen in der Schweiz sehr viele Kinder und Jugendliche mit mehr als einer Sprache auf. In manchen Schulklassen werden über zehn verschiedene Erstsprachen gesprochen.\n\nLange Zeit glaubte man, dass mehrere Sprachen Kinder überfordern und verwirren. Manchen Eltern wurde sogar geraten, mit ihren Kindern nur noch Deutsch zu sprechen. Heute weiss die Forschung, dass diese Annahme falsch war. Kinder können problemlos mehrere Sprachen gleichzeitig lernen. Dass sie manchmal Wörter aus verschiedenen Sprachen mischen, ist normal und kein Zeichen von Verwirrung.\n\nMehrsprachigkeit hat sogar Vorteile. Wer oft zwischen Sprachen wechselt, trainiert sein Gehirn. Studien deuten darauf hin, dass mehrsprachige Menschen sich oft gut konzentrieren und flexibel zwischen Aufgaben umschalten können. Ausserdem fällt es ihnen häufig leichter, weitere Sprachen zu lernen.\n\nWichtig ist allerdings, dass die Erstsprache gut gefördert wird. Wer in seiner Erstsprache gut lesen und schreiben kann, überträgt dieses Wissen leichter auf Deutsch. Darum gibt es in vielen Gemeinden Kurse in heimatlicher Sprache und Kultur, kurz HSK.\n\nAuch im Beruf sind Sprachkenntnisse gefragt, zum Beispiel im Gesundheitswesen, im Verkauf oder bei der Polizei. Deshalb gehören alle Sprachen, die man spricht, in den Lebenslauf.",
    wort: [["die Erstsprache","die Sprache, die man als Kind zuerst gelernt hat"],["überfordern","zu viel verlangen"],["die Annahme","etwas, das man für wahr hält, ohne es zu wissen"],["umschalten","von einer Sache zur anderen wechseln"],["fördern","unterstützen, damit etwas besser wird"],["übertragen","von einem Bereich in einen anderen bringen"]],
    mc: [
      { q: "Was wurde manchen Eltern früher geraten?", o: ["Mit den Kindern mehrere Sprachen zu sprechen","Mit den Kindern nur noch Deutsch zu sprechen","Die Kinder nicht in die Schule zu schicken","Englisch zu lernen"], a: 1 },
      { q: "Was sagt die Forschung heute über das Mischen von Wörtern aus verschiedenen Sprachen?", o: ["Es ist ein Zeichen von Verwirrung","Es ist normal","Es ist verboten","Es kommt nie vor"], a: 1 },
      { q: "Welcher Vorteil der Mehrsprachigkeit wird genannt?", o: ["Man muss weniger schlafen","Man kann flexibel zwischen Aufgaben umschalten","Man bekommt bessere Noten in Mathematik","Man wird grösser"], a: 1 },
      { q: "Warum ist es wichtig, die Erstsprache zu fördern?", o: ["Weil man sie sonst vergisst und kein Deutsch braucht","Weil man Lese- und Schreibwissen leichter auf Deutsch überträgt","Weil Deutsch unwichtig ist","Weil es Pflicht ist"], a: 1 }
    ],
    rf: [
      { s: "In manchen Schulklassen werden über zehn Erstsprachen gesprochen.", a: true },
      { s: "Kinder können nicht mehrere Sprachen gleichzeitig lernen.", a: false, x: "Sie können problemlos mehrere Sprachen gleichzeitig lernen." },
      { s: "Sprachkenntnisse sind auch bei der Polizei gefragt.", a: true }
    ],
    offen: [
      { q: "Beschreibe deinen eigenen Sprachalltag: Welche Sprachen sprichst du mit wem und wo?", l: "Individuelle Antwort mit konkreten Situationen." },
      { q: "Erkläre, warum die frühere Annahme über Mehrsprachigkeit falsch war.", l: "Man glaubte, mehrere Sprachen würden Kinder überfordern. Die Forschung zeigt aber, dass Kinder mehrere Sprachen gleichzeitig lernen können und dass Mehrsprachigkeit sogar Vorteile hat." }
    ] },
  3: { vor: "Ist Mehrsprachigkeit eher ein Vorteil oder eine Herausforderung?",
    dauer: "ca. 320 Wörter", text: "Die Schweiz ist ein mehrsprachiges Land mit vier Landessprachen. Doch die tatsächliche sprachliche Vielfalt ist weit grösser. Ein bedeutender Teil der Bevölkerung spricht zu Hause regelmässig eine Sprache, die keine Landessprache ist, etwa Albanisch, Portugiesisch, Serbisch, Kroatisch, Türkisch, Spanisch, Tamil oder Arabisch. In vielen Schulklassen ist es deshalb völlig normal, dass Kinder mit zwei, drei oder mehr Sprachen aufwachsen.\n\nLange Zeit wurde Mehrsprachigkeit eher als Problem betrachtet. Man befürchtete, Kinder könnten durch mehrere Sprachen überfordert werden oder keine Sprache richtig lernen. Manchen Familien wurde empfohlen, zu Hause ausschliesslich die Schulsprache zu verwenden, auch wenn die Eltern diese selbst nur unsicher beherrschten. Heute weiss die Sprachforschung, dass solche Empfehlungen oft mehr geschadet als genützt haben. Ein reicher, emotional verankerter Wortschatz in der Erstsprache bildet nämlich eine wichtige Grundlage, auf die beim Erwerb weiterer Sprachen aufgebaut werden kann. Wer zum Beispiel in seiner Erstsprache gelernt hat, Texte zu verstehen und zusammenzufassen, kann diese Strategien auf Deutsch übertragen.\n\nZudem deuten verschiedene Studien darauf hin, dass mehrsprachige Menschen bestimmte geistige Fähigkeiten besonders trainieren, etwa die Fähigkeit, Unwichtiges auszublenden oder flexibel zwischen Aufgaben zu wechseln. Allerdings sind die Forschungsergebnisse hier nicht ganz einheitlich, und Fachleute warnen davor, Mehrsprachigkeit als Wundermittel darzustellen. Unbestritten ist hingegen ihr Nutzen in der Arbeitswelt: In Spitälern, im Detailhandel, in der Logistik oder bei der Polizei werden Mitarbeitende, die mit Kundinnen und Kunden in deren Sprache sprechen können, sehr geschätzt.\n\nTrotz dieser Vorteile erleben viele mehrsprachige Jugendliche ihre Sprachen nicht immer als Stärke. Manche schämen sich für ihre Erstsprache oder erleben, dass sie in der Öffentlichkeit negativ bewertet wird, während andere Sprachen wie Englisch oder Französisch als prestigeträchtig gelten. Fachleute sprechen von einer Hierarchie der Sprachen. Schulen versuchen dem entgegenzuwirken, indem sie die Erstsprachen sichtbar machen, beispielsweise durch Projekte, mehrsprachige Bücher oder die Zusammenarbeit mit den Kursen in heimatlicher Sprache und Kultur (HSK).\n\nMehrsprachigkeit ist also weder ein Problem noch ein Wundermittel, sondern eine Ressource, deren Wert stark davon abhängt, wie eine Gesellschaft mit ihr umgeht.",
    wort: [["bedeutend","wichtig, gross"],["emotional verankert","mit Gefühlen verbunden und fest im Inneren"],["der Erwerb","das Lernen, das Aneignen"],["einheitlich","überall gleich, übereinstimmend"],["prestigeträchtig","mit hohem Ansehen verbunden"],["die Hierarchie","Rangordnung, wer oben und wer unten ist"],["die Ressource","etwas Wertvolles, das man nutzen kann"]],
    mc: [
      { q: "Warum haben frühere Empfehlungen laut Text oft mehr geschadet als genützt?", o: ["Weil Kinder dann gar keine Sprache mehr sprachen","Weil ein reicher Wortschatz in der Erstsprache eine wichtige Grundlage für weitere Sprachen ist","Weil Deutsch zu schwierig ist","Weil die Eltern zu gut Deutsch sprachen"], a: 1 },
      { q: "Was sagt der Text über die Forschung zu geistigen Vorteilen der Mehrsprachigkeit?", o: ["Alle Studien zeigen grosse Vorteile","Die Ergebnisse sind nicht ganz einheitlich","Es gibt keine Studien","Mehrsprachigkeit macht dümmer"], a: 1 },
      { q: "Was meinen Fachleute mit einer «Hierarchie der Sprachen»?", o: ["Manche Sprachen gelten als wertvoller und angesehener als andere","Man lernt Sprachen in einer festen Reihenfolge","Es gibt nur vier Sprachen","Alle Sprachen sind gleich angesehen"], a: 0 },
      { q: "Welche Schlussfolgerung zieht der Text?", o: ["Mehrsprachigkeit ist ein Problem","Mehrsprachigkeit ist ein Wundermittel","Mehrsprachigkeit ist eine Ressource, deren Wert vom Umgang der Gesellschaft abhängt","Man sollte nur eine Sprache sprechen"], a: 2 }
    ],
    rf: [
      { s: "Die Schweiz hat vier Landessprachen.", a: true },
      { s: "Laut Text schämen sich manche Jugendliche für ihre Erstsprache.", a: true },
      { s: "Fachleute stellen Mehrsprachigkeit gerne als Wundermittel dar.", a: false, x: "Sie warnen davor, Mehrsprachigkeit als Wundermittel darzustellen." },
      { s: "Schulen machen Erstsprachen zum Beispiel durch mehrsprachige Bücher sichtbar.", a: true }
    ],
    offen: [
      { q: "Erkläre mit einem Beispiel, wie Fähigkeiten aus der Erstsprache beim Deutschlernen helfen können.", l: "Z. B.: Wer in der Erstsprache gelernt hat, Texte zusammenzufassen oder Fragen zu einem Text zu beantworten, kann diese Strategien auf Deutsch anwenden." },
      { q: "Warum werden manche Sprachen als «prestigeträchtig» empfunden und andere nicht? Was denkst du darüber?", l: "Individuelle Antwort, z. B. Englisch/Französisch gelten als nützlich für Karriere und Reisen; andere Sprachen werden mit Migration verbunden und abgewertet – eigene Meinung dazu." },
      { q: "Wie könnte deine Schule die Sprachen aller Schülerinnen und Schüler sichtbarer machen? Mache zwei konkrete Vorschläge und begründe sie.", l: "Individuelle Vorschläge (z. B. mehrsprachige Begrüssungen, Sprachenporträts, Lesungen in Erstsprachen) mit Begründung." }
    ] }
},
"dl-abstimmen": {
  2: { vor: "Über welches Thema würdest du gerne abstimmen?",
    dauer: "ca. 210 Wörter", text: "In den meisten Demokratien wählt das Volk alle paar Jahre ein Parlament, das danach die politischen Entscheidungen trifft. In der Schweiz haben die Stimmberechtigten zusätzlich die Möglichkeit, direkt über Sachfragen abzustimmen. Dieses System nennt man direkte Demokratie. Auf Bundesebene finden meistens viermal pro Jahr Abstimmungen statt, dazu kommen Abstimmungen in den Kantonen und Gemeinden.\n\nStimmberechtigt sind auf Bundesebene Schweizerinnen und Schweizer ab 18 Jahren. Einige Wochen vor einer Abstimmung erhalten sie die Unterlagen per Post, darunter ein Abstimmungsbüchlein mit Erklärungen und den Argumenten beider Seiten. Die meisten stimmen brieflich ab, andere gehen am Abstimmungssonntag an die Urne.\n\nZwei Instrumente sind besonders wichtig. Mit einer Volksinitiative können Bürgerinnen und Bürger eine Änderung der Bundesverfassung verlangen. Dafür müssen sie innerhalb von 18 Monaten 100 000 gültige Unterschriften sammeln. Eine Initiative wird nur angenommen, wenn sowohl die Mehrheit der Stimmenden als auch die Mehrheit der Kantone zustimmt. Man spricht vom Volks- und Ständemehr.\n\nMit dem Referendum kann das Volk über ein Gesetz abstimmen, das das Parlament bereits beschlossen hat. Dafür braucht es 50 000 Unterschriften innerhalb von 100 Tagen. Bei Änderungen der Verfassung ist eine Volksabstimmung sogar obligatorisch.\n\nDie Stimmbeteiligung liegt oft unter 50 Prozent. Junge Menschen stimmen im Durchschnitt seltener ab als ältere. Darum gibt es Projekte, die Jugendliche für Politik begeistern wollen, zum Beispiel Jugendparlamente.",
    wort: [["die Sachfrage","eine Frage zu einem bestimmten Thema, nicht zu Personen"],["die Bundesebene","die ganze Schweiz betreffend (nicht nur Kanton oder Gemeinde)"],["das Abstimmungsbüchlein","Heft mit Erklärungen zu einer Abstimmung"],["gültig","korrekt und anerkannt"],["das Ständemehr","Mehrheit der Kantone"],["die Stimmbeteiligung","wie viele Prozent der Stimmberechtigten abstimmen"]],
    mc: [
      { q: "Was enthält das Abstimmungsbüchlein?", o: ["Nur die Meinung des Bundesrats","Erklärungen und die Argumente beider Seiten","Werbung von Firmen","Die Namen aller Stimmberechtigten"], a: 1 },
      { q: "Wann wird eine Volksinitiative angenommen?", o: ["Wenn 100 000 Personen unterschreiben","Wenn die Mehrheit der Stimmenden und die Mehrheit der Kantone zustimmen","Wenn das Parlament zustimmt","Wenn ein Kanton zustimmt"], a: 1 },
      { q: "Was braucht es für ein Referendum?", o: ["50 000 Unterschriften in 100 Tagen","100 000 Unterschriften in 18 Monaten","Die Zustimmung aller Kantone","Nichts"], a: 0 },
      { q: "Wer stimmt im Durchschnitt seltener ab?", o: ["Ältere Menschen","Junge Menschen","Frauen","Menschen in Städten"], a: 1 }
    ],
    rf: [
      { s: "Neben Bundesabstimmungen gibt es auch Abstimmungen in Kantonen und Gemeinden.", a: true },
      { s: "Bei Änderungen der Verfassung ist eine Volksabstimmung obligatorisch.", a: true },
      { s: "Die Stimmbeteiligung liegt fast immer über 80 Prozent.", a: false, x: "Sie liegt oft unter 50 Prozent." }
    ],
    offen: [
      { q: "Erkläre den Begriff «Volks- und Ständemehr» mit eigenen Worten.", l: "Eine Vorlage braucht die Zustimmung der Mehrheit aller Stimmenden in der Schweiz und zusätzlich die Mehrheit in den Kantonen." },
      { q: "Warum stimmen junge Menschen wohl seltener ab? Nenne zwei mögliche Gründe und eine Idee, wie man das ändern könnte.", l: "Individuelle Antwort, z. B. wenig Interesse, Themen kompliziert, keine Gewohnheit; Ideen: Politik in der Schule, Jugendparlament, einfache Erklärvideos." }
    ] },
  3: { vor: "Sollten auch Jugendliche ab 16 Jahren abstimmen dürfen?",
    dauer: "ca. 340 Wörter", text: "Die Schweiz gilt weltweit als Musterbeispiel für direkte Demokratie. Während in den meisten Staaten die Bevölkerung vor allem durch Wahlen Einfluss nimmt, können die Schweizer Stimmberechtigten mehrmals im Jahr über konkrete Sachfragen entscheiden. Auf Bundesebene finden in der Regel vier Abstimmungstermine pro Jahr statt, an denen oft über mehrere Vorlagen gleichzeitig abgestimmt wird. Hinzu kommen zahlreiche Abstimmungen in Kantonen und Gemeinden, bei denen es etwa um Steuern, Schulhäuser oder Verkehrsprojekte geht.\n\nDas System beruht auf zwei zentralen Volksrechten. Mit der Volksinitiative können 100 000 Stimmberechtigte innerhalb von 18 Monaten eine Änderung der Bundesverfassung verlangen. Damit eine Initiative angenommen wird, braucht sie das doppelte Mehr: die Mehrheit der Stimmenden und die Mehrheit der Kantone. Das Ständemehr soll sicherstellen, dass bevölkerungsreiche Kantone die kleineren nicht einfach überstimmen können. Kritiker bemängeln allerdings, dass dadurch die Stimme einer Person in einem kleinen Kanton deutlich mehr Gewicht hat als jene einer Person in einem grossen Kanton. Mit dem fakultativen Referendum wiederum können 50 000 Stimmberechtigte innerhalb von 100 Tagen verlangen, dass über ein vom Parlament beschlossenes Gesetz abgestimmt wird. Bereits die Möglichkeit eines Referendums führt dazu, dass Regierung und Parlament nach Kompromissen suchen, die von einer breiten Mehrheit getragen werden.\n\nDie direkte Demokratie hat jedoch auch Schattenseiten. Viele Vorlagen sind komplex, und nicht alle Stimmberechtigten haben die Zeit oder das Wissen, sich vertieft damit auseinanderzusetzen. Kampagnen mit grossem Budget können die Meinungsbildung zudem stark beeinflussen, weshalb in den letzten Jahren neue Regeln zur Offenlegung der Finanzierung eingeführt wurden. Ausserdem ist die Stimmbeteiligung häufig tief und liegt oft unter fünfzig Prozent, was die Frage aufwirft, wie repräsentativ die Ergebnisse sind.\n\nBesonders diskutiert wird die Beteiligung junger Menschen. Sie stimmen im Durchschnitt seltener ab als ältere, obwohl viele Entscheidungen, etwa zur Altersvorsorge oder zum Klimaschutz, ihre Zukunft besonders betreffen. Im Kanton Glarus dürfen Jugendliche bereits ab 16 Jahren auf kantonaler und kommunaler Ebene abstimmen. In anderen Kantonen wurde die Senkung des Stimmrechtsalters ebenfalls diskutiert, oft aber abgelehnt. Befürworter argumentieren, dass ein früherer Einstieg das politische Interesse fördere; Gegner halten dagegen, dass Mündigkeit und Stimmrecht zusammengehören sollten.",
    wort: [["die Vorlage","Thema oder Gesetz, über das abgestimmt wird"],["bevölkerungsreich","mit vielen Einwohnern"],["bemängeln","kritisieren, Mängel nennen"],["fakultativ","nicht zwingend, freiwillig"],["der Kompromiss","Einigung, bei der jede Seite etwas nachgibt"],["repräsentativ","ein Ergebnis widerspiegelt die Meinung aller gut"],["die Mündigkeit","Volljährigkeit, ab 18 Jahren selbst verantwortlich"]],
    mc: [
      { q: "Wozu dient das Ständemehr?", o: ["Damit die Städte mehr Gewicht haben","Damit bevölkerungsreiche Kantone die kleineren nicht einfach überstimmen können","Damit der Bundesrat entscheiden kann","Damit die Abstimmung schneller geht"], a: 1 },
      { q: "Welche Wirkung hat bereits die Möglichkeit eines Referendums?", o: ["Das Parlament arbeitet langsamer","Regierung und Parlament suchen nach Kompromissen, die eine breite Mehrheit tragen","Es gibt mehr Wahlen","Gesetze werden abgeschafft"], a: 1 },
      { q: "Warum wurden in den letzten Jahren neue Regeln eingeführt?", o: ["Um die Finanzierung von Kampagnen offenzulegen","Um das Stimmrechtsalter zu senken","Um die Zahl der Abstimmungen zu verringern","Um das Ständemehr abzuschaffen"], a: 0 },
      { q: "Welches Argument bringen Gegnerinnen und Gegner von Stimmrechtsalter 16?", o: ["Junge Menschen interessieren sich nicht für Politik","Mündigkeit und Stimmrecht sollten zusammengehören","Es gibt zu wenige Jugendliche","Abstimmungen sind zu teuer"], a: 1 }
    ],
    rf: [
      { s: "Kritiker bemängeln, dass Stimmen in kleinen Kantonen mehr Gewicht haben.", a: true },
      { s: "Das fakultative Referendum braucht 100 000 Unterschriften.", a: false, x: "Es braucht 50 000 Unterschriften innerhalb von 100 Tagen." },
      { s: "Im Kanton Glarus dürfen Jugendliche ab 16 auf kantonaler Ebene abstimmen.", a: true },
      { s: "Die Stimmbeteiligung liegt meistens über 80 Prozent.", a: false, x: "Sie liegt oft unter fünfzig Prozent." }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen Volksinitiative und fakultativem Referendum. Gehe auf Ziel, Unterschriften und Frist ein.", l: "Initiative: verlangt eine Verfassungsänderung, 100 000 Unterschriften in 18 Monaten, braucht Volks- und Ständemehr. Referendum: Abstimmung über ein vom Parlament beschlossenes Gesetz, 50 000 Unterschriften in 100 Tagen." },
      { q: "Nenne zwei Schattenseiten der direkten Demokratie, die der Text beschreibt, und erkläre sie.", l: "Komplexe Vorlagen und fehlende Zeit/Wissen; Einfluss von Kampagnen mit grossem Budget; tiefe Stimmbeteiligung und Frage der Repräsentativität." },
      { q: "Soll das Stimmrechtsalter in der ganzen Schweiz auf 16 gesenkt werden? Schreibe eine begründete Stellungnahme mit Argumenten beider Seiten (mindestens fünf Sätze).", l: "Individuelle Erörterung mit Pro (Interesse fördern, Zukunft betrifft Junge) und Contra (Mündigkeit, Reife) und begründetem Fazit." }
    ] }
},
"dl-gletscher": {
  2: { vor: "Was passiert mit dem Wasser in der Schweiz, wenn die Gletscher verschwinden?",
    dauer: "ca. 240 Wörter", text: "Ein Gletscher ist eine riesige Masse aus Eis, die sich langsam talwärts bewegt. Er entsteht in hohen Lagen, wo über viele Jahre mehr Schnee fällt, als im Sommer schmilzt. Unter dem Gewicht neuer Schichten wird der Schnee zusammengepresst und verwandelt sich nach und nach in festes Gletschereis. Der grösste Gletscher der Alpen ist der Aletschgletscher im Wallis. Er ist rund 20 Kilometer lang und an manchen Stellen mehrere hundert Meter dick.\n\nSeit Jahrzehnten werden die Gletscher in der Schweiz jedoch kleiner. Der Hauptgrund ist die Erwärmung des Klimas: Im Sommer schmilzt deutlich mehr Eis, als im Winter durch Schnee dazukommt. Besonders in heissen Sommern verlieren die Gletscher sehr viel Volumen. Fachleute rechnen damit, dass bis zum Ende dieses Jahrhunderts ein grosser Teil der Alpengletscher verschwunden sein wird.\n\nDas hat Folgen für die ganze Schweiz. Gletscher wirken wie Wasserspeicher: Im Winter sammeln sie Wasser in Form von Schnee und Eis, im Sommer geben sie es als Schmelzwasser an Bäche und Flüsse ab. Gerade in trockenen Sommern ist dieses Wasser für Landwirtschaft, Natur und Wasserkraftwerke wichtig. Ohne Gletscher könnte es in Zukunft im Sommer häufiger zu Wasserknappheit kommen.\n\nAusserdem verändert sich die Landschaft in den Bergen. Wo das Eis verschwindet, wird der Boden instabil, und es kann vermehrt zu Felsstürzen und Murgängen kommen. Gleichzeitig entstehen neue Gletscherseen.\n\nDen Rückgang der Gletscher kann man kurzfristig nicht aufhalten. Wenn jedoch weltweit weniger Treibhausgase ausgestossen werden, verlangsamt sich die Erwärmung, und ein Teil der Gletscher kann erhalten bleiben.",
    wort: [["talwärts","nach unten ins Tal"],["zusammenpressen","sehr stark zusammendrücken"],["das Volumen","wie viel Raum etwas einnimmt"],["die Wasserknappheit","es gibt zu wenig Wasser"],["instabil","nicht fest, kann sich bewegen"],["der Murgang","Strom aus Schlamm, Steinen und Wasser, der den Berg hinunterfliesst"]],
    mc: [
      { q: "Wie entsteht Gletschereis?", o: ["Aus gefrorenem Seewasser","Aus Schnee, der über Jahre zusammengepresst wird","Aus Regenwasser im Winter","Aus Hagel"], a: 1 },
      { q: "Warum werden die Gletscher kleiner?", o: ["Weil im Sommer mehr Eis schmilzt, als im Winter dazukommt","Weil Touristen Eis mitnehmen","Weil es mehr schneit","Weil die Berge kleiner werden"], a: 0 },
      { q: "Warum vergleicht der Text Gletscher mit Wasserspeichern?", o: ["Weil man darin baden kann","Weil sie im Winter Wasser sammeln und im Sommer abgeben","Weil sie aus Beton sind","Weil sie Trinkwasser produzieren"], a: 1 },
      { q: "Welche Folge kann ein instabiler Boden haben?", o: ["Mehr Felsstürze und Murgänge","Mehr Schnee","Wärmere Winter","Weniger Tourismus"], a: 0 }
    ],
    rf: [
      { s: "Der Aletschgletscher liegt im Kanton Wallis.", a: true },
      { s: "Wo das Eis verschwindet, entstehen manchmal neue Gletscherseen.", a: true },
      { s: "Man kann den Rückgang der Gletscher kurzfristig stoppen.", a: false, x: "Kurzfristig kann man ihn nicht aufhalten, nur langfristig verlangsamen." }
    ],
    offen: [
      { q: "Erkläre, warum das Schmelzwasser der Gletscher gerade in trockenen Sommern wichtig ist.", l: "Wenn es wenig regnet, liefern die Gletscher Wasser für Bäche und Flüsse, das Landwirtschaft, Natur und Wasserkraftwerke brauchen." },
      { q: "Nenne zwei Folgen des Gletscherschwunds für die Menschen in der Schweiz.", l: "Wasserknappheit im Sommer, weniger Wasser für Kraftwerke und Landwirtschaft, mehr Felsstürze und Murgänge, veränderte Landschaft." }
    ] },
  3: { vor: "Welche Verantwortung hat ein kleines Land wie die Schweiz beim Klimaschutz?",
    dauer: "ca. 340 Wörter", text: "Die Gletscher der Alpen gehören zu den sichtbarsten Zeugen des Klimawandels. Wer alte Fotografien mit heutigen Aufnahmen vergleicht, erkennt auf den ersten Blick, wie stark sich die Eismassen zurückgezogen haben. Wo vor hundert Jahren eine mächtige Eiszunge ins Tal reichte, liegen heute oft nur noch Geröll und kahler Fels. Messungen des Schweizer Gletschermessnetzes zeigen, dass der Rückgang in den letzten Jahrzehnten deutlich schneller geworden ist. Besonders heisse Sommer haben zu Rekordverlusten geführt, bei denen innerhalb eines einzigen Jahres mehrere Prozent des gesamten Eisvolumens geschmolzen sind.\n\nDie Ursache ist gut erforscht. Ein Gletscher bleibt nur stabil, wenn sich der Zuwachs durch Schneefall und der Verlust durch Schmelzen ungefähr die Waage halten. Durch die Erwärmung der Atmosphäre, die hauptsächlich auf den Ausstoss von Treibhausgasen wie Kohlendioxid zurückzuführen ist, verschiebt sich dieses Gleichgewicht. Die Sommer werden länger und wärmer, und auch in grösseren Höhen fällt häufiger Regen statt Schnee. Zusätzlich verstärken sich manche Effekte gegenseitig: Wenn dunkler Schutt das Eis bedeckt oder Schnee fehlt, wird weniger Sonnenlicht reflektiert, und das Eis schmilzt noch schneller.\n\nDie Folgen betreffen nicht nur die Berggebiete. Gletscher sind wichtige Wasserspeicher, die in Hitzeperioden die Flüsse speisen. Fehlt dieses Schmelzwasser, können in trockenen Sommern Wasserstände sinken, was Landwirtschaft, Ökosysteme, Schifffahrt und die Stromproduktion aus Wasserkraft beeinträchtigt. Kurzfristig führt das starke Abschmelzen zwar zu mehr Wasser, langfristig aber zu einem Rückgang. Zudem wird der Untergrund in den Alpen instabil, wenn Eis und Permafrost schwinden. Das Risiko für Felsstürze, Murgänge und Gletscherseeausbrüche steigt, was Siedlungen und Verkehrswege gefährden kann.\n\nWissenschaftlerinnen und Wissenschaftler gehen davon aus, dass ein Teil des Gletscherverlusts nicht mehr aufzuhalten ist, weil das Eis verzögert auf die bereits erfolgte Erwärmung reagiert. Wie viel Eis am Ende dieses Jahrhunderts noch übrig bleibt, hängt jedoch entscheidend davon ab, wie stark der weltweite Ausstoss von Treibhausgasen reduziert wird. Gelingt eine deutliche Reduktion, könnte ein Teil der Alpengletscher in grossen Höhen erhalten bleiben. Für ein Land wie die Schweiz stellt sich deshalb die Frage, welchen Beitrag es leisten kann und will, obwohl es selbst nur einen kleinen Teil der weltweiten Emissionen verursacht.",
    wort: [["die Eiszunge","das untere, schmale Ende eines Gletschers"],["das Geröll","lose Steine"],["die Waage halten","gleich gross sein, im Gleichgewicht sein"],["reflektieren","zurückwerfen, z. B. Licht"],["speisen","hier: mit Wasser versorgen"],["der Permafrost","Boden, der das ganze Jahr gefroren ist"],["die Emission","Ausstoss von Gasen in die Luft"]],
    mc: [
      { q: "Was zeigen die Messungen des Gletschermessnetzes?", o: ["Die Gletscher wachsen wieder","Der Rückgang ist in den letzten Jahrzehnten schneller geworden","Die Gletscher verändern sich nicht","Nur kleine Gletscher schmelzen"], a: 1 },
      { q: "Wann bleibt ein Gletscher stabil?", o: ["Wenn es im Sommer regnet","Wenn sich Zuwachs durch Schnee und Verlust durch Schmelzen die Waage halten","Wenn er von Schutt bedeckt ist","Wenn viele Touristen kommen"], a: 1 },
      { q: "Warum schmilzt Eis schneller, wenn dunkler Schutt es bedeckt?", o: ["Weil Schutt warm ist","Weil weniger Sonnenlicht reflektiert wird","Weil Schutt das Eis zerkratzt","Weil Schutt Wasser speichert"], a: 1 },
      { q: "Was bedeutet das starke Abschmelzen kurzfristig und langfristig für das Wasser?", o: ["Kurzfristig mehr, langfristig weniger Wasser","Immer mehr Wasser","Immer weniger Wasser","Keine Veränderung"], a: 0 }
    ],
    rf: [
      { s: "Auch in grösseren Höhen fällt heute häufiger Regen statt Schnee.", a: true },
      { s: "Der Gletscherverlust lässt sich laut Text vollständig verhindern.", a: false, x: "Ein Teil ist nicht mehr aufzuhalten, weil das Eis verzögert reagiert." },
      { s: "Schwindender Permafrost erhöht das Risiko für Felsstürze.", a: true },
      { s: "Die Schweiz verursacht einen grossen Teil der weltweiten Emissionen.", a: false, x: "Sie verursacht nur einen kleinen Teil der weltweiten Emissionen." }
    ],
    offen: [
      { q: "Erkläre den Zusammenhang zwischen Treibhausgasen und dem Gletscherschwund in einer kurzen Ursache-Wirkungs-Kette.", l: "Treibhausgase (z. B. CO₂) → Erwärmung der Atmosphäre → längere, wärmere Sommer, mehr Regen statt Schnee → mehr Schmelzen als Zuwachs → Gletscher schrumpfen (verstärkt durch weniger Reflexion)." },
      { q: "Welche Folgen hat der Gletscherschwund für Menschen ausserhalb der Berggebiete? Nenne mindestens drei.", l: "Tiefere Wasserstände in trockenen Sommern: Probleme für Landwirtschaft, Ökosysteme, Schifffahrt und Stromproduktion aus Wasserkraft." },
      { q: "Die Schweiz verursacht nur einen kleinen Teil der weltweiten Emissionen. Soll sie trotzdem viel für den Klimaschutz tun? Nimm Stellung (mindestens fünf Sätze).", l: "Individuelle Stellungnahme mit Argumenten (z. B. Vorbildrolle, eigene Betroffenheit durch Gletscherschwund, Pro-Kopf-Ausstoss, wirtschaftliche Kosten) und begründetem Fazit." }
    ] }
},
"dl-tell": {
  2: { vor: "Warum erzählen Länder Heldengeschichten?",
    dauer: "ca. 220 Wörter", text: "Fast jedes Kind in der Schweiz kennt die Geschichte von Wilhelm Tell. Sie spielt der Überlieferung nach im Jahr 1307 im Kanton Uri. Damals wurde die Region von Vögten im Auftrag der Habsburger verwaltet. Einer von ihnen, Hermann Gessler, galt als besonders streng und ungerecht.\n\nIn Altdorf liess Gessler seinen Hut auf eine Stange stecken und befahl, dass alle Vorbeigehenden sich davor verbeugen mussten. Der Jäger Wilhelm Tell weigerte sich. Zur Strafe zwang Gessler ihn, mit seiner Armbrust einen Apfel vom Kopf seines Sohnes Walter zu schiessen. Tell traf den Apfel. Doch er hatte einen zweiten Pfeil bereitgehalten, und als Gessler fragte, wofür, antwortete Tell, dieser wäre für den Vogt gewesen, falls er sein Kind verletzt hätte. Später tötete Tell Gessler in der Hohlen Gasse bei Küssnacht. Die Geschichte wurde damit zu einem Symbol für den Widerstand gegen fremde Herrschaft.\n\nHat Tell wirklich gelebt? Die meisten Historikerinnen und Historiker bezweifeln es. Es gibt keine Dokumente aus jener Zeit, die ihn erwähnen. Die Geschichte wurde erst rund 150 Jahre später aufgeschrieben. Zudem existiert eine sehr ähnliche Erzählung aus Skandinavien, die noch älter ist.\n\nTrotzdem spielt Tell bis heute eine wichtige Rolle. Der deutsche Dichter Friedrich Schiller machte ihn 1804 mit seinem Theaterstück «Wilhelm Tell» weltberühmt. In Altdorf steht ein grosses Denkmal, und Tells Figur erscheint auf Briefmarken, Münzen und in der Werbung.",
    wort: [["die Überlieferung","was von früheren Generationen weitererzählt wurde"],["der Vogt","Beamter, der ein Gebiet für einen Herrscher verwaltete"],["sich weigern","etwas nicht tun wollen"],["die Armbrust","alte Schusswaffe für Pfeile (Bolzen)"],["der Widerstand","sich gegen etwas wehren"],["bezweifeln","nicht glauben, dass etwas stimmt"]],
    mc: [
      { q: "In wessen Auftrag verwalteten die Vögte die Region?", o: ["Im Auftrag der Habsburger","Im Auftrag der Römer","Im Auftrag des Papstes","Im Auftrag des Kantons Zürich"], a: 0 },
      { q: "Wofür war Tells zweiter Pfeil laut der Geschichte gedacht?", o: ["Für einen zweiten Apfel","Für Gessler, falls Tell sein Kind verletzt hätte","Für die Jagd","Für den Hut auf der Stange"], a: 1 },
      { q: "Wofür wurde die Tell-Geschichte zum Symbol?", o: ["Für gute Jagd","Für den Widerstand gegen fremde Herrschaft","Für Obstanbau","Für Freundschaft mit den Habsburgern"], a: 1 },
      { q: "Wann wurde die Geschichte ungefähr aufgeschrieben?", o: ["Im Jahr 1307","Rund 150 Jahre später","Im 20. Jahrhundert","Gar nie"], a: 1 }
    ],
    rf: [
      { s: "Gessler tötete Tell in der Hohlen Gasse.", a: false, x: "Tell tötete Gessler in der Hohlen Gasse bei Küssnacht." },
      { s: "Es gibt eine ähnliche, ältere Geschichte aus Skandinavien.", a: true },
      { s: "Schiller schrieb 1804 ein Theaterstück über Tell.", a: true }
    ],
    offen: [
      { q: "Fasse die Tell-Geschichte in vier bis fünf Sätzen zusammen.", l: "Gessler verlangt, dass man sich vor seinem Hut verbeugt. Tell weigert sich und muss einen Apfel vom Kopf seines Sohnes schiessen. Er trifft, sagt aber, der zweite Pfeil wäre für Gessler gewesen. Später tötet Tell Gessler in der Hohlen Gasse. Die Geschichte wird zum Symbol für Widerstand." },
      { q: "Warum ist Tell wichtig, auch wenn er vielleicht nie gelebt hat? Erkläre.", l: "Er ist ein Symbol für Freiheit, Mut und Widerstand, mit dem sich viele Menschen identifizieren; die Geschichte stiftet Gemeinschaft." }
    ] },
  3: { vor: "Braucht ein Land Mythen, um zusammenzuhalten?",
    dauer: "ca. 340 Wörter", text: "Kaum eine Figur ist so eng mit dem Selbstverständnis der Schweiz verbunden wie Wilhelm Tell. Die Geschichte ist schnell erzählt: Im Jahr 1307 soll der habsburgische Vogt Hermann Gessler in Altdorf seinen Hut auf eine Stange gesteckt und verlangt haben, dass jeder Vorbeigehende ihn grüsse. Der Jäger Tell verweigerte den Gruss und wurde gezwungen, mit der Armbrust einen Apfel vom Kopf seines Sohnes zu schiessen. Nach dem gelungenen Schuss gestand er, dass der zweite Pfeil für den Vogt bestimmt gewesen wäre, wurde gefangen genommen, konnte fliehen und tötete Gessler schliesslich in der Hohlen Gasse bei Küssnacht. In vielen Darstellungen wird diese Tat mit dem Rütlischwur und der Entstehung der Eidgenossenschaft verknüpft.\n\nDie historische Forschung betrachtet die Erzählung jedoch skeptisch. Es existieren keine zeitgenössischen Quellen, die einen Wilhelm Tell oder einen Vogt Gessler erwähnen. Die ältesten schriftlichen Fassungen stammen aus dem späten 15. Jahrhundert, also rund 150 Jahre nach den angeblichen Ereignissen. Zudem weisen Fachleute darauf hin, dass das Motiv des Apfelschusses in älteren Sagen aus Skandinavien vorkommt, etwa in der Geschichte des Schützen Toko, die bereits um 1200 aufgeschrieben wurde. Vieles spricht also dafür, dass es sich bei Tell um eine Sagenfigur handelt, in der wandernde Erzählmotive mit lokalen Erinnerungen an Konflikte verschmolzen sind.\n\nDass Tell dennoch zur Nationalfigur wurde, hat mit späteren Entwicklungen zu tun. Friedrich Schillers Drama «Wilhelm Tell» von 1804 machte den Stoff in ganz Europa bekannt und präsentierte Tell als Kämpfer für Freiheit und gegen Tyrannei. Im 19. Jahrhundert, als sich die moderne Schweiz als Bundesstaat bildete, suchte man nach gemeinsamen Symbolen, die über die Grenzen von Sprache, Religion und Kanton hinweg verbinden konnten. Tell eignete sich dafür hervorragend. Das Telldenkmal in Altdorf, das 1895 eingeweiht wurde, ist ein Ausdruck dieses Bedürfnisses.\n\nDie Figur wurde im Lauf der Zeit für sehr unterschiedliche Zwecke verwendet: als Symbol für Unabhängigkeit, für Widerstand gegen Unterdrückung, aber auch in politischen Kampagnen und in der Werbung. Historikerinnen und Historiker betonen deshalb, dass Mythen weniger darüber verraten, was tatsächlich geschehen ist, als darüber, welche Werte und Vorstellungen eine Gesellschaft zu einer bestimmten Zeit wichtig fand.",
    wort: [["das Selbstverständnis","wie man sich selbst sieht und versteht"],["verknüpfen","miteinander verbinden"],["skeptisch","zweifelnd, kritisch"],["zeitgenössisch","aus derselben Zeit stammend"],["das Motiv","hier: ein wiederkehrendes Element in Geschichten"],["die Tyrannei","grausame, ungerechte Herrschaft"],["der Mythos (Mythen)","eine Erzählung, die für eine Gemeinschaft wichtige Bedeutung hat"]],
    mc: [
      { q: "Warum betrachtet die Forschung die Tell-Geschichte skeptisch?", o: ["Weil Tell zu jung war","Weil es keine zeitgenössischen Quellen gibt und das Motiv aus älteren Sagen bekannt ist","Weil die Armbrust damals nicht existierte","Weil Altdorf damals nicht existierte"], a: 1 },
      { q: "Was ist laut Text die wahrscheinliche Entstehung der Figur Tell?", o: ["Ein echter Bericht eines Augenzeugen","Eine Sagenfigur aus wandernden Erzählmotiven und lokalen Erinnerungen","Eine Erfindung von Schiller","Ein Theaterstück aus dem 21. Jahrhundert"], a: 1 },
      { q: "Warum eignete sich Tell im 19. Jahrhundert besonders als Nationalfigur?", o: ["Weil er reich war","Weil man gemeinsame Symbole suchte, die über Sprache, Religion und Kanton hinweg verbinden","Weil er aus Zürich kam","Weil er ein König war"], a: 1 },
      { q: "Was verraten Mythen laut Historikern vor allem?", o: ["Was genau geschehen ist","Welche Werte und Vorstellungen eine Gesellschaft zu einer Zeit wichtig fand","Wie man eine Armbrust baut","Wann die Schweiz gegründet wurde"], a: 1 }
    ],
    rf: [
      { s: "Die ältesten schriftlichen Fassungen stammen aus dem späten 15. Jahrhundert.", a: true },
      { s: "Die Geschichte des Schützen Toko wurde bereits um 1200 aufgeschrieben.", a: true },
      { s: "Das Telldenkmal in Altdorf wurde 1307 eingeweiht.", a: false, x: "Es wurde 1895 eingeweiht." },
      { s: "Tell wurde auch in der Werbung und in politischen Kampagnen verwendet.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum die moderne Schweiz im 19. Jahrhundert gemeinsame Symbole brauchte.", l: "Der neue Bundesstaat vereinte Menschen verschiedener Sprachen, Religionen und Kantone. Gemeinsame Symbole wie Tell sollten Zusammengehörigkeit schaffen." },
      { q: "Der Text sagt, Mythen verraten mehr über Werte als über Fakten. Erkläre diese Aussage am Beispiel Tell.", l: "Ob Tell gelebt hat, ist unsicher. Aber die Geschichte zeigt, dass Werte wie Freiheit, Mut, Unabhängigkeit und Widerstand gegen Unterdrückung für die Schweiz wichtig waren und sind." },
      { q: "Brauchen Länder Heldengeschichten wie Tell? Nimm Stellung und nenne ein Beispiel aus einem anderen Land (mindestens fünf Sätze).", l: "Individuelle Stellungnahme mit Argumenten (Identität, Zusammenhalt vs. Verklärung, Ausgrenzung) und einem Beispiel, z. B. Skanderbeg, Jeanne d'Arc, Robin Hood." }
    ] }
},
"dl-gotthard": {
  2: { vor: "Warum baut man so lange Tunnel, statt über die Berge zu fahren?",
    dauer: "ca. 220 Wörter", text: "Die Alpen trennen die Deutschschweiz vom Tessin und von Italien. Jahrhundertelang war der Weg über den Gotthardpass mühsam und gefährlich, besonders im Winter. 1882 wurde deshalb der erste Eisenbahntunnel am Gotthard eröffnet. Er ist etwa 15 Kilometer lang und liegt hoch im Berg, weshalb die Züge auf beiden Seiten lange, steile Rampen hinauffahren müssen.\n\n2016 wurde der Gotthard-Basistunnel eröffnet. Mit 57 Kilometern ist er der längste Eisenbahntunnel der Welt. Er heisst Basistunnel, weil er tief unten an der Basis des Gebirges verläuft. Dadurch ist die Strecke fast flach, und schwere Güterzüge können ohne zusätzliche Lokomotiven fahren. Personenzüge erreichen im Tunnel Geschwindigkeiten von bis zu 200 Kilometern pro Stunde.\n\nDer Bau dauerte 17 Jahre. Riesige Tunnelbohrmaschinen, die so lang waren wie vier Fussballfelder, frästen sich durch das Gestein. An einigen Stellen liegt über dem Tunnel mehr als 2000 Meter Fels, und die Temperatur im Berg erreichte bis zu 45 Grad. Tausende Arbeiter aus vielen Ländern waren beteiligt. Neun von ihnen verloren bei Unfällen ihr Leben.\n\nDer Tunnel ist Teil der Neuen Eisenbahn-Alpentransversale, kurz NEAT. Ihr Ziel ist es, mehr Güter auf die Schiene zu verlagern. Das Schweizer Stimmvolk hatte zuvor in Abstimmungen beschlossen, die Alpen vor dem zunehmenden Lastwagenverkehr zu schützen. Ein Güterzug kann die Ladung vieler Lastwagen ersetzen und verursacht dabei deutlich weniger Abgase.",
    wort: [["mühsam","anstrengend, schwierig"],["die Rampe","schräge, ansteigende Strecke"],["die Lokomotive","Fahrzeug, das einen Zug zieht"],["fräsen","Material mit rotierenden Werkzeugen abtragen"],["verlagern","von einem Ort an einen anderen bringen"],["die Abgase","Gase, die beim Verbrennen entstehen, z. B. bei Motoren"]],
    mc: [
      { q: "Warum mussten Züge beim alten Gotthardtunnel lange Rampen hinauffahren?", o: ["Weil der Tunnel hoch im Berg liegt","Weil die Züge zu schwer waren","Weil der Tunnel zu kurz war","Weil es keine Schienen gab"], a: 0 },
      { q: "Welchen Vorteil hat die fast flache Strecke des Basistunnels?", o: ["Schwere Güterzüge brauchen keine zusätzlichen Lokomotiven","Man sieht die Berge besser","Die Züge fahren langsamer","Es braucht weniger Personal"], a: 0 },
      { q: "Wie heiss wurde es im Berg beim Bau?", o: ["Bis zu 15 Grad","Bis zu 45 Grad","Bis zu 100 Grad","Es war kalt"], a: 1 },
      { q: "Was ist das Ziel der NEAT?", o: ["Mehr Lastwagen über die Alpen","Mehr Güter auf die Schiene verlagern","Neue Skigebiete bauen","Den Gotthardpass schliessen"], a: 1 }
    ],
    rf: [
      { s: "Der Gotthard-Basistunnel ist der längste Eisenbahntunnel der Welt.", a: true },
      { s: "Personenzüge fahren im Tunnel bis zu 200 km/h.", a: true },
      { s: "Das Stimmvolk war gegen den Schutz der Alpen vor Lastwagenverkehr.", a: false, x: "Es hatte beschlossen, die Alpen vor dem Lastwagenverkehr zu schützen." }
    ],
    offen: [
      { q: "Vergleiche den alten Gotthardtunnel mit dem Basistunnel. Nenne mindestens drei Unterschiede.", l: "Alter Tunnel: 1882, ca. 15 km, hoch im Berg, steile Rampen. Basistunnel: 2016, 57 km, tief an der Basis, fast flach, schneller, schwere Güterzüge ohne Zusatzlok." },
      { q: "Warum ist es für die Umwelt besser, Güter mit dem Zug statt mit Lastwagen zu transportieren?", l: "Ein Güterzug ersetzt viele Lastwagen und verursacht deutlich weniger Abgase; weniger Verkehr auf den Strassen in den Alpen." }
    ] },
  3: { vor: "Lohnt sich ein Bauprojekt, das Milliarden kostet und viele Jahre dauert?",
    dauer: "ca. 340 Wörter", text: "Seit Jahrhunderten ist der Gotthard eine der wichtigsten Nord-Süd-Verbindungen Europas. Wer früher die Alpen überqueren wollte, musste den beschwerlichen Weg über den Pass auf sich nehmen. Mit dem ersten Gotthard-Eisenbahntunnel, der 1882 eröffnet wurde, begann ein neues Zeitalter. Der Bau dieses rund 15 Kilometer langen Scheiteltunnels forderte allerdings einen hohen Preis: Bei katastrophalen Arbeitsbedingungen kamen damals etwa 200 Arbeiter ums Leben, viele von ihnen Italiener.\n\nIm 20. Jahrhundert stiess die Strecke an ihre Grenzen. Der Güterverkehr durch die Alpen nahm massiv zu, und ein grosser Teil davon rollte auf der Strasse. Lärm und Abgase belasteten die Bergtäler. 1994 nahm das Schweizer Stimmvolk die sogenannte Alpen-Initiative an, die verlangt, den alpenquerenden Güterverkehr von der Strasse auf die Schiene zu verlagern. Ein zentrales Instrument dafür ist die Neue Eisenbahn-Alpentransversale (NEAT), zu der auch der Lötschberg- und der Ceneri-Basistunnel gehören.\n\nHerzstück der NEAT ist der Gotthard-Basistunnel, der 2016 eröffnet wurde. Mit 57 Kilometern ist er der längste Eisenbahntunnel der Welt. Weil er tief an der Basis des Gebirges verläuft, liegt sein höchster Punkt nur wenig über 500 Metern über Meer. So entsteht eine Flachbahn durch die Alpen, auf der schwere Güterzüge ohne zusätzliche Lokomotiven verkehren und Personenzüge mit bis zu 200 Kilometern pro Stunde fahren können. Beim Bau mussten die Ingenieure enorme Herausforderungen bewältigen: über 2000 Meter Gesteinsüberdeckung, Temperaturen von bis zu 45 Grad im Fels und schwierige geologische Zonen, in denen das Gestein brüchig war. Neun Arbeiter kamen ums Leben, was im Vergleich zum ersten Tunnel zeigt, wie stark sich die Sicherheit verbessert hat, aber dennoch ein schmerzlicher Verlust bleibt.\n\nDie Kosten der gesamten NEAT beliefen sich auf über 20 Milliarden Franken. Ob sich diese Investition gelohnt hat, wird unterschiedlich beurteilt. Befürworter verweisen auf kürzere Reisezeiten, mehr Kapazität und den Schutz der Alpen. Kritiker bemängeln, dass das Verlagerungsziel noch nicht erreicht sei, weil weiterhin sehr viele Lastwagen die Alpen durchqueren, und dass in den Nachbarländern die Zufahrtsstrecken nur langsam ausgebaut würden. Unbestritten ist hingegen, dass der Tunnel als technische Meisterleistung weltweit Beachtung gefunden hat.",
    wort: [["beschwerlich","mühsam, anstrengend"],["der Scheiteltunnel","Tunnel, der hoch oben durch den Berg führt"],["alpenquerend","durch die Alpen hindurchführend"],["die Gesteinsüberdeckung","wie viel Fels über dem Tunnel liegt"],["brüchig","leicht zerbrechend, nicht fest"],["die Kapazität","wie viel etwas aufnehmen oder leisten kann"],["die Investition","Geld, das man für etwas ausgibt, damit es später Nutzen bringt"]],
    mc: [
      { q: "Was zeigt der Vergleich der Todesopfer beim ersten Tunnel und beim Basistunnel?", o: ["Dass der Basistunnel gefährlicher war","Dass sich die Sicherheit stark verbessert hat","Dass beide gleich gefährlich waren","Dass beim Basistunnel niemand gestorben ist"], a: 1 },
      { q: "Was verlangt die Alpen-Initiative von 1994?", o: ["Den Bau neuer Autobahnen","Die Verlagerung des alpenquerenden Güterverkehrs von der Strasse auf die Schiene","Die Schliessung aller Tunnel","Mehr Skigebiete"], a: 1 },
      { q: "Warum spricht man beim Basistunnel von einer «Flachbahn»?", o: ["Weil der Tunnel sehr breit ist","Weil er tief an der Basis verläuft und kaum Steigungen hat","Weil die Züge flach sind","Weil er unter einem See liegt"], a: 1 },
      { q: "Was kritisieren Kritiker der NEAT?", o: ["Dass die Züge zu schnell sind","Dass das Verlagerungsziel noch nicht erreicht ist und Zufahrten im Ausland langsam ausgebaut werden","Dass der Tunnel zu kurz ist","Dass es zu wenig Arbeiter gab"], a: 1 }
    ],
    rf: [
      { s: "Beim ersten Gotthardtunnel starben etwa 200 Arbeiter.", a: true },
      { s: "Zur NEAT gehören auch der Lötschberg- und der Ceneri-Basistunnel.", a: true },
      { s: "Die NEAT kostete weniger als eine Milliarde Franken.", a: false, x: "Die Kosten beliefen sich auf über 20 Milliarden Franken." },
      { s: "Der höchste Punkt des Basistunnels liegt auf über 2000 Metern über Meer.", a: false, x: "Er liegt nur wenig über 500 Metern über Meer; 2000 Meter ist die Gesteinsüberdeckung." }
    ],
    offen: [
      { q: "Erkläre den Zusammenhang zwischen der Alpen-Initiative und dem Bau des Basistunnels.", l: "Die Alpen-Initiative verlangt die Verlagerung des Güterverkehrs auf die Schiene. Dafür braucht es leistungsfähige Bahnstrecken; die NEAT mit dem Gotthard-Basistunnel ist das zentrale Instrument dazu." },
      { q: "Nenne die technischen Herausforderungen beim Bau und erkläre, warum sie schwierig waren.", l: "Über 2000 m Gesteinsüberdeckung (hoher Druck), Temperaturen bis 45 Grad (Hitze für Menschen und Maschinen), brüchiges Gestein in geologischen Störzonen (Einsturzgefahr)." },
      { q: "Hat sich die Investition von über 20 Milliarden Franken gelohnt? Nimm mit Argumenten aus dem Text Stellung (mindestens fünf Sätze).", l: "Individuelle Erörterung: Pro (Reisezeit, Kapazität, Alpenschutz, technische Meisterleistung) und Contra (Ziel nicht erreicht, Kosten, Zufahrten im Ausland), begründetes Fazit." }
    ] }
},
"dl-bienen": {
  2: { vor: "Welche Lebensmittel gäbe es ohne Bienen nicht mehr?",
    dauer: "ca. 230 Wörter", text: "Ein Bienenvolk ist eine gut organisierte Gemeinschaft. Im Sommer leben in einem Stock bis zu 50 000 Honigbienen. Die Königin ist die einzige Biene, die Eier legt, in der Hochsaison über tausend pro Tag. Die männlichen Bienen, die Drohnen, sind nur für die Fortpflanzung zuständig. Die meiste Arbeit erledigen die Arbeiterinnen: Sie putzen den Stock, füttern die Larven, bauen Waben aus Wachs, bewachen den Eingang und sammeln Nektar und Pollen.\n\nWenn eine Sammlerin eine ergiebige Blumenwiese gefunden hat, teilt sie dies den anderen mit einem Tanz mit. Mit dem sogenannten Schwänzeltanz zeigt sie Richtung und Entfernung der Futterquelle. Aus dem gesammelten Nektar stellen die Bienen Honig her, der ihnen im Winter als Vorrat dient.\n\nNoch wichtiger als der Honig ist jedoch die Bestäubung. Beim Besuch einer Blüte bleibt Pollen am Körper der Biene hängen, den sie zur nächsten Blüte trägt. So werden die Pflanzen befruchtet und können Früchte und Samen bilden. Ein grosser Teil unserer Nutzpflanzen ist auf die Bestäubung durch Insekten angewiesen, etwa Äpfel, Kirschen, Erdbeeren oder Raps. Neben den Honigbienen leisten auch Wildbienen, Hummeln und andere Insekten diese Arbeit.\n\nVielen Bienen geht es heute schlecht. Blumenreiche Wiesen werden seltener, manche Pflanzenschutzmittel schaden den Insekten, und die Varroamilbe schwächt die Honigbienenvölker. Jede und jeder kann helfen: mit einheimischen Blumen auf dem Balkon, mit Wiesen, die seltener gemäht werden, oder mit dem Kauf von regionalem Honig.",
    wort: [["das Bienenvolk","alle Bienen, die zusammen in einem Stock leben"],["die Larve","junges Insekt, das sich noch entwickelt"],["ergiebig","mit viel Ertrag, viel Futter"],["die Bestäubung","Blütenstaub (Pollen) kommt zu einer anderen Blüte"],["die Nutzpflanze","Pflanze, die der Mensch anbaut und nutzt"],["einheimisch","aus der eigenen Region stammend"]],
    mc: [
      { q: "Welche Aufgabe haben die Drohnen?", o: ["Honig sammeln","Die Fortpflanzung","Den Stock putzen","Eier legen"], a: 1 },
      { q: "Was teilt eine Biene mit dem Schwänzeltanz mit?", o: ["Dass sie müde ist","Richtung und Entfernung einer Futterquelle","Dass eine Gefahr droht","Dass die Königin krank ist"], a: 1 },
      { q: "Was passiert bei der Bestäubung?", o: ["Die Biene trägt Pollen von Blüte zu Blüte, sodass Pflanzen Früchte bilden können","Die Biene frisst die Blüte","Die Biene legt Eier in die Blüte","Die Biene macht Wachs"], a: 0 },
      { q: "Welche Hilfe für Bienen wird im Text genannt?", o: ["Mehr Pflanzenschutzmittel","Einheimische Blumen auf dem Balkon","Wiesen öfter mähen","Bienenstöcke zerstören"], a: 1 }
    ],
    rf: [
      { s: "Die Königin ist die einzige Biene, die Eier legt.", a: true },
      { s: "Nur Honigbienen bestäuben Pflanzen.", a: false, x: "Auch Wildbienen, Hummeln und andere Insekten bestäuben." },
      { s: "Die Varroamilbe schwächt die Honigbienenvölker.", a: true }
    ],
    offen: [
      { q: "Beschreibe die Aufgaben der drei Bienentypen (Königin, Drohnen, Arbeiterinnen).", l: "Königin: legt Eier. Drohnen: Fortpflanzung. Arbeiterinnen: putzen, füttern Larven, bauen Waben, bewachen, sammeln Nektar und Pollen." },
      { q: "Warum ist die Bestäubung für uns Menschen wichtiger als der Honig? Erkläre.", l: "Ohne Bestäubung könnten viele Nutzpflanzen keine Früchte bilden; wir hätten viel weniger Obst und Gemüse. Honig ist dagegen nur ein Nebenprodukt." }
    ] },
  3: { vor: "Wie hängen Landwirtschaft, Natur und Ernährung zusammen?",
    dauer: "ca. 310 Wörter", text: "Bienen gelten als Symbol für Fleiss und Gemeinschaft, doch ihre wahre Bedeutung wird oft unterschätzt. Weltweit ist ein beträchtlicher Teil der Nahrungspflanzen ganz oder teilweise auf die Bestäubung durch Tiere angewiesen, vor allem durch Insekten. Ohne diese Arbeit würden bei vielen Obst- und Gemüsesorten die Erträge stark sinken, und Lebensmittel wie Äpfel, Kirschen, Mandeln oder Kürbisse würden knapper und teurer. Der wirtschaftliche Wert der Bestäubung wird auf viele Milliarden geschätzt.\n\nDabei leisten nicht nur die Honigbienen diese Arbeit. In der Schweiz leben über 600 Wildbienenarten, von der Hummel bis zur kleinen Sandbiene, die einzeln im Boden nistet. Viele von ihnen sind auf ganz bestimmte Pflanzen spezialisiert und bestäuben diese effizienter als Honigbienen. Gerade die Vielfalt der Bestäuber sorgt dafür, dass Ökosysteme stabil bleiben, auch wenn eine Art ausfällt.\n\nGenau diese Vielfalt ist jedoch bedroht. Fachleute nennen mehrere Ursachen, die zusammenwirken. Erstens verschwinden durch intensive Landwirtschaft und Bautätigkeit artenreiche Wiesen, Hecken und Brachflächen, die Nahrung und Nistplätze bieten. Zweitens können bestimmte Pflanzenschutzmittel die Insekten schädigen, selbst in geringen Mengen, indem sie etwa ihre Orientierung beeinträchtigen. Drittens leiden Honigbienen unter Krankheiten und Parasiten, insbesondere unter der Varroamilbe, die ursprünglich aus Asien eingeschleppt wurde. Hinzu kommt der Klimawandel, der dazu führen kann, dass Blütezeiten und Flugzeiten der Insekten nicht mehr zusammenpassen.\n\nAuf politischer Ebene wurden deshalb verschiedene Massnahmen ergriffen. Einige besonders problematische Pflanzenschutzmittel wurden eingeschränkt oder verboten, und Landwirtinnen und Landwirte erhalten Beiträge, wenn sie Biodiversitätsflächen anlegen. Gleichzeitig weisen Fachleute darauf hin, dass auch private Gärten eine Rolle spielen. Ein kurz geschorener Rasen bietet Insekten kaum Nahrung, während eine Wildblumenwiese, ein Kräuterbeet oder ein Nisthilfe-Hotel wertvolle Lebensräume schaffen.\n\nInteressanterweise kann gut gemeinter Bienenschutz auch Nachteile haben. Wenn in Städten sehr viele Honigbienenvölker gehalten werden, konkurrieren sie mit den Wildbienen um die knappen Blüten. Wer Bienen helfen will, sollte deshalb vor allem für mehr Blütenvielfalt sorgen, statt nur zusätzliche Bienenstöcke aufzustellen.",
    wort: [["der Ertrag","was man bei der Ernte bekommt"],["nisten","ein Nest bauen und darin wohnen"],["spezialisiert","auf etwas Bestimmtes ausgerichtet"],["effizient","wirksam, mit wenig Aufwand viel erreichend"],["die Brachfläche","Land, das nicht bebaut oder bewirtschaftet wird"],["die Biodiversität","die Vielfalt der Lebewesen"],["konkurrieren","um dasselbe kämpfen"]],
    mc: [
      { q: "Was würde laut Text ohne Bestäubung passieren?", o: ["Die Erträge vieler Obst- und Gemüsesorten würden stark sinken","Es gäbe mehr Honig","Die Pflanzen würden schneller wachsen","Nichts würde sich ändern"], a: 0 },
      { q: "Warum ist die Vielfalt der Bestäuber wichtig?", o: ["Weil sie Ökosysteme stabil hält, auch wenn eine Art ausfällt","Weil Wildbienen Honig machen","Weil Honigbienen dann mehr arbeiten","Weil es gesetzlich verlangt ist"], a: 0 },
      { q: "Welches Problem kann der Klimawandel verursachen?", o: ["Bienen werden grösser","Blütezeiten und Flugzeiten der Insekten passen nicht mehr zusammen","Es gibt mehr Wiesen","Die Varroamilbe verschwindet"], a: 1 },
      { q: "Warum kann das Aufstellen vieler Bienenstöcke in Städten problematisch sein?", o: ["Weil Honigbienen dann mit Wildbienen um knappe Blüten konkurrieren","Weil Bienenstöcke verboten sind","Weil die Bienen zu viel Lärm machen","Weil es zu kalt ist"], a: 0 }
    ],
    rf: [
      { s: "In der Schweiz leben über 600 Wildbienenarten.", a: true },
      { s: "Die Varroamilbe stammt ursprünglich aus Asien.", a: true },
      { s: "Ein kurz geschorener Rasen bietet Insekten viel Nahrung.", a: false, x: "Er bietet kaum Nahrung; Wildblumenwiesen sind viel wertvoller." },
      { s: "Pflanzenschutzmittel schaden Insekten nur in grossen Mengen.", a: false, x: "Manche schaden schon in geringen Mengen, z. B. ihrer Orientierung." }
    ],
    offen: [
      { q: "Nenne die vier Ursachen für den Rückgang der Bestäuber, die der Text beschreibt, und erkläre eine davon genauer.", l: "Verlust von Lebensräumen (Wiesen, Hecken), Pflanzenschutzmittel, Krankheiten/Parasiten (Varroamilbe), Klimawandel – eine davon ausführlicher erklärt." },
      { q: "Erkläre, warum «gut gemeinter Bienenschutz» auch Nachteile haben kann.", l: "Viele Honigbienenvölker in Städten nehmen den Wildbienen die knappen Blüten weg. Besser ist es, für mehr Blütenvielfalt zu sorgen." },
      { q: "Entwickle einen Plan, wie deine Schule oder Gemeinde mehr für Bestäuber tun könnte. Begründe mindestens drei Massnahmen.", l: "Individueller Plan, z. B. Wildblumenwiese, Kräuterbeet, Nisthilfen, weniger mähen, keine Pflanzenschutzmittel – jeweils begründet." }
    ] }
},
"dl-schlaf": {
  2: { vor: "Wie fühlst du dich, wenn du zu wenig geschlafen hast?",
    dauer: "ca. 210 Wörter", text: "Der Wecker klingelt um halb sieben, und Mergim möchte am liebsten liegen bleiben. Am Abend konnte er lange nicht einschlafen und hat bis Mitternacht Videos geschaut. So wie ihm geht es vielen Jugendlichen.\n\nDas liegt nicht einfach an Faulheit, sondern hat biologische Gründe. In der Pubertät verschiebt sich die innere Uhr nach hinten. Der Körper schüttet das Schlafhormon Melatonin später am Abend aus als bei Kindern oder Erwachsenen. Jugendliche werden deshalb oft erst spät müde, müssen aber trotzdem früh aufstehen. Dadurch entsteht ein Schlafmangel, den manche Fachleute als «sozialen Jetlag» bezeichnen.\n\nDabei brauchen Jugendliche viel Schlaf: Empfohlen werden acht bis zehn Stunden pro Nacht. Im Schlaf erholt sich der Körper, das Immunsystem wird gestärkt, und das Gehirn verarbeitet und speichert das Gelernte. Wer dauerhaft zu wenig schläft, kann sich schlechter konzentrieren, ist schneller gereizt, wird häufiger krank und hat manchmal mehr Hunger auf Süsses.\n\nWas hilft? Das helle, bläuliche Licht von Bildschirmen hemmt die Ausschüttung von Melatonin. Deshalb ist es sinnvoll, das Handy etwa eine Stunde vor dem Schlafen wegzulegen, am besten ausserhalb des Schlafzimmers. Auch regelmässige Schlafzeiten helfen, sogar am Wochenende, damit sich die innere Uhr nicht zu stark verschiebt. Koffeinhaltige Getränke wie Energydrinks oder Cola sollte man am Abend meiden. Tagsüber dagegen tun viel Tageslicht und Bewegung an der frischen Luft gut.",
    wort: [["die innere Uhr","der natürliche Tagesrhythmus des Körpers"],["ausschütten","hier: ein Hormon ins Blut abgeben"],["das Immunsystem","Abwehrsystem des Körpers gegen Krankheiten"],["dauerhaft","über lange Zeit"],["hemmen","bremsen, behindern"],["koffeinhaltig","mit Koffein, einem Stoff, der wach macht"]],
    mc: [
      { q: "Was passiert in der Pubertät mit der inneren Uhr?", o: ["Sie bleibt stehen","Sie verschiebt sich nach hinten","Sie läuft schneller","Sie verschwindet"], a: 1 },
      { q: "Was bezeichnen manche Fachleute als «sozialen Jetlag»?", o: ["Müdigkeit nach einer Flugreise","Schlafmangel, weil Jugendliche spät müde werden, aber früh aufstehen müssen","Zu viele Partys","Zeitverschiebung im Ausland"], a: 1 },
      { q: "Was passiert im Schlaf mit dem Gelernten?", o: ["Es wird vergessen","Das Gehirn verarbeitet und speichert es","Es wird doppelt so schwer","Nichts"], a: 1 },
      { q: "Warum soll man das Handy vor dem Schlafen weglegen?", o: ["Weil der Akku sonst leer wird","Weil das bläuliche Licht die Ausschüttung von Melatonin hemmt","Weil es zu laut ist","Weil die Eltern es wollen"], a: 1 }
    ],
    rf: [
      { s: "Jugendlichen werden acht bis zehn Stunden Schlaf empfohlen.", a: true },
      { s: "Schlafmangel kann zu mehr Hunger auf Süsses führen.", a: true },
      { s: "Am Wochenende soll man möglichst viel länger schlafen als unter der Woche.", a: false, x: "Regelmässige Schlafzeiten, auch am Wochenende, helfen der inneren Uhr." }
    ],
    offen: [
      { q: "Erkläre in zwei bis drei Sätzen, warum Jugendliche abends oft nicht müde sind.", l: "In der Pubertät verschiebt sich die innere Uhr. Das Schlafhormon Melatonin wird später ausgeschüttet, deshalb werden Jugendliche erst spät müde." },
      { q: "Schreibe für Mergim drei konkrete Tipps für einen besseren Schlaf und begründe sie kurz.", l: "Handy eine Stunde vorher weglegen (Licht hemmt Melatonin), feste Schlafzeiten (innere Uhr), keine Energydrinks am Abend (Koffein), tagsüber Licht und Bewegung." }
    ] },
  3: { vor: "Sollte die Schule für Jugendliche später beginnen?",
    dauer: "ca. 320 Wörter", text: "Müde Gesichter in der ersten Lektion sind in vielen Schulzimmern ein vertrautes Bild. Oft wird angenommen, Jugendliche seien einfach zu lange am Handy oder unmotiviert. Die Schlafforschung zeichnet jedoch ein differenzierteres Bild: Ein wesentlicher Teil der Müdigkeit hat biologische Ursachen.\n\nDer Schlaf-Wach-Rhythmus des Menschen wird von einer inneren Uhr gesteuert, die sich unter anderem am Tageslicht orientiert. Am Abend schüttet der Körper das Hormon Melatonin aus, das müde macht. In der Pubertät verschiebt sich dieser Rhythmus um bis zu zwei Stunden nach hinten. Jugendliche werden daher natürlicherweise später müde und würden, wenn man sie liesse, auch später aufwachen. Erst im jungen Erwachsenenalter verschiebt sich die innere Uhr allmählich wieder nach vorne.\n\nDieser biologische Rhythmus kollidiert mit gesellschaftlichen Zeitplänen. Wenn der Unterricht um halb acht beginnt, müssen viele Jugendliche gegen ihre innere Uhr aufstehen. Die Folge ist ein chronischer Schlafmangel unter der Woche, den sie am Wochenende mit langem Ausschlafen auszugleichen versuchen. Fachleute sprechen von «sozialem Jetlag», weil der Körper ähnlich reagiert wie nach einer Reise über mehrere Zeitzonen.\n\nSchlafmangel hat weitreichende Folgen. Da das Gehirn im Schlaf Gelerntes festigt, leiden Gedächtnis und Konzentration. Zudem kann zu wenig Schlaf die Stimmung verschlechtern, das Risiko für Unfälle erhöhen und das Immunsystem schwächen. Studien deuten ausserdem auf einen Zusammenhang mit Übergewicht hin, weil Schlafmangel die Hormone beeinflusst, die Hunger und Sättigung steuern.\n\nVerstärkt wird das Problem durch moderne Lebensgewohnheiten. Das bläuliche Licht von Bildschirmen hemmt die Ausschüttung von Melatonin, und spannende Inhalte halten das Gehirn wach. Dazu kommen Koffein aus Energydrinks und unregelmässige Schlafzeiten.\n\nAus diesen Erkenntnissen werden unterschiedliche Schlüsse gezogen. Manche Schulen in verschiedenen Ländern haben den Unterrichtsbeginn für Jugendliche nach hinten verschoben und berichten von ausgeschlafeneren Schülerinnen und Schülern. Andere halten dagegen, dass ein späterer Schulbeginn schwierig zu organisieren sei, etwa wegen Arbeitszeiten der Eltern, Fahrplänen oder Freizeitaktivitäten am Nachmittag. Unbestritten ist, dass jede und jeder selbst etwas tun kann: bildschirmfreie Zeit vor dem Schlafen, regelmässige Zeiten und viel Tageslicht am Morgen.",
    wort: [["differenziert","genau, mit Unterschieden betrachtet"],["der Rhythmus","regelmässiger Ablauf"],["kollidieren","zusammenstossen, nicht zusammenpassen"],["chronisch","dauernd, lange anhaltend"],["festigen","stabil machen, verstärken"],["die Sättigung","das Gefühl, satt zu sein"],["die Erkenntnis","neues Wissen, Einsicht"]],
    mc: [
      { q: "Um wie viel verschiebt sich der Rhythmus in der Pubertät laut Text?", o: ["Um bis zu zwei Stunden nach hinten","Um zehn Minuten nach vorne","Um einen Tag","Gar nicht"], a: 0 },
      { q: "Warum spricht man von «sozialem Jetlag»?", o: ["Weil Jugendliche viel reisen","Weil der Körper ähnlich reagiert wie nach einer Reise über mehrere Zeitzonen","Weil Social Media müde macht","Weil man am Flughafen schläft"], a: 1 },
      { q: "Warum kann Schlafmangel laut Studien mit Übergewicht zusammenhängen?", o: ["Weil man im Schlaf isst","Weil Schlafmangel die Hormone für Hunger und Sättigung beeinflusst","Weil man weniger Wasser trinkt","Weil man mehr Sport macht"], a: 1 },
      { q: "Welches Gegenargument zum späteren Schulbeginn nennt der Text?", o: ["Jugendliche schlafen dann zu viel","Schwierige Organisation wegen Arbeitszeiten der Eltern, Fahrplänen und Freizeitaktivitäten","Lehrpersonen sind dagegen","Es gibt keine Studien"], a: 1 }
    ],
    rf: [
      { s: "Im jungen Erwachsenenalter verschiebt sich die innere Uhr wieder nach vorne.", a: true },
      { s: "Langes Ausschlafen am Wochenende löst das Problem vollständig.", a: false, x: "Es ist ein Versuch, den Schlafmangel auszugleichen, gehört aber zum Problem des sozialen Jetlags." },
      { s: "Spannende Inhalte auf Bildschirmen halten das Gehirn wach.", a: true },
      { s: "Manche Schulen haben den Unterrichtsbeginn für Jugendliche verschoben.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum die Müdigkeit von Jugendlichen nicht einfach mit Faulheit erklärt werden kann.", l: "Die innere Uhr verschiebt sich in der Pubertät biologisch nach hinten (Melatonin später). Jugendliche werden spät müde, müssen aber früh aufstehen – das ist kein Charakterproblem." },
      { q: "Welche Faktoren verstärken laut Text den Schlafmangel zusätzlich? Wie könnte man sie verringern?", l: "Bildschirmlicht, spannende Inhalte, Koffein, unregelmässige Schlafzeiten; Gegenmittel: bildschirmfreie Zeit, kein Koffein am Abend, feste Zeiten, Tageslicht am Morgen." },
      { q: "Soll die Schule für Jugendliche später beginnen? Schreibe eine begründete Stellungnahme mit Argumenten beider Seiten (mindestens fünf Sätze).", l: "Individuelle Erörterung: Pro (Biologie, Konzentration, Gesundheit) und Contra (Organisation, Eltern, Fahrpläne, Nachmittag), begründetes Fazit." }
    ] }
}
});
/* Block b */
Object.assign(window.STUFEN, {
"wt-ronaldo": {
  2: { vor: "Was braucht ein Mensch, um in seinem Beruf ganz an die Spitze zu kommen?",
    dauer: "ca. 270 Wörter", text: "Cristiano Ronaldo wurde am 5. Februar 1985 in Funchal geboren, der Hauptstadt der portugiesischen Insel Madeira. Sein Vater arbeitete als Platzwart bei einem kleinen Fussballclub, seine Mutter als Köchin und Putzfrau. Die Familie lebte in einem einfachen Haus und hatte wenig Geld. Cristiano verbrachte fast jede freie Minute mit dem Ball.\n\nSein Talent fiel früh auf. Mit zwölf Jahren zog er ohne seine Familie nach Lissabon, wo er in der Nachwuchsabteilung von Sporting Lissabon trainierte. Diese Zeit war hart: Er hatte Heimweh, telefonierte weinend mit seiner Mutter, und manche Mitschüler machten sich über seinen Inseldialekt lustig. Mit 15 Jahren stellten Ärzte fest, dass sein Herz zu schnell schlug. Nach einer Operation konnte er schon wenige Tage später wieder trainieren.\n\n2003 spielte Sporting gegen Manchester United. Der 18-jährige Ronaldo war so stark, dass Trainer Alex Ferguson ihn sofort verpflichtete. In England wurde er zum Weltstar und gewann 2008 zum ersten Mal die Champions League. 2009 kaufte ihn Real Madrid für die damalige Rekordsumme von 94 Millionen Euro. Mit Real holte er vier weitere Champions-League-Titel. Danach spielte er bei Juventus Turin, kehrte kurz zu Manchester United zurück und wechselte 2023 zu Al-Nassr nach Saudi-Arabien.\n\nRonaldo hat den Ballon d'Or fünfmal gewonnen. Mit Portugal wurde er 2016 Europameister, und kein anderer Mann hat so viele Länderspieltore erzielt. Er ist ausserdem der erste Spieler, der an fünf verschiedenen Weltmeisterschaften ein Tor geschossen hat.\n\nViele Experten sagen, Ronaldo sei nicht das grösste Naturtalent gewesen. Aber kaum jemand hat so hart gearbeitet wie er. Er trainiert oft länger als seine Mitspieler, achtet streng auf Ernährung und Schlaf und trinkt keinen Alkohol.",
    wort: [["der Platzwart","Person, die einen Sportplatz pflegt"],["die Nachwuchsabteilung","Teil eines Vereins, in dem junge Spieler ausgebildet werden"],["das Heimweh","Traurigkeit, weil man weit weg von zu Hause ist"],["verpflichten","einen Spieler unter Vertrag nehmen"],["die Rekordsumme","so viel Geld, wie noch nie bezahlt wurde"],["das Naturtalent","jemand, der etwas von Geburt an sehr gut kann"]],
    mc: [
      { q: "Was arbeiteten Ronaldos Eltern?", o: ["Sie waren Lehrer","Der Vater war Platzwart, die Mutter Köchin und Putzfrau","Beide waren Fussballprofis","Sie hatten ein eigenes Restaurant"], a: 1 },
      { q: "Warum musste Ronaldo mit 15 Jahren operiert werden?", o: ["Er hatte sich das Bein gebrochen","Sein Herz schlug zu schnell","Er hatte eine Augenverletzung","Er hatte Probleme mit dem Knie"], a: 1 },
      { q: "Wie kam Ronaldo zu Manchester United?", o: ["Er schrieb dem Verein einen Brief","Er spielte in einem Spiel gegen United so stark, dass Ferguson ihn verpflichtete","Sein Vater kannte den Trainer","Er gewann ein Casting"], a: 1 },
      { q: "Was ist laut Experten das Besondere an Ronaldo?", o: ["Er ist das grösste Naturtalent aller Zeiten","Er hat extrem hart gearbeitet","Er hat nie trainiert","Er spielte immer nur für einen Verein"], a: 1 }
    ],
    rf: [
      { s: "Ronaldo gewann seine erste Champions League mit Manchester United.", a: true },
      { s: "Real Madrid bezahlte 2009 für Ronaldo 94 Millionen Euro.", a: true },
      { s: "Ronaldo hat an drei Weltmeisterschaften ein Tor geschossen.", a: false, x: "Er hat als erster Spieler an fünf verschiedenen Weltmeisterschaften getroffen." },
      { s: "In Lissabon hatte Ronaldo oft Heimweh.", a: true }
    ],
    offen: [
      { q: "Beschreibe Ronaldos Weg von Madeira bis nach Saudi-Arabien. Nenne die Vereine in der richtigen Reihenfolge.", l: "Sporting Lissabon – Manchester United – Real Madrid – Juventus Turin – Manchester United – Al-Nassr (Saudi-Arabien)." },
      { q: "Der Text sagt: Ronaldo war vielleicht nicht das grösste Naturtalent. Was ist wichtiger, Talent oder harte Arbeit? Begründe deine Meinung.", l: "Individuelle Antwort mit Begründung, z. B. Talent hilft, aber ohne Training, Disziplin und Durchhaltewillen kommt man nicht an die Spitze." }
    ] },
  3: { vor: "Ist es fair, dass Spitzensportler so viel mehr verdienen als zum Beispiel Pflegefachleute? Was denkst du?",
    dauer: "ca. 320 Wörter", text: "Kaum ein Sportler ist so bekannt wie Cristiano Ronaldo. Auf Instagram folgen ihm mehrere hundert Millionen Menschen, mehr als jeder anderen Person auf der Welt. Doch hinter dem perfekten Bild steckt eine Geschichte, die mit Armut, Heimweh und viel Arbeit begann.\n\nRonaldo wuchs in Funchal auf der Insel Madeira in einfachen Verhältnissen auf. Mit zwölf Jahren verliess er seine Familie, um in Lissabon in der Jugendakademie von Sporting zu trainieren. Er war oft allein, hatte Heimweh und wurde wegen seines Dialekts gehänselt. Als Ärzte bei ihm eine Herzrhythmusstörung entdeckten, drohte seine Karriere zu enden, bevor sie richtig begonnen hatte. Eine Operation löste das Problem. Rückblickend sagt Ronaldo, gerade diese schwierigen Jahre hätten ihn ehrgeizig gemacht.\n\nSein sportlicher Aufstieg ist beispiellos. Bei Manchester United entwickelte er sich vom dribbelnden Flügelspieler zum Torjäger und gewann 2008 die Champions League und seinen ersten Ballon d'Or. Bei Real Madrid erzielte er in neun Jahren über 450 Tore, mehr als jeder andere Spieler in der Geschichte des Vereins, und holte vier weitere Champions-League-Titel. Mit der portugiesischen Nationalmannschaft gewann er 2016 die Europameisterschaft, obwohl er im Final schon früh verletzt ausgewechselt werden musste. Insgesamt hat er in seiner Karriere über 950 Tore geschossen.\n\nNicht alles in Ronaldos Karriere ist unumstritten. Sein Wechsel nach Saudi-Arabien im Jahr 2023 wurde stark diskutiert. Laut Medienberichten verdient er dort rund 200 Millionen Euro pro Jahr. Kritiker werfen Saudi-Arabien vor, mit berühmten Sportlern vom eigenen Ruf abzulenken, denn Menschenrechtsorganisationen kritisieren das Land seit Jahren, unter anderem wegen der Einschränkung der Meinungsfreiheit. Andere sehen den Wechsel nüchtern: Ein Profi dürfe dorthin gehen, wo er am meisten verdient.\n\nUnbestritten ist dagegen Ronaldos Arbeitsmoral. Er gilt als einer der diszipliniertesten Sportler überhaupt: Er trainiert täglich, plant seine Ernährung genau, schläft nach einem festen Rhythmus und verzichtet auf Alkohol. Deshalb spielt er auch mit über 40 Jahren noch auf hohem Niveau, in einem Alter, in dem die meisten Fussballer längst aufgehört haben.",
    wort: [["in einfachen Verhältnissen","mit wenig Geld"],["hänseln","sich immer wieder über jemanden lustig machen"],["die Herzrhythmusstörung","das Herz schlägt unregelmässig oder zu schnell"],["ehrgeizig","man will unbedingt Erfolg haben"],["beispiellos","so etwas gab es vorher noch nie"],["unumstritten","alle sind gleicher Meinung"],["die Menschenrechte","Rechte, die jeder Mensch hat, z. B. Meinungsfreiheit"]],
    mc: [
      { q: "Was sagt Ronaldo rückblickend über seine schwierigen Jugendjahre?", o: ["Er hätte lieber auf Madeira bleiben sollen","Sie hätten ihn ehrgeizig gemacht","Er erinnere sich nicht mehr daran","Sie seien die schönste Zeit seines Lebens gewesen"], a: 1 },
      { q: "Was ist am EM-Final 2016 besonders?", o: ["Ronaldo schoss drei Tore","Ronaldo musste früh verletzt ausgewechselt werden, und Portugal gewann trotzdem","Ronaldo war Trainer","Portugal verlor im Penaltyschiessen"], a: 1 },
      { q: "Was werfen Kritiker Saudi-Arabien vor?", o: ["Dass es zu wenig Stadien gibt","Dass es mit berühmten Sportlern von Kritik am Land ablenken will","Dass die Liga zu stark ist","Dass Ronaldo zu wenig verdient"], a: 1 },
      { q: "Warum kann Ronaldo laut Text mit über 40 Jahren noch auf hohem Niveau spielen?", o: ["Wegen seiner Disziplin bei Training, Ernährung und Schlaf","Weil die Liga in Saudi-Arabien leicht ist","Weil er weniger spielt","Weil er Medikamente nimmt"], a: 0 }
    ],
    rf: [
      { s: "Bei Real Madrid schoss Ronaldo mehr Tore als jeder andere Spieler in der Vereinsgeschichte.", a: true },
      { s: "Ronaldos erster Ballon d'Or kam während seiner Zeit bei Real Madrid.", a: false, x: "Den ersten Ballon d'Or gewann er 2008, noch bei Manchester United." },
      { s: "Laut Text sind sich alle einig, dass der Wechsel nach Saudi-Arabien richtig war.", a: false, x: "Der Wechsel wurde stark diskutiert; es gibt Kritiker und Befürworter." },
      { s: "Ronaldo hat auf Instagram mehr Follower als jede andere Person.", a: true }
    ],
    offen: [
      { q: "Der Text stellt Ronaldos Karriere nicht nur positiv dar. Welche zwei Sichtweisen auf seinen Wechsel nach Saudi-Arabien werden genannt?", l: "Kritik: Saudi-Arabien wolle mit Stars von Menschenrechtsverletzungen ablenken (Sportswashing). Nüchterne Sicht: Ein Profi darf dorthin gehen, wo er am meisten verdient." },
      { q: "Erkläre, wie Ronaldos schwierige Kindheit und Jugend mit seinem späteren Erfolg zusammenhängen könnten. Beziehe dich auf den Text.", l: "Er musste früh selbständig werden, hatte Heimweh und wurde gehänselt; laut ihm machte ihn das ehrgeizig. Daraus entstand seine starke Disziplin und Arbeitsmoral." },
      { q: "Sollen Sportler bei der Wahl ihres Vereins auch an Politik und Menschenrechte denken? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme mit zwei Argumenten, z. B. pro: Vorbilder haben Verantwortung, sie geben einem Land ein gutes Image; contra: Sportler sind keine Politiker, Karriere ist kurz, man darf Geld verdienen." }
    ] }
},
"wt-muaythai": {
  2: { vor: "Was ist der Unterschied zwischen Kampfsport und einer Schlägerei?",
    dauer: "ca. 250 Wörter", text: "Muay Thai ist der Nationalsport von Thailand. Die Wurzeln reichen mehrere hundert Jahre zurück: Früher lernten Soldaten diese Kampfkunst, um sich ohne Waffen verteidigen zu können. Eine bekannte Legende erzählt von Nai Khanom Tom. Er war im 18. Jahrhundert ein Gefangener in Burma und soll dort mehrere Kämpfer hintereinander besiegt haben. Danach wurde er freigelassen. Zu seinen Ehren feiert Thailand jedes Jahr am 17. März den Tag des Muay Thai.\n\nMan nennt Muay Thai «die Kunst der acht Waffen», weil man mit Fäusten, Ellbogen, Knien und Schienbeinen kämpft. Eine wichtige Technik ist der Clinch: Die Kämpfer halten einander am Nacken fest und setzen Kniestösse ein. Ein Profikampf hat fünf Runden zu je drei Minuten. Gewinnt niemand durch K.o., entscheiden Punktrichter.\n\nZum Kampf gehören viele Rituale. Vor dem ersten Gong tanzen die Kämpfer den Wai Kru. Damit zeigen sie Respekt gegenüber ihren Lehrern, ihren Eltern und dem Ring. Auf dem Kopf tragen sie den Mongkon, ein heiliges Stirnband, das der Trainer erst kurz vor dem Kampf abnimmt. Ein kleines Orchester mit Flöte, Trommeln und Becken begleitet den Kampf. Wenn es spannender wird, spielt die Musik schneller.\n\nIn Thailand gibt es berühmte Stadien wie Rajadamnern und Lumpinee in Bangkok. Viele Kämpfer stammen aus armen Familien auf dem Land. Für sie ist Muay Thai eine Chance, Geld zu verdienen. Manche beginnen schon als Kinder mit Wettkämpfen.\n\nIn Europa trainieren die meisten Menschen Muay Thai als Fitnesssport. Gute Trainer achten darauf, dass niemand verletzt wird, und betonen Werte wie Respekt und Selbstkontrolle.",
    wort: [["die Legende","eine alte Geschichte, die vielleicht nicht ganz wahr ist"],["der Gefangene","Person, die nicht frei ist, z. B. im Krieg festgehalten"],["der Punktrichter","Person, die die Leistung bewertet und Punkte gibt"],["das Ritual","eine feste Handlung, die man immer gleich macht"],["heilig","sehr wichtig für die Religion oder den Glauben"],["betonen","sagen, dass etwas besonders wichtig ist"]],
    mc: [
      { q: "Wer war Nai Khanom Tom?", o: ["Ein König von Thailand","Ein Gefangener, der laut Legende mehrere Kämpfer besiegte","Der Erfinder des Boxens","Ein berühmter Trainer aus Bangkok"], a: 1 },
      { q: "Was passiert, wenn ein Kampf nicht mit K.o. endet?", o: ["Der Kampf wird wiederholt","Punktrichter entscheiden","Beide verlieren","Das Publikum stimmt ab"], a: 1 },
      { q: "Was ist der Mongkon?", o: ["Ein heiliges Stirnband","Ein Musikinstrument","Ein Kniestoss","Ein Stadion in Bangkok"], a: 0 },
      { q: "Warum ist Muay Thai für viele thailändische Kämpfer wichtig?", o: ["Weil sie damit Geld verdienen können","Weil es in der Schule Pflicht ist","Weil sie damit berühmt werden müssen","Weil es keine anderen Sportarten gibt"], a: 0 }
    ],
    rf: [
      { s: "Der Tag des Muay Thai wird am 17. März gefeiert.", a: true },
      { s: "Die Musik während des Kampfes wird schneller, wenn es spannender wird.", a: true },
      { s: "Früher lernten nur Kinder Muay Thai.", a: false, x: "Früher lernten vor allem Soldaten diese Kampfkunst." },
      { s: "Rajadamnern und Lumpinee sind berühmte Stadien in Bangkok.", a: true }
    ],
    offen: [
      { q: "Nenne drei Rituale, die zu einem Muay-Thai-Kampf gehören, und erkläre eines davon genauer.", l: "Wai Kru (Tanz vor dem Kampf, Respekt vor Lehrern, Eltern und Ring), Mongkon (heiliges Stirnband, wird vom Trainer kurz vor dem Kampf abgenommen), Musik mit Flöte, Trommeln und Becken." },
      { q: "In Thailand kämpfen manche Kinder schon in Wettkämpfen. Was hältst du davon? Begründe.", l: "Individuelle Antwort mit Begründung, z. B. Chance auf Geld und Zukunft vs. Gefahr für Gesundheit und Schule." }
    ] },
  3: { vor: "Warum gehören zu vielen Sportarten Rituale? Kennst du Beispiele aus dem Fussball oder anderen Sportarten?",
    dauer: "ca. 320 Wörter", text: "Muay Thai, oft auch Thaiboxen genannt, gilt als Nationalsport Thailands und ist eng mit der Geschichte und der Kultur des Landes verbunden. Ursprünglich diente die Kampfkunst der Verteidigung: Soldaten des alten Königreichs Siam lernten, auch ohne Waffen zu kämpfen. Laut einer bekannten Überlieferung besiegte der Gefangene Nai Khanom Tom im Jahr 1774 vor dem König von Burma zehn Kämpfer hintereinander und erhielt dafür seine Freiheit. Ob die Geschichte genau so stattgefunden hat, ist unsicher, doch sie wird in Thailand bis heute erzählt.\n\nTechnisch ist Muay Thai äusserst vielseitig. Neben Schlägen mit Fäusten und Ellbogen setzen die Kämpfer Kniestösse und kraftvolle Tritte mit dem Schienbein ein, weshalb man von der «Kunst der acht Waffen» spricht. Besonders gefürchtet ist der Clinch, bei dem die Gegner sich am Nacken umklammern und mit Knien angreifen. Die Kampfrichter bewerten nicht nur Treffer, sondern auch Gleichgewicht, Kontrolle und Wirkung.\n\nFür viele Thailänderinnen und Thailänder ist Muay Thai mehr als Sport. Der Wai Kru vor dem Kampf ist ein Zeichen der Dankbarkeit gegenüber Lehrern und Familie, und die Musik eines kleinen Orchesters gibt dem Kampf einen eigenen Rhythmus. Gleichzeitig hat der Sport eine Schattenseite: In ländlichen Gebieten bestreiten manche Kinder schon mit acht oder neun Jahren bezahlte Kämpfe, auf die oft auch Wetten abgeschlossen werden. Ärzte warnen, dass Schläge gegen den Kopf das sich entwickelnde Gehirn schädigen können. In Thailand wird deshalb immer wieder über ein höheres Mindestalter oder einen besseren Kopfschutz diskutiert.\n\nInternational hat Muay Thai einen grossen Aufschwung erlebt. Der Weltverband IFMA wurde 2021 vom Internationalen Olympischen Komitee vollständig anerkannt, und bei den Europaspielen 2023 in Polen gehörte Muay Thai zum Programm. Ob der Sport eines Tages olympisch wird, ist noch offen.\n\nIn Schweizer Gyms steht meist nicht der Wettkampf im Vordergrund. Viele trainieren, um fitter, selbstbewusster und konzentrierter zu werden. Seriöse Trainer legen grossen Wert darauf, dass Sparring kontrolliert abläuft und dass die Werte des Sports, Respekt, Demut und Selbstbeherrschung, auch ausserhalb des Rings gelten.",
    wort: [["die Überlieferung","eine Geschichte, die über Generationen weitererzählt wird"],["vielseitig","mit vielen verschiedenen Möglichkeiten"],["umklammern","mit den Armen festhalten"],["die Schattenseite","die negative Seite einer Sache"],["anerkennen","offiziell bestätigen, dass etwas gültig ist"],["das Sparring","Übungskampf im Training"],["die Demut","Bescheidenheit, man hält sich nicht für besser als andere"]],
    mc: [
      { q: "Wie geht der Text mit der Geschichte von Nai Khanom Tom um?", o: ["Er stellt sie als bewiesene Tatsache dar","Er sagt, dass unsicher ist, ob sie genau so passiert ist","Er sagt, sie sei erfunden und unwichtig","Er erwähnt sie nicht"], a: 1 },
      { q: "Was bewerten die Kampfrichter laut Text?", o: ["Nur die Anzahl Treffer","Treffer, aber auch Gleichgewicht, Kontrolle und Wirkung","Nur das Aussehen der Kämpfer","Die Lautstärke des Publikums"], a: 1 },
      { q: "Welche Schattenseite des Muay Thai nennt der Text?", o: ["Die Musik ist zu laut","Kinder kämpfen schon früh für Geld, was ihrem Gehirn schaden kann","Die Stadien sind zu klein","Es gibt zu wenige Trainer"], a: 1 },
      { q: "Was geschah 2021?", o: ["Muay Thai wurde olympisch","Der Weltverband IFMA wurde vom IOC vollständig anerkannt","Thailand verbot Muay Thai für Kinder","Das Stadion Lumpinee wurde eröffnet"], a: 1 }
    ],
    rf: [
      { s: "Muay Thai ist bereits eine olympische Sportart.", a: false, x: "Ob Muay Thai olympisch wird, ist noch offen. 2023 war es an den Europaspielen dabei." },
      { s: "Laut Text wird in Thailand über ein höheres Mindestalter für Kämpfe diskutiert.", a: true },
      { s: "In Schweizer Gyms steht meistens der Wettkampf im Vordergrund.", a: false, x: "Viele trainieren für Fitness, Selbstvertrauen und Konzentration." },
      { s: "Der Wai Kru ist ein Zeichen der Dankbarkeit.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum Muay Thai für viele Menschen in Thailand «mehr als Sport» ist. Nutze zwei Beispiele aus dem Text.", l: "Er ist Teil der Geschichte (Soldaten, Legende von Nai Khanom Tom, Nationalfeiertag) und der Kultur (Wai Kru als Dank, Mongkon, Musik); für arme Familien auch eine Einkommensquelle." },
      { q: "Der Text nennt Argumente für und gegen Kinderkämpfe. Fasse sie zusammen.", l: "Dafür (indirekt): Kämpfe sind für arme Familien eine Einnahmequelle und Tradition. Dagegen: Schläge auf den Kopf können das Gehirn schädigen; Wetten auf Kinderkämpfe." },
      { q: "Sollte Muay Thai olympisch werden? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro: mehr Anerkennung, Förderung, Chancen für Athletinnen wie Adriana Płachta; contra: Verletzungsrisiko, Tradition könnte verloren gehen, Olympia schon sehr gross." }
    ] }
},
"wt-shara": {
  2: { vor: "Was hilft einem Menschen, nach einem grossen Rückschlag weiterzumachen?",
    dauer: "ca. 270 Wörter", text: "Sharabutdin Magomedov, den alle nur «Shara» nennen, wurde 1994 in Machatschkala geboren. Die Stadt ist die Hauptstadt von Dagestan, einer Republik im Süden Russlands am Kaspischen Meer. In Dagestan gehören Ringen und Kampfsport für viele Familien zum Alltag. Aus der Region stammen einige der bekanntesten UFC-Kämpfer, zum Beispiel Khabib Nurmagomedov und Islam Makhachev.\n\nShara spielte als Kind zuerst Fussball, bevor er zum Boxen kam. Später zog er nach Moskau und spezialisierte sich auf Muay Thai, wo er russischer Meister wurde. Er wagte sich auch an Lethwei, eine Kampfsportart aus Myanmar, bei der sogar Kopfstösse erlaubt sind und traditionell ohne Handschuhe gekämpft wird.\n\nDann kam ein schwerer Rückschlag: Bei einem Training wurde sein Auge so stark verletzt, dass er trotz mehrerer Operationen darauf nicht mehr sehen kann. Für einen Kämpfer ist das besonders gefährlich, weil er Schläge von einer Seite schlechter kommen sieht. Viele rieten ihm aufzuhören. Shara entschied sich, weiterzukämpfen, und wechselte ins MMA.\n\n2023 gab er sein Debüt in der UFC. Ein Jahr später ging ein Video von ihm um die Welt: Er besiegte seinen Gegner mit einem doppelten Rückwärts-Faustschlag aus der Drehung, einer Technik, die in der UFC noch nie zu einem K.o. geführt hatte. Im Februar 2025 verlor er seinen ersten MMA-Kampf gegen den erfahrenen Engländer Michael Page, der ihn mit viel Bewegung und Distanz ausmanövrierte.\n\nDie meisten Kämpfer aus Dagestan sind Ringer, die ihre Gegner zu Boden bringen. Shara ist anders: Er kämpft lieber im Stehen und zeigt spektakuläre Schläge und Tritte. Das macht ihn bei vielen Fans beliebt, auch wenn Experten sagen, dass er sein Ringen noch verbessern muss.",
    wort: [["die Republik","hier: ein Teil von Russland mit eigener Regierung"],["sich spezialisieren","sich auf eine Sache konzentrieren"],["sich wagen an","mutig etwas Schwieriges versuchen"],["der Rückschlag","ein Ereignis, das den Erfolg plötzlich stoppt"],["das Debüt","der erste Auftritt"],["ausmanövrieren","jemanden geschickt austricksen"]],
    mc: [
      { q: "Was ist das Besondere an der Kampfsportart Lethwei?", o: ["Man kämpft nur mit den Beinen","Kopfstösse sind erlaubt, und traditionell kämpft man ohne Handschuhe","Man kämpft im Wasser","Man darf nur ringen"], a: 1 },
      { q: "Warum ist Sharas Augenverletzung für einen Kämpfer besonders gefährlich?", o: ["Weil er das Publikum nicht sieht","Weil er Schläge von einer Seite schlechter kommen sieht","Weil er nicht mehr laufen kann","Weil er keine Handschuhe tragen darf"], a: 1 },
      { q: "Wie verlor Shara gegen Michael Page?", o: ["Page brachte ihn zu Boden","Page manövrierte ihn mit viel Bewegung und Distanz aus","Shara wurde disqualifiziert","Shara verletzte sich am Knie"], a: 1 },
      { q: "Wie unterscheidet sich Shara von vielen Kämpfern aus Dagestan?", o: ["Er ist viel grösser","Er kämpft lieber im Stehen statt am Boden","Er trainiert nicht","Er kämpft nur in Russland"], a: 1 }
    ],
    rf: [
      { s: "Khabib Nurmagomedov kommt ebenfalls aus Dagestan.", a: true },
      { s: "Shara wurde im Boxen russischer Meister.", a: false, x: "Russischer Meister wurde er im Muay Thai." },
      { s: "Nach der Verletzung wechselte Shara ins MMA.", a: true },
      { s: "Experten finden, dass Shara im Ringen nichts mehr lernen muss.", a: false, x: "Experten sagen, dass er sein Ringen noch verbessern muss." }
    ],
    offen: [
      { q: "Beschreibe Sharas sportlichen Weg in fünf Stationen.", l: "Fussball – Boxen – Muay Thai in Moskau (russischer Meister) und Lethwei – schwere Augenverletzung – MMA/UFC (Debüt 2023, berühmter K.o. 2024, Niederlage gegen Page 2025)." },
      { q: "Viele rieten Shara nach seiner Verletzung aufzuhören. Was hättest du ihm geraten? Begründe.", l: "Individuelle Antwort mit Begründung, z. B. aufhören wegen Gesundheitsrisiko oder weitermachen, weil es sein Traum ist und er gut geschützt trainiert." }
    ] },
  3: { vor: "Sollen Sportler selbst entscheiden dürfen, welche Risiken sie für ihren Sport eingehen?",
    dauer: "ca. 330 Wörter", text: "In der Welt der Mixed Martial Arts gibt es kaum einen Kämpfer, über den derzeit so viel gesprochen wird wie über Sharabutdin «Shara» Magomedov. Der 1994 in Machatschkala geborene Dagestaner hat einen ungewöhnlichen Stil, eine ungewöhnliche Geschichte und eine Verletzung, die viele andere zum Aufhören gezwungen hätte.\n\nDagestan, eine Republik im Nordkaukasus, gilt als eine der Hochburgen des Ringens. Kinder trainieren dort oft schon im Vorschulalter, und erfolgreiche Ringer werden wie Popstars verehrt. Kämpfer wie Khabib Nurmagomedov oder Islam Makhachev haben die UFC mit ihrem Bodenkampf dominiert. Shara dagegen kommt aus dem Stand-up: Er begann mit Boxen, wurde in Moskau russischer Meister im Muay Thai und sammelte Erfahrung im Lethwei, einer burmesischen Kampfsportart, die als eine der härtesten der Welt gilt.\n\nWährend dieser Zeit erlitt er im Training eine schwere Augenverletzung. Trotz mehrerer Operationen blieb er auf einem Auge blind. Normalerweise verlieren Kämpfer mit einer solchen Einschränkung ihre Lizenz, weil Ärzte und Kommissionen das Risiko als zu hoch einschätzen. Shara erhielt dennoch eine Starterlaubnis, was in der Kampfsportwelt kontrovers diskutiert wurde. Befürworter argumentieren, er sei medizinisch untersucht worden und kenne das Risiko. Kritiker halten dagegen, dass jemand, der auf einer Seite nichts sieht, Treffer nicht kommen sieht und deshalb besonders gefährdet sei.\n\nSportlich überzeugte er von Anfang an. Nach seinem UFC-Debüt 2023 sorgte er im Oktober 2024 für eine Sensation, als er Armen Petrosyan mit einem doppelten Rückwärts-Faustschlag aus der Drehung K.o. schlug. Die Szene wurde millionenfach geteilt. Im Februar 2025 musste er gegen Michael «Venom» Page seine erste Niederlage hinnehmen: Der Engländer hielt geschickt Distanz und liess Sharas Angriffe ins Leere laufen. Experten sahen darin einen Beweis, dass spektakuläre Techniken allein nicht reichen, wenn ein Gegner taktisch klug kämpft.\n\nShara selbst gibt sich gelassen. Niederlagen gehörten zum Sport, sagt er, entscheidend sei, daraus zu lernen. Ob er eines Tages um einen Titel kämpfen wird, hängt nicht nur von seinen Schlägen ab, sondern auch davon, ob er seine Schwächen im Ringen und in der Verteidigung verbessert.",
    wort: [["die Hochburg","Ort, an dem etwas besonders stark verbreitet ist"],["dominieren","stärker als alle anderen sein, beherrschen"],["die Einschränkung","etwas, das man nicht mehr kann oder darf"],["die Lizenz","offizielle Erlaubnis, z. B. für Wettkämpfe"],["kontrovers","so, dass Menschen ganz unterschiedlicher Meinung sind"],["hinnehmen müssen","etwas Unangenehmes akzeptieren müssen"],["gelassen","ruhig, ohne sich aufzuregen"]],
    mc: [
      { q: "Wofür ist Dagestan laut Text besonders bekannt?", o: ["Für Fussball","Für das Ringen","Für Skifahren","Für Muay Thai"], a: 1 },
      { q: "Warum wurde Sharas Starterlaubnis kontrovers diskutiert?", o: ["Weil er zu jung war","Weil er auf einem Auge blind ist und das Risiko hoch sein könnte","Weil er aus Russland kommt","Weil er zu viele Kämpfe gewonnen hatte"], a: 1 },
      { q: "Was zeigte die Niederlage gegen Page laut Experten?", o: ["Dass Shara zu alt ist","Dass spektakuläre Techniken allein nicht reichen gegen einen taktisch klugen Gegner","Dass Shara nicht trainiert hatte","Dass der Schiedsrichter falsch entschieden hatte"], a: 1 },
      { q: "Wovon hängt laut Text ab, ob Shara einmal um einen Titel kämpft?", o: ["Nur von seiner Schlagkraft","Auch davon, ob er sein Ringen und seine Verteidigung verbessert","Vom Wetter","Von seinen Followern"], a: 1 }
    ],
    rf: [
      { s: "Im Oktober 2024 besiegte Shara Armen Petrosyan durch K.o.", a: true },
      { s: "Kämpfer, die auf einem Auge blind sind, erhalten normalerweise problemlos eine Lizenz.", a: false, x: "Normalerweise verlieren sie ihre Lizenz, weil das Risiko als zu hoch gilt." },
      { s: "Lethwei gilt als eine der härtesten Kampfsportarten der Welt.", a: true },
      { s: "Shara reagierte auf seine Niederlage sehr wütend.", a: false, x: "Er gibt sich gelassen: Niederlagen gehörten zum Sport, man müsse daraus lernen." }
    ],
    offen: [
      { q: "Stelle die Argumente der Befürworter und der Kritiker zu Sharas Starterlaubnis einander gegenüber.", l: "Befürworter: Er wurde medizinisch untersucht und kennt das Risiko (eigene Entscheidung). Kritiker: Er sieht Treffer auf einer Seite nicht kommen und ist deshalb besonders gefährdet." },
      { q: "Inwiefern ist Shara im Vergleich zu anderen Kämpfern aus Dagestan eine Ausnahme? Erkläre mit dem Text.", l: "Die meisten dagestanischen Stars (Khabib, Makhachev) sind Ringer und dominieren am Boden; Shara kommt aus dem Boxen, Muay Thai und Lethwei und kämpft lieber spektakulär im Stehen." },
      { q: "Sollte ein Sportler mit einer schweren Verletzung selbst entscheiden dürfen, ob er weiter kämpft? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro Selbstbestimmung (erwachsen, informiert, eigener Körper); contra (Schutz der Gesundheit, Verantwortung der Organisation, Vorbildwirkung für Junge)." }
    ] }
},
"wt-plachta": {
  2: { vor: "Wie würdest du einen Tag organisieren, an dem du acht Stunden arbeitest und danach noch zwei Stunden trainierst?",
    dauer: "ca. 230 Wörter", text: "Adriana Płachta ist eine polnische Muay-Thai-Kämpferin. Ihr Weg zum Kampfsport war nicht geplant. Als Kind spielte sie Fussball, und erst mit 17 Jahren ging sie zum ersten Mal in ein Boxtraining. Dort merkte sie schnell, dass ihr der Kampfsport liegt: Sie mochte die Mischung aus Kraft, Technik und Konzentration.\n\nNach der Schule zog sie nach Rzeszów im Südosten Polens, um medizinische Physik zu studieren. Dieses Fach verbindet Physik mit Medizin, zum Beispiel bei Röntgengeräten oder in der Strahlentherapie. Während des Studiums entdeckte sie Muay Thai und trat dem Verein Universal Fight Team Rzeszów bei. Neben den Vorlesungen trainierte sie fast jeden Tag und schloss ihr Studium trotzdem mit einem Master ab.\n\nIhre Erfolge sind beeindruckend. In der Gewichtsklasse bis 60 Kilogramm wurde sie Weltmeisterin, dazu kommen zwei Europameistertitel. Den zweiten gewann sie im November 2025 in Athen. Beim ersten Titel kämpfte sie sogar mit einem angebrochenen Schienbein. Sie sagt, sie habe die Schmerzen erst nach dem Kampf richtig gespürt.\n\nTrotzdem ist Adriana keine Vollprofi-Sportlerin. Sie arbeitet tagsüber von 8 bis 16 Uhr und geht danach ins Training. Ihr Tag ist deshalb genau geplant: arbeiten, essen, trainieren, erholen, schlafen. Freizeit bleibt nur wenig.\n\nFür Adriana ist Muay Thai wie ein Schachspiel mit dem Körper. Man muss die Bewegungen des Gegners lesen und vorausplanen. Ihr grösster Wunsch wäre ein Start an den Olympischen Spielen. Doch Muay Thai gehört bisher nicht zum olympischen Programm.",
    wort: [["liegen","hier: zu jemandem passen, gut können"],["die Strahlentherapie","Behandlung von Krankheiten mit Strahlen"],["beitreten","Mitglied in einem Verein werden"],["die Vorlesung","Unterricht an einer Universität"],["beeindruckend","so gut, dass man staunt"],["der Vollprofi","Person, die nur von ihrem Sport lebt"]],
    mc: [
      { q: "Wann begann Adriana mit Kampfsport?", o: ["Mit 5 Jahren","Mit 17 Jahren","Nach dem Studium","Mit 30 Jahren"], a: 1 },
      { q: "Was verbindet das Fach «medizinische Physik»?", o: ["Sport und Ernährung","Physik und Medizin","Chemie und Biologie","Mathematik und Musik"], a: 1 },
      { q: "Was ist am ersten Europameistertitel besonders?", o: ["Sie gewann ihn in Athen","Sie kämpfte mit einem angebrochenen Schienbein","Sie gewann ihn mit 17 Jahren","Sie kämpfte gegen einen Mann"], a: 1 },
      { q: "Warum bleibt Adriana nur wenig Freizeit?", o: ["Weil sie arbeitet und danach trainiert","Weil sie noch studiert","Weil sie viel reist","Weil sie zwei Jobs hat"], a: 0 }
    ],
    rf: [
      { s: "Adriana hat ihr Studium mit einem Master abgeschlossen.", a: true },
      { s: "Adriana kämpft in der Gewichtsklasse bis 60 Kilogramm.", a: true },
      { s: "Adriana spürte die Schmerzen im Schienbein schon während des Kampfes stark.", a: false, x: "Sie sagt, sie habe die Schmerzen erst nach dem Kampf richtig gespürt." },
      { s: "Muay Thai gehört zum olympischen Programm.", a: false, x: "Muay Thai gehört bisher nicht zum olympischen Programm." }
    ],
    offen: [
      { q: "Erkläre, warum Adriana Muay Thai mit Schach vergleicht.", l: "Man muss wie beim Schach die Bewegungen des Gegners lesen und vorausplanen; es gibt viele mögliche Kombinationen." },
      { q: "Schreibe einen möglichen Tagesplan für Adriana von 6 bis 22 Uhr.", l: "Individuelle Antwort, die Arbeit (8–16 Uhr), Essen, Training (abends), Erholung und genug Schlaf enthält." }
    ] },
  3: { vor: "Warum bekommen Frauen im Sport oft weniger Aufmerksamkeit und Geld als Männer? Was denkst du?",
    dauer: "ca. 320 Wörter", text: "Wer an Weltmeisterinnen denkt, stellt sich oft Profisportlerinnen vor, die den ganzen Tag trainieren, von Sponsoren bezahlt werden und von einem Team betreut werden. Die Polin Adriana Płachta passt nicht in dieses Bild. Sie ist Welt- und zweifache Europameisterin im Muay Thai und arbeitet gleichzeitig Vollzeit.\n\nIhr Weg in den Kampfsport begann relativ spät. Nachdem sie als Kind Fussball gespielt hatte, stand sie mit 17 Jahren zum ersten Mal in einem Boxring. Während ihres Studiums der medizinischen Physik in Rzeszów, einem Fach, das physikalische Methoden für Diagnose und Behandlung von Krankheiten nutzt, entdeckte sie Muay Thai. Sie trainierte im Universal Fight Team Rzeszów und erreichte innerhalb weniger Jahre die internationale Spitze, ohne ihr anspruchsvolles Studium zu vernachlässigen.\n\nIn der Gewichtsklasse bis 60 Kilogramm holte sie den Weltmeistertitel und zwei Europameistertitel, zuletzt im November 2025 in Athen. Ihren ersten EM-Titel erkämpfte sie mit einem angebrochenen Schienbein. Solche Geschichten zeigen ihre Willenskraft, werfen aber auch Fragen auf: Wie weit sollen Sportlerinnen und Sportler gehen, um einen Titel zu gewinnen?\n\nAdrianas Alltag ist streng durchgeplant. Von 8 bis 16 Uhr arbeitet sie, danach folgen Kraft-, Ausdauer- und Techniktraining. Sie beschreibt ihren Rhythmus knapp mit den Worten «starke Anstrengung, starke Müdigkeit». Ihre Situation ist typisch für viele Athletinnen in Sportarten, die wenig Medienaufmerksamkeit erhalten: Preisgelder und Sponsorenverträge reichen nicht, um davon zu leben. Bei Frauen ist dieser Unterschied oft noch grösser als bei Männern.\n\nAdriana vergleicht Muay Thai mit Schach: Es gebe unzählige Kombinationen, und man müsse die Absichten des Gegners durchschauen, bevor er zuschlägt. Diese analytische Denkweise hat sie vermutlich auch aus der Physik mitgenommen. Ihr grösster Traum sind die Olympischen Spiele. Der Weltverband IFMA ist seit 2021 vom Internationalen Olympischen Komitee anerkannt, doch ins olympische Programm wurde Muay Thai bisher nicht aufgenommen. Für Athletinnen wie Adriana würde ein olympischer Status mehr Aufmerksamkeit, mehr Förderung und vielleicht die Chance bedeuten, sich ganz auf den Sport zu konzentrieren.",
    wort: [["betreuen","sich um jemanden kümmern"],["die Diagnose","Feststellung, welche Krankheit jemand hat"],["anspruchsvoll","schwierig, verlangt viel"],["vernachlässigen","sich zu wenig um etwas kümmern"],["die Willenskraft","starker Wille, etwas zu schaffen"],["die Absicht","das, was jemand plant oder vorhat"],["die Förderung","Unterstützung, z. B. mit Geld oder Trainern"]],
    mc: [
      { q: "Warum passt Adriana laut Text nicht ins typische Bild einer Weltmeisterin?", o: ["Weil sie nie trainiert","Weil sie Vollzeit arbeitet und keine Profisportlerin ist","Weil sie keine Titel gewonnen hat","Weil sie aus Thailand kommt"], a: 1 },
      { q: "Welche Frage wirft der Kampf mit dem angebrochenen Schienbein laut Text auf?", o: ["Ob Schienbeine wichtig sind","Wie weit Sportler gehen sollen, um einen Titel zu gewinnen","Ob Muay Thai gefährlich ist","Warum sie in Athen kämpfte"], a: 1 },
      { q: "Warum können viele Athletinnen in kleineren Sportarten nicht vom Sport leben?", o: ["Weil sie nicht genug trainieren","Weil Preisgelder und Sponsorenverträge nicht reichen","Weil es verboten ist","Weil sie keine Wettkämpfe haben"], a: 1 },
      { q: "Was würde ein olympischer Status für Athletinnen wie Adriana bedeuten?", o: ["Weniger Wettkämpfe","Mehr Aufmerksamkeit und Förderung","Ein Verbot von Kniestössen","Höhere Gewichtsklassen"], a: 1 }
    ],
    rf: [
      { s: "Adriana entdeckte Muay Thai während ihres Studiums.", a: true },
      { s: "Der Text vermutet, dass Adriana ihre analytische Denkweise auch aus der Physik hat.", a: true },
      { s: "Der Weltverband IFMA ist nicht vom Olympischen Komitee anerkannt.", a: false, x: "Die IFMA ist seit 2021 anerkannt, aber Muay Thai ist noch nicht im olympischen Programm." },
      { s: "Laut Text ist der Unterschied bei Geld und Aufmerksamkeit bei Frauen oft kleiner als bei Männern.", a: false, x: "Bei Frauen ist dieser Unterschied oft noch grösser." }
    ],
    offen: [
      { q: "Was bedeutet «starke Anstrengung, starke Müdigkeit»? Erkläre mit Adrianas Tagesablauf.", l: "Sie arbeitet von 8 bis 16 Uhr und trainiert danach intensiv (Kraft, Ausdauer, Technik); dadurch ist sie am Abend sehr erschöpft, ihr Alltag ist anstrengend." },
      { q: "Der Text sagt, dass Frauen im Sport oft weniger Geld und Aufmerksamkeit bekommen. Nenne mögliche Gründe und eine Idee, was man ändern könnte.", l: "Individuelle Antwort, z. B. Gründe: weniger Fernsehübertragungen, weniger Sponsoren, alte Vorurteile; Ideen: mehr Berichterstattung, gleiche Preisgelder, Förderung durch Verbände." },
      { q: "Ist es bewundernswert oder unvernünftig, mit einem angebrochenen Knochen weiterzukämpfen? Nimm Stellung.", l: "Individuelle Stellungnahme mit Begründung, z. B. bewundernswert (Willenskraft, Traum erfüllt) oder unvernünftig (Gefahr bleibender Schäden, schlechtes Vorbild)." }
    ] }
},
"wt-k1": {
  2: { vor: "Warum brauchen Kampfsportarten klare Regeln? Was könnte ohne Regeln passieren?",
    dauer: "ca. 270 Wörter", text: "K-1 ist sowohl der Name einer Kampfsport-Organisation als auch eines bestimmten Regelwerks. Gegründet wurde K-1 im Jahr 1993 in Japan vom Karatemeister Kazuyoshi Ishii. Seine Idee war einfach: Er wollte herausfinden, welcher Stil im Stehen der beste ist. Darum liess er Kämpfer aus Karate, Kickboxen, Muay Thai, Taekwondo und anderen Sportarten nach gemeinsamen Regeln gegeneinander antreten.\n\nDie K-1-Regeln sind ein Mittelweg. Erlaubt sind Schläge mit den Fäusten, Tritte und Kniestösse. Verboten sind dagegen Ellbogenschläge, Würfe und Kämpfe am Boden. Auch den Gegner längere Zeit festzuhalten, ist nicht erlaubt, damit die Kämpfe schnell und spektakulär bleiben. Ein Kampf dauert drei Runden zu drei Minuten. Steht es danach unentschieden, kann eine Zusatzrunde folgen.\n\nIn den 1990er- und 2000er-Jahren war K-1 in Japan extrem populär. Der «World Grand Prix» fand vor Zehntausenden Zuschauern im Tokyo Dome statt und wurde im Fernsehen übertragen. Wer Champion werden wollte, musste in einer Nacht bis zu drei Kämpfe gewinnen. Der Niederländer Ernesto Hoost gewann das Turnier viermal.\n\nEiner der beliebtesten Kämpfer war der Schweizer Andy Hug. Er wurde in Zürich geboren und wuchs im Kanton Aargau auf. Als Karateka war er für seinen Axe-Kick berühmt, bei dem das Bein hoch über den Kopf schwingt und dann von oben auf den Gegner niedergeht. 1996 gewann er den Grand Prix. In Japan nannte man ihn respektvoll «den blauäugigen Samurai». Im August 2000 starb er mit nur 35 Jahren an Leukämie. Tausende Fans nahmen in Japan Abschied von ihm.\n\nSpäter geriet K-1 in finanzielle Schwierigkeiten und wurde verkauft. Die K-1-Regeln sind aber bis heute die Grundlage für viele Kickbox-Wettkämpfe weltweit.",
    wort: [["das Regelwerk","alle Regeln einer Sportart"],["antreten","bei einem Wettkampf mitmachen"],["der Mittelweg","eine Lösung zwischen zwei Extremen"],["populär","sehr beliebt, bekannt"],["der Karateka","Person, die Karate macht"],["die Trauerfeier","Feier zum Abschied von einem Verstorbenen"]],
    mc: [
      { q: "Was wollte Kazuyoshi Ishii mit K-1 herausfinden?", o: ["Welcher Stil im Stehen der beste ist","Wer am meisten Geld verdient","Welches Land am stärksten ist","Wie man am besten ringt"], a: 0 },
      { q: "Was ist bei K-1 erlaubt?", o: ["Ellbogenschläge","Würfe","Kniestösse","Kampf am Boden"], a: 2 },
      { q: "Warum ist langes Festhalten bei K-1 verboten?", o: ["Damit die Kämpfe schnell und spektakulär bleiben","Weil es zu gefährlich für die Hände ist","Weil die Zuschauer es nicht sehen","Weil es im Karate nicht vorkommt"], a: 0 },
      { q: "Wie nannte man Andy Hug in Japan?", o: ["Den Schweizer Bären","Den blauäugigen Samurai","Den König des Rings","Den fliegenden Holländer"], a: 1 }
    ],
    rf: [
      { s: "Der World Grand Prix fand im Tokyo Dome statt.", a: true },
      { s: "Ernesto Hoost gewann den Grand Prix viermal.", a: true },
      { s: "Andy Hug wuchs im Kanton Zürich auf.", a: false, x: "Er wurde in Zürich geboren, wuchs aber im Kanton Aargau auf." },
      { s: "Die K-1-Regeln werden heute nicht mehr verwendet.", a: false, x: "Sie sind bis heute die Grundlage für viele Kickbox-Wettkämpfe." }
    ],
    offen: [
      { q: "Erkläre, warum man die K-1-Regeln als «Mittelweg» bezeichnen kann.", l: "Sie erlauben mehr als Boxen (Tritte, Knie), aber weniger als Muay Thai oder MMA (keine Ellbogen, keine Würfe, kein Bodenkampf, kein langer Clinch)." },
      { q: "Warum war Andy Hug in Japan so beliebt? Nenne zwei Gründe aus dem Text.", l: "Er gewann 1996 den Grand Prix, war für seinen spektakulären Axe-Kick berühmt und kämpfte respektvoll – man nannte ihn den blauäugigen Samurai." }
    ] },
  3: { vor: "Warum werden manche Sportarten in einem Land plötzlich sehr beliebt und später wieder weniger? Was spielt dabei eine Rolle?",
    dauer: "ca. 320 Wörter", text: "Als der japanische Karatemeister Kazuyoshi Ishii 1993 die erste K-1-Veranstaltung organisierte, verfolgte er eine Frage, die Kampfsportfans seit Jahrzehnten beschäftigte: Welcher Kampfstil ist im Stehen überlegen? Statt die Frage theoretisch zu diskutieren, liess er Karateka, Kickboxer, Thaiboxer und Taekwondo-Kämpfer unter einheitlichen Regeln aufeinandertreffen. Aus diesem Experiment entwickelte sich eine der erfolgreichsten Kampfsportmarken der Welt.\n\nDas Regelwerk war bewusst auf Spektakel ausgerichtet. Faustschläge, Tritte und Knie sind erlaubt, Ellbogen, Würfe und Bodenkampf hingegen verboten. Ausserdem wird der Clinch sofort getrennt. Dadurch blieben die Kämpfe dynamisch und für ein Fernsehpublikum leicht verständlich. Zum Mythos wurde das Turnierformat des World Grand Prix: Acht Kämpfer traten an einem einzigen Abend gegeneinander an, und der Sieger musste drei Gegner hintereinander bezwingen. Wer verletzt weiterkämpfte, wurde vom Publikum gefeiert. Heute würden Sportmediziner ein solches Format wohl kritischer sehen.\n\nIn ihrer Blütezeit füllte K-1 den Tokyo Dome mit über 50 000 Zuschauern und erreichte im japanischen Fernsehen Millionen. Kämpfer wie der Niederländer Ernesto Hoost oder der Neuseeländer Ray Sefo wurden zu Stars. Besonders verehrt wurde der Schweizer Andy Hug. Der in Zürich geborene und im Aargau aufgewachsene Karateka verband Technik mit Disziplin und Höflichkeit, Eigenschaften, die in Japan hoch geschätzt werden. 1996 gewann er den Grand Prix. Als er im Jahr 2000 mit 35 Jahren an Leukämie starb, wurde das in Japan wie eine nationale Tragödie wahrgenommen.\n\nUm 2010 begann der Niedergang. Die Organisation hatte finanzielle Probleme, die Zuschauerzahlen sanken, und die Mixed Martial Arts, in denen auch am Boden gekämpft wird, zogen immer mehr Fans an. K-1 wurde verkauft und neu aufgestellt. Seine grösste Wirkung zeigt sich heute indirekt: Das K-1-Regelwerk hat das moderne Kickboxen weltweit geprägt, und viele aktuelle Organisationen verwenden es fast unverändert.\n\nDie Geschichte von K-1 zeigt, wie stark der Erfolg einer Sportart von Medien, Stars und Zeitgeist abhängt. Was gestern das grösste Spektakel war, kann morgen von etwas Neuem abgelöst werden.",
    wort: [["überlegen","besser, stärker als andere"],["einheitlich","für alle gleich"],["das Spektakel","eine aufregende Show"],["der Mythos","etwas, das zur Legende geworden ist"],["die Blütezeit","die erfolgreichste Zeit"],["der Niedergang","wenn etwas immer schwächer wird"],["der Zeitgeist","was in einer bestimmten Zeit modern und beliebt ist"]],
    mc: [
      { q: "Wie beantwortete Ishii die Frage nach dem besten Kampfstil?", o: ["Er schrieb ein Buch darüber","Er liess Kämpfer verschiedener Stile unter gleichen Regeln gegeneinander kämpfen","Er befragte Experten","Er entschied sich für Karate"], a: 1 },
      { q: "Warum war das K-1-Regelwerk gut fürs Fernsehen?", o: ["Weil die Kämpfe lange am Boden dauerten","Weil die Kämpfe dynamisch und leicht verständlich blieben","Weil es keine Runden gab","Weil nur Japaner kämpften"], a: 1 },
      { q: "Welche Eigenschaften von Andy Hug wurden in Japan besonders geschätzt?", o: ["Reichtum und Grösse","Technik, Disziplin und Höflichkeit","Lautstärke und Humor","Schnelligkeit beim Laufen"], a: 1 },
      { q: "Was war ein Grund für den Niedergang von K-1?", o: ["Die Regeln wurden verboten","MMA zog immer mehr Fans an","Andy Hug wurde Trainer","Der Tokyo Dome wurde geschlossen"], a: 1 }
    ],
    rf: [
      { s: "Beim World Grand Prix musste der Sieger an einem Abend drei Gegner besiegen.", a: true },
      { s: "Laut Text würden Sportmediziner das Turnierformat heute wohl kritischer sehen.", a: true },
      { s: "Bei K-1 wird ein Clinch lange erlaubt.", a: false, x: "Der Clinch wird sofort getrennt." },
      { s: "Das K-1-Regelwerk hat heute keinen Einfluss mehr.", a: false, x: "Es hat das moderne Kickboxen weltweit geprägt und wird oft fast unverändert verwendet." }
    ],
    offen: [
      { q: "Beschreibe den Aufstieg und den Niedergang von K-1 in je zwei bis drei Sätzen.", l: "Aufstieg: 1993 gegründet, spektakuläre Regeln, World Grand Prix im Tokyo Dome, Millionen TV-Zuschauer, Stars wie Hoost und Hug. Niedergang: ab etwa 2010 Geldprobleme, sinkende Zuschauerzahlen, Konkurrenz durch MMA, Verkauf." },
      { q: "Warum kritisiert der Text das Turnierformat leicht? Erkläre.", l: "Kämpfer mussten an einem Abend drei Kämpfe bestreiten und kämpften oft verletzt weiter; das ist aus Sicht der Gesundheit problematisch, auch wenn das Publikum es feierte." },
      { q: "Der Text sagt, der Erfolg einer Sportart hänge von Medien, Stars und Zeitgeist ab. Finde ein eigenes Beispiel und erkläre es.", l: "Individuelle Antwort, z. B. Padel, E-Sport, Frauenfussball nach der EM 2025 in der Schweiz, Skateboard seit Olympia." }
    ] }
},
"wt-albanien": {
  2: { vor: "Warum verlassen Menschen ihr Heimatland? Nenne mögliche Gründe.",
    dauer: "ca. 260 Wörter", text: "Albanien ist ein kleines Land auf dem Balkan. Es grenzt an Montenegro, Kosovo, Nordmazedonien und Griechenland, und im Westen liegt das Meer. Etwa 2,4 Millionen Menschen leben im Land, die Hauptstadt ist Tirana. Albanisch wird aber nicht nur in Albanien gesprochen, sondern auch im Kosovo und in Teilen Nordmazedoniens. In der Schweiz leben viele Menschen mit albanischen Wurzeln, die meisten stammen aus dem Kosovo oder aus Nordmazedonien.\n\nDer Nationalheld Gjergj Kastrioti, genannt Skanderbeg, führte im 15. Jahrhundert den Widerstand gegen das Osmanische Reich an. Sein Zeichen, der schwarze Doppeladler auf rotem Grund, ist heute die Flagge Albaniens. Nach fast 500 Jahren osmanischer Herrschaft erklärte Albanien am 28. November 1912 in der Hafenstadt Vlora seine Unabhängigkeit.\n\nNach dem Zweiten Weltkrieg kam der Kommunist Enver Hoxha an die Macht. Er regierte über 40 Jahre lang mit grosser Härte. Wer die Regierung kritisierte, konnte im Gefängnis oder in einem Arbeitslager landen. 1967 verbot er sogar jede Religion. Hoxha vertraute keinem anderen Land und liess im ganzen Land über 170 000 Bunker bauen. Albanien war in dieser Zeit eines der ärmsten und isoliertesten Länder Europas.\n\nNach dem Ende des Kommunismus 1991 flohen Zehntausende Menschen, oft auf überfüllten Schiffen nach Italien. Seither hat sich das Land stark verändert. Albanien ist Mitglied der NATO und möchte der Europäischen Union beitreten. Der Tourismus wächst schnell: Jedes Jahr kommen Millionen Gäste an die Strände im Süden und in die Berge im Norden. Manche alten Bunker wurden in Cafés, Museen oder Unterkünfte umgebaut.\n\nTrotzdem verlassen bis heute viele junge Menschen Albanien, weil sie im Ausland bessere Löhne und mehr Chancen sehen.",
    wort: [["die Wurzeln","hier: die Herkunft einer Familie"],["der Widerstand","Kampf gegen eine fremde Macht"],["die Herrschaft","wenn jemand über ein Land bestimmt"],["das Arbeitslager","Gefängnis, in dem Menschen hart arbeiten müssen"],["isoliert","abgeschlossen, ohne Kontakt zu anderen"],["überfüllt","mit viel zu vielen Menschen"]],
    mc: [
      { q: "Woher stammen die meisten Menschen mit albanischen Wurzeln in der Schweiz?", o: ["Aus Tirana","Aus dem Kosovo oder Nordmazedonien","Aus Griechenland","Aus Italien"], a: 1 },
      { q: "Was ist das Zeichen von Skanderbeg?", o: ["Ein weisses Kreuz","Ein schwarzer Doppeladler auf rotem Grund","Ein goldener Löwe","Ein grüner Stern"], a: 1 },
      { q: "Was verbot Enver Hoxha 1967?", o: ["Den Fussball","Jede Religion","Das Meer","Den Tourismus"], a: 1 },
      { q: "Warum verlassen heute viele junge Menschen Albanien?", o: ["Weil es zu viele Bunker gibt","Weil sie im Ausland bessere Löhne und Chancen sehen","Weil es verboten ist, im Land zu bleiben","Weil es keine Schulen gibt"], a: 1 }
    ],
    rf: [
      { s: "Albanien erklärte seine Unabhängigkeit in der Stadt Vlora.", a: true },
      { s: "Enver Hoxha regierte nur fünf Jahre lang.", a: false, x: "Er regierte über 40 Jahre lang." },
      { s: "Nach 1991 flohen viele Menschen mit Schiffen nach Italien.", a: true },
      { s: "Albanien ist Mitglied der Europäischen Union.", a: false, x: "Albanien ist NATO-Mitglied und möchte der EU beitreten." }
    ],
    offen: [
      { q: "Beschreibe, wie das Leben unter Enver Hoxha war. Nenne drei Beispiele aus dem Text.", l: "Kritiker kamen ins Gefängnis oder Arbeitslager; Religion war verboten; das Land war isoliert und arm; über 170 000 Bunker wurden gebaut." },
      { q: "Wie hat sich Albanien seit 1991 verändert? Nenne zwei Veränderungen.", l: "NATO-Mitglied, will in die EU; Tourismus wächst; Bunker werden zu Cafés, Museen oder Unterkünften umgebaut." }
    ] },
  3: { vor: "Wie prägt die Geschichte eines Landes das Leben der Menschen bis heute?",
    dauer: "ca. 310 Wörter", text: "Kaum ein europäisches Land hat sich in den letzten Jahrzehnten so stark verändert wie Albanien. Noch vor gut dreissig Jahren galt es als das am stärksten abgeschottete Land des Kontinents, heute zählt es zu den beliebtesten neuen Reisezielen am Mittelmeer. Um diesen Wandel zu verstehen, lohnt sich ein Blick in die Geschichte.\n\nÜber Jahrhunderte gehörte das Gebiet zum Osmanischen Reich. Im 15. Jahrhundert leistete der Fürst Gjergj Kastrioti, bekannt als Skanderbeg, jahrzehntelang Widerstand gegen die Osmanen und wurde so zum Nationalhelden. Seine Fahne mit dem schwarzen Doppeladler ist bis heute das Symbol der Albanerinnen und Albaner, auch jener, die im Kosovo, in Nordmazedonien oder in der Diaspora leben. Die Unabhängigkeit wurde am 28. November 1912 ausgerufen, doch die Grenzen, die damals gezogen wurden, liessen viele Albanischsprachige ausserhalb des neuen Staates.\n\nPrägend für das moderne Albanien war die kommunistische Diktatur unter Enver Hoxha, die von 1944 bis zu seinem Tod 1985 dauerte. Hoxha brach nach und nach mit allen Verbündeten, zuerst mit Jugoslawien, dann mit der Sowjetunion und schliesslich mit China. 1967 erklärte er Albanien zum ersten atheistischen Staat der Welt; Moscheen und Kirchen wurden geschlossen oder zerstört. Aus Angst vor einer Invasion liess das Regime über 170 000 Betonbunker errichten, obwohl das Land dringend Geld für Wohnungen, Spitäler und Strassen gebraucht hätte.\n\nDer Übergang zur Demokratie Anfang der 1990er-Jahre verlief chaotisch. 1997 brachen sogenannte Pyramidensysteme zusammen, betrügerische Anlagefirmen, in die viele Familien ihre gesamten Ersparnisse gesteckt hatten. Es kam zu Unruhen, und der Staat verlor zeitweise die Kontrolle über Teile des Landes. Viele Menschen wanderten aus.\n\nHeute ist Albanien NATO-Mitglied und verhandelt über einen Beitritt zur EU. Der Tourismus boomt, und internationale Medien loben die Küste als «Geheimtipp». Gleichzeitig kämpft das Land mit Korruption, niedrigen Löhnen und der Abwanderung junger, gut ausgebildeter Menschen. Ob Albanien diese Probleme lösen kann, hängt auch davon ab, ob diese Generation eines Tages zurückkehrt.",
    wort: [["abgeschottet","völlig abgeschlossen von der Umwelt"],["die Diaspora","Menschen, die ausserhalb ihres Herkunftslandes leben"],["atheistisch","ohne Glauben an einen Gott"],["die Invasion","Angriff, bei dem eine Armee in ein Land eindringt"],["betrügerisch","so, dass Menschen absichtlich getäuscht werden"],["die Korruption","wenn Beamte oder Politiker Geld nehmen, um Vorteile zu geben"],["die Abwanderung","wenn viele Menschen eine Region verlassen"]],
    mc: [
      { q: "Was kritisiert der Text an den Grenzen von 1912?", o: ["Sie waren zu gross","Viele Albanischsprachige lebten danach ausserhalb des Staates","Sie wurden nie festgelegt","Sie trennten Albanien vom Meer"], a: 1 },
      { q: "Wie verhielt sich Hoxha gegenüber anderen Ländern?", o: ["Er suchte viele neue Partner","Er brach nach und nach mit allen Verbündeten","Er reiste oft ins Ausland","Er schloss sich der EU an"], a: 1 },
      { q: "Was waren die Pyramidensysteme von 1997?", o: ["Neue Bauwerke für Touristen","Betrügerische Anlagefirmen, bei denen viele ihr Geld verloren","Ein Schulsystem","Militärische Anlagen"], a: 1 },
      { q: "Welche Probleme hat Albanien laut Text heute noch?", o: ["Zu viele Touristen und zu hohe Löhne","Korruption, niedrige Löhne und Abwanderung junger Menschen","Krieg mit den Nachbarländern","Fehlende Strände"], a: 1 }
    ],
    rf: [
      { s: "Albanien wurde 1967 zum ersten atheistischen Staat der Welt erklärt.", a: true },
      { s: "Laut Text war der Bau der Bunker eine sinnvolle Investition.", a: false, x: "Der Text kritisiert, dass das Geld für Wohnungen, Spitäler und Strassen gefehlt hat." },
      { s: "Die Diktatur von Enver Hoxha dauerte von 1944 bis 1985.", a: true },
      { s: "Albanien ist bereits Mitglied der EU.", a: false, x: "Albanien verhandelt über einen Beitritt." }
    ],
    offen: [
      { q: "Der Text beschreibt Albanien als Land des grossen Wandels. Vergleiche die Zeit unter Hoxha mit heute in mindestens drei Punkten.", l: "Früher abgeschottet – heute NATO-Mitglied, EU-Verhandlungen, Tourismus; früher Religion verboten – heute frei; früher Bunker gegen Feinde – heute Reiseziel; aber weiterhin Armut/niedrige Löhne." },
      { q: "Erkläre, warum die Rückkehr junger Menschen für Albaniens Zukunft wichtig sein könnte.", l: "Gut ausgebildete Junge fehlen dem Land als Arbeitskräfte, Unternehmer und Steuerzahler; wenn sie zurückkehren, bringen sie Wissen und Erfahrung mit und können Probleme wie Korruption und Armut angehen." },
      { q: "Viele Familien in der Schweiz haben Wurzeln auf dem Balkan. Sollen Menschen der zweiten Generation in das Herkunftsland ihrer Eltern «zurückkehren»? Nimm Stellung.", l: "Individuelle Stellungnahme mit Begründung, z. B. Chancen im Herkunftsland, Verbundenheit, oder: Heimat ist die Schweiz, eigene Lebensplanung." }
    ] }
},
"wt-marseille": {
  2: { vor: "Was macht eine Stadt für dich lebenswert? Nenne drei Dinge.",
    dauer: "ca. 250 Wörter", text: "Marseille liegt an der Mittelmeerküste im Süden Frankreichs und hat rund 870 000 Einwohnerinnen und Einwohner. Damit ist sie nach Paris die zweitgrösste Stadt des Landes. Um 600 vor Christus gründeten griechische Seefahrer aus der Stadt Phokaia hier einen Handelshafen namens Massalia. Marseille ist somit die älteste Stadt Frankreichs.\n\nDer Hafen war immer das Zentrum der Stadt. Von hier aus wurden Waren in alle Welt verschifft, und hier kamen Menschen aus vielen Ländern an: Italiener, Armenier, Algerier, Menschen von den Komoren und aus Westafrika. Deshalb ist Marseille bis heute eine sehr vielfältige Stadt. Auch die französische Nationalhymne, die «Marseillaise», hat ihren Namen von hier: Freiwillige Soldaten aus Marseille sangen das Lied 1792 auf ihrem Marsch nach Paris.\n\nWer Marseille besucht, startet oft am Alten Hafen. Von dort führt ein steiler Weg zur Basilika Notre-Dame de la Garde, die man «la Bonne Mère» nennt. Neben dem Hafen steht das moderne Museum Mucem, das 2013 eröffnet wurde, als Marseille Kulturhauptstadt Europas war. Ganz in der Nähe beginnen die Calanques, schmale Buchten zwischen Kalkfelsen. Seit 2012 sind sie ein Nationalpark.\n\nDie Stadt hat aber auch Probleme. In den nördlichen Quartieren ist die Arbeitslosigkeit hoch, und Drogenbanden kämpfen um die Kontrolle. Immer wieder kommt es zu Schiessereien, bei denen auch junge Menschen sterben.\n\nVerbunden sind fast alle durch die Liebe zum Fussballclub Olympique de Marseille. Als OM 1993 die Champions League gewann, feierte die ganze Stadt. Bis heute ist OM der einzige französische Club, der diesen Titel geholt hat.",
    wort: [["der Handelshafen","Hafen, in dem Waren gekauft und verkauft werden"],["verschiffen","mit dem Schiff transportieren"],["vielfältig","mit vielen Unterschieden, bunt gemischt"],["die Nationalhymne","das offizielle Lied eines Landes"],["die Kulturhauptstadt","Stadt, die ein Jahr lang ihre Kultur besonders zeigt"],["die Arbeitslosigkeit","wenn viele Menschen keine Arbeit haben"]],
    mc: [
      { q: "Woher kamen die Gründer von Marseille?", o: ["Aus Rom","Aus der griechischen Stadt Phokaia","Aus Paris","Aus Nordafrika"], a: 1 },
      { q: "Warum heisst die französische Nationalhymne «Marseillaise»?", o: ["Weil sie in Marseille geschrieben wurde","Weil Soldaten aus Marseille sie 1792 auf dem Marsch nach Paris sangen","Weil der Fussballclub sie singt","Weil sie vom Meer handelt"], a: 1 },
      { q: "Was geschah 2013 in Marseille?", o: ["Die Stadt war Kulturhauptstadt Europas, und das Mucem wurde eröffnet","OM gewann die Champions League","Die Calanques wurden Nationalpark","Die Stadt wurde gegründet"], a: 0 },
      { q: "Welches Problem gibt es in den nördlichen Quartieren?", o: ["Zu viele Touristen","Hohe Arbeitslosigkeit und Drogenbanden","Zu wenig Wasser","Zu viele Museen"], a: 1 }
    ],
    rf: [
      { s: "Marseille wurde um 600 vor Christus gegründet.", a: true },
      { s: "Die Calanques sind seit 2012 ein Nationalpark.", a: true },
      { s: "Viele französische Clubs haben die Champions League gewonnen.", a: false, x: "OM ist bis heute der einzige französische Club mit diesem Titel." },
      { s: "In Marseille leben nur wenige Menschen mit ausländischen Wurzeln.", a: false, x: "Marseille ist sehr vielfältig, viele Menschen kamen aus anderen Ländern." }
    ],
    offen: [
      { q: "Warum ist Marseille eine so vielfältige Stadt? Erkläre mit dem Text.", l: "Als Hafenstadt kamen seit Jahrhunderten Menschen aus vielen Ländern an (Italien, Armenien, Algerien, Komoren, Westafrika)." },
      { q: "Der Text zeigt schöne und schwierige Seiten von Marseille. Nenne je zwei.", l: "Schön: Alter Hafen, Notre-Dame de la Garde, Mucem, Calanques, OM. Schwierig: hohe Arbeitslosigkeit, Drogenbanden, Schiessereien in den nördlichen Quartieren." }
    ] },
  3: { vor: "Kann eine Stadt gleichzeitig schön und gefährlich sein? Wie würdest du über eine solche Stadt berichten?",
    dauer: "ca. 320 Wörter", text: "Marseille polarisiert. Für die einen ist die Hafenstadt am Mittelmeer die lebendigste und ehrlichste Stadt Frankreichs, für andere ein Ort, den man wegen der Kriminalität besser meidet. Beide Bilder enthalten etwas Wahres, und gerade dieser Widerspruch macht Marseille interessant.\n\nDie Geschichte der Stadt beginnt um 600 vor Christus, als griechische Kolonisten aus Phokaia in Kleinasien den Hafen Massalia gründeten. Damit ist Marseille älter als Paris und die älteste Stadt Frankreichs. Über Jahrhunderte lebte sie vom Seehandel, besonders mit dem Nahen Osten und Nordafrika. Während der französischen Kolonialzeit war der Hafen das Tor nach Algerien, und viele Menschen, die nach der Unabhängigkeit Algeriens 1962 nach Frankreich kamen, liessen sich hier nieder. Zuvor waren bereits Italiener, Armenier und Griechen eingewandert, später kamen Menschen von den Komoren und aus Westafrika. Diese Mischung prägt das Stadtbild, die Küche und die Sprache, und viele Marseillais sind stolz darauf, dass ihre Stadt «aus aller Welt» besteht.\n\nIn den letzten Jahrzehnten hat Marseille viel investiert, um sein Image zu verbessern. Als Kulturhauptstadt Europas 2013 erhielt die Stadt das Museum Mucem, die alten Hafenanlagen wurden zu Promenaden umgebaut, und bei den Olympischen Spielen 2024 fanden hier die Segelwettbewerbe statt. Gleichzeitig ist die Stadt stark gespalten. In den Hochhaussiedlungen der nördlichen Quartiere liegt die Arbeitslosigkeit, besonders bei Jugendlichen, deutlich über dem Durchschnitt. Drogenbanden werben dort Jugendliche an, manchmal schon mit 13 oder 14 Jahren, und Konflikte zwischen den Gruppen enden immer wieder tödlich. Die Regierung reagiert mit mehr Polizei, Sozialarbeiterinnen und Bewohner fordern dagegen vor allem bessere Schulen, Arbeitsplätze und Freizeitangebote.\n\nWas die Stadt trotz allem zusammenhält, ist auch der Fussball. Olympique de Marseille gewann 1993 als bisher einziger französischer Club die Champions League. Der Erfolg wurde allerdings überschattet: Kurz darauf wurde bekannt, dass OM ein Ligaspiel gekauft hatte, und dem Verein wurde der französische Meistertitel aberkannt. Die Begeisterung der Fans hat das nicht gebremst. Im Stade Vélodrome sitzen bei Heimspielen Menschen aus allen Quartieren nebeneinander, und für neunzig Minuten zählt nur eines: OM.",
    wort: [["polarisieren","Menschen in zwei gegensätzliche Meinungen teilen"],["der Widerspruch","zwei Dinge, die nicht zusammenpassen"],["der Kolonist","Person, die sich in einem fremden Gebiet ansiedelt"],["das Image","das Bild, das andere von etwas haben"],["gespalten","in Teile getrennt, die wenig miteinander zu tun haben"],["anwerben","jemanden für eine Arbeit oder Gruppe gewinnen"],["aberkennen","offiziell wegnehmen"]],
    mc: [
      { q: "Was meint der Text mit «Marseille polarisiert»?", o: ["Marseille liegt am Nordpol","Die Menschen haben sehr gegensätzliche Meinungen über die Stadt","Marseille hat zwei Häfen","In Marseille ist es sehr kalt"], a: 1 },
      { q: "Warum liessen sich viele Menschen aus Algerien in Marseille nieder?", o: ["Weil der Hafen das Tor nach Algerien war","Weil es dort Arbeit im Bergbau gab","Weil Marseille in Algerien liegt","Weil sie Fussball spielen wollten"], a: 0 },
      { q: "Was fordern Sozialarbeiterinnen und Bewohner der nördlichen Quartiere vor allem?", o: ["Mehr Polizei","Bessere Schulen, Arbeitsplätze und Freizeitangebote","Ein neues Stadion","Weniger Touristen"], a: 1 },
      { q: "Warum wurde der Erfolg von OM 1993 «überschattet»?", o: ["Weil OM ein Ligaspiel gekauft hatte und den Meistertitel verlor","Weil das Stadion abbrannte","Weil der Trainer zurücktrat","Weil die Fans nicht feierten"], a: 0 }
    ],
    rf: [
      { s: "Marseille ist älter als Paris.", a: true },
      { s: "2024 fanden in Marseille die olympischen Segelwettbewerbe statt.", a: true },
      { s: "Laut Text wirbt die Drogenkriminalität nur Erwachsene an.", a: false, x: "Drogenbanden werben manchmal schon 13- oder 14-Jährige an." },
      { s: "Nach dem Skandal von 1993 verloren die Fans ihre Begeisterung für OM.", a: false, x: "Die Begeisterung der Fans hat das nicht gebremst." }
    ],
    offen: [
      { q: "Der Text nennt zwei unterschiedliche Antworten auf die Gewalt in den nördlichen Quartieren. Vergleiche sie und sag, welche du sinnvoller findest.", l: "Regierung: mehr Polizei (kurzfristig Sicherheit). Sozialarbeiter/Bewohner: bessere Schulen, Arbeit, Freizeit (Ursachen bekämpfen). Eigene begründete Einschätzung, evtl. Kombination." },
      { q: "Wie zeigt sich die Geschichte der Einwanderung im heutigen Marseille? Nenne Beispiele aus dem Text.", l: "Menschen aus Italien, Armenien, Griechenland, Algerien, Komoren, Westafrika; prägt Stadtbild, Küche und Sprache; Stolz darauf, dass die Stadt «aus aller Welt» besteht." },
      { q: "Erkläre, welche Rolle der Fussball für den Zusammenhalt in Marseille spielt. Glaubst du, Sport kann eine gespaltene Stadt verbinden? Begründe.", l: "Im Stade Vélodrome sitzen Menschen aus allen Quartieren nebeneinander; OM verbindet über soziale Grenzen hinweg. Eigene begründete Meinung, z. B. Sport verbindet, löst aber keine Probleme wie Arbeitslosigkeit." }
    ] }
},
"wt-favelas": {
  2: { vor: "Was denkst du: Woher kommen unsere Vorstellungen über Orte, die wir nie besucht haben?",
    dauer: "ca. 260 Wörter", text: "Rio de Janeiro ist eine der bekanntesten Städte Brasiliens. Neben den berühmten Stränden und der Christusstatue auf dem Corcovado prägen auch die Favelas das Bild der Stadt. So nennt man Siedlungen, die oft ohne Bewilligung an steilen Hügeln entstanden sind. In Rio leben etwa ein Fünftel aller Einwohner in einer Favela.\n\nDie erste Favela entstand Ende des 19. Jahrhunderts auf dem Hügel Morro da Providência. Ehemalige Soldaten, die von einem Krieg zurückkamen, bauten dort Hütten, weil sie sich keine Wohnung leisten konnten. Ihren Namen hat die Favela von einer Pflanze, die auf den Hügeln wuchs. Im 20. Jahrhundert kamen Millionen Menschen aus armen Regionen Brasiliens nach Rio, um Arbeit zu suchen. Weil es nicht genug günstige Wohnungen gab, bauten sie ihre Häuser selbst. Heute sind die meisten Häuser aus Backstein und Beton, oft mit mehreren Stockwerken übereinander.\n\nDie grösste Favela Rios ist Rocinha mit rund 70 000 Bewohnerinnen und Bewohnern. Sie hat eigene Geschäfte, Banken, Schulen und Busse. Trotzdem fehlen in vielen Favelas wichtige Dinge: Abwasserleitungen, Ärzte, sichere Wege. Bei starkem Regen kann es zu Erdrutschen kommen.\n\nEin grosses Problem ist die Gewalt. In vielen Favelas bestimmen bewaffnete Drogenbanden oder sogenannte Milizen, was passiert. Vor der Fussball-Weltmeisterschaft 2014 und den Olympischen Spielen 2016 schickte die Regierung spezielle Polizeieinheiten in einige Favelas, um sie zu «befrieden». Zuerst wurde es ruhiger, doch später kehrte die Gewalt in viele Quartiere zurück.\n\nDie meisten Menschen in den Favelas haben mit Kriminalität nichts zu tun. Sie arbeiten als Verkäuferinnen, Bauarbeiter oder Busfahrer und halten die Stadt am Laufen. Viele ärgern sich darüber, dass Medien fast nur über Gewalt berichten.",
    wort: [["die Siedlung","Gruppe von Häusern, in denen Menschen wohnen"],["die Bewilligung","offizielle Erlaubnis"],["der Erdrutsch","wenn ein Stück Hang plötzlich abrutscht"],["die Miliz","bewaffnete Gruppe, die nicht zur offiziellen Armee gehört"],["befrieden","dafür sorgen, dass Ruhe und Frieden herrschen"],["am Laufen halten","dafür sorgen, dass etwas funktioniert"]],
    mc: [
      { q: "Wer baute die erste Favela?", o: ["Reiche Händler","Ehemalige Soldaten, die sich keine Wohnung leisten konnten","Touristen","Die Regierung"], a: 1 },
      { q: "Woher hat die Favela ihren Namen?", o: ["Von einem Fussballer","Von einer Pflanze, die auf den Hügeln wuchs","Von einem Fluss","Von einer Stadt in Portugal"], a: 1 },
      { q: "Was geschah vor der WM 2014 und den Olympischen Spielen 2016?", o: ["Alle Favelas wurden abgerissen","Spezielle Polizeieinheiten wurden in einige Favelas geschickt","Die Favelas bekamen eigene Stadien","Die Bewohner zogen weg"], a: 1 },
      { q: "Worüber ärgern sich viele Bewohnerinnen und Bewohner?", o: ["Dass Medien fast nur über Gewalt berichten","Dass es zu viele Busse gibt","Dass es keine Strände gibt","Dass sie zu viel Geld verdienen"], a: 0 }
    ],
    rf: [
      { s: "In Rocinha gibt es eigene Geschäfte, Banken und Schulen.", a: true },
      { s: "Die meisten Häuser in Favelas sind heute aus Holz.", a: false, x: "Die meisten sind aus Backstein und Beton, oft mit mehreren Stockwerken." },
      { s: "Nach den Polizeieinsätzen blieb es in allen Favelas dauerhaft ruhig.", a: false, x: "Zuerst wurde es ruhiger, doch später kehrte die Gewalt in viele Quartiere zurück." },
      { s: "Bei starkem Regen kann es in Favelas Erdrutsche geben.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum im 20. Jahrhundert so viele Favelas entstanden.", l: "Millionen Menschen kamen aus armen Regionen nach Rio, um Arbeit zu finden; es gab nicht genug günstige Wohnungen, also bauten sie ihre Häuser selbst." },
      { q: "Warum ist es unfair, wenn Medien fast nur über Gewalt in Favelas berichten? Begründe mit dem Text.", l: "Die meisten Bewohner haben mit Kriminalität nichts zu tun, arbeiten und halten die Stadt am Laufen; einseitige Berichte erzeugen Vorurteile." }
    ] },
  3: { vor: "Wer ist verantwortlich, wenn Menschen in einer Stadt unter schlechten Bedingungen leben: die Menschen selbst, die Regierung oder alle zusammen?",
    dauer: "ca. 320 Wörter", text: "Die Favelas von Rio de Janeiro gehören zu den bekanntesten Armenvierteln der Welt. Sie erscheinen in Filmen, Musikvideos und Reiseberichten, oft entweder als Schauplatz brutaler Gewalt oder als romantisch bunte Kulisse. Beide Bilder greifen zu kurz, denn die Favelas sind vor allem eines: Wohnorte von über einer Million Menschen, deren Alltag von Ungleichheit, aber auch von Zusammenhalt geprägt ist.\n\nIhre Entstehung ist eng mit der Geschichte Brasiliens verbunden. Nach der Abschaffung der Sklaverei im Jahr 1888 erhielten die befreiten Menschen weder Land noch Entschädigung. Viele zogen in die Städte, wo sie keine bezahlbaren Wohnungen fanden. Ende des 19. Jahrhunderts entstand mit dem Morro da Providência die erste Favela. Im Laufe des 20. Jahrhunderts wuchsen diese Siedlungen rasant, weil Hunderttausende aus dem armen Nordosten Brasiliens in die Industriestädte zogen. Der Staat liess die Menschen gewähren, kümmerte sich aber kaum um Wasser, Strom, Schulen oder Gesundheitsversorgung. Manche Favelas wurden abgerissen und ihre Bewohner an den Stadtrand umgesiedelt, weit weg von ihren Arbeitsplätzen.\n\nIn diese Lücke stiessen bewaffnete Gruppen. Drogenbanden und Milizen, die oft aus ehemaligen Polizisten bestehen, kontrollieren heute viele Favelas. Sie verlangen Schutzgeld, bestimmen, wer welche Dienstleistungen anbieten darf, und tragen ihre Konflikte mit Waffengewalt aus. Polizeieinsätze sind häufig, und sie fordern immer wieder Todesopfer, darunter auch Unbeteiligte. Menschenrechtsorganisationen kritisieren, dass die Polizei in den Favelas viel schneller zur Waffe greift als in reichen Quartieren. Das Projekt der «Befriedungspolizei», das vor der Fussball-WM 2014 und den Olympischen Spielen 2016 gestartet wurde, brachte zunächst mehr Sicherheit, scheiterte aber langfristig an fehlenden Investitionen in Bildung und Infrastruktur.\n\nTrotz allem sind Favelas Orte voller Energie. Bewohnerinnen und Bewohner gründen Vereine, Radiosender und Kulturprojekte. Musikstile wie der Funk carioca und der Samba haben hier wichtige Wurzeln. Inzwischen werden in einigen Favelas auch Führungen angeboten. Ob solcher Tourismus den Menschen nützt oder ihre Armut zur Attraktion macht, ist umstritten. Viele Fachleute sind sich jedoch einig: Nachhaltige Verbesserungen gelingen nur, wenn die Bewohnerinnen und Bewohner selbst mitentscheiden.",
    wort: [["zu kurz greifen","nicht genug erklären, zu einfach sein"],["die Ungleichheit","wenn manche viel mehr haben als andere"],["die Entschädigung","Geld als Ausgleich für ein Unrecht"],["gewähren lassen","etwas erlauben, ohne einzugreifen"],["umsiedeln","Menschen an einen anderen Wohnort bringen"],["die Infrastruktur","Strassen, Leitungen, Schulen usw., die eine Stadt braucht"],["nachhaltig","so, dass es lange wirkt"]],
    mc: [
      { q: "Warum «greifen beide Bilder zu kurz» laut Text?", o: ["Weil Favelas weder nur gefährlich noch nur bunt und romantisch sind","Weil es keine Filme über Favelas gibt","Weil Favelas sehr klein sind","Weil niemand in Favelas wohnt"], a: 0 },
      { q: "Welchen Zusammenhang stellt der Text zwischen Sklaverei und Favelas her?", o: ["Es gibt keinen Zusammenhang","Befreite Menschen erhielten nach 1888 weder Land noch Entschädigung und fanden keine bezahlbaren Wohnungen","Sklaven bauten die Strände","Die Favelas wurden für Sklaven gebaut"], a: 1 },
      { q: "Was kritisieren Menschenrechtsorganisationen?", o: ["Dass es zu wenig Tourismus gibt","Dass die Polizei in Favelas schneller zur Waffe greift als in reichen Quartieren","Dass es zu viele Radiosender gibt","Dass Samba verboten ist"], a: 1 },
      { q: "Warum scheiterte die «Befriedungspolizei» langfristig?", o: ["Weil es zu viele Polizisten gab","Wegen fehlender Investitionen in Bildung und Infrastruktur","Weil die Bewohner wegzogen","Weil die WM abgesagt wurde"], a: 1 }
    ],
    rf: [
      { s: "Die Sklaverei wurde in Brasilien 1888 abgeschafft.", a: true },
      { s: "Milizen bestehen oft aus ehemaligen Polizisten.", a: true },
      { s: "Laut Text sind sich alle einig, dass Favela-Tourismus den Bewohnern nützt.", a: false, x: "Ob solcher Tourismus nützt oder Armut zur Attraktion macht, ist umstritten." },
      { s: "Umgesiedelte Bewohner wohnten danach näher bei ihren Arbeitsplätzen.", a: false, x: "Sie wurden an den Stadtrand umgesiedelt, weit weg von ihren Arbeitsplätzen." }
    ],
    offen: [
      { q: "Erkläre mit dem Text, wie es dazu kam, dass bewaffnete Gruppen in vielen Favelas die Kontrolle haben.", l: "Der Staat kümmerte sich kaum um Wasser, Strom, Schulen und Gesundheit; in diese Lücke stiessen Drogenbanden und Milizen, die Schutzgeld verlangen und Dienstleistungen kontrollieren." },
      { q: "Der Text nennt Schwächen und Stärken der Favelas. Fasse beides in je zwei bis drei Punkten zusammen.", l: "Schwächen: Gewalt, Banden/Milizen, fehlende Infrastruktur, Ungleichheit, Polizeigewalt. Stärken: Zusammenhalt, Vereine, Radiosender, Kulturprojekte, Musik (Funk carioca, Samba)." },
      { q: "Würdest du an einer Führung durch eine Favela teilnehmen? Nimm Stellung und berücksichtige beide Seiten aus dem Text.", l: "Individuelle Stellungnahme, z. B. pro: Einnahmen für Bewohner, Vorurteile abbauen; contra: Armut als Attraktion, Privatsphäre der Menschen; ev. Bedingung: nur Touren, die von Bewohnern selbst organisiert werden." }
    ] }
},
"wt-mafia": {
  2: { vor: "Warum gehorchen Menschen manchmal Regeln, obwohl sie sie ungerecht finden?",
    dauer: "ca. 280 Wörter", text: "Die Mafia ist ein Netzwerk krimineller Gruppen, die mit Gewalt und Einschüchterung Geld verdienen. In Italien gibt es drei besonders bekannte Organisationen: die Cosa Nostra auf Sizilien, die Camorra in der Region um Neapel und die 'Ndrangheta in Kalabrien. Sie handeln mit Drogen, erpressen Geschäfte und versuchen, öffentliche Aufträge zu bekommen, zum Beispiel beim Bau von Strassen.\n\nDie Mitglieder sind in «Familien» organisiert, die nicht immer echte Verwandte sind. Über allen steht die Regel der Omertà, des Schweigens. Wer der Polizei etwas verrät, gilt als Verräter und muss mit Rache rechnen. Deshalb trauten sich lange auch Menschen, die nichts mit der Mafia zu tun hatten, nicht, gegen sie auszusagen.\n\nIn den 1980er-Jahren gelang es den Richtern Giovanni Falcone und Paolo Borsellino zum ersten Mal, die Omertà zu brechen. Einige Mafiosi wurden zu Zeugen, sogenannten Pentiti, und erzählten, wie die Organisation funktioniert. Im «Maxiprozess» in Palermo standen fast 500 Angeklagte vor Gericht, und viele wurden verurteilt. Die Mafia rächte sich: Im Mai 1992 wurde Falcone mit einer Bombe auf der Autobahn getötet, im Juli 1992 Borsellino in Palermo. Die Morde lösten in ganz Italien eine Welle der Empörung aus.\n\nSeitdem hat der Staat viel erreicht. Viele Bosse sitzen im Gefängnis, zum Beispiel Matteo Messina Denaro, der 2023 nach 30 Jahren auf der Flucht verhaftet wurde. Vermögen der Mafia wird beschlagnahmt, und auf manchen Feldern, die früher Mafiosi gehörten, bauen heute Genossenschaften Gemüse und Wein an.\n\nAuch die Bevölkerung wehrt sich, etwa mit der Bewegung «Addiopizzo» in Palermo, deren Mitglieder kein Schutzgeld mehr bezahlen. Trotzdem ist die Mafia nicht verschwunden. Die 'Ndrangheta gilt heute als eine der reichsten kriminellen Organisationen der Welt und ist auch in Deutschland und der Schweiz aktiv.",
    wort: [["die Einschüchterung","jemandem Angst machen, damit er tut, was man will"],["erpressen","mit Drohungen Geld verlangen"],["aussagen","vor Gericht erzählen, was man weiss"],["die Empörung","grosse Wut über ein Unrecht"],["beschlagnahmen","offiziell wegnehmen"],["die Genossenschaft","Gruppe, die ein Unternehmen gemeinsam besitzt"]],
    mc: [
      { q: "Womit verdient die Mafia laut Text Geld?", o: ["Mit Drogenhandel, Erpressung und öffentlichen Aufträgen","Mit Fussballspielen","Mit Pizza-Restaurants","Mit Tourismus"], a: 0 },
      { q: "Wer sind die «Pentiti»?", o: ["Polizisten","Mafiosi, die als Zeugen aussagen","Richter in Palermo","Mitglieder von Addiopizzo"], a: 1 },
      { q: "Was geschah 1992?", o: ["Der Maxiprozess begann","Falcone und Borsellino wurden von der Mafia getötet","Addiopizzo wurde gegründet","Messina Denaro wurde verhaftet"], a: 1 },
      { q: "Was passiert heute mit einigen Feldern der Mafia?", o: ["Sie werden verkauft an andere Mafiosi","Genossenschaften bauen dort Gemüse und Wein an","Sie werden zu Parkplätzen","Sie bleiben leer"], a: 1 }
    ],
    rf: [
      { s: "Die Mitglieder einer Mafia-«Familie» sind immer echte Verwandte.", a: false, x: "Die «Familien» bestehen nicht immer aus echten Verwandten." },
      { s: "Im Maxiprozess standen fast 500 Angeklagte vor Gericht.", a: true },
      { s: "Matteo Messina Denaro war 30 Jahre auf der Flucht.", a: true },
      { s: "Die 'Ndrangheta ist nur in Italien aktiv.", a: false, x: "Sie ist auch in Deutschland und der Schweiz aktiv." }
    ],
    offen: [
      { q: "Erkläre, was die Omertà ist und warum sie für die Mafia so wichtig war.", l: "Die Regel des Schweigens: Niemand darf mit der Polizei reden, sonst droht Rache. So konnte die Mafia lange ungestört arbeiten, weil kaum jemand aussagte." },
      { q: "Nenne drei Erfolge im Kampf gegen die Mafia aus dem Text.", l: "Maxiprozess mit vielen Verurteilungen; Verhaftung von Bossen wie Messina Denaro; Beschlagnahmung von Vermögen und Nutzung durch Genossenschaften; Addiopizzo." }
    ] },
  3: { vor: "Was kann eine einzelne Person gegen eine mächtige Organisation ausrichten?",
    dauer: "ca. 350 Wörter", text: "Kaum ein Phänomen ist so stark mit Italien verbunden wie die Mafia, und kaum eines wird so oft verklärt. In Filmen erscheinen Mafiosi als elegante Männer mit Ehrenkodex, die ihre Familie schützen. Die Wirklichkeit sieht anders aus: Die Mafia ist ein System, das auf Angst, Gewalt und der Schwäche staatlicher Institutionen beruht.\n\nIhre Wurzeln reichen ins 19. Jahrhundert zurück. Im Süden Italiens, besonders auf Sizilien, war der Staat damals weit weg und kaum präsent. Grossgrundbesitzer setzten bewaffnete Männer ein, um ihr Land zu schützen und Streitigkeiten zu regeln. Aus diesen Gruppen entwickelten sich Organisationen, die bald selbst Abgaben verlangten und Gewalt ausübten. Neben der sizilianischen Cosa Nostra entstanden die Camorra in Kampanien und die 'Ndrangheta in Kalabrien. Gemeinsam ist ihnen, dass sie nicht nur kriminell sind, sondern sich auch in Wirtschaft und Politik einnisten: Sie beeinflussen Wahlen, gewinnen öffentliche Bauaufträge und waschen ihr Geld in legalen Firmen.\n\nIhre grösste Waffe war lange die Omertà, das Gesetz des Schweigens. Wer redete, riskierte sein Leben und das seiner Angehörigen. Erst in den 1980er-Jahren gelang es einer Gruppe von Untersuchungsrichtern um Giovanni Falcone und Paolo Borsellino, dieses Schweigen zu durchbrechen. Mit Hilfe von Aussteigern rekonstruierten sie die Struktur der Cosa Nostra. Im Maxiprozess von 1986/87 wurden über 300 Angeklagte verurteilt, ein historischer Erfolg. Die Mafia antwortete 1992 mit zwei Bombenanschlägen, bei denen Falcone, Borsellino, Falcones Frau und mehrere Leibwächter starben. Die Anschläge erschütterten das Land und führten zu härteren Gesetzen, etwa zur Möglichkeit, Mafiavermögen zu beschlagnahmen und für soziale Zwecke zu nutzen.\n\nWichtig wurde auch der Widerstand aus der Gesellschaft. Die Organisation Libera vernetzt seit 1995 Initiativen gegen die Mafia, und in Palermo gründeten Jugendliche 2004 die Bewegung Addiopizzo. Sie klebten nachts Zettel mit dem Satz: «Ein ganzes Volk, das Schutzgeld zahlt, ist ein Volk ohne Würde.»\n\nDennoch ist die Mafia nicht besiegt, sondern hat sich verändert. Statt auf spektakuläre Morde setzt sie heute stärker auf unauffällige Geschäfte und internationale Netzwerke. Die 'Ndrangheta kontrolliert grosse Teile des europäischen Kokainhandels und ist in vielen Ländern präsent, auch in der Schweiz. Ermittler betonen, dass Mafiagruppen dort am erfolgreichsten sind, wo Menschen wegschauen.",
    wort: [["verklären","etwas schöner darstellen, als es ist"],["der Ehrenkodex","Regeln über Ehre und richtiges Verhalten"],["präsent","anwesend, sichtbar"],["sich einnisten","sich festsetzen, oft heimlich"],["Geld waschen","illegales Geld so verstecken, dass es legal aussieht"],["der Aussteiger","Person, die eine Gruppe verlässt"],["die Würde","der Wert und die Achtung, die jeder Mensch verdient"]],
    mc: [
      { q: "Warum konnte die Mafia im 19. Jahrhundert auf Sizilien entstehen?", o: ["Weil der Staat dort kaum präsent war","Weil es dort viele Polizisten gab","Weil Sizilien sehr reich war","Weil die Mafia aus Amerika kam"], a: 0 },
      { q: "Was bedeutet es, dass sich die Mafia in Wirtschaft und Politik «einnistet»?", o: ["Sie baut Nester","Sie beeinflusst Wahlen, gewinnt Aufträge und wäscht Geld in legalen Firmen","Sie gründet eine Partei","Sie zieht sich zurück"], a: 1 },
      { q: "Welche Folge hatten die Anschläge von 1992?", o: ["Die Mafia wurde stärker und niemand reagierte","Sie erschütterten das Land und führten zu härteren Gesetzen","Falcone wurde Präsident","Die Omertà wurde Gesetz"], a: 1 },
      { q: "Wie hat sich die Mafia laut Text verändert?", o: ["Sie setzt mehr auf unauffällige Geschäfte und internationale Netzwerke","Sie ist ganz verschwunden","Sie verübt mehr spektakuläre Morde","Sie arbeitet nur noch auf Sizilien"], a: 0 }
    ],
    rf: [
      { s: "Im Maxiprozess wurden über 300 Angeklagte verurteilt.", a: true },
      { s: "Bei den Anschlägen von 1992 starben auch Leibwächter.", a: true },
      { s: "Laut Text ist die Mafia heute besiegt.", a: false, x: "Sie ist nicht besiegt, sondern hat sich verändert." },
      { s: "Die Organisation Libera wurde 2004 von Jugendlichen in Palermo gegründet.", a: false, x: "2004 entstand Addiopizzo; Libera gibt es seit 1995." }
    ],
    offen: [
      { q: "Der Text sagt, Filme würden die Mafia «verklären». Vergleiche das Bild in Filmen mit der Wirklichkeit, die der Text beschreibt.", l: "Filme: elegante Männer mit Ehrenkodex, die ihre Familie schützen. Wirklichkeit: System aus Angst, Gewalt, Erpressung, Korruption, Morden auch an Unschuldigen und Richtern." },
      { q: "Erkläre, was der Satz «Ein ganzes Volk, das Schutzgeld zahlt, ist ein Volk ohne Würde» bedeuten soll.", l: "Wer Schutzgeld zahlt, unterwirft sich aus Angst; wenn alle zahlen, akzeptiert die ganze Gesellschaft das Unrecht. Der Satz soll Mut machen, sich zu wehren und die eigene Würde zurückzugewinnen." },
      { q: "Ermittler sagen, die Mafia sei dort am erfolgreichsten, wo Menschen wegschauen. Was kann jede und jeder Einzelne tun? Nimm Stellung.", l: "Individuelle Antwort, z. B. Unrecht melden, bei Geschäften ohne Schutzgeld einkaufen, sich informieren, Mafia nicht als cool darstellen; auch Grenzen des Einzelnen (Angst, Gefahr) können diskutiert werden." }
    ] }
},
"wt-shopping": {
  2: { vor: "Wie viele Kleidungsstücke in deinem Schrank trägst du wirklich regelmässig? Schätze.",
    dauer: "ca. 280 Wörter", text: "Noch vor dreissig Jahren brachten Modegeschäfte zwei Kollektionen pro Jahr heraus: eine für den Sommer und eine für den Winter. Heute sind es bei grossen Ketten oft über zwanzig, und manche Online-Händler stellen täglich Tausende neue Artikel online. Dieses System heisst «Fast Fashion». Die Kleider sind billig und modisch, aber oft von schlechter Qualität. Sie sollen nicht lange halten, sondern schnell durch neue ersetzt werden.\n\nDamit ein T-Shirt nur fünf Franken kosten kann, muss überall gespart werden. Die meisten Kleider werden in Asien genäht, zum Beispiel in Bangladesch. Eine Näherin verdient dort rund 100 Franken im Monat, obwohl sie oft sechs Tage pro Woche zehn Stunden oder mehr arbeitet. Wie gefährlich die Bedingungen sein können, zeigte sich am 24. April 2013: In der Nähe der Hauptstadt Dhaka stürzte das Fabrikgebäude Rana Plaza ein. Die Arbeiterinnen hatten am Vortag Risse in den Wänden bemerkt, mussten aber trotzdem weiterarbeiten. Über 1100 Menschen starben. Danach unterschrieben viele Modefirmen ein Abkommen für mehr Sicherheit in den Fabriken.\n\nAuch die Umwelt bezahlt einen hohen Preis. Für ein einziges Baumwoll-T-Shirt braucht man etwa 2700 Liter Wasser, so viel, wie ein Mensch in mehreren Jahren trinkt. Viele Kleider bestehen ausserdem aus Polyester, also aus Erdöl. Beim Waschen lösen sich winzige Plastikfasern, die ins Meer gelangen.\n\nWas passiert mit Kleidern, die wir nicht mehr wollen? Ein Teil wird in Second-Hand-Läden verkauft. Sehr viel landet aber in Ländern wie Ghana oder Chile. Dort kann man nicht alles weiterverkaufen, und riesige Kleiderberge verschmutzen Strände und Wüsten.\n\nEs gibt Alternativen: Second-Hand, Kleidertausch, Reparieren oder Marken, die faire Löhne bezahlen. Am nachhaltigsten ist aber das Kleidungsstück, das man schon besitzt.",
    wort: [["der Artikel","hier: ein Produkt, das verkauft wird"],["ersetzen","etwas Altes durch etwas Neues austauschen"],["der Riss","eine schmale Öffnung, z. B. in einer Wand"],["das Abkommen","eine Vereinbarung zwischen mehreren Partnern"],["das Polyester","ein Stoff aus Kunststoff"],["nachhaltig","so, dass es Umwelt und Menschen wenig schadet"]],
    mc: [
      { q: "Wie viele Kollektionen brachten Modegeschäfte vor dreissig Jahren pro Jahr heraus?", o: ["Eine","Zwei","Zwanzig","Hundert"], a: 1 },
      { q: "Was hatten die Arbeiterinnen von Rana Plaza am Tag vor dem Einsturz bemerkt?", o: ["Feuer im Keller","Risse in den Wänden","Wasser im Gebäude","Einen Stromausfall"], a: 1 },
      { q: "Was passiert beim Waschen von Polyester-Kleidern?", o: ["Sie werden grösser","Es lösen sich winzige Plastikfasern","Sie verlieren ihre Farbe","Nichts"], a: 1 },
      { q: "Was ist laut Text am nachhaltigsten?", o: ["Ein Kleidungsstück, das man schon besitzt","Ein Bio-T-Shirt","Ein teures Markenkleid","Kleider aus Polyester"], a: 0 }
    ],
    rf: [
      { s: "Manche Online-Händler stellen täglich Tausende neue Artikel online.", a: true },
      { s: "Eine Näherin in Bangladesch verdient etwa 1000 Franken im Monat.", a: false, x: "Sie verdient rund 100 Franken im Monat." },
      { s: "Nach Rana Plaza unterschrieben viele Firmen ein Abkommen für mehr Sicherheit.", a: true },
      { s: "Alle gebrauchten Kleider werden in Second-Hand-Läden weiterverkauft.", a: false, x: "Sehr viel landet in Ländern wie Ghana oder Chile, wo Kleiderberge die Umwelt verschmutzen." }
    ],
    offen: [
      { q: "Erkläre, warum ein T-Shirt so billig sein kann. Nenne zwei Gründe aus dem Text.", l: "Sehr tiefe Löhne in Ländern wie Bangladesch, lange Arbeitszeiten, schlechte Sicherheit, billige Materialien wie Polyester, schlechte Qualität, Kosten für die Umwelt werden nicht bezahlt." },
      { q: "Der Text sagt: Das nachhaltigste Kleidungsstück ist das, das man schon besitzt. Was ist damit gemeint?", l: "Für Kleider, die man schon hat, werden kein neues Wasser, keine Rohstoffe und keine Arbeit gebraucht; wer seine Kleider lange trägt und repariert, schont Umwelt und Menschen." }
    ] },
  3: { vor: "Wer ist verantwortlich dafür, dass Kleider fair und umweltfreundlich hergestellt werden: Firmen, Politik oder Kundinnen und Kunden?",
    dauer: "ca. 350 Wörter", text: "Mode war lange ein Luxus. Kleidung wurde massgeschneidert, geflickt und oft über Generationen weitergegeben. Heute ist sie ein Massenprodukt, das manchmal weniger kostet als ein Mittagessen. Diese Entwicklung hat einen Namen, Fast Fashion, und inzwischen sogar eine Steigerung: Ultra Fast Fashion. Online-Plattformen analysieren mit Algorithmen, welche Styles in den sozialen Medien gerade beliebt sind, und produzieren innerhalb weniger Tage passende Kleider in grossen Mengen. Kundinnen und Kunden werden mit ständigen Rabatten, Push-Nachrichten und Influencer-Videos zum Kauf animiert.\n\nDer niedrige Preis ist nur möglich, weil wichtige Kosten nicht im Preisschild enthalten sind. Ein grosser Teil der Produktion findet in Ländern wie Bangladesch, Kambodscha oder Pakistan statt, wo die Löhne tief und die Gewerkschaften schwach sind. Der Mindestlohn einer Näherin in Bangladesch reicht kaum zum Leben, obwohl sie oft Überstunden leistet. Der Einsturz der Rana-Plaza-Fabrik 2013 mit über 1100 Toten machte weltweit sichtbar, welche Risiken die Arbeiterinnen tragen. Seither hat sich die Sicherheit in vielen Fabriken verbessert, doch Kritiker bemängeln, dass Löhne und Arbeitsrechte kaum Fortschritte gemacht haben.\n\nHinzu kommen die ökologischen Kosten. Baumwolle benötigt enorme Mengen Wasser und oft Pestizide, Polyester wird aus Erdöl hergestellt und verliert beim Waschen Mikroplastik. Die Textilindustrie verursacht einen beträchtlichen Teil der weltweiten Treibhausgase. Ein weiteres Problem ist der Abfall: Viele Altkleider aus Europa werden exportiert, etwa auf den Kantamanto-Markt in Ghanas Hauptstadt Accra. Händler kaufen dort Ballen mit Kleidern, ohne zu wissen, was darin ist. Ein grosser Teil ist unverkäuflich und landet auf Deponien oder am Strand.\n\nWie lässt sich das ändern? Einige Länder setzen auf Gesetze. In Frankreich hat das Parlament ein Gesetz vorangebracht, das Werbung für Ultra Fast Fashion einschränken und eine Abgabe pro Kleidungsstück einführen soll, und die EU verlangt von Herstellern, dass sie sich künftig an den Kosten für Sammlung und Recycling beteiligen. Andere setzen auf die Verantwortung der Konsumentinnen und Konsumenten: weniger und bewusster kaufen, Second-Hand nutzen, Kleider reparieren. Kritiker geben zu bedenken, dass sich nicht alle teurere, fair produzierte Kleidung leisten können. Klar ist aber: Solange ein T-Shirt weniger kostet als ein Sandwich, bezahlt jemand anderes den Unterschied.",
    wort: [["massgeschneidert","genau für eine Person genäht"],["der Algorithmus","Rechenregel eines Computerprogramms"],["animieren","jemanden zu etwas anregen oder verleiten"],["die Gewerkschaft","Organisation, die sich für Rechte der Arbeitnehmer einsetzt"],["bemängeln","kritisieren, dass etwas nicht gut ist"],["die Deponie","Ort, an dem Abfall gelagert wird"],["die Abgabe","Geld, das man zusätzlich bezahlen muss"]],
    mc: [
      { q: "Was ist das Besondere an «Ultra Fast Fashion»?", o: ["Die Kleider halten besonders lange","Algorithmen erkennen Trends, und passende Kleider werden in wenigen Tagen produziert","Die Kleider werden nur in Europa genäht","Es gibt nur zwei Kollektionen pro Jahr"], a: 1 },
      { q: "Was kritisieren Kritiker nach Rana Plaza?", o: ["Dass die Fabriken zu sicher sind","Dass Löhne und Arbeitsrechte kaum Fortschritte gemacht haben","Dass es zu viele Gewerkschaften gibt","Dass die Kleider zu teuer sind"], a: 1 },
      { q: "Was passiert auf dem Kantamanto-Markt in Accra?", o: ["Dort werden neue Kleider genäht","Händler kaufen Ballen mit Altkleidern, von denen viele unverkäuflich sind","Dort werden Kleider recycelt und neu verkauft","Dort wird Baumwolle angebaut"], a: 1 },
      { q: "Welchen Einwand gegen die Lösung «bewusster kaufen» nennt der Text?", o: ["Second-Hand ist verboten","Nicht alle können sich teurere, faire Kleidung leisten","Reparieren ist zu schwierig","Es gibt keine fairen Marken"], a: 1 }
    ],
    rf: [
      { s: "Laut Text sind im Preis eines billigen T-Shirts alle Kosten enthalten.", a: false, x: "Wichtige Kosten für Menschen und Umwelt sind nicht im Preisschild enthalten." },
      { s: "Polyester wird aus Erdöl hergestellt.", a: true },
      { s: "Frankreich will Werbung für Ultra Fast Fashion einschränken.", a: true },
      { s: "Die EU will, dass Hersteller sich an den Kosten für Sammlung und Recycling beteiligen.", a: true }
    ],
    offen: [
      { q: "Erkläre den Satz: «Solange ein T-Shirt weniger kostet als ein Sandwich, bezahlt jemand anderes den Unterschied.» Wer ist mit «jemand anderes» gemeint?", l: "Die Arbeiterinnen (tiefe Löhne, Gefahr), die Umwelt (Wasser, Pestizide, Mikroplastik, Treibhausgase) und Menschen in Ländern wie Ghana, wo Altkleider als Abfall landen." },
      { q: "Vergleiche die beiden Lösungsansätze aus dem Text: Gesetze und Verantwortung der Konsumenten. Welche Vor- und Nachteile haben sie?", l: "Gesetze: gelten für alle Firmen, wirken grossflächig, aber brauchen Zeit und Kontrolle. Konsumenten: jede/r kann sofort handeln, aber nicht alle können sich faire Kleidung leisten, Wirkung eher klein." },
      { q: "Sollte die Schweiz eine Abgabe auf Fast-Fashion-Kleider einführen? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro: weniger Abfall, ehrlichere Preise, Geld für Recycling; contra: trifft Menschen mit wenig Geld, schwer zu kontrollieren, Kaufentscheid sollte frei sein." }
    ] }
},
"wt-schminke": {
  2: { vor: "Warum schminken sich Menschen? Nenne möglichst viele Gründe.",
    dauer: "ca. 280 Wörter", text: "Make-up gehört für viele Menschen zum Alltag, und das schon sehr lange. Im alten Ägypten schminkten sich bereits vor rund 5000 Jahren Frauen, Männer und sogar Kinder. Sie zogen mit Kajal, einer schwarzen Paste, dicke Linien um die Augen. Kajal hatte mehrere Aufgaben: Er sah schön aus, sollte vor dem grellen Sonnenlicht schützen und galt als Schutz vor bösen Geistern. Für grüne Lidschatten zerrieben die Ägypter das Mineral Malachit.\n\nIn späteren Zeiten wurde Schminke zum Zeichen für Reichtum. Im alten Rom und im Europa der Renaissance galt helle Haut als vornehm, denn wer arbeiten musste, war von der Sonne gebräunt. Deshalb trugen reiche Frauen eine weisse Paste auf, die oft Bleiweiss enthielt. Das Blei war giftig: Es schädigte die Haut, liess Haare ausfallen und konnte sogar zum Tod führen. Die englische Königin Elisabeth I. war berühmt für ihr weiss geschminktes Gesicht.\n\nHeute ist Kosmetik in der Schweiz und in der EU streng geregelt. Viele Stoffe sind verboten, und auf jeder Verpackung müssen die Inhaltsstoffe stehen. Trotzdem können Produkte die Haut reizen, besonders wenn man sie zu lange benutzt oder teilt. Auf Mascara kann man ein Symbol sehen, einen offenen Tiegel mit einer Zahl wie «6M». Es bedeutet: Nach dem Öffnen sechs Monate haltbar.\n\nAuch die Frage, wer sich schminkt, verändert sich. In vielen Kulturen war Make-up lange Frauensache. Heute benutzen auch Männer Concealer gegen Augenringe, und im K-Pop gehört Make-up für männliche Stars ganz selbstverständlich dazu.\n\nSocial Media hat das Schminken stark beeinflusst. Tutorials zeigen, wie man perfekte Looks erreicht. Viele Bilder sind aber mit Filtern oder Programmen bearbeitet. Wer sich ständig mit solchen Bildern vergleicht, kann unzufrieden mit dem eigenen Aussehen werden.",
    wort: [["grell","sehr hell und blendend"],["das Mineral","natürlicher Stoff aus dem Gestein"],["vornehm","zur reichen, feinen Gesellschaft gehörend"],["gebräunt","von der Sonne braun geworden"],["der Tiegel","kleiner Topf, z. B. für Creme"],["der Concealer","Make-up, das dunkle Stellen auf der Haut abdeckt"]],
    mc: [
      { q: "Welche Aufgaben hatte Kajal im alten Ägypten?", o: ["Nur schön aussehen","Schön aussehen, vor Sonne schützen und vor bösen Geistern schützen","Die Haare färben","Die Zähne reinigen"], a: 1 },
      { q: "Warum galt helle Haut in Rom und in der Renaissance als vornehm?", o: ["Weil sie gesünder war","Weil wer arbeiten musste, von der Sonne gebräunt war","Weil es so in der Bibel stand","Weil helle Schminke billig war"], a: 1 },
      { q: "Was bedeutet das Symbol «6M» auf einer Mascara?", o: ["Sie enthält 6 Milligramm Farbe","Sie ist nach dem Öffnen sechs Monate haltbar","Sie ist für Menschen ab 6 Jahren","Sie kostet 6 Franken"], a: 1 },
      { q: "Wovor warnt der Text im Zusammenhang mit Social Media?", o: ["Vor zu teuren Tutorials","Dass man durch Vergleiche mit bearbeiteten Bildern unzufrieden werden kann","Vor Viren auf dem Handy","Dass Make-up verboten wird"], a: 1 }
    ],
    rf: [
      { s: "Im alten Ägypten schminkten sich auch Kinder.", a: true },
      { s: "Bleiweiss war ungefährlich.", a: false, x: "Das Blei war giftig und konnte sogar zum Tod führen." },
      { s: "Auf jeder Kosmetik-Verpackung in der Schweiz müssen die Inhaltsstoffe stehen.", a: true },
      { s: "Im K-Pop schminken sich nur die Frauen.", a: false, x: "Make-up gehört auch für männliche K-Pop-Stars selbstverständlich dazu." }
    ],
    offen: [
      { q: "Vergleiche, warum sich Menschen im alten Ägypten und in der Renaissance geschminkt haben.", l: "Ägypten: Schönheit, Schutz vor Sonne, Schutz vor bösen Geistern. Renaissance: helle Haut als Zeichen von Reichtum und Vornehmheit (man musste nicht draussen arbeiten)." },
      { q: "Sollten Fotos mit Filtern auf Social Media gekennzeichnet werden? Begründe deine Meinung.", l: "Individuelle Antwort mit Begründung, z. B. ja, damit niemand unrealistische Vergleiche macht; nein, weil jeder wissen sollte, dass Bilder bearbeitet sind." }
    ] },
  3: { vor: "Ist Schminken eher Ausdruck von Freiheit oder von Druck, einem Schönheitsideal zu entsprechen?",
    dauer: "ca. 340 Wörter", text: "Make-up ist eines der ältesten kulturellen Ausdrucksmittel der Menschheit. Archäologen haben in Afrika Spuren von rotem Ocker gefunden, mit denen sich Menschen vermutlich schon vor Zehntausenden von Jahren bemalten. Gut belegt ist die Schminkkultur des alten Ägypten: Frauen und Männer umrandeten ihre Augen mit Kajal, der unter anderem aus Bleiglanz bestand. Erstaunlicherweise vermuten heute einige Forschende, dass bestimmte Bleiverbindungen in geringen Mengen die Augen sogar vor Infektionen schützen konnten. Ganz sicher ist das allerdings nicht.\n\nIn der europäischen Geschichte war Schminke eng mit sozialem Status verbunden. Weisse Haut signalisierte, dass man nicht auf dem Feld arbeiten musste. Adlige Frauen, aber auch Männer, trugen dafür Bleiweiss auf, obwohl es Haut, Zähne und Nerven schädigte. Im 19. Jahrhundert galt Make-up in bürgerlichen Kreisen dann plötzlich als unanständig, es wurde mit Schauspielerinnen in Verbindung gebracht, deren Beruf als nicht respektabel galt. Erst mit dem Aufstieg Hollywoods im 20. Jahrhundert wurde Schminke wieder gesellschaftlich akzeptiert und schliesslich zu einem Massenprodukt. Heute setzt die Kosmetikindustrie weltweit Hunderte Milliarden Franken um.\n\nDas Beispiel zeigt: Was als schön oder angemessen gilt, ist keine Naturgesetzlichkeit, sondern verändert sich mit Zeit, Kultur und Wirtschaft. Das gilt auch für die Frage, wer sich schminken darf. Während Make-up für Männer in Europa lange als unmännlich galt, gehört es im K-Pop oder in der Drag-Kultur ganz selbstverständlich dazu, und auch im Alltag greifen mehr Männer zu Concealer oder getönter Tagescreme.\n\nSoziale Medien haben die Schminkkultur demokratisiert und gleichzeitig unter Druck gesetzt. Einerseits können alle kostenlos Techniken lernen und eigene Stile entwickeln, etwa grafische Eyeliner oder bewusst bunte Looks. Andererseits verbreiten Filter und Bildbearbeitung ein Gesicht ohne Poren und Unebenheiten, das es in Wirklichkeit nicht gibt. Studien zeigen, dass häufiger Vergleich mit solchen Bildern bei vielen Jugendlichen die Zufriedenheit mit dem eigenen Körper verringert. Einige Länder verpflichten Influencer deshalb, retuschierte Werbefotos zu kennzeichnen.\n\nOb Schminke befreit oder unter Druck setzt, hängt wohl davon ab, aus welchem Grund man sie benutzt: um sich auszudrücken oder um einem Ideal zu entsprechen, das niemand erreichen kann.",
    wort: [["das Ausdrucksmittel","Mittel, mit dem man zeigt, wer man ist oder was man denkt"],["der Ocker","natürliche gelb-rote Erdfarbe"],["der soziale Status","die Stellung eines Menschen in der Gesellschaft"],["unanständig","gegen die guten Sitten"],["demokratisieren","für alle zugänglich machen"],["retuschieren","ein Bild nachträglich verändern, Fehler entfernen"],["kennzeichnen","mit einem Hinweis markieren"]],
    mc: [
      { q: "Was vermuten einige Forschende über den ägyptischen Kajal?", o: ["Dass er die Augen sicher geschädigt hat","Dass bestimmte Bleiverbindungen in kleinen Mengen vor Infektionen schützen konnten","Dass er aus Ocker bestand","Dass er nur für Kinder war"], a: 1 },
      { q: "Warum galt Make-up im 19. Jahrhundert als unanständig?", o: ["Weil es zu teuer war","Weil es mit Schauspielerinnen verbunden wurde, deren Beruf als nicht respektabel galt","Weil es Blei enthielt","Weil es aus Amerika kam"], a: 1 },
      { q: "Was zeigt die Geschichte der Schminke laut Text?", o: ["Schönheitsideale ändern sich mit Zeit, Kultur und Wirtschaft","Schönheit ist überall gleich","Männer haben sich nie geschminkt","Make-up wird bald verschwinden"], a: 0 },
      { q: "Was verlangen einige Länder von Influencern?", o: ["Dass sie sich nicht schminken","Dass sie retuschierte Werbefotos kennzeichnen","Dass sie keine Tutorials machen","Dass sie Steuern auf Make-up zahlen"], a: 1 }
    ],
    rf: [
      { s: "Mit dem Aufstieg Hollywoods wurde Schminke wieder gesellschaftlich akzeptiert.", a: true },
      { s: "Laut Text ist sicher bewiesen, dass Kajal vor Infektionen schützt.", a: false, x: "Einige Forschende vermuten es, ganz sicher ist das aber nicht." },
      { s: "In Europa trugen früher nur Frauen Bleiweiss auf.", a: false, x: "Adlige Frauen, aber auch Männer trugen Bleiweiss auf." },
      { s: "Studien zeigen, dass Vergleiche mit bearbeiteten Bildern die Zufriedenheit mit dem eigenen Körper verringern können.", a: true }
    ],
    offen: [
      { q: "Der Text sagt, soziale Medien hätten die Schminkkultur «demokratisiert und gleichzeitig unter Druck gesetzt». Erkläre beide Seiten.", l: "Demokratisiert: Alle können kostenlos Techniken lernen und eigene Stile entwickeln. Unter Druck gesetzt: Filter und Bildbearbeitung zeigen unrealistische Gesichter, Vergleiche machen viele unzufrieden." },
      { q: "Zeige mit zwei Beispielen aus dem Text, dass Schönheitsideale nicht «naturgegeben» sind.", l: "Weisse Haut als Statussymbol in Europa; Make-up im 19. Jh. unanständig, im 20. Jh. akzeptiert; Make-up für Männer lange unmännlich, heute im K-Pop selbstverständlich." },
      { q: "Ist Schminken eher Freiheit oder Druck? Nimm Stellung und beziehe dich auf den letzten Abschnitt des Textes.", l: "Individuelle Stellungnahme: Freiheit, wenn man sich ausdrückt und Spass hat; Druck, wenn man unerreichbaren Idealen entsprechen will. Gute Antworten wägen ab und begründen." }
    ] }
},
"wt-kosmetik": {
  2: { vor: "Woran erkennst du, ob eine Information über Hautpflege im Internet vertrauenswürdig ist?",
    dauer: "ca. 240 Wörter", text: "Auf TikTok und Instagram zeigen Influencerinnen und Influencer ihre «Skincare-Routine»: Reinigungsschaum, Toner, Serum, Augencreme, Maske, Nachtcreme. In den USA sprach man 2023 sogar von «Sephora Kids», weil schon zehnjährige Kinder in Kosmetikgeschäften nach teuren Anti-Aging-Produkten suchten. Hautärztinnen und Hautärzte schauen diesen Trend mit Sorge an.\n\nIhr Rat ist einfach: Gesunde junge Haut braucht wenig. Am Abend reicht eine milde Reinigung, die Schmutz und Sonnencreme entfernt, ohne die Haut auszutrocknen. Wenn die Haut spannt, hilft eine einfache Feuchtigkeitscreme. Das wichtigste Produkt ist der Sonnenschutz. UV-Strahlen verursachen Sonnenbrand, lassen die Haut schneller altern und erhöhen das Risiko für Hautkrebs. In der Schweiz ist Hautkrebs relativ häufig, deshalb empfehlen Fachleute im Sommer mindestens Lichtschutzfaktor 30.\n\nVorsicht ist bei starken Wirkstoffen geboten. Retinol, Fruchtsäuren oder Vitamin-C-Seren sind für ältere Haut gedacht. Bei jungen Menschen können sie Rötungen, Brennen und Ausschläge auslösen. Die EU hat deshalb 2024 beschlossen, die erlaubte Menge an Retinol in Kosmetik zu begrenzen.\n\nPickel gehören zur Pubertät, weil Hormone die Talgdrüsen anregen. Ausdrücken ist keine gute Idee: Bakterien gelangen tiefer in die Haut, und es können Narben entstehen. Bei starker Akne kann eine Hautärztin Medikamente verschreiben.\n\nWer wissen will, was in einer Creme steckt, findet auf der Verpackung die Liste der Inhaltsstoffe. Die Stoffe sind nach Menge geordnet: Was zuerst steht, ist am meisten enthalten, oft Wasser, auf Lateinisch «Aqua». Ein hoher Preis sagt übrigens wenig über die Wirkung aus. Häufig bezahlt man vor allem für Verpackung, Marke und Werbung.",
    wort: [["der Toner","flüssiges Pflegeprodukt für das Gesicht"],["austrocknen","trocken werden, Feuchtigkeit verlieren"],["spannen","sich eng und unangenehm anfühlen"],["der Lichtschutzfaktor","Zahl, die zeigt, wie stark eine Sonnencreme schützt"],["der Ausschlag","rote Flecken oder Pickel auf der Haut"],["die Talgdrüse","kleines Organ in der Haut, das Fett herstellt"]],
    mc: [
      { q: "Was meint man mit «Sephora Kids»?", o: ["Eine Kinderserie","Sehr junge Kinder, die nach teuren Anti-Aging-Produkten suchen","Kinder, die in Kosmetikläden arbeiten","Eine Marke für Kinderkosmetik"], a: 1 },
      { q: "Warum ist Sonnenschutz laut Text das wichtigste Produkt?", o: ["Weil er gut riecht","Weil UV-Strahlen Sonnenbrand, schnellere Hautalterung und Hautkrebs verursachen können","Weil er Pickel heilt","Weil er am teuersten ist"], a: 1 },
      { q: "Was hat die EU 2024 beschlossen?", o: ["Sonnencreme zu verbieten","Die erlaubte Menge an Retinol in Kosmetik zu begrenzen","Kosmetik für Kinder zu verbieten","Alle Preise zu senken"], a: 1 },
      { q: "Wofür bezahlt man bei teuren Produkten laut Text oft vor allem?", o: ["Für bessere Wirkstoffe","Für Verpackung, Marke und Werbung","Für Wasser","Für Tierversuche"], a: 1 }
    ],
    rf: [
      { s: "Fachleute empfehlen im Sommer mindestens Lichtschutzfaktor 30.", a: true },
      { s: "Retinol ist besonders gut für junge Haut.", a: false, x: "Retinol ist für ältere Haut gedacht und kann junge Haut reizen." },
      { s: "Bei der Inhaltsstoff-Liste steht der Stoff mit der grössten Menge zuerst.", a: true },
      { s: "Pickel auszudrücken ist eine gute Idee.", a: false, x: "Bakterien gelangen tiefer in die Haut, und es können Narben entstehen." }
    ],
    offen: [
      { q: "Erkläre, warum Hautärzte den Trend zu langen Skincare-Routinen bei Kindern kritisch sehen.", l: "Junge Haut braucht wenig; starke Wirkstoffe wie Retinol oder Säuren können Rötungen, Brennen und Ausschläge verursachen; viel Geld für unnötige Produkte." },
      { q: "Stell dir vor, eine jüngere Schülerin fragt dich nach Hautpflege-Tipps. Was rätst du ihr? Schreibe drei Tipps mit dem Text.", l: "Milde Reinigung am Abend, einfache Creme bei trockener Haut, immer Sonnenschutz; keine starken Wirkstoffe; Pickel nicht ausdrücken; teuer ist nicht besser." }
    ] },
  3: { vor: "Werbung verspricht oft schnelle Wunder. Wie kann man Werbeversprechen kritisch prüfen?",
    dauer: "ca. 320 Wörter", text: "Der Markt für Hautpflege boomt, und eine der am schnellsten wachsenden Zielgruppen sind Kinder und Jugendliche. Auf Plattformen wie TikTok verbreiten sich Videos, in denen Teenager ihre aufwendigen Pflegeroutinen zeigen. 2023 prägten US-Medien den Begriff «Sephora Kids», nachdem Verkäuferinnen berichtet hatten, dass Zehnjährige gezielt nach Seren mit Retinol oder Säuren fragten, die für reife Haut entwickelt wurden. Für Kosmetikfirmen ist diese Entwicklung lukrativ, für Dermatologinnen und Dermatologen ein Grund zur Sorge.\n\nAus medizinischer Sicht ist der Bedarf junger Haut gering. Sie erneuert sich schnell, ist elastisch und produziert genug Fett. Starke Wirkstoffe können ihre natürliche Schutzbarriere schädigen und Reizungen, Ekzeme oder Allergien auslösen. Hinzu kommt ein Problem, das viele unterschätzen: Je mehr Produkte man kombiniert, desto grösser ist die Gefahr, dass sich Inhaltsstoffe gegenseitig verstärken oder die Haut überfordern. Die EU hat 2024 entschieden, die Menge an Retinol in Kosmetikprodukten zu beschränken, weil Verbraucher es über verschiedene Produkte gleichzeitig aufnehmen können.\n\nSinnvoll ist dagegen konsequenter Sonnenschutz. Ein grosser Teil der sichtbaren Hautalterung wird durch UV-Strahlung verursacht, und die Schweiz gehört zu den Ländern mit besonders vielen Melanomen, einer gefährlichen Form von Hautkrebs. Fachleute vermuten, dass die hohe UV-Belastung in den Bergen und das Freizeitverhalten dabei eine Rolle spielen.\n\nWer Produkte beurteilen will, kann lernen, die Inhaltsstoff-Liste zu lesen. Sie folgt einem internationalen System namens INCI, in dem die Stoffe ab einer bestimmten Menge nach ihrem Anteil geordnet sind. Werbebegriffe wie «klinisch getestet», «dermatologisch empfohlen» oder «natürlich» sind dagegen oft wenig aussagekräftig, weil sie nicht genau geregelt sind. Auch «natürlich» bedeutet nicht automatisch verträglich: Ätherische Öle aus Pflanzen gehören zu den häufigsten Auslösern von Kontaktallergien.\n\nDie Debatte um Skincare berührt auch eine tiefere Frage: Warum sollen Kinder überhaupt «Anti-Aging» betreiben? Kritikerinnen sehen darin ein Zeichen, dass Schönheitsdruck immer früher beginnt. Influencer verdienen an Affiliate-Links und Kooperationen, was ihre Empfehlungen nicht unabhängig macht. Wer das weiss, kann Videos mit mehr Distanz anschauen und sich fragen: Wem nützt diese Empfehlung eigentlich?",
    wort: [["lukrativ","bringt viel Geld ein"],["die Schutzbarriere","natürliche Schutzschicht der Haut"],["das Ekzem","entzündete, juckende Hautstelle"],["konsequent","immer und ohne Ausnahme"],["aussagekräftig","so, dass es wirklich etwas Wichtiges zeigt"],["verträglich","so, dass der Körper es gut aushält"],["der Affiliate-Link","Link, bei dem jemand Geld verdient, wenn andere über ihn kaufen"]],
    mc: [
      { q: "Warum ist der Trend zu Skincare bei Kindern für Kosmetikfirmen interessant?", o: ["Weil Kinder gesündere Haut haben","Weil er lukrativ ist","Weil Kinder keine Werbung sehen","Weil es gesetzlich vorgeschrieben ist"], a: 1 },
      { q: "Warum hat die EU die Menge an Retinol beschränkt?", o: ["Weil Retinol zu teuer ist","Weil man es über verschiedene Produkte gleichzeitig aufnehmen kann","Weil es nicht wirkt","Weil es aus Tieren gewonnen wird"], a: 1 },
      { q: "Warum sind Begriffe wie «klinisch getestet» oft wenig aussagekräftig?", o: ["Weil sie nicht genau geregelt sind","Weil sie auf Lateinisch sind","Weil sie verboten sind","Weil nur Ärzte sie verstehen"], a: 0 },
      { q: "Welche Frage sollte man sich laut Text bei Influencer-Empfehlungen stellen?", o: ["Wie viele Follower hat die Person?","Wem nützt diese Empfehlung eigentlich?","Wie teuer ist das Produkt?","Welche Farbe hat die Verpackung?"], a: 1 }
    ],
    rf: [
      { s: "Junge Haut erneuert sich schnell und produziert genug Fett.", a: true },
      { s: "Die Schweiz gehört zu den Ländern mit besonders vielen Melanomen.", a: true },
      { s: "Natürliche Inhaltsstoffe sind laut Text immer gut verträglich.", a: false, x: "Ätherische Öle aus Pflanzen gehören zu den häufigsten Auslösern von Kontaktallergien." },
      { s: "Influencer-Empfehlungen sind laut Text immer unabhängig.", a: false, x: "Influencer verdienen an Affiliate-Links und Kooperationen; ihre Empfehlungen sind deshalb nicht unabhängig." }
    ],
    offen: [
      { q: "Fasse die medizinischen Gründe zusammen, warum Kinder und Jugendliche keine starken Anti-Aging-Produkte brauchen.", l: "Junge Haut erneuert sich schnell, ist elastisch, produziert genug Fett; starke Wirkstoffe können die Schutzbarriere schädigen und Reizungen, Ekzeme, Allergien auslösen; Kombination vieler Produkte überfordert die Haut." },
      { q: "Der Text nennt mehrere Werbebegriffe, denen man nicht blind vertrauen sollte. Erkläre, warum, und nenne ein eigenes Beispiel aus einer anderen Produktgruppe.", l: "Begriffe wie «klinisch getestet», «dermatologisch empfohlen», «natürlich» sind nicht genau geregelt und sagen wenig über Wirkung oder Verträglichkeit. Eigenes Beispiel z. B. «zuckerreduziert», «Superfood», «light»." },
      { q: "Sollten Influencer, die Kosmetik für Kinder bewerben, strenger kontrolliert werden? Nimm Stellung.", l: "Individuelle Stellungnahme, z. B. pro: Schutz von Kindern, Kennzeichnung von Werbung, Altersgrenzen; contra: Eigenverantwortung, Eltern sind zuständig, Meinungsfreiheit." }
    ] }
},
"wt-parfum": {
  2: { vor: "An welche Situation erinnert dich ein bestimmter Geruch? Beschreibe.",
    dauer: "ca. 260 Wörter", text: "Ein Parfum besteht zum grössten Teil aus Alkohol, in dem Duftstoffe gelöst sind. Früher stammten diese Duftstoffe fast nur aus der Natur: aus Blüten wie Rose und Jasmin, aus Zitrusschalen, Hölzern, Harzen oder sogar von Tieren. Moschus zum Beispiel wurde aus einer Drüse des Moschushirsches gewonnen. Heute werden die meisten Düfte im Labor hergestellt. Das schützt Tiere und Pflanzen und macht Parfums günstiger.\n\nNatürliche Duftstoffe sind oft sehr teuer. Für ein einziges Kilogramm Rosenöl braucht man mehrere Tonnen Rosenblüten, die von Hand gepflückt werden müssen. Deshalb kosten manche Parfums mit natürlichen Ölen Hunderte Franken.\n\nWer ein Parfum entwirft, heisst Parfümeur oder Parfümeurin. Die Ausbildung dauert viele Jahre, denn man muss sich Tausende Düfte merken. Ein Parfum ist aufgebaut wie eine Pyramide. Oben steht die Kopfnote, frisch und leicht, sie verfliegt nach wenigen Minuten. In der Mitte liegt die Herznote, die den Charakter des Parfums bestimmt. Unten ist die Basisnote mit schweren Düften wie Holz, Vanille oder Amber. Sie bleibt oft viele Stunden auf der Haut.\n\nWie stark ein Duft ist, hängt vom Anteil der Duftöle ab. Ein Eau de Toilette enthält etwa 5 bis 15 Prozent, ein Eau de Parfum etwa 15 bis 20 Prozent. Das berühmteste Parfum der Welt ist vielleicht Chanel N° 5. Es kam 1921 auf den Markt und wird bis heute verkauft.\n\nDüfte wirken stark auf unsere Gefühle. Der Teil des Gehirns, der Gerüche verarbeitet, liegt ganz nah bei den Bereichen für Erinnerungen und Emotionen. Darum kann ein Geruch uns plötzlich an einen Ort oder einen Menschen erinnern. Manche Menschen reagieren allerdings allergisch auf bestimmte Duftstoffe.",
    wort: [["gelöst","in einer Flüssigkeit verteilt, nicht mehr sichtbar"],["das Harz","klebriger Saft von Bäumen"],["die Drüse","kleines Organ, das einen Stoff herstellt"],["entwerfen","etwas Neues planen und gestalten"],["der Anteil","ein Teil von einem Ganzen"],["verarbeiten","hier: Informationen aufnehmen und verstehen"]],
    mc: [
      { q: "Warum werden heute die meisten Düfte im Labor hergestellt?", o: ["Weil sie besser riechen","Weil es Tiere und Pflanzen schützt und günstiger ist","Weil natürliche Düfte verboten sind","Weil Labore schöner sind"], a: 1 },
      { q: "Was braucht man für ein Kilogramm Rosenöl?", o: ["Ein paar Rosen","Mehrere Tonnen Rosenblüten","Einen Liter Wasser","Zehn Kilogramm Blätter"], a: 1 },
      { q: "Welche Note bestimmt den Charakter des Parfums?", o: ["Die Kopfnote","Die Herznote","Die Basisnote","Die Endnote"], a: 1 },
      { q: "Warum können Gerüche Erinnerungen wecken?", o: ["Weil Parfum Alkohol enthält","Weil das Geruchszentrum nah bei den Bereichen für Erinnerungen und Gefühle liegt","Weil wir Gerüche sehen","Weil die Nase am Ohr liegt"], a: 1 }
    ],
    rf: [
      { s: "Moschus wurde früher aus einer Drüse des Moschushirsches gewonnen.", a: true },
      { s: "Ein Eau de Toilette enthält mehr Duftöl als ein Eau de Parfum.", a: false, x: "Ein Eau de Parfum enthält mehr Duftöl (ca. 15–20 %) als ein Eau de Toilette (ca. 5–15 %)." },
      { s: "Chanel N° 5 kam 1921 auf den Markt.", a: true },
      { s: "Niemand reagiert allergisch auf Duftstoffe.", a: false, x: "Manche Menschen reagieren allergisch auf bestimmte Duftstoffe." }
    ],
    offen: [
      { q: "Erkläre, warum man den Aufbau eines Parfums mit einer Pyramide vergleicht.", l: "Es gibt drei Schichten: oben die leichte Kopfnote, die schnell verfliegt, in der Mitte die Herznote, unten die schwere Basisnote, die am längsten bleibt – wie eine Pyramide mit Spitze, Mitte und breiter Basis." },
      { q: "Welche Vorteile haben Düfte aus dem Labor? Nenne zwei und deine Meinung dazu.", l: "Sie schützen Tiere (z. B. Moschushirsch) und Pflanzen, sind günstiger. Eigene Meinung, z. B. gut für die Natur oder: natürliche Düfte wirken edler." }
    ] },
  3: { vor: "Warum sind Menschen bereit, für eine kleine Flasche Duft sehr viel Geld zu bezahlen?",
    dauer: "ca. 340 Wörter", text: "Kaum ein Produkt ist so stark mit Gefühlen verbunden wie Parfum. Der Geruchssinn ist eng mit dem limbischen System im Gehirn verknüpft, das für Emotionen und Erinnerungen zuständig ist. Deshalb kann ein Duft uns blitzschnell in die Kindheit zurückversetzen, an einen Menschen erinnern oder unsere Stimmung verändern. Die Parfumindustrie nutzt diesen Effekt gezielt: Sie verkauft nicht nur Duftstoffe, sondern vor allem Gefühle, Träume und ein bestimmtes Image.\n\nDie Geschichte des modernen Parfums ist eng mit der südfranzösischen Stadt Grasse verbunden. Ursprünglich war Grasse ein Zentrum der Lederverarbeitung. Weil gegerbtes Leder unangenehm roch, begannen Handwerker im 16. Jahrhundert, Handschuhe zu parfümieren. Das Klima eignete sich ideal für den Anbau von Jasmin, Rosen und Tuberosen, und bald entstand eine eigene Duftindustrie. Seit 2018 gehören die Parfum-Kenntnisse von Grasse zum immateriellen Kulturerbe der UNESCO.\n\nEin Wendepunkt war die Chemie. Ende des 19. Jahrhunderts gelang es Forschern, Duftstoffe künstlich herzustellen. Chanel N° 5 wurde 1921 berühmt, weil es als eines der ersten grossen Parfums künstliche Duftmoleküle, sogenannte Aldehyde, in hoher Dosis einsetzte. Heute stammt der grösste Teil der Duftstoffe aus dem Labor. Das ist nicht nur billiger, sondern auch ethisch sinnvoll: Tierische Stoffe wie Moschus aus dem Moschushirsch oder Ambra aus dem Pottwal werden kaum mehr verwendet, und seltene Pflanzen wie bestimmte Sandelholzarten werden weniger übernutzt.\n\nDer hohe Preis vieler Markenparfums erklärt sich deshalb nur zum Teil durch die Rohstoffe. Ein grosser Teil fliesst in Flakon, Verpackung, Werbekampagnen mit Stars und die Gewinnmargen der Händler. Fachleute schätzen, dass der eigentliche Duft oft nur einen kleinen Bruchteil des Verkaufspreises ausmacht. Das erklärt auch, warum gefälschte Parfums im Internet so verbreitet sind: Sie kopieren Flasche und Logo, enthalten aber manchmal Stoffe, die in der EU und der Schweiz verboten sind.\n\nParfums haben auch eine Kehrseite. Einige Duftstoffe gehören zu den häufigsten Auslösern von Kontaktallergien, weshalb bestimmte Stoffe auf der Verpackung angegeben werden müssen. In manchen Spitälern, Schulen oder Büros wird deshalb darum gebeten, auf starke Düfte zu verzichten. Was für die einen ein Ausdruck der Persönlichkeit ist, kann für andere Kopfschmerzen bedeuten.",
    wort: [["verknüpft","miteinander verbunden"],["zurückversetzen","in Gedanken in eine frühere Zeit bringen"],["gerben","Tierhaut zu Leder verarbeiten"],["das immaterielle Kulturerbe","Wissen und Traditionen, die als wertvoll für die Menschheit gelten"],["ethisch","was man aus moralischer Sicht für richtig hält"],["der Flakon","schöne kleine Flasche für Parfum"],["die Kehrseite","die negative Seite"]],
    mc: [
      { q: "Warum begannen Handwerker in Grasse, Handschuhe zu parfümieren?", o: ["Weil sie Blumen verkaufen wollten","Weil das gegerbte Leder unangenehm roch","Weil der König es befahl","Weil Handschuhe sonst nicht verkauft werden durften"], a: 1 },
      { q: "Warum war Chanel N° 5 besonders?", o: ["Es war das erste Parfum überhaupt","Es setzte als eines der ersten grossen Parfums künstliche Aldehyde in hoher Dosis ein","Es enthielt nur Rosenöl","Es war das billigste Parfum"], a: 1 },
      { q: "Wofür bezahlt man bei Markenparfums laut Text einen grossen Teil des Preises?", o: ["Vor allem für den Duft","Für Flakon, Verpackung, Werbung und Gewinnmargen","Für den Alkohol","Für Steuern auf Blumen"], a: 1 },
      { q: "Warum wird in manchen Spitälern oder Büros gebeten, auf starke Düfte zu verzichten?", o: ["Weil Parfum teuer ist","Weil Duftstoffe Allergien oder Kopfschmerzen auslösen können","Weil es verboten ist","Weil es die Geräte stört"], a: 1 }
    ],
    rf: [
      { s: "Die Parfum-Kenntnisse von Grasse gehören seit 2018 zum immateriellen Kulturerbe der UNESCO.", a: true },
      { s: "Ambra stammt vom Pottwal.", a: true },
      { s: "Der Duft macht bei Markenparfums laut Fachleuten den grössten Teil des Preises aus.", a: false, x: "Der eigentliche Duft macht oft nur einen kleinen Bruchteil des Verkaufspreises aus." },
      { s: "Grasse war ursprünglich ein Zentrum der Weinproduktion.", a: false, x: "Grasse war ursprünglich ein Zentrum der Lederverarbeitung." }
    ],
    offen: [
      { q: "Der Text sagt, die Parfumindustrie verkaufe «vor allem Gefühle, Träume und ein Image». Erkläre diese Aussage mit Informationen aus dem Text.", l: "Gerüche sind mit dem limbischen System (Gefühle, Erinnerungen) verbunden; der Duft selbst ist nur ein kleiner Teil des Preises, der Rest geht in Flakon, Verpackung und Werbung mit Stars, die ein bestimmtes Lebensgefühl verkaufen." },
      { q: "Welche ethischen Vorteile haben künstliche Duftstoffe? Nenne zwei Beispiele aus dem Text.", l: "Tiere werden geschützt (Moschushirsch, Pottwal/Ambra); seltene Pflanzen wie Sandelholz werden weniger übernutzt." },
      { q: "Sollte es in Schulzimmern eine Regel gegen starke Parfums und Deos geben? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro: Rücksicht auf Allergiker, Kopfschmerzen, Konzentration; contra: persönliche Freiheit, schwer zu kontrollieren, Rücksicht durch Gespräch statt Verbot." }
    ] }
},
"wt-mercedes": {
  2: { vor: "Wie wird sich das Autofahren in den nächsten 20 Jahren verändern? Was vermutest du?",
    dauer: "ca. 280 Wörter", text: "Am 29. Januar 1886 meldete der Ingenieur Carl Benz in Deutschland ein Patent für seinen «Patent-Motorwagen» an. Das dreirädrige Fahrzeug mit Benzinmotor gilt als erstes Automobil der Welt. Bekannt wurde es aber vor allem durch Carl Benz' Frau Bertha. Im August 1888 fuhr sie ohne Wissen ihres Mannes mit ihren beiden Söhnen über 100 Kilometer von Mannheim nach Pforzheim. Unterwegs kaufte sie Benzin in einer Apotheke und reparierte eine verstopfte Leitung mit ihrer Hutnadel. Damit bewies sie, dass das Auto auch für lange Strecken taugte.\n\nFast zur gleichen Zeit entwickelten Gottlieb Daimler und Wilhelm Maybach in Stuttgart ebenfalls Motoren und Fahrzeuge. Ihr wichtigster Kunde war der Geschäftsmann Emil Jellinek. Er fuhr mit Daimler-Wagen Rennen und meldete sie unter dem Namen seiner Tochter Mercédès an. 1901 entstand ein besonders modernes Modell, das offiziell «Mercedes» hiess. Der Name wurde so erfolgreich, dass er zur Marke wurde. 1926 schlossen sich die Firmen von Daimler und Benz zusammen.\n\nDer dreizackige Stern wurde 1909 als Markenzeichen eingetragen. Er steht für Motoren zu Land, zu Wasser und in der Luft. Bekannt sind auch die «Silberpfeile», die Rennwagen der Firma. In der Formel 1 gewann Mercedes von 2014 bis 2021 achtmal hintereinander die Konstrukteurs-Weltmeisterschaft. Lewis Hamilton holte in dieser Zeit sechs Fahrertitel.\n\nZur Geschichte der Firma gehören auch dunkle Kapitel. Im Zweiten Weltkrieg stellte Daimler-Benz Waffen und Fahrzeuge für die Nationalsozialisten her und setzte Tausende Zwangsarbeiterinnen und Zwangsarbeiter ein. Erst Jahrzehnte später liess die Firma diese Zeit von Historikern untersuchen.\n\nHeute muss sich Mercedes-Benz neu erfinden. Elektroautos sollen die Benziner ersetzen, und Firmen aus China wie BYD werden zur starken Konkurrenz. Der Stern soll aber auch in Zukunft für Luxus und Technik stehen.",
    wort: [["das Patent","Recht, dass nur der Erfinder eine Erfindung nutzen darf"],["verstopft","so, dass nichts mehr durchfliessen kann"],["taugen","geeignet sein"],["eintragen","offiziell in eine Liste schreiben"],["der Zwangsarbeiter","Person, die gegen ihren Willen arbeiten muss"],["die Konkurrenz","andere Firmen, die ähnliche Produkte verkaufen"]],
    mc: [
      { q: "Was bewies Bertha Benz mit ihrer Fahrt 1888?", o: ["Dass Frauen schneller fahren","Dass das Auto auch für lange Strecken taugte","Dass Benzin billig ist","Dass Pforzheim schöner ist als Mannheim"], a: 1 },
      { q: "Wo kaufte Bertha Benz unterwegs Benzin?", o: ["An einer Tankstelle","In einer Apotheke","Bei einem Bauern","In einem Restaurant"], a: 1 },
      { q: "Wer war Emil Jellinek?", o: ["Ein Rennfahrer der Formel 1","Ein Geschäftsmann, der Daimler-Wagen unter dem Namen seiner Tochter anmeldete","Der Erfinder des Motors","Der Bruder von Carl Benz"], a: 1 },
      { q: "Welches dunkle Kapitel nennt der Text?", o: ["Einen Unfall bei einem Rennen","Waffenproduktion und Zwangsarbeit im Zweiten Weltkrieg","Einen Streit um den Namen","Den Konkurs der Firma"], a: 1 }
    ],
    rf: [
      { s: "Bertha Benz fuhr mit ihren beiden Söhnen von Mannheim nach Pforzheim.", a: true },
      { s: "Der Stern wurde 1886 als Markenzeichen eingetragen.", a: false, x: "Der Stern wurde 1909 als Markenzeichen eingetragen." },
      { s: "Mercedes gewann in der Formel 1 von 2014 bis 2021 achtmal hintereinander die Konstrukteurs-WM.", a: true },
      { s: "Chinesische Firmen wie BYD sind für Mercedes keine Konkurrenz.", a: false, x: "Sie werden zur starken Konkurrenz." }
    ],
    offen: [
      { q: "Erkläre, warum Bertha Benz für die Geschichte des Autos so wichtig ist.", l: "Sie machte 1888 die erste lange Autofahrt (über 100 km), löste Probleme unterwegs selbst und bewies, dass das Auto alltagstauglich ist – das machte die Erfindung bekannt." },
      { q: "Warum ist es wichtig, dass Firmen auch über dunkle Kapitel ihrer Geschichte sprechen? Begründe.", l: "Individuelle Antwort, z. B. Verantwortung gegenüber Opfern, aus Fehlern lernen, Ehrlichkeit, Vertrauen der Kunden." }
    ] },
  3: { vor: "Kann eine traditionsreiche Marke ihre Identität behalten, wenn sich die Technik völlig verändert?",
    dauer: "ca. 350 Wörter", text: "Wenige Marken stehen so sehr für deutsche Ingenieurskunst wie Mercedes-Benz. Ihre Geschichte ist zugleich die Geschichte des Automobils, mit allen Erfolgen, Widersprüchen und Herausforderungen, die dazugehören.\n\nAls Carl Benz 1886 seinen Patent-Motorwagen anmeldete, war unklar, ob Menschen dieses laute, unzuverlässige Gerät überhaupt wollten. Den Durchbruch verschaffte ihm seine Frau Bertha, die 1888 auf eigene Initiative mit ihren Söhnen die erste Fernfahrt der Automobilgeschichte unternahm. Ihre Rückmeldungen, etwa dass für Steigungen ein zusätzlicher Gang nötig sei, flossen direkt in die Weiterentwicklung ein. Unabhängig davon entwickelten Gottlieb Daimler und Wilhelm Maybach in Cannstatt leichte, schnelllaufende Motoren. Der Name Mercedes geht auf den österreichischen Geschäftsmann Emil Jellinek zurück, der die Firma Daimler zum Bau eines leistungsstarken Rennwagens drängte und diesen nach seiner Tochter benannte. Nach dem Zusammenschluss von Daimler und Benz 1926 wurde «Mercedes-Benz» zur Marke für Luxus und Zuverlässigkeit.\n\nIn der Zeit des Nationalsozialismus profitierte Daimler-Benz von der Aufrüstung. Das Unternehmen produzierte Flugzeugmotoren, Lastwagen und Panzerteile und setzte Zehntausende Zwangsarbeiter, Kriegsgefangene und KZ-Häftlinge ein. Lange wurde diese Vergangenheit verschwiegen. Erst in den 1980er-Jahren gab der Konzern eine wissenschaftliche Untersuchung in Auftrag und beteiligte sich später an einem Entschädigungsfonds für ehemalige Zwangsarbeiter.\n\nNach dem Krieg wurde Mercedes zum Symbol des deutschen Wirtschaftswunders und weltweit zum Statussymbol. Gleichzeitig zeigte sich, dass Grösse nicht vor Fehlern schützt: Die Fusion mit dem US-Hersteller Chrysler 1998 scheiterte nach wenigen Jahren und kostete Milliarden. Seit 2022 heisst das Unternehmen Mercedes-Benz Group.\n\nDie grösste Herausforderung liegt jedoch in der Gegenwart. Um die Klimaziele zu erreichen, will die EU den Verkauf neuer Autos mit Verbrennungsmotor stark einschränken. Mercedes kündigte ursprünglich an, bis 2030 überall dort nur noch Elektroautos zu verkaufen, wo die Märkte es zulassen, musste diese Pläne wegen schwacher Nachfrage aber relativieren. Zugleich drängen chinesische Hersteller mit günstigen, technisch modernen Elektroautos auf den Markt, und in China, dem wichtigsten Absatzmarkt von Mercedes, sinken die Verkäufe. Für ein Unternehmen, das jahrzehntelang mit perfekten Verbrennungsmotoren geworben hat, ist das ein tiefgreifender Wandel. Ob der Stern auch im Zeitalter von Batterie und Software leuchtet, wird sich in den nächsten Jahren zeigen.",
    wort: [["die Ingenieurskunst","grosses technisches Können"],["der Durchbruch","der Moment, in dem etwas plötzlich Erfolg hat"],["die Aufrüstung","wenn ein Staat viele Waffen herstellt"],["der Entschädigungsfonds","Geld, das Opfer als Wiedergutmachung erhalten"],["die Fusion","wenn zwei Firmen eine werden"],["relativieren","eine Aussage abschwächen"],["der Absatzmarkt","Land oder Gebiet, in dem eine Firma ihre Produkte verkauft"]],
    mc: [
      { q: "Wie trug Bertha Benz zur Weiterentwicklung des Autos bei?", o: ["Sie finanzierte die Firma","Ihre Rückmeldungen von der Fernfahrt flossen in die Entwicklung ein, z. B. ein zusätzlicher Gang","Sie erfand den Stern","Sie gründete die Firma Daimler"], a: 1 },
      { q: "Was geschah in den 1980er-Jahren?", o: ["Mercedes fusionierte mit Chrysler","Der Konzern gab eine wissenschaftliche Untersuchung seiner NS-Vergangenheit in Auftrag","Mercedes baute das erste Elektroauto","Die Firma wurde umbenannt"], a: 1 },
      { q: "Was zeigt das Beispiel Chrysler laut Text?", o: ["Dass Grösse nicht vor Fehlern schützt","Dass amerikanische Autos besser sind","Dass Fusionen immer gelingen","Dass Mercedes keine Konkurrenz hat"], a: 0 },
      { q: "Warum musste Mercedes seine Elektro-Pläne relativieren?", o: ["Wegen schwacher Nachfrage","Weil Elektroautos verboten wurden","Weil die Batterien zu billig waren","Weil Hamilton das Team verliess"], a: 0 }
    ],
    rf: [
      { s: "Emil Jellinek drängte Daimler zum Bau eines leistungsstarken Rennwagens.", a: true },
      { s: "Daimler-Benz setzte im Zweiten Weltkrieg auch KZ-Häftlinge als Arbeitskräfte ein.", a: true },
      { s: "Die Fusion mit Chrysler war ein grosser, dauerhafter Erfolg.", a: false, x: "Sie scheiterte nach wenigen Jahren und kostete Milliarden." },
      { s: "In China, dem wichtigsten Absatzmarkt von Mercedes, steigen die Verkäufe stark.", a: false, x: "In China sinken die Verkäufe." }
    ],
    offen: [
      { q: "Der Text beschreibt Mercedes-Benz mit «Erfolgen, Widersprüchen und Herausforderungen». Nenne zu jedem Begriff ein Beispiel aus dem Text.", l: "Erfolge: erstes Auto, Marke für Luxus, Statussymbol im Wirtschaftswunder. Widersprüche: Profit aus Aufrüstung und Zwangsarbeit, lange verschwiegen; gescheiterte Chrysler-Fusion. Herausforderungen: Umstieg auf Elektro, Konkurrenz aus China, sinkende Verkäufe." },
      { q: "Erkläre, warum der Wechsel zum Elektroauto für Mercedes besonders schwierig ist.", l: "Die Marke warb jahrzehntelang mit perfekten Verbrennungsmotoren; jetzt zählen Batterie und Software, wo chinesische Hersteller günstiger und modern sind; Nachfrage nach E-Autos schwankt; EU-Klimaziele erhöhen den Druck." },
      { q: "Sollten Firmen heute noch Verantwortung für das übernehmen, was vor 80 Jahren in ihrem Namen geschah? Nimm Stellung.", l: "Individuelle Stellungnahme, z. B. ja: Firma profitierte und existiert weiter, Opfer verdienen Anerkennung; differenziert: heutige Mitarbeitende sind nicht schuld, aber die Firma trägt historische Verantwortung." }
    ] }
},
"wt-mond": {
  2: { vor: "Warum wollen Menschen überhaupt zum Mond fliegen? Was könnte man dort finden oder lernen?",
    dauer: "ca. 280 Wörter", text: "Der Mond ist der einzige natürliche Satellit der Erde. Im Durchschnitt ist er rund 384 000 Kilometer entfernt, und sein Durchmesser beträgt etwa 3500 Kilometer, ungefähr ein Viertel des Erddurchmessers. Die meisten Fachleute glauben, dass der Mond vor etwa 4,5 Milliarden Jahren entstanden ist, als ein Himmelskörper von der Grösse des Mars mit der jungen Erde zusammenstiess. Aus den Trümmern bildete sich der Mond.\n\nDer Mond hat keine Atmosphäre. Deshalb gibt es dort weder Wind noch Wetter, und der Himmel ist auch am Tag schwarz. Die Temperaturen schwanken extrem: In der Sonne wird es über 100 Grad heiss, im Schatten sinken sie auf unter minus 150 Grad. Die Oberfläche ist mit Kratern übersät, die von Einschlägen von Meteoriten stammen.\n\nWeil sich der Mond in der gleichen Zeit einmal um sich selbst dreht, in der er die Erde umkreist, zeigt er uns immer dieselbe Seite. Die Rückseite ist aber nicht dunkel, sie wird genauso von der Sonne beleuchtet. Durch seine Anziehungskraft verursacht der Mond auf der Erde Ebbe und Flut. Übrigens entfernt er sich jedes Jahr um knapp vier Zentimeter von der Erde.\n\nZwischen 1969 und 1972 landeten im Apollo-Programm der USA sechs Raumschiffe auf dem Mond. Zwölf Astronauten liefen auf seiner Oberfläche herum und brachten insgesamt über 380 Kilogramm Mondgestein zur Erde. Danach war lange niemand mehr dort.\n\nHeute gibt es ein neues Wettrennen zum Mond. China hat Roboter auf der Rückseite des Mondes gelandet und sogar Gestein von dort zur Erde gebracht. Die USA wollen mit dem Artemis-Programm wieder Menschen auf den Mond schicken, und auch China plant bemannte Flüge. Besonders interessant ist der Südpol des Mondes: Dort gibt es vermutlich gefrorenes Wasser, das man für Trinkwasser oder Raketentreibstoff nutzen könnte.",
    wort: [["der Satellit","Himmelskörper oder Gerät, das um einen Planeten kreist"],["die Trümmer","Bruchstücke von etwas Zerstörtem"],["die Atmosphäre","Gashülle um einen Himmelskörper"],["übersät","ganz dicht bedeckt"],["der Einschlag","wenn etwas mit grosser Wucht aufprallt"],["bemannt","mit Menschen an Bord"]],
    mc: [
      { q: "Wie ist der Mond laut den meisten Fachleuten entstanden?", o: ["Er war immer schon da","Durch einen Zusammenstoss eines grossen Himmelskörpers mit der Erde","Er kam aus einem anderen Sonnensystem","Er ist ein Stück der Sonne"], a: 1 },
      { q: "Warum ist der Himmel auf dem Mond auch am Tag schwarz?", o: ["Weil der Mond keine Atmosphäre hat","Weil die Sonne dort nicht scheint","Weil es immer Nacht ist","Weil der Mond zu klein ist"], a: 0 },
      { q: "Was stimmt über die Rückseite des Mondes?", o: ["Sie ist immer dunkel","Sie wird genauso von der Sonne beleuchtet","Sie ist aus Eis","Man kann sie jeden Monat von der Erde sehen"], a: 1 },
      { q: "Warum ist der Südpol des Mondes besonders interessant?", o: ["Dort gibt es vermutlich gefrorenes Wasser","Dort ist es am wärmsten","Dort landete Apollo 11","Dort gibt es Pflanzen"], a: 0 }
    ],
    rf: [
      { s: "Auf dem Mond kann es über 100 Grad heiss werden.", a: true },
      { s: "Der Mond kommt der Erde jedes Jahr ein Stück näher.", a: false, x: "Er entfernt sich jedes Jahr um knapp vier Zentimeter." },
      { s: "Im Apollo-Programm landeten sechs Raumschiffe auf dem Mond.", a: true },
      { s: "China hat bereits Gestein von der Rückseite des Mondes zur Erde gebracht.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum wir von der Erde aus immer dieselbe Seite des Mondes sehen.", l: "Der Mond dreht sich in derselben Zeit einmal um sich selbst, in der er die Erde einmal umkreist; deshalb zeigt immer dieselbe Seite zur Erde." },
      { q: "Wofür könnte man Wasser auf dem Mond nutzen? Und warum ist das für zukünftige Mondstationen wichtig?", l: "Für Trinkwasser und Raketentreibstoff; man müsste es nicht teuer von der Erde mitbringen, so wären längere Aufenthalte möglich." }
    ] },
  3: { vor: "Wem gehört eigentlich der Mond? Darf ein Land oder eine Firma dort Rohstoffe abbauen?",
    dauer: "ca. 340 Wörter", text: "Seit jeher fasziniert der Mond die Menschen. Er bestimmte Kalender und Feste, inspirierte Mythen und Gedichte und war der erste Himmelskörper, den Menschen mit einem Fernrohr genauer untersuchten. Galileo Galilei erkannte 1609, dass seine Oberfläche nicht glatt ist, sondern Berge und Krater aufweist. Damit widersprach er der damaligen Vorstellung, der Himmel sei vollkommen und unveränderlich.\n\nWissenschaftlich ist der Mond heute vor allem als Archiv interessant. Da er keine Atmosphäre, kein Wasser in flüssiger Form und keine Plattentektonik besitzt, sind Spuren aus der Frühzeit des Sonnensystems auf ihm viel besser erhalten als auf der Erde. Die Analyse des Gesteins, das die Apollo-Astronauten zwischen 1969 und 1972 mitbrachten, stützt die Theorie, dass der Mond durch eine gewaltige Kollision eines etwa marsgrossen Körpers mit der jungen Erde entstand. Der Mond beeinflusst die Erde bis heute: Er erzeugt die Gezeiten und stabilisiert die Neigung der Erdachse, was zu relativ gleichmässigen Jahreszeiten beiträgt.\n\nDas Apollo-Programm war allerdings nicht nur ein wissenschaftliches Projekt. Es entstand im Kalten Krieg, als die USA und die Sowjetunion um technische und politische Vorherrschaft konkurrierten. Nachdem die Sowjetunion 1957 den ersten Satelliten und 1961 den ersten Menschen ins All geschickt hatte, wollten die USA mit der Mondlandung ihre Überlegenheit beweisen. Als dieses Ziel erreicht war, sank das Interesse der Politik, und das teure Programm wurde 1972 beendet.\n\nHeute erlebt der Mond eine Renaissance. China landete 2019 als erstes Land eine Sonde auf der Rückseite und brachte 2024 Proben von dort zur Erde. Die USA arbeiten mit internationalen Partnern am Artemis-Programm, das langfristig eine Station in der Mondumlaufbahn und eine Basis am Südpol vorsieht. Dort vermuten Forschende Wassereis in dauerhaft beschatteten Kratern. Es könnte Astronauten mit Wasser, Sauerstoff und Treibstoff versorgen und den Mond zu einem Sprungbrett für Flüge zum Mars machen.\n\nMit dem neuen Interesse stellen sich auch rechtliche Fragen. Der Weltraumvertrag von 1967 verbietet es Staaten, den Mond zu besitzen. Ob aber Firmen Rohstoffe abbauen und verkaufen dürfen, ist umstritten. Einige Länder haben Gesetze erlassen, die das erlauben, andere sehen darin eine Gefahr, dass der Weltraum zum Schauplatz neuer Konflikte wird.",
    wort: [["faszinieren","stark interessieren und begeistern"],["das Archiv","Ort, an dem Informationen aus der Vergangenheit aufbewahrt sind"],["die Plattentektonik","Bewegung grosser Gesteinsplatten der Erdkruste"],["die Kollision","Zusammenstoss"],["die Vorherrschaft","wenn man stärker ist und bestimmt"],["die Renaissance","Wiedergeburt, neues Aufleben"],["das Sprungbrett","Ausgangspunkt für etwas Grösseres"]],
    mc: [
      { q: "Warum widersprach Galileis Beobachtung den damaligen Vorstellungen?", o: ["Weil er zeigte, dass der Mond Berge und Krater hat und der Himmel nicht vollkommen ist","Weil er den Mond für eine Scheibe hielt","Weil er Wasser auf dem Mond fand","Weil er die Mondlandung voraussagte"], a: 0 },
      { q: "Warum nennt der Text den Mond ein «Archiv»?", o: ["Weil dort Bücher gelagert sind","Weil Spuren aus der Frühzeit des Sonnensystems dort gut erhalten sind","Weil die Astronauten dort Dokumente hinterliessen","Weil er alt aussieht"], a: 1 },
      { q: "Warum wurde das Apollo-Programm 1972 beendet?", o: ["Weil der Mond gefährlich wurde","Weil nach dem Erreichen des Ziels das politische Interesse sank und es teuer war","Weil die Sowjetunion es verbot","Weil kein Gestein mehr gefunden wurde"], a: 1 },
      { q: "Was ist laut Text rechtlich umstritten?", o: ["Ob Staaten den Mond besitzen dürfen","Ob Firmen Rohstoffe auf dem Mond abbauen und verkaufen dürfen","Ob man den Mond fotografieren darf","Ob Astronauten Steuern zahlen"], a: 1 }
    ],
    rf: [
      { s: "Der Mond stabilisiert die Neigung der Erdachse.", a: true },
      { s: "Die USA schickten 1961 den ersten Menschen ins All.", a: false, x: "Die Sowjetunion schickte 1957 den ersten Satelliten und 1961 den ersten Menschen ins All." },
      { s: "China landete 2019 als erstes Land eine Sonde auf der Rückseite des Mondes.", a: true },
      { s: "Laut Weltraumvertrag von 1967 darf ein Staat den Mond besitzen.", a: false, x: "Der Vertrag verbietet es Staaten, den Mond zu besitzen." }
    ],
    offen: [
      { q: "Erkläre, warum das Apollo-Programm mehr als ein wissenschaftliches Projekt war.", l: "Es entstand im Kalten Krieg; die USA wollten nach den sowjetischen Erfolgen (Satellit 1957, erster Mensch im All 1961) ihre technische und politische Überlegenheit beweisen." },
      { q: "Warum könnte Wassereis am Südpol den Mond zu einem «Sprungbrett» zum Mars machen?", l: "Aus Eis kann man Wasser, Sauerstoff und Raketentreibstoff gewinnen; man müsste es nicht von der Erde mitbringen und könnte vom Mond aus weiterfliegen." },
      { q: "Sollen Firmen Rohstoffe auf dem Mond abbauen dürfen? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro: Fortschritt, Rohstoffe für Raumfahrt, Investitionen; contra: Mond gehört allen, Gefahr von Konflikten, nur reiche Länder profitieren, Schutz eines unberührten Ortes." }
    ] }
},
"wt-exotisch": {
  2: { vor: "Was braucht ein Tier, damit es ihm gut geht? Mache eine Liste.",
    dauer: "ca. 260 Wörter", text: "Bartagamen, Leopardgeckos, Kornnattern oder Vogelspinnen: Exotische Tiere sind als Haustiere beliebt geworden. Viele finden sie faszinierend, weil sie ganz anders aussehen und sich anders verhalten als Hunde oder Katzen. Auf Social Media sieht man Videos, in denen Schlangen um den Hals gelegt oder Echsen gestreichelt werden. Das wirkt einfach. In Wirklichkeit ist die Haltung oft schwierig.\n\nReptilien sind wechselwarme Tiere. Sie können ihre Körpertemperatur nicht selbst regulieren und brauchen deshalb im Terrarium warme und kühle Zonen, spezielle Lampen mit UV-Licht und die passende Luftfeuchtigkeit. Fehlt das UV-Licht, können Knochen weich werden. Auch das Futter ist nicht immer einfach: Viele Echsen fressen lebende Insekten, manche Schlangen Mäuse. Tierärzte, die sich mit Reptilien auskennen, gibt es nicht überall.\n\nManche Tiere werden ausserdem viel grösser oder älter, als die Käufer erwarten. Ein Grüner Leguan kann fast zwei Meter lang werden, eine Landschildkröte über 50 Jahre alt. Wenn Besitzer überfordert sind, landen die Tiere in Auffangstationen, die in der Schweiz oft überfüllt sind. Manche werden einfach ausgesetzt. In Schweizer Weihern leben deshalb zum Beispiel Schmuckschildkröten aus Nordamerika, die einheimische Tiere verdrängen können.\n\nEin weiteres Problem ist der Handel. Viele Tiere stammen heute aus Zucht, andere werden jedoch in der Wildnis gefangen. Das Washingtoner Artenschutzabkommen regelt seit 1973 den Handel mit bedrohten Arten. Trotzdem gibt es Schmuggel. In der Schweiz braucht man für bestimmte Tiere, etwa Giftschlangen, eine Bewilligung, und für einige Arten muss man vorher einen Kurs besuchen.\n\nAuch für Menschen gibt es Risiken: Reptilien tragen oft Salmonellen in sich, Bakterien, die Durchfall auslösen können. Händewaschen nach dem Kontakt ist deshalb Pflicht.",
    wort: [["die Haltung","wie man ein Tier versorgt und unterbringt"],["wechselwarm","die Körpertemperatur hängt von der Umgebung ab"],["regulieren","steuern, einstellen"],["überfordert","man schafft etwas nicht mehr"],["die Auffangstation","Ort, an dem abgegebene Tiere versorgt werden"],["verdrängen","jemandem den Platz wegnehmen"]],
    mc: [
      { q: "Warum brauchen Reptilien warme und kühle Zonen im Terrarium?", o: ["Damit sie spielen können","Weil sie ihre Körpertemperatur nicht selbst regulieren können","Weil sie sonst einschlafen","Damit das Terrarium schöner aussieht"], a: 1 },
      { q: "Was kann passieren, wenn UV-Licht fehlt?", o: ["Die Tiere werden grösser","Die Knochen können weich werden","Die Tiere bekommen Fell","Nichts"], a: 1 },
      { q: "Welches Problem verursachen ausgesetzte Schmuckschildkröten?", o: ["Sie fressen Fische aus dem Laden","Sie können einheimische Tiere verdrängen","Sie verschmutzen das Trinkwasser","Sie beissen Badende"], a: 1 },
      { q: "Warum soll man nach dem Kontakt mit Reptilien die Hände waschen?", o: ["Weil sie stinken","Weil sie oft Salmonellen tragen","Weil sie giftig sind","Weil ihre Haut färbt"], a: 1 }
    ],
    rf: [
      { s: "Ein Grüner Leguan kann fast zwei Meter lang werden.", a: true },
      { s: "Das Washingtoner Artenschutzabkommen gibt es seit 1973.", a: true },
      { s: "Alle exotischen Tiere im Handel stammen aus Zucht.", a: false, x: "Viele stammen aus Zucht, andere werden aber in der Wildnis gefangen." },
      { s: "Auffangstationen für exotische Tiere sind in der Schweiz meistens leer.", a: false, x: "Sie sind oft überfüllt." }
    ],
    offen: [
      { q: "Erkläre, warum Videos auf Social Media ein falsches Bild von exotischen Haustieren geben können.", l: "Sie zeigen nur schöne Momente und wirken einfach; man sieht nicht, wie viel Technik, Wissen, Geld, spezielles Futter und Zeit die Haltung braucht." },
      { q: "Was müsste man alles klären, bevor man eine Bartagame kauft? Nenne mindestens vier Punkte.", l: "Terrarium mit warmen/kühlen Zonen, UV-Licht, Luftfeuchtigkeit, lebende Insekten als Futter, Reptilien-Tierarzt in der Nähe, Kosten und Strom, Lebensdauer, Bewilligung/Kurs, Hygiene (Salmonellen)." }
    ] },
  3: { vor: "Haben Tiere ein Recht darauf, in ihrer natürlichen Umgebung zu leben? Oder ist Tierhaltung in Ordnung, wenn es den Tieren gut geht?",
    dauer: "ca. 340 Wörter", text: "Die Haltung exotischer Tiere hat in den letzten Jahren stark zugenommen. Fachgeschäfte, Börsen und Online-Plattformen bieten Echsen, Schlangen, Amphibien, Spinnen und sogar exotische Säugetiere an. Befeuert wird der Trend durch soziale Medien, in denen Tiere oft als ungewöhnliche Accessoires inszeniert werden. Tierschutzorganisationen beobachten diese Entwicklung kritisch.\n\nDas Kernproblem liegt darin, dass viele Arten sehr spezielle Bedürfnisse haben, die sich in einer Wohnung nur mit grossem Aufwand erfüllen lassen. Wechselwarme Reptilien benötigen ein fein abgestimmtes Klima mit Wärmeplätzen, UV-Strahlung und Rückzugsmöglichkeiten. Haltungsfehler zeigen sich bei ihnen oft erst spät, weil viele Arten Schmerzen und Krankheiten kaum erkennbar zeigen. Studien deuten darauf hin, dass ein erheblicher Teil der Reptilien in Privathaltung früh stirbt. Hinzu kommt, dass wildlebende Tiere ein Verhalten zeigen, das sich im Terrarium kaum ausleben lässt, etwa weite Wanderungen oder komplexe Jagdstrategien.\n\nAuch ökologisch hat der Handel Folgen. Zwar stammen viele Tiere aus Nachzuchten, doch für manche Arten ist der Fang in der Wildnis noch immer lukrativ. Besonders seltene Tiere erzielen hohe Preise, was den Druck auf ohnehin bedrohte Bestände erhöht. Der illegale Wildtierhandel gilt weltweit als eines der grössten Geschäfte der organisierten Kriminalität. Das Washingtoner Artenschutzabkommen (CITES) von 1973 regelt den internationalen Handel mit gefährdeten Arten, kann Schmuggel aber nicht vollständig verhindern. Zudem gefährden ausgesetzte oder entlaufene Tiere einheimische Ökosysteme: In der Schweiz verbreiten sich etwa nordamerikanische Schmuckschildkröten, und eingeschleppte Krankheitserreger bedrohen Amphibien.\n\nDie Schweiz hat eines der strengsten Tierschutzgesetze der Welt. Für bestimmte Wildtiere ist eine kantonale Bewilligung nötig, für andere ein Sachkundenachweis, und die Mindestmasse für Gehege sind gesetzlich festgelegt. Kritiker halten diese Regeln dennoch für unzureichend, weil sie schwer zu kontrollieren sind und der Onlinehandel über Landesgrenzen hinweg funktioniert. Einige europäische Länder wie Belgien oder die Niederlande haben deshalb sogenannte Positivlisten eingeführt: Dort dürfen nur Tierarten gehalten werden, die ausdrücklich als geeignet gelten.\n\nBefürworter der Exotenhaltung betonen dagegen, dass verantwortungsvolle Halter viel über Tiere lernen, Wissen weitergeben und mit Zuchtprogrammen sogar zum Erhalt bedrohter Arten beitragen können. Entscheidend sei nicht das Tier, sondern das Wissen und das Engagement der Menschen.",
    wort: [["befeuern","verstärken, antreiben"],["inszenieren","wie in einem Theater wirkungsvoll darstellen"],["das Bedürfnis","etwas, das ein Lebewesen braucht"],["die Nachzucht","Tiere, die in Gefangenschaft geboren wurden"],["der Bestand","die Anzahl Tiere einer Art in einem Gebiet"],["das Ökosystem","Lebensraum mit allen Pflanzen und Tieren, die zusammenwirken"],["der Sachkundenachweis","Beweis, dass man genug über ein Tier weiss"]],
    mc: [
      { q: "Warum zeigen sich Haltungsfehler bei Reptilien oft erst spät?", o: ["Weil sie sehr schnell wachsen","Weil viele Arten Schmerzen und Krankheiten kaum zeigen","Weil sie nachts aktiv sind","Weil Tierärzte sie nicht untersuchen dürfen"], a: 1 },
      { q: "Warum erhöht der Handel den Druck auf bedrohte Bestände?", o: ["Weil seltene Tiere hohe Preise erzielen und Fang in der Wildnis lukrativ ist","Weil Zuchttiere krank sind","Weil CITES den Handel fördert","Weil die Tiere zu billig sind"], a: 0 },
      { q: "Was ist eine «Positivliste»?", o: ["Eine Liste mit verbotenen Tieren","Eine Liste mit Tierarten, die ausdrücklich gehalten werden dürfen","Eine Liste mit guten Tierhandlungen","Eine Liste mit gesunden Tieren"], a: 1 },
      { q: "Womit argumentieren Befürworter der Exotenhaltung?", o: ["Exoten brauchen keine Pflege","Verantwortungsvolle Halter lernen viel und können mit Zuchtprogrammen bedrohte Arten erhalten","Exoten sind billiger als Hunde","Exoten sind nie gefährlich"], a: 1 }
    ],
    rf: [
      { s: "Laut Text gilt der illegale Wildtierhandel als eines der grössten Geschäfte der organisierten Kriminalität.", a: true },
      { s: "CITES kann Schmuggel vollständig verhindern.", a: false, x: "Das Abkommen regelt den Handel, kann Schmuggel aber nicht vollständig verhindern." },
      { s: "Belgien und die Niederlande haben Positivlisten eingeführt.", a: true },
      { s: "Kritiker finden die Schweizer Regeln ausreichend und leicht zu kontrollieren.", a: false, x: "Kritiker halten sie für unzureichend, weil sie schwer zu kontrollieren sind." }
    ],
    offen: [
      { q: "Fasse zusammen, welche Probleme die Exotenhaltung für die Tiere selbst und für die Natur verursachen kann.", l: "Für die Tiere: spezielle Bedürfnisse schwer erfüllbar, Haltungsfehler, früher Tod, natürliches Verhalten nicht möglich. Für die Natur: Wildfang bedroht Bestände, Schmuggel, ausgesetzte Tiere verdrängen einheimische Arten, eingeschleppte Krankheiten." },
      { q: "Erkläre den Unterschied zwischen dem Schweizer System und einer Positivliste.", l: "Schweiz: grundsätzlich erlaubt, aber für bestimmte Tiere Bewilligung oder Sachkundenachweis und Mindestmasse. Positivliste: Grundsätzlich verboten, nur ausdrücklich geeignete Arten dürfen gehalten werden." },
      { q: "Sollte die Schweiz eine Positivliste einführen? Nimm Stellung und beziehe Argumente beider Seiten ein.", l: "Individuelle Stellungnahme, z. B. pro: klare Regeln, Schutz der Tiere und Natur, leichter zu kontrollieren; contra: Einschränkung verantwortungsvoller Halter, Zuchtprogramme, illegale Haltung könnte zunehmen." }
    ] }
},
"wt-darknet": {
  2: { vor: "Ist Anonymität im Internet eher gut oder eher gefährlich? Was denkst du?",
    dauer: "ca. 270 Wörter", text: "Das Internet besteht aus mehreren Schichten. Was man mit Google oder anderen Suchmaschinen findet, nennt man das «Surface Web», also das sichtbare Netz. Viel grösser ist das «Deep Web». Dazu gehören alle Seiten, die nicht in Suchmaschinen erscheinen, zum Beispiel dein E-Mail-Postfach, dein Online-Banking oder das Lernportal deiner Schule. Daran ist nichts Verbotenes. Ein kleiner Teil des Deep Web ist das Darknet. Es ist nur mit spezieller Software erreichbar, am bekanntesten ist der Tor-Browser.\n\nTor steht für «The Onion Router», auf Deutsch «Zwiebel-Router». Die Daten werden nämlich mehrfach verschlüsselt, wie die Schichten einer Zwiebel, und über mehrere Computer auf der ganzen Welt geschickt. Jeder dieser Computer kennt nur den vorherigen und den nächsten Schritt. So lässt sich kaum herausfinden, wer mit wem kommuniziert. Interessanterweise wurde diese Technik in den 1990er-Jahren mit Unterstützung der US-Marine entwickelt, um geheime Kommunikation zu schützen.\n\nDiese Anonymität ist für viele Menschen wichtig. In Ländern, in denen die Regierung das Internet überwacht, können Journalisten, Oppositionelle und Whistleblower so Informationen verbreiten, ohne verfolgt zu werden. Grosse Medien wie die BBC bieten deshalb eigene Darknet-Seiten an.\n\nDie gleiche Technik nutzen aber auch Kriminelle. Auf illegalen Marktplätzen werden Drogen, Waffen, gestohlene Kreditkartendaten und Schadsoftware verkauft. Bezahlt wird meistens mit Kryptowährungen. Der bekannteste Marktplatz hiess «Silk Road». 2013 schloss das FBI die Seite und verhaftete den Gründer. Seither haben Ermittler aus vielen Ländern immer wieder grosse Marktplätze ausgehoben.\n\nFür Jugendliche lohnt sich der Ausflug ins Darknet nicht. Betrug ist dort sehr häufig, viele Seiten verbreiten Schadsoftware, und wer Illegales kauft, macht sich strafbar. Die Anonymität ist zudem weniger perfekt, als viele glauben.",
    wort: [["die Schicht","eine Ebene, die über oder unter einer anderen liegt"],["verschlüsseln","Daten so verändern, dass nur Berechtigte sie lesen können"],["überwachen","genau beobachten und kontrollieren"],["der Whistleblower","Person, die geheime Missstände öffentlich macht"],["die Kryptowährung","digitales Geld wie Bitcoin"],["ausheben","eine verbotene Gruppe oder einen Ort entdecken und schliessen"]],
    mc: [
      { q: "Was gehört zum Deep Web?", o: ["Nur verbotene Seiten","Seiten, die nicht in Suchmaschinen erscheinen, z. B. E-Mail-Postfach oder Online-Banking","Nur Google und YouTube","Nur Seiten der Polizei"], a: 1 },
      { q: "Warum heisst Tor «Zwiebel-Router»?", o: ["Weil er von einer Gemüsefirma stammt","Weil die Daten mehrfach verschlüsselt werden wie die Schichten einer Zwiebel","Weil er stinkt","Weil das Logo eine Zwiebel ist"], a: 1 },
      { q: "Wer hat die Tor-Technik mitentwickelt?", o: ["Google","Die US-Marine","Eine Schule in der Schweiz","Kriminelle"], a: 1 },
      { q: "Was geschah 2013 mit «Silk Road»?", o: ["Die Seite wurde vom FBI geschlossen und der Gründer verhaftet","Die Seite wurde legal","Die Seite zog in die Schweiz","Die Seite wurde zur Nachrichtenseite"], a: 0 }
    ],
    rf: [
      { s: "Das Deep Web ist viel grösser als das Surface Web.", a: true },
      { s: "Alles im Deep Web ist verboten.", a: false, x: "Zum Deep Web gehören auch ganz normale Seiten wie E-Mail-Postfächer oder Online-Banking." },
      { s: "Die BBC bietet eine eigene Darknet-Seite an.", a: true },
      { s: "Laut Text ist die Anonymität im Darknet perfekt.", a: false, x: "Die Anonymität ist weniger perfekt, als viele glauben." }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen Surface Web, Deep Web und Darknet mit eigenen Worten.", l: "Surface Web: über Suchmaschinen auffindbar. Deep Web: nicht in Suchmaschinen, z. B. E-Mail, Banking, Lernportale – meist harmlos. Darknet: kleiner Teil des Deep Web, nur mit spezieller Software (Tor) erreichbar, anonym." },
      { q: "Warum bieten Medien wie die BBC Darknet-Seiten an? Erkläre.", l: "Damit Menschen in Ländern mit Zensur und Überwachung trotzdem freie Nachrichten lesen können, ohne verfolgt zu werden." }
    ] },
  3: { vor: "Soll der Staat Technik verbieten dürfen, die auch für Verbrechen genutzt wird? Nenne Beispiele.",
    dauer: "ca. 340 Wörter", text: "Kaum ein Begriff aus der digitalen Welt löst so viel Unbehagen aus wie «Darknet». In Krimis und Schlagzeilen erscheint es als Unterwelt des Internets, in der Waffen, Drogen und gestohlene Daten gehandelt werden. Dieses Bild ist nicht falsch, aber unvollständig. Um das Darknet zu verstehen, muss man zwischen der Technik und ihrer Nutzung unterscheiden.\n\nTechnisch beruht das bekannteste Darknet auf dem Tor-Netzwerk. Es leitet Datenverkehr über mehrere zufällig ausgewählte Server und verschlüsselt ihn dabei schichtweise. Keine einzelne Station kennt Absender und Ziel zugleich. Dadurch wird es sehr schwierig, Nutzerinnen und Nutzer zu identifizieren. Entwickelt wurde das Grundprinzip in den 1990er-Jahren in einem Forschungslabor der US-Marine, heute wird Tor von einer gemeinnützigen Organisation betreut und von Freiwilligen auf der ganzen Welt betrieben.\n\nDie Anonymität erfüllt eine wichtige demokratische Funktion. In autoritären Staaten, in denen Regierungen das Internet zensieren und Kritiker verfolgen, ermöglicht Tor den Zugang zu freien Informationen. Journalistinnen nutzen sogenannte SecureDrop-Systeme, über die Whistleblower Dokumente anonym übermitteln können. Medien wie die BBC und die «New York Times» betreiben eigene Darknet-Adressen, damit sie auch in Ländern mit Zensur erreichbar bleiben.\n\nGleichzeitig bietet dieselbe Technik Kriminellen Schutz. Illegale Marktplätze funktionieren ähnlich wie gewöhnliche Online-Shops, mit Bewertungen und Kundendienst. Bekannt wurde «Silk Road», dessen Gründer 2015 in den USA zu lebenslanger Haft verurteilt wurde; Anfang 2025 begnadigte ihn Präsident Trump, was heftig kritisiert wurde. Später schlossen internationale Ermittlerteams weitere grosse Plattformen wie «AlphaBay» oder 2022 den russischsprachigen Marktplatz «Hydra». Erfolg haben die Behörden oft nicht, weil sie die Verschlüsselung knacken, sondern durch klassische Ermittlungsarbeit, verdeckte Ermittler, Fehler der Betreiber und die Analyse von Kryptowährungs-Transaktionen, die auf öffentlich einsehbaren Blockchains gespeichert sind.\n\nDie Debatte um das Darknet ist deshalb ein Beispiel für ein grundsätzliches Dilemma: Wie viel Überwachung braucht es, um Verbrechen zu bekämpfen, und wie viel Privatsphäre braucht eine freie Gesellschaft? Einige Politikerinnen fordern, Anonymisierungsdienste stärker zu regulieren. Datenschützer warnen, dass dadurch gerade jene getroffen würden, die auf Schutz angewiesen sind. Für Jugendliche bleibt die Empfehlung klar: Das Darknet ist kein Abenteuerspielplatz. Betrug, Schadsoftware und strafrechtliche Folgen sind reale Risiken.",
    wort: [["das Unbehagen","ein ungutes, unangenehmes Gefühl"],["gemeinnützig","zum Wohl der Allgemeinheit, nicht für Profit"],["autoritär","mit einer Regierung, die keine Kritik duldet"],["zensieren","Informationen verbieten oder unterdrücken"],["begnadigen","eine Strafe erlassen"],["verdeckter Ermittler","Polizist, der heimlich unter falscher Identität arbeitet"],["das Dilemma","schwierige Wahl zwischen zwei Möglichkeiten, die beide Nachteile haben"]],
    mc: [
      { q: "Warum ist es schwierig, Tor-Nutzer zu identifizieren?", o: ["Weil sie keine Computer benutzen","Weil keine einzelne Station Absender und Ziel zugleich kennt","Weil Tor verboten ist","Weil alle denselben Namen haben"], a: 1 },
      { q: "Wofür nutzen Journalisten SecureDrop?", o: ["Um Werbung zu verkaufen","Damit Whistleblower Dokumente anonym übermitteln können","Um Spiele zu spielen","Um Kryptowährungen zu kaufen"], a: 1 },
      { q: "Wie erzielen Behörden laut Text oft ihre Erfolge?", o: ["Indem sie die Verschlüsselung knacken","Durch klassische Ermittlungsarbeit, Fehler der Betreiber und Analyse von Transaktionen","Indem sie das Internet abschalten","Durch Zufall"], a: 1 },
      { q: "Was ist das «grundsätzliche Dilemma» beim Darknet?", o: ["Ob man Tor oder Chrome benutzt","Wie viel Überwachung gegen Verbrechen nötig ist und wie viel Privatsphäre eine freie Gesellschaft braucht","Ob Bitcoin teuer ist","Ob Medien Darknet-Seiten haben sollen"], a: 1 }
    ],
    rf: [
      { s: "Tor wird heute von einer gemeinnützigen Organisation betreut.", a: true },
      { s: "Der Gründer von Silk Road wurde Anfang 2025 begnadigt.", a: true },
      { s: "Kryptowährungs-Transaktionen sind laut Text völlig unsichtbar.", a: false, x: "Sie werden auf öffentlich einsehbaren Blockchains gespeichert und können analysiert werden." },
      { s: "Datenschützer fordern eine strengere Regulierung von Anonymisierungsdiensten.", a: false, x: "Das fordern einige Politikerinnen; Datenschützer warnen davor." }
    ],
    offen: [
      { q: "Der Text sagt, man müsse «zwischen der Technik und ihrer Nutzung unterscheiden». Erkläre, was damit gemeint ist, und nenne je ein Beispiel für gute und schlechte Nutzung.", l: "Die Technik (Anonymisierung) ist neutral; entscheidend ist, wofür sie verwendet wird. Gut: Journalisten, Whistleblower, Menschen unter Zensur. Schlecht: illegale Marktplätze für Drogen, Waffen, gestohlene Daten." },
      { q: "Erkläre, warum die Polizei trotz Verschlüsselung immer wieder Erfolge gegen Darknet-Marktplätze hat.", l: "Klassische Ermittlungsarbeit, verdeckte Ermittler, Fehler der Betreiber, Analyse von Kryptowährungs-Transaktionen auf öffentlichen Blockchains, internationale Zusammenarbeit." },
      { q: "Sollen Anonymisierungsdienste wie Tor stärker reguliert werden? Nimm Stellung mit Argumenten beider Seiten.", l: "Individuelle Stellungnahme: pro Regulierung (Verbrechen erschweren, Opfer schützen); contra (Schutz für Journalisten, Whistleblower, Menschen in Diktaturen; Kriminelle finden andere Wege). Gute Antworten wägen ab." }
    ] }
},
"wt-fortnite": {
  2: { vor: "Warum geben Menschen echtes Geld für Dinge aus, die nur in einem Spiel existieren?",
    dauer: "ca. 260 Wörter", text: "Fortnite wurde von der amerikanischen Firma Epic Games entwickelt und erschien im Juli 2017. Zuerst gab es nur einen Modus, in dem Spieler gemeinsam gegen Zombies kämpften. Wenige Wochen später kam der kostenlose Modus «Battle Royale» dazu, und dieser machte Fortnite weltweit berühmt.\n\nDas Prinzip ist einfach: 100 Spielerinnen und Spieler springen aus einem fliegenden «Battle Bus» auf eine Insel. Jeder sucht Waffen, Heilmittel und Baumaterial. Ein Sturm zieht sich immer enger zusammen, sodass sich die Spieler begegnen müssen. Besonders ist die Baufunktion: In Sekunden kann man Wände, Rampen und Türme errichten, um sich zu schützen oder einen besseren Blick zu haben. Gute Spieler bauen extrem schnell.\n\nObwohl Battle Royale gratis ist, verdient Epic Games Milliarden. Das Geld kommt aus dem Item-Shop. Mit V-Bucks, die man für echtes Geld kauft, erhält man Skins, Tänze, sogenannte Emotes, und den Battle Pass. Der Shop wechselt jeden Tag, und viele Angebote gibt es nur kurz. Das erzeugt Druck, schnell zu kaufen. Weil Fortnite Kinder mit irreführenden Kaufknöpfen zu ungewollten Käufen verleitet haben soll, musste Epic Games 2022 in den USA über 500 Millionen Dollar Strafe und Entschädigung bezahlen.\n\nFortnite ist auch ein Ort für Events. 2020 erlebten über zwölf Millionen Menschen gleichzeitig ein Konzert von Travis Scott im Spiel. 2019 gewann der 16-jährige Kyle Giersdorf die erste Fortnite-Weltmeisterschaft und erhielt drei Millionen Dollar. Heute können Spieler ausserdem eigene Inseln bauen und damit sogar Geld verdienen.\n\nFachleute empfehlen, mit den Eltern Regeln abzumachen: wie lange man spielt, wie viel Geld man ausgeben darf und dass man im Voice-Chat keine privaten Informationen weitergibt.",
    wort: [["der Modus","eine Art, ein Spiel zu spielen"],["errichten","bauen"],["das Emote","Tanz oder Bewegung einer Spielfigur"],["irreführend","so, dass man etwas falsch versteht"],["verleiten","jemanden dazu bringen, etwas zu tun, was er eigentlich nicht wollte"],["die Entschädigung","Geld als Ausgleich für einen Schaden"]],
    mc: [
      { q: "Womit begann Fortnite 2017?", o: ["Mit Battle Royale","Mit einem Modus, in dem man gemeinsam gegen Zombies kämpft","Mit einem Rennspiel","Mit einem Fussballspiel"], a: 1 },
      { q: "Wozu dient die Baufunktion?", o: ["Um Häuser zu verkaufen","Um sich zu schützen oder einen besseren Blick zu haben","Um den Sturm zu stoppen","Um V-Bucks zu verdienen"], a: 1 },
      { q: "Warum erzeugt der Item-Shop Druck?", o: ["Weil er jeden Tag wechselt und viele Angebote nur kurz gibt","Weil alles gratis ist","Weil man Skins braucht, um zu gewinnen","Weil er nur nachts offen ist"], a: 0 },
      { q: "Warum musste Epic Games 2022 in den USA viel Geld bezahlen?", o: ["Weil das Spiel zu schwer war","Weil Kinder mit irreführenden Kaufknöpfen zu ungewollten Käufen verleitet worden sein sollen","Weil ein Konzert ausfiel","Weil es zu viele Spieler gab"], a: 1 }
    ],
    rf: [
      { s: "Battle Royale kam wenige Wochen nach dem ersten Modus dazu.", a: true },
      { s: "Kyle Giersdorf war 16 Jahre alt, als er die Weltmeisterschaft gewann.", a: true },
      { s: "Spieler können heute keine eigenen Inseln bauen.", a: false, x: "Spieler können eigene Inseln bauen und damit sogar Geld verdienen." },
      { s: "Epic Games verdient vor allem mit dem Verkauf des Spiels Geld.", a: false, x: "Battle Royale ist gratis; das Geld kommt aus dem Item-Shop." }
    ],
    offen: [
      { q: "Erkläre, wie Fortnite mit einem Gratisspiel Milliarden verdient.", l: "Über den Item-Shop: Spieler kaufen mit echtem Geld V-Bucks und damit Skins, Emotes und den Battle Pass; tägliche Wechsel und kurze Angebote erzeugen Kaufdruck." },
      { q: "Welche Regeln würdest du einem jüngeren Geschwister für Fortnite vorschlagen? Nenne drei und begründe eine davon.", l: "Z. B. feste Spielzeit, monatliches Budget für V-Bucks, keine privaten Infos im Voice-Chat, Pausen machen; Begründung individuell." }
    ] },
  3: { vor: "Sind Videospiele Kunst, Sport, Geschäft oder einfach Unterhaltung? Begründe deine Meinung.",
    dauer: "ca. 350 Wörter", text: "Als Epic Games im September 2017 den kostenlosen Modus «Battle Royale» veröffentlichte, war das Genre nicht neu. Das Spiel «PlayerUnknown's Battlegrounds» hatte kurz zuvor gezeigt, wie erfolgreich das Prinzip «100 Spieler, einer gewinnt» sein kann. Fortnite setzte sich trotzdem durch, weil es kostenlos, bunt, humorvoll und auf fast allen Geräten spielbar war, von der Konsole bis zum Handy. Dazu kam die Baumechanik, die dem Spiel eine taktische Tiefe gab, die es von der Konkurrenz unterschied.\n\nDer wirtschaftliche Erfolg basiert auf dem Free-to-Play-Modell. Das Spiel selbst kostet nichts, verdient wird mit kosmetischen Gegenständen. Psychologinnen und Konsumentenschützer kritisieren, dass solche Systeme gezielt mit Gruppendruck, zeitlich begrenzten Angeboten und einer virtuellen Währung arbeiten, die den Bezug zum echten Geld verschleiert. 2022 einigte sich Epic Games mit der US-Handelsbehörde FTC auf Zahlungen von insgesamt 520 Millionen Dollar. Der Vorwurf lautete unter anderem, das Spiel habe mit verwirrenden Menüs ungewollte Käufe begünstigt und die Privatsphäre von Kindern verletzt.\n\nFortnite ist zugleich eine soziale Plattform. Für viele Jugendliche ist es weniger ein Spiel als ein digitaler Treffpunkt, vergleichbar mit einem Pausenplatz. Epic Games nutzt das gezielt: Mit Konzerten von Travis Scott oder Ariana Grande, Kooperationen mit Marvel, Star Wars oder Fussballvereinen und eigenen Modi wie «LEGO Fortnite» entwickelt sich das Spiel zu einem sogenannten Metaversum, einer virtuellen Welt, in der Menschen Zeit verbringen, konsumieren und selbst Inhalte erschaffen.\n\nAuch politisch sorgte Fortnite für Schlagzeilen. 2020 baute Epic Games absichtlich ein eigenes Bezahlsystem ins Spiel ein und umging damit die Gebühren von Apple und Google. Beide Firmen entfernten Fortnite daraufhin aus ihren App-Stores. Es folgte ein jahrelanger Rechtsstreit, der die Frage betraf, wie viel Macht grosse Plattformen über App-Anbieter haben dürfen. Erst 2025 kehrte Fortnite in den USA auf das iPhone zurück.\n\nIm E-Sport zeigte Fortnite, wie schnell junge Talente zu Profis werden können: Der 16-jährige Kyle «Bugha» Giersdorf gewann 2019 drei Millionen Dollar. Kritiker weisen allerdings darauf hin, dass nur sehr wenige vom Gaming leben können und dass exzessives Spielen Schlaf, Schule und Gesundheit beeinträchtigen kann. Die Weltgesundheitsorganisation anerkennt seit 2019 die Computerspielstörung als Krankheit.",
    wort: [["das Genre","Art oder Kategorie, z. B. eines Spiels oder Films"],["die Baumechanik","die Spielregeln und Funktionen zum Bauen"],["verschleiern","verstecken, unklar machen"],["begünstigen","fördern, leichter machen"],["das Metaversum","grosse virtuelle Welt, in der Menschen leben, spielen und einkaufen"],["umgehen","eine Regel absichtlich vermeiden"],["exzessiv","übermässig, viel zu viel"]],
    mc: [
      { q: "Warum setzte sich Fortnite trotz Konkurrenz durch?", o: ["Weil es als erstes Battle-Royale-Spiel erschien","Weil es kostenlos, bunt, humorvoll, auf fast allen Geräten spielbar war und eine Baumechanik hatte","Weil es nur auf dem Handy lief","Weil es sehr teuer war"], a: 1 },
      { q: "Was kritisieren Konsumentenschützer am Free-to-Play-Modell?", o: ["Dass es zu wenige Skins gibt","Dass es mit Gruppendruck, begrenzten Angeboten und virtueller Währung arbeitet","Dass man nicht online spielen kann","Dass die Grafik schlecht ist"], a: 1 },
      { q: "Warum wurde Fortnite 2020 aus den App-Stores entfernt?", o: ["Wegen Gewalt","Weil Epic ein eigenes Bezahlsystem einbaute und die Gebühren von Apple und Google umging","Weil das Spiel zu alt war","Wegen eines Virus"], a: 1 },
      { q: "Was anerkennt die Weltgesundheitsorganisation seit 2019?", o: ["E-Sport als olympischen Sport","Die Computerspielstörung als Krankheit","Fortnite als Kunstwerk","Gaming als Beruf"], a: 1 }
    ],
    rf: [
      { s: "Fortnite war das erste Spiel mit dem Prinzip «100 Spieler, einer gewinnt».", a: false, x: "«PlayerUnknown's Battlegrounds» hatte das Prinzip kurz zuvor erfolgreich gemacht." },
      { s: "Epic Games einigte sich 2022 mit der FTC auf Zahlungen von 520 Millionen Dollar.", a: true },
      { s: "Laut Text ist Fortnite für viele Jugendliche eine Art digitaler Pausenplatz.", a: true },
      { s: "Fortnite kehrte 2025 in den USA auf das iPhone zurück.", a: true }
    ],
    offen: [
      { q: "Der Text beschreibt Fortnite als Spiel, Geschäft, soziale Plattform und politischen Streitfall. Erkläre zwei dieser Rollen mit Beispielen.", l: "Z. B. Geschäft: Free-to-Play, Item-Shop, FTC-Strafe. Soziale Plattform: Treffpunkt wie Pausenplatz, Konzerte, Kooperationen, Metaversum. Politischer Streitfall: Rechtsstreit mit Apple/Google über Macht der App-Stores." },
      { q: "Warum ist eine virtuelle Währung wie V-Bucks aus Sicht von Konsumentenschützern problematisch?", l: "Sie verschleiert den Bezug zum echten Geld; man merkt weniger, wie viel man ausgibt; Pakete passen oft nicht genau zu den Preisen, sodass man mehr kauft." },
      { q: "Sollten In-Game-Käufe für Jugendliche unter 16 Jahren verboten werden? Nimm Stellung mit mindestens zwei Argumenten.", l: "Individuelle Stellungnahme, z. B. pro: Schutz vor Kaufdruck und Schulden, Manipulation; contra: Eltern und Jugendliche sollen selbst entscheiden, Käufe sind freiwillig und kosmetisch, Verbot schwer durchsetzbar." }
    ] }
}
});
/* Block c */
Object.assign(window.STUFEN, {
"le-catacombes": {
  2: { vor: "Paris ist auf vielen Tunneln gebaut. Was könnte das für Folgen haben?",
    dauer: "ca. 200 Wörter", text: "Sous les rues de Paris, il y a un labyrinthe de tunnels. Avant, c'étaient des carrières : les ouvriers prenaient la pierre sous la terre pour construire les maisons de Paris.\n\nÀ la fin du 18e siècle, il y a un grand problème : les cimetières de la ville sont trop pleins. Ils sentent mauvais et les gens tombent malades. Alors, la ville décide de transporter les os dans les vieilles carrières. Pendant des années, des charrettes passent la nuit dans les rues avec des os. Aujourd'hui, il y a les os d'environ six millions de personnes sous Paris.\n\nLes os ne sont pas en désordre : les ouvriers ont fait des murs avec des crânes et des os. C'est impressionnant, mais un peu effrayant.\n\nAujourd'hui, on peut visiter une partie des catacombes. L'entrée est à Denfert-Rochereau, au sud de Paris. La visite dure environ une heure. Il faut descendre 131 marches. Sous la terre, il fait toujours environ 14 degrés, en été et en hiver.\n\nLes autres tunnels sont interdits. Mais certaines personnes, les « cataphiles », y entrent quand même la nuit. C'est très dangereux : on peut se perdre ou être blessé.",
    wort: [["la carrière","der Steinbruch (hier: unterirdisch)"],["la pierre","der Stein"],["construire","bauen"],["sentir mauvais","schlecht riechen"],["la charrette","der Karren"],["effrayant","beängstigend, gruselig"],["blessé","verletzt"]],
    mc: [
      { q: "Was waren die Tunnel früher?", o: ["U-Bahn-Tunnel","Steinbrüche, aus denen man Steine für die Häuser holte","Gefängnisse","Keller für Wein"], a: 1 },
      { q: "Warum brachte man die Knochen in die Tunnel?", o: ["Die Friedhöfe waren zu voll, rochen schlecht und machten Menschen krank","Für Touristen","Weil es ein Gesetz des Königs gab","Wegen eines Krieges"], a: 0 },
      { q: "Wann fuhren die Karren mit den Knochen durch die Strassen?", o: ["Am Morgen","Am Mittag","In der Nacht","Am Sonntag"], a: 2 },
      { q: "Wer sind die «cataphiles»?", o: ["Touristenführer","Leute, die nachts verbotenerweise in die Tunnel gehen","Polizisten","Arbeiter der Stadt"], a: 1 }
    ],
    rf: [
      { s: "Die Knochen liegen ganz durcheinander.", a: false, x: "«Les os ne sont pas en désordre» – die Arbeiter haben Mauern aus Schädeln und Knochen gemacht." },
      { s: "Der Eingang ist bei Denfert-Rochereau.", a: true },
      { s: "Im Winter ist es in den Katakomben kälter als im Sommer.", a: false, x: "Es ist immer etwa 14 Grad, im Sommer und im Winter." },
      { s: "Der Besuch dauert etwa eine Stunde.", a: true }
    ],
    offen: [
      { q: "Warum ist es gefährlich, in die verbotenen Tunnel zu gehen? Nenne zwei Gründe (auf Deutsch).", l: "Man kann sich verirren (se perdre) oder verletzt werden (être blessé)." },
      { q: "Suche im Text die französischen Wörter für: bauen, der Stein, verboten.", l: "construire, la pierre, interdit" }
    ] },
  3: { vor: "Wie geht eine Stadt mit ihren Toten um? Kennst du verschiedene Traditionen?",
    dauer: "ca. 270 Wörter", text: "Paris est célèbre pour la tour Eiffel et ses musées. Mais sous la ville, il existe un monde que beaucoup de touristes ne connaissent pas : environ 300 kilomètres de galeries souterraines. Pendant des siècles, les ouvriers y ont extrait le calcaire, une pierre claire qui a servi à construire Notre-Dame, le Louvre et beaucoup d'immeubles parisiens.\n\nAu 18e siècle, la ville a deux problèmes. D'abord, certaines rues s'effondrent parce que le sol est plein de trous. Ensuite, les cimetières débordent. Le plus grand, le cimetière des Innocents, est au centre de Paris. Les voisins se plaignent de l'odeur, et on pense que les morts rendent les vivants malades. En 1785, les autorités décident de fermer ce cimetière et de transférer les os dans les anciennes carrières. Le transport se fait la nuit, en silence, avec des prêtres qui accompagnent les charrettes.\n\nAu début, les os sont simplement jetés dans les galeries. Plus tard, un ingénieur fait organiser les restes : on construit de longs murs avec des crânes et des tibias, et on ajoute des panneaux avec des poèmes et des citations sur la mort. À l'entrée, on peut lire : « Arrête ! C'est ici l'empire de la mort. »\n\nAujourd'hui, les catacombes sont un musée. Chaque année, plus d'un demi-million de personnes les visitent. Mais pour certains Parisiens, ce lieu reste un mystère. Les « cataphiles » explorent illégalement les galeries fermées, parfois pendant des nuits entières. La police les cherche, parce que le réseau est dangereux : il y a de l'eau, des passages très étroits, et on peut facilement se perdre.",
    wort: [["la galerie souterraine","der unterirdische Gang"],["extraire","abbauen, herausholen"],["le calcaire","der Kalkstein"],["s'effondrer","einstürzen"],["déborder","überlaufen, zu voll sein"],["se plaindre","sich beklagen"],["le réseau","das Netz (hier: Tunnelnetz)"],["étroit","eng"]],
    mc: [
      { q: "Wofür brauchte man den Kalkstein aus den Tunneln?", o: ["Für Strassen auf dem Land","Für Gebäude wie Notre-Dame und den Louvre","Für Statuen in Rom","Zum Heizen"], a: 1 },
      { q: "Welche zwei Probleme hatte Paris im 18. Jahrhundert?", o: ["Zu viele Touristen und zu wenig Wasser","Strassen stürzten ein und die Friedhöfe waren zu voll","Krieg und Hunger","Feuer und Überschwemmungen"], a: 1 },
      { q: "Wie wurden die Knochen transportiert?", o: ["Am Tag mit Musik","In der Nacht, still, begleitet von Priestern","Mit dem Zug","Mit Schiffen auf der Seine"], a: 1 },
      { q: "Was bedeutet der Satz am Eingang ungefähr?", o: ["Willkommen im Museum!","Halt! Hier ist das Reich des Todes.","Bitte nicht fotografieren.","Ausgang rechts."], a: 1 }
    ],
    rf: [
      { s: "Das Tunnelnetz unter Paris ist etwa 300 Kilometer lang.", a: true },
      { s: "Der Friedhof der Innocents lag am Stadtrand.", a: false, x: "Er lag im Zentrum von Paris («au centre de Paris»)." },
      { s: "Von Anfang an wurden die Knochen ordentlich zu Mauern aufgeschichtet.", a: false, x: "Zuerst wurden sie einfach in die Gänge geworfen, später ordnete ein Ingenieur sie." },
      { s: "Jedes Jahr besuchen über eine halbe Million Menschen die Katakomben.", a: true }
    ],
    offen: [
      { q: "Erkläre auf Deutsch, warum Paris im 18. Jahrhundert beschloss, die Knochen in die Steinbrüche zu bringen.", l: "Die Friedhöfe (v. a. der Cimetière des Innocents im Zentrum) waren überfüllt, rochen schlecht, und man glaubte, sie machten die Lebenden krank; die alten Steinbrüche boten Platz." },
      { q: "Nenne drei Gefahren in den verbotenen Gängen. Schreibe die französischen Ausdrücke aus dem Text.", l: "il y a de l'eau; des passages très étroits; on peut se perdre" },
      { q: "Écris une phrase en français : Tu voudrais visiter les catacombes ? Pourquoi (pas) ?", l: "Zum Beispiel: Oui, je voudrais visiter les catacombes parce que c'est mystérieux. / Non, parce que j'ai peur des os." }
    ] }
},
"le-montstmichel": {
  2: { vor: "Warum bauten Menschen früher Klöster an so schwierigen Orten wie auf Felsen oder Inseln?",
    dauer: "ca. 210 Wörter", text: "Le Mont-Saint-Michel est un rocher dans la mer, en Normandie, au nord-ouest de la France. Sur ce rocher, il y a une abbaye, un petit village et des remparts. Selon la légende, l'archange Michel apparaît en 708 à un évêque et lui demande de construire une église sur le rocher. Plus tard, des moines construisent une grande abbaye.\n\nIci, la marée est très spéciale. Entre la marée basse et la marée haute, l'eau peut monter de plus de dix mètres ! Quand la mer est basse, on voit une immense baie de sable. Mais attention : le sable peut être mouvant, et la mer revient très vite. Beaucoup de personnes sont mortes dans la baie.\n\nPendant longtemps, une route menait au Mont. Mais à cause de la route, le sable s'accumulait et le Mont n'était presque plus une île. En 2014, on a construit un nouveau pont. Maintenant, la mer peut de nouveau entourer le Mont.\n\nAujourd'hui, environ trois millions de touristes viennent chaque année. Seulement une trentaine de personnes habitent sur l'île. La rue principale est petite et pleine de magasins et de restaurants. La spécialité, c'est l'omelette de la Mère Poulard, très grande et très légère.",
    wort: [["le rocher","der Felsen"],["les remparts","die Stadtmauer"],["l'évêque","der Bischof"],["la marée basse / haute","die Ebbe / die Flut"],["le sable mouvant","der Treibsand"],["s'accumuler","sich ansammeln"],["entourer","umgeben"]],
    mc: [
      { q: "Was erzählt die Legende über das Jahr 708?", o: ["Ein König baute ein Schloss","Der Erzengel Michael erschien einem Bischof und verlangte eine Kirche","Ein Schiff kam an","Das Meer kam zum ersten Mal"], a: 1 },
      { q: "Um wie viel kann das Wasser zwischen Ebbe und Flut steigen?", o: ["Um einen Meter","Um mehr als zehn Meter","Um hundert Meter","Gar nicht"], a: 1 },
      { q: "Warum baute man 2014 eine neue Brücke?", o: ["Weil die alte Strasse zu eng war","Weil wegen der Strasse Sand liegen blieb und der Mont fast keine Insel mehr war","Für Autorennen","Weil es ein Erdbeben gab"], a: 1 },
      { q: "Wie viele Menschen wohnen auf der Insel?", o: ["Etwa 30","Etwa 3000","Etwa 3 Millionen","Niemand"], a: 0 }
    ],
    rf: [
      { s: "In der Bucht kann es Treibsand geben.", a: true },
      { s: "Das Meer kommt sehr langsam zurück.", a: false, x: "«La mer revient très vite» – das Meer kommt sehr schnell zurück." },
      { s: "Jedes Jahr kommen etwa drei Millionen Touristen.", a: true },
      { s: "Die Omelette der Mère Poulard ist klein und schwer.", a: false, x: "Sie ist «très grande et très légère» – sehr gross und sehr leicht." }
    ],
    offen: [
      { q: "Warum ist es gefährlich, bei Ebbe in der Bucht zu laufen? Erkläre auf Deutsch.", l: "Es kann Treibsand geben, und das Meer kommt sehr schnell zurück; viele Menschen sind dort gestorben." },
      { q: "Schreibe aus dem Text die französischen Wörter für: der Felsen, die Ebbe, die Flut.", l: "le rocher, la marée basse, la marée haute" }
    ] },
  3: { vor: "Tourismus bringt Geld, aber auch Probleme. Welche Probleme kann es an einem sehr beliebten Ort geben?",
    dauer: "ca. 280 Wörter", text: "Le Mont-Saint-Michel est l'un des sites les plus visités de France et il fait partie du patrimoine mondial de l'UNESCO depuis 1979. Pourtant, son histoire n'est pas seulement une histoire de beauté et de prière.\n\nTout commence, selon la légende, en 708 : l'archange Michel aurait demandé à l'évêque Aubert de construire un sanctuaire sur le rocher. Au Moyen Âge, des moines bénédictins y construisent une abbaye immense. Le Mont devient un lieu de pèlerinage important, et des milliers de pèlerins traversent la baie à pied. Ce voyage est risqué : les marées de la baie sont parmi les plus fortes d'Europe, et des sables mouvants peuvent piéger les marcheurs.\n\nGrâce à ses remparts et à la mer, le Mont est aussi une forteresse presque imprenable. Pendant la guerre de Cent Ans, les Anglais ne réussissent jamais à le prendre. Après la Révolution française, les moines doivent partir, et l'abbaye devient une prison. Jusqu'en 1863, des prisonniers politiques y vivent dans des conditions très dures.\n\nAu 19e siècle, on construit une digue pour que les visiteurs puissent arriver plus facilement. Mais cette route bloque les courants : le sable s'accumule et le Mont risque de ne plus être une île. Après de longs travaux, un pont léger a remplacé la digue en 2014, et la mer peut de nouveau circuler.\n\nAujourd'hui, le Mont accueille environ trois millions de visiteurs par an, mais seulement une trentaine d'habitants. En été, la rue principale est souvent bondée. Certains critiquent un « tourisme de masse » qui transforme le lieu en décor. D'autres rappellent que les visiteurs font vivre toute la région.",
    wort: [["le patrimoine mondial","das Weltkulturerbe"],["le sanctuaire","das Heiligtum"],["le pèlerinage","die Pilgerreise, Wallfahrt"],["piéger","in eine Falle locken, festhalten"],["imprenable","uneinnehmbar"],["la digue","der Damm"],["bondé","überfüllt"],["faire vivre","ernähren, Einkommen geben"]],
    mc: [
      { q: "Seit wann gehört der Mont-Saint-Michel zum UNESCO-Weltkulturerbe?", o: ["Seit 708","Seit 1863","Seit 1979","Seit 2014"], a: 2 },
      { q: "Warum war die Pilgerreise zum Mont gefährlich?", o: ["Wegen wilder Tiere","Wegen sehr starker Gezeiten und Treibsand","Wegen Räubern auf der Strasse","Wegen Schnee"], a: 1 },
      { q: "Was geschah nach der Französischen Revolution mit der Abtei?", o: ["Sie wurde ein Hotel","Sie wurde ein Gefängnis","Sie wurde abgerissen","Sie wurde eine Schule"], a: 1 },
      { q: "Welches Problem verursachte der Damm aus dem 19. Jahrhundert?", o: ["Er blockierte die Strömungen, und Sand sammelte sich an","Er war zu teuer","Er wurde vom Meer zerstört","Er war zu schmal für Autos"], a: 0 }
    ],
    rf: [
      { s: "Im Hundertjährigen Krieg eroberten die Engländer den Mont.", a: false, x: "«Les Anglais ne réussissent jamais à le prendre» – sie schafften es nie." },
      { s: "Bis 1863 lebten politische Gefangene in der Abtei.", a: true },
      { s: "2014 ersetzte eine leichte Brücke den alten Damm.", a: true },
      { s: "Alle sind sich einig, dass der Massentourismus nur positiv ist.", a: false, x: "Manche kritisieren den Massentourismus, andere betonen, dass er die Region ernährt." }
    ],
    offen: [
      { q: "Der Mont-Saint-Michel hatte im Lauf der Geschichte verschiedene Funktionen. Nenne drei (auf Deutsch).", l: "Religiöser Ort/Abtei und Pilgerort, Festung (Hundertjähriger Krieg), Gefängnis (nach der Revolution bis 1863), heute Touristenziel/Weltkulturerbe." },
      { q: "Welche zwei Meinungen über den Tourismus nennt der letzte Abschnitt? Was denkst du?", l: "Kritik: Massentourismus macht den Ort zur Kulisse, Gassen sind überfüllt. Befürwortung: Touristen ernähren die ganze Region. Eigene begründete Meinung." },
      { q: "Écris une phrase en français avec « parce que » : Pourquoi est-ce que le Mont-Saint-Michel est célèbre ?", l: "Zum Beispiel: Le Mont-Saint-Michel est célèbre parce qu'il y a une abbaye sur un rocher dans la mer. / … parce que la marée est très forte." }
    ] }
},
"le-tour": {
  2: { vor: "Velofahren ist anstrengend. Wie bereiten sich Profis wohl auf ein dreiwöchiges Rennen vor?",
    dauer: "ca. 210 Wörter", text: "Le Tour de France existe depuis 1903. Au début, c'est un journal, « L'Auto », qui organise la course pour vendre plus de journaux. La première édition a seulement six étapes, mais elles sont très longues : parfois plus de 400 kilomètres en un jour ! Les cyclistes roulent même la nuit, sur des routes sans asphalte.\n\nAujourd'hui, le Tour a 21 étapes et dure trois semaines, en juillet. Les coureurs roulent environ 3400 kilomètres. Il y a des étapes plates, des étapes de montagne et des contre-la-montre, où chaque cycliste roule seul contre le chronomètre.\n\nPendant la course, il y a plusieurs maillots. Le maillot jaune est pour le coureur avec le meilleur temps au total. Il est jaune parce que le journal « L'Auto » était imprimé sur du papier jaune. Le maillot vert est pour le meilleur sprinteur, et le maillot blanc à pois rouges pour le meilleur grimpeur.\n\nLes cyclistes travaillent en équipe. Les coéquipiers aident leur leader : ils roulent devant lui pour le protéger du vent et ils lui apportent de l'eau.\n\nDepuis 2022, il existe aussi un Tour de France Femmes. Le Tour attire chaque année des millions de spectateurs au bord des routes et des millions de téléspectateurs.",
    wort: [["l'édition","die Ausgabe (hier: das Rennen eines Jahres)"],["plat","flach"],["le contre-la-montre","das Zeitfahren"],["le coureur","der Rennfahrer"],["à pois","gepunktet"],["le grimpeur","der Bergfahrer"],["le coéquipier","der Teamkollege"]],
    mc: [
      { q: "Warum organisierte die Zeitung «L'Auto» die Tour?", o: ["Um mehr Zeitungen zu verkaufen","Um Geld für Arme zu sammeln","Weil der König es wollte","Um neue Strassen zu testen"], a: 0 },
      { q: "Warum ist das Leadertrikot gelb?", o: ["Weil Gelb die Farbe von Frankreich ist","Weil die Zeitung «L'Auto» auf gelbem Papier gedruckt wurde","Weil der erste Sieger Gelb mochte","Weil man es gut sieht"], a: 1 },
      { q: "Wer trägt das weisse Trikot mit roten Punkten?", o: ["Der beste Sprinter","Der beste Bergfahrer","Der jüngste Fahrer","Der Fahrer mit der besten Zeit"], a: 1 },
      { q: "Wie helfen die Teamkollegen ihrem Leader?", o: ["Sie fahren vor ihm, schützen ihn vor dem Wind und bringen ihm Wasser","Sie fahren hinter ihm und singen","Sie tragen sein Velo","Sie fahren für ihn das Zeitfahren"], a: 0 }
    ],
    rf: [
      { s: "Die erste Tour hatte nur sechs Etappen.", a: true },
      { s: "Bei einem Zeitfahren fahren alle Fahrer zusammen.", a: false, x: "Beim «contre-la-montre» fährt jeder allein gegen die Uhr." },
      { s: "Das grüne Trikot ist für den besten Sprinter.", a: true },
      { s: "Eine Tour de France für Frauen gibt es noch nicht.", a: false, x: "Seit 2022 gibt es die Tour de France Femmes." }
    ],
    offen: [
      { q: "Vergleiche die erste Tour (1903) mit der Tour heute. Nenne zwei Unterschiede (auf Deutsch).", l: "1903: nur 6 Etappen, sehr lang (über 400 km), auch nachts, Strassen ohne Asphalt. Heute: 21 Etappen, drei Wochen, ca. 3400 km, verschiedene Etappenarten, Teams, Frauen-Tour." },
      { q: "Ordne zu: le maillot jaune, le maillot vert, le maillot à pois → bester Bergfahrer, beste Gesamtzeit, bester Sprinter.", l: "maillot jaune = beste Gesamtzeit; maillot vert = bester Sprinter; maillot à pois = bester Bergfahrer" }
    ] },
  3: { vor: "Im Profisport gibt es immer wieder Doping. Warum betrügen Sportler, obwohl sie erwischt werden können?",
    dauer: "ca. 290 Wörter", text: "Le Tour de France est plus qu'une course : c'est une partie de la culture française. Chaque été, des familles installent leurs chaises au bord de la route des heures avant le passage des coureurs. Pour beaucoup de villages, voir passer le Tour est l'événement de l'année.\n\nLa course est née en 1903, quand le journal « L'Auto » cherchait une idée pour attirer des lecteurs. Les premiers coureurs roulaient sur des routes de terre, avec des vélos lourds et sans vitesses. Ils devaient réparer eux-mêmes leurs vélos. Le maillot jaune, introduit en 1919, rappelle encore aujourd'hui la couleur du papier de ce journal.\n\nAujourd'hui, le Tour est un événement mondial. Les coureurs parcourent environ 3400 kilomètres et montent des cols célèbres comme l'Alpe d'Huez ou le Tourmalet. Pour réussir, ils s'entraînent toute l'année, suivent des plans alimentaires précis et peuvent brûler plus de 6000 calories pendant une seule étape de montagne. Le Slovène Tadej Pogačar a gagné le Tour en 2024 et en 2025 ; il est considéré comme l'un des meilleurs coureurs de l'histoire.\n\nMais le Tour a aussi un côté sombre : le dopage. En 1998, la police a trouvé de grandes quantités de produits interdits dans une voiture de l'équipe Festina. Plus tard, l'Américain Lance Armstrong, qui avait gagné sept fois le Tour, a avoué s'être dopé. Tous ses titres lui ont été retirés. Depuis, les contrôles sont plus stricts, mais beaucoup de spectateurs restent méfiants quand un coureur est beaucoup plus fort que les autres.\n\nMalgré ces scandales, la passion reste. Et depuis 2022, avec le Tour de France Femmes, les cyclistes féminines ont enfin leur propre grande course.",
    wort: [["attirer","anziehen, anlocken"],["la route de terre","die Naturstrasse, nicht asphaltiert"],["le col","der Pass (in den Bergen)"],["brûler","verbrennen"],["avouer","zugeben, gestehen"],["retirer","wegnehmen, aberkennen"],["méfiant","misstrauisch"]],
    mc: [
      { q: "Was zeigt der erste Abschnitt?", o: ["Dass die Tour langweilig ist","Dass die Tour ein wichtiger Teil der französischen Kultur ist","Dass niemand zuschaut","Dass die Tour nur im Fernsehen stattfindet"], a: 1 },
      { q: "Wie waren die Bedingungen für die ersten Fahrer?", o: ["Moderne Velos und Mechaniker","Naturstrassen, schwere Velos ohne Gänge, Reparaturen selbst machen","Kurze Etappen auf Asphalt","Sie fuhren nur bergab"], a: 1 },
      { q: "Was geschah 1998?", o: ["Pogačar gewann","Die Polizei fand verbotene Mittel in einem Auto des Teams Festina","Das gelbe Trikot wurde eingeführt","Die Frauen-Tour begann"], a: 1 },
      { q: "Warum bleiben viele Zuschauer misstrauisch?", o: ["Weil die Strecke zu kurz ist","Wegen der Dopingskandale, besonders wenn ein Fahrer viel stärker ist als die anderen","Weil die Trikots die Farbe wechseln","Weil die Tour zu teuer ist"], a: 1 }
    ],
    rf: [
      { s: "Das gelbe Trikot gibt es seit 1903.", a: false, x: "Es wurde 1919 eingeführt («introduit en 1919»)." },
      { s: "Auf einer Bergetappe können Fahrer über 6000 Kalorien verbrennen.", a: true },
      { s: "Lance Armstrong durfte seine sieben Titel behalten.", a: false, x: "«Tous ses titres lui ont été retirés» – alle Titel wurden ihm aberkannt." },
      { s: "Tadej Pogačar gewann die Tour 2024 und 2025.", a: true }
    ],
    offen: [
      { q: "Erkläre auf Deutsch, was mit dem «côté sombre» des Tours gemeint ist. Nenne zwei Beispiele aus dem Text.", l: "Die dunkle Seite ist Doping: 1998 Festina-Skandal (verbotene Mittel im Teamauto); Lance Armstrong gab Doping zu und verlor alle sieben Titel." },
      { q: "Suche im Text zwei berühmte Bergpässe und eine Information darüber, wie sich Profis vorbereiten.", l: "Alpe d'Huez, Tourmalet; Training das ganze Jahr, genaue Ernährungspläne." },
      { q: "Écris deux phrases en français sur un sport que tu aimes. Utilise « J'aime … » et « parce que … ».", l: "Zum Beispiel: J'aime le foot. J'aime le foot parce que c'est un sport d'équipe." }
    ] }
},
"le-loup": {
  2: { vor: "Bauern, Jäger, Naturschützer, Touristen: Wer hat welche Meinung zum Wolf? Was vermutest du?",
    dauer: "ca. 230 Wörter", text: "Pendant des siècles, il y avait des loups dans les montagnes suisses. Mais les gens avaient peur du loup et ils voulaient protéger leurs animaux. Ils ont chassé les loups jusqu'au dernier. Vers 1900, il n'y avait plus de loups en Suisse.\n\nEn 1995, un loup est arrivé d'Italie en Valais. Depuis, d'autres loups sont venus, et ils ont eu des petits. Aujourd'hui, il y a environ 300 loups en Suisse, surtout dans les Grisons, en Valais et au Tessin. Ils vivent en meutes, c'est-à-dire en familles. Une meute a un territoire très grand et elle peut parcourir plusieurs dizaines de kilomètres en une nuit.\n\nLe loup est important pour la nature. Il mange des cerfs, des chevreuils et des chamois, surtout les animaux malades ou faibles. Comme ça, les forêts ont moins de problèmes, parce que les cerfs mangent moins de jeunes arbres.\n\nMais le loup attaque aussi des moutons et des chèvres, surtout quand ils ne sont pas protégés. Chaque année, des centaines d'animaux sont tués. Pour les paysans, c'est dur. Ils protègent leurs troupeaux avec des clôtures électriques et des grands chiens de protection.\n\nDepuis 2023, la Suisse permet de tirer plus de loups pour réduire le nombre de meutes. Les associations de protection de la nature critiquent cette décision. La question reste : comment vivre avec le loup ?",
    wort: [["chasser","jagen"],["les petits","die Jungen (Tierkinder)"],["le territoire","das Revier"],["parcourir","zurücklegen (eine Strecke)"],["faible","schwach"],["le troupeau","die Herde"],["tirer","schiessen"]],
    mc: [
      { q: "Warum gab es um 1900 keine Wölfe mehr in der Schweiz?", o: ["Sie waren alle krank","Die Menschen hatten sie aus Angst und zum Schutz ihrer Tiere gejagt","Sie waren nach Italien gegangen","Es war zu kalt"], a: 1 },
      { q: "Wo leben heute viele Wölfe?", o: ["In Zürich und Basel","In Graubünden, im Wallis und im Tessin","Nur im Jura","Nur in Genf"], a: 1 },
      { q: "Warum ist der Wolf gut für den Wald?", o: ["Er pflanzt Bäume","Er frisst Hirsche, die dann weniger junge Bäume fressen","Er vertreibt die Touristen","Er frisst Insekten"], a: 1 },
      { q: "Was hat die Schweiz seit 2023 erlaubt?", o: ["Wölfe zu füttern","Mehr Wölfe zu schiessen","Wölfe im Zoo zu halten","Wölfe zu exportieren"], a: 1 }
    ],
    rf: [
      { s: "Eine Meute ist eine Wolfsfamilie.", a: true },
      { s: "Der Wolf frisst vor allem gesunde und starke Tiere.", a: false, x: "Er frisst vor allem kranke oder schwache Tiere («malades ou faibles»)." },
      { s: "Bauern schützen ihre Herden mit Elektrozäunen und Herdenschutzhunden.", a: true },
      { s: "Alle Naturschutzorganisationen finden die Entscheidung von 2023 gut.", a: false, x: "Sie kritisieren die Entscheidung." }
    ],
    offen: [
      { q: "Nenne je einen Vorteil und einen Nachteil des Wolfs (auf Deutsch).", l: "Vorteil: frisst kranke/schwache Wildtiere, schützt so den Wald (weniger Verbiss). Nachteil: greift Schafe und Ziegen an, Schaden für Bauern." },
      { q: "Schreibe die französischen Wörter für: die Herde, der Zaun, schiessen.", l: "le troupeau, la clôture, tirer" }
    ] },
  3: { vor: "Wie viel Platz soll die Natur in einem kleinen, dicht besiedelten Land wie der Schweiz bekommen?",
    dauer: "ca. 300 Wörter", text: "Peu d'animaux provoquent autant de débats en Suisse que le loup. Pour certains, il est le symbole d'une nature sauvage qui revient enfin. Pour d'autres, il représente une menace pour l'agriculture de montagne.\n\nAu 19e siècle, le loup a été exterminé en Suisse. Les gens le considéraient comme un animal nuisible, et les chasseurs recevaient même une prime pour chaque loup tué. Ce n'est qu'en 1995 qu'un premier loup, venu d'Italie, est réapparu en Valais. En 2012, la première meute s'est formée dans le massif du Calanda, aux Grisons. Depuis, la population a augmenté très vite : aujourd'hui, on compte environ 300 loups et plusieurs dizaines de meutes.\n\nLes biologistes rappellent que le loup joue un rôle important dans l'écosystème. En chassant les cerfs et les chevreuils, il limite leur nombre et les oblige à se déplacer. Ainsi, les jeunes arbres ont plus de chances de pousser, ce qui est essentiel pour les forêts de protection contre les avalanches.\n\nPourtant, la situation est difficile pour les éleveurs. Dans les alpages, les moutons et les chèvres passent souvent l'été sans surveillance permanente. Malgré les clôtures et les chiens de protection, les loups tuent chaque année des centaines d'animaux. Les cantons paient des indemnités, mais beaucoup d'éleveurs disent que l'argent ne compense ni le stress ni le travail supplémentaire.\n\nEn 2023, la Confédération a modifié les règles : désormais, les cantons peuvent abattre des loups de manière préventive, avant même qu'ils ne causent des dégâts. Les défenseurs de la nature parlent d'une « régulation excessive » et rappellent que le loup est une espèce protégée en Europe. Les représentants des paysans, eux, trouvent que cette mesure arrive trop tard. Entre ces deux positions, la Suisse cherche encore un équilibre.",
    wort: [["exterminer","ausrotten"],["nuisible","schädlich"],["la prime","die Prämie, Belohnung"],["l'écosystème","das Ökosystem"],["l'éleveur","der Tierhalter, Züchter"],["l'alpage","die Alp"],["l'indemnité","die Entschädigung"],["abattre","abschiessen, töten"]],
    mc: [
      { q: "Was bekamen Jäger im 19. Jahrhundert für einen getöteten Wolf?", o: ["Eine Strafe","Eine Prämie","Ein neues Gewehr","Nichts"], a: 1 },
      { q: "Wo bildete sich 2012 das erste Wolfsrudel?", o: ["Im Wallis","Im Calanda-Massiv in Graubünden","Im Tessin","Im Jura"], a: 1 },
      { q: "Warum ist der Wolf laut Biologen wichtig für Schutzwälder?", o: ["Er gräbt Löcher für Bäume","Er hält Hirsche und Rehe in Bewegung und in Schach, sodass junge Bäume wachsen können","Er frisst Lawinen","Er vertreibt Touristen aus dem Wald"], a: 1 },
      { q: "Was dürfen die Kantone seit 2023?", o: ["Wölfe vorbeugend abschiessen, bevor sie Schaden anrichten","Wölfe nur fotografieren","Wölfe in Zoos bringen","Keine Wölfe mehr schiessen"], a: 0 }
    ],
    rf: [
      { s: "Der erste Wolf kam 1995 aus Frankreich ins Wallis.", a: false, x: "Er kam aus Italien («venu d'Italie»)." },
      { s: "Laut vielen Tierhaltern gleicht das Geld der Kantone Stress und Mehrarbeit nicht aus.", a: true },
      { s: "Der Wolf ist in Europa eine geschützte Art.", a: true },
      { s: "Die Bauernvertreter finden, die Massnahme von 2023 komme zu früh.", a: false, x: "Sie finden, die Massnahme komme zu spät («trop tard»)." }
    ],
    offen: [
      { q: "Fasse auf Deutsch die Argumente der Naturschützer und der Bauern zusammen.", l: "Naturschützer: Wolf ist wichtig fürs Ökosystem (reguliert Wild, schützt Wald), geschützte Art, Regulierung übertrieben. Bauern: Wolf tötet jedes Jahr Hunderte Nutztiere, Herdenschutz ist aufwendig, Entschädigungen reichen nicht, Massnahme kam zu spät." },
      { q: "Was bedeutet der letzte Satz «la Suisse cherche encore un équilibre»? Erkläre.", l: "Die Schweiz sucht noch einen Ausgleich/Kompromiss zwischen Schutz des Wolfs und Schutz der Landwirtschaft." },
      { q: "Écris une phrase en français : « À mon avis, le loup … »", l: "Zum Beispiel: À mon avis, le loup est important pour la nature. / À mon avis, le loup est dangereux pour les moutons." }
    ] }
},
"le-euro": {
  2: { vor: "Was braucht es, damit ein grosses Sportturnier ein Erfolg wird?",
    dauer: "ca. 220 Wörter", text: "Du 2 au 27 juillet 2025, la Suisse a accueilli l'Euro féminin, le Championnat d'Europe de football des femmes. Seize équipes ont joué dans huit villes suisses : Bâle, Berne, Genève, Zurich, Lucerne, Saint-Gall, Sion et Thoune.\n\nLe tournoi a été un grand succès. Plus de 600 000 spectatrices et spectateurs sont venus dans les stades. C'est un record pour un Euro féminin. Beaucoup de supporters ont voyagé en train, et les villes ont organisé des fan zones avec des écrans géants.\n\nL'équipe de Suisse, la « Nati », a joué avec beaucoup d'énergie. Elle a passé la phase de groupes et elle est arrivée en quart de finale. Là, elle a perdu contre l'Espagne. Mais le public était fier de ses joueuses.\n\nLa finale a eu lieu au Parc Saint-Jacques, à Bâle. L'Angleterre a joué contre l'Espagne. Après 1 à 1, il y a eu des tirs au but, et l'Angleterre a gagné. Elle est championne d'Europe pour la deuxième fois de suite.\n\nPour le football féminin en Suisse, cet Euro est très important. Beaucoup de clubs ont plus de demandes de filles qui veulent jouer. Mais il reste des défis : les joueuses gagnent souvent beaucoup moins que les hommes, et il manque parfois des terrains et des entraîneuses.",
    wort: [["accueillir","empfangen, Gastgeber sein"],["la spectatrice","die Zuschauerin"],["l'écran géant","die Grossleinwand"],["la phase de groupes","die Gruppenphase"],["les tirs au but","das Penaltyschiessen"],["de suite","hintereinander"],["le défi","die Herausforderung"]],
    mc: [
      { q: "Wie lange dauerte die EM?", o: ["Vom 2. bis 27. Juli 2025","Den ganzen Sommer","Eine Woche","Vom Juni bis August"], a: 0 },
      { q: "Was war ein Rekord?", o: ["Die Anzahl Tore","Mehr als 600 000 Zuschauerinnen und Zuschauer in den Stadien","Die Anzahl Mannschaften","Die Länge der Spiele"], a: 1 },
      { q: "Wie gewann England den Final?", o: ["Mit 3 zu 0","Im Penaltyschiessen nach 1 zu 1","In der Verlängerung","Gar nicht, Spanien gewann"], a: 1 },
      { q: "Welche Herausforderung nennt der Text für den Frauenfussball?", o: ["Es gibt zu viele Spielerinnen","Spielerinnen verdienen oft viel weniger als Männer","Die Stadien sind zu gross","Es gibt keine Zuschauer"], a: 1 }
    ],
    rf: [
      { s: "Gespielt wurde unter anderem in Sion und Thun.", a: true },
      { s: "Die Schweiz verlor im Viertelfinal gegen England.", a: false, x: "Sie verlor gegen Spanien («contre l'Espagne»)." },
      { s: "England wurde zum zweiten Mal hintereinander Europameister.", a: true },
      { s: "Nach der EM wollen weniger Mädchen Fussball spielen.", a: false, x: "Viele Clubs haben mehr Anfragen von Mädchen." }
    ],
    offen: [
      { q: "Was haben die Städte für die Fans organisiert? Antworte auf Deutsch.", l: "Fanzonen mit Grossleinwänden." },
      { q: "Schreibe die französischen Wörter für: das Penaltyschiessen, die Herausforderung, empfangen/Gastgeber sein.", l: "les tirs au but, le défi, accueillir" }
    ] },
  3: { vor: "Warum bekommen Frauen im Spitzensport weniger Geld? Ist das gerecht?",
    dauer: "ca. 320 Wörter", text: "En juillet 2025, la Suisse a vécu un été de football. Pendant presque quatre semaines, seize équipes nationales se sont affrontées dans huit villes du pays pour le titre de championne d'Europe. Pour un petit pays comme la Suisse, organiser un tel tournoi était un grand défi, mais aussi une occasion unique de promouvoir le football féminin.\n\nLes chiffres montrent le succès de l'événement : plus de 600 000 personnes ont assisté aux matchs, un record pour un Euro féminin, et des millions de téléspectateurs ont suivi les rencontres dans toute l'Europe. Dans les villes hôtes, l'ambiance était festive : des cortèges de supporters traversaient les rues, et les fan zones étaient pleines même lors des matchs d'autres pays.\n\nLa « Nati », entraînée par la Suédoise Pia Sundhage, a réalisé un parcours remarquable. Après une défaite au premier match, elle a battu l'Islande, puis obtenu un match nul contre la Finlande grâce à un but dans les dernières minutes, ce qui lui a permis de se qualifier pour les quarts de finale. Face à l'Espagne, une des meilleures équipes du monde, les Suissesses ont résisté longtemps avant de s'incliner 2 à 0.\n\nLa finale à Bâle a opposé l'Angleterre et l'Espagne. Après un match très serré, terminé sur le score de 1 à 1, les Anglaises se sont imposées aux tirs au but et ont conservé leur titre.\n\nMais au-delà du sport, cet Euro a relancé un débat important. En Suisse, la plupart des joueuses de première division ne peuvent pas vivre du football : beaucoup travaillent ou étudient à côté. Les clubs manquent souvent de moyens, de terrains et d'entraîneuses qualifiées. Les organisateurs espèrent que l'enthousiasme de l'été 2025 aura des effets durables : plus de licenciées, plus de sponsors et une meilleure visibilité dans les médias. L'avenir dira si ce rêve devient réalité.",
    wort: [["s'affronter","gegeneinander antreten"],["promouvoir","fördern"],["la ville hôte","die Gastgeberstadt"],["le cortège","der Umzug"],["le parcours","der Weg (hier: im Turnier)"],["s'incliner","verlieren, sich geschlagen geben"],["la licenciée","die lizenzierte Spielerin (Vereinsmitglied)"],["durable","dauerhaft"]],
    mc: [
      { q: "Warum war die EM für die Schweiz eine «occasion unique»?", o: ["Um Geld zu verdienen","Um den Frauenfussball zu fördern","Um neue Stadien zu bauen","Um Touristen fernzuhalten"], a: 1 },
      { q: "Wie qualifizierte sich die Nati für den Viertelfinal?", o: ["Mit drei Siegen","Nach einer Niederlage, einem Sieg gegen Island und einem späten Unentschieden gegen Finnland","Durch Losentscheid","Ohne zu spielen"], a: 1 },
      { q: "Was bedeutet «les Anglaises ont conservé leur titre»?", o: ["Die Engländerinnen haben ihren Titel verloren","Die Engländerinnen haben ihren Titel behalten","Die Engländerinnen haben ihren Titel verkauft","Die Engländerinnen haben keinen Titel"], a: 1 },
      { q: "Was ist laut Text die Situation vieler Spielerinnen der höchsten Schweizer Liga?", o: ["Sie sind reich","Sie können nicht vom Fussball leben und arbeiten oder studieren nebenbei","Sie spielen nur im Ausland","Sie trainieren nie"], a: 1 }
    ],
    rf: [
      { s: "Die Schweizer Trainerin Pia Sundhage kommt aus Schweden.", a: true },
      { s: "Die Schweiz gewann ihr erstes Spiel.", a: false, x: "Sie verlor das erste Spiel («une défaite au premier match»)." },
      { s: "Gegen Spanien verlor die Schweiz 2 zu 0.", a: true },
      { s: "Laut Text ist schon sicher, dass die EM dauerhafte Wirkung hat.", a: false, x: "«L'avenir dira…» – die Zukunft wird es zeigen." }
    ],
    offen: [
      { q: "Welche Hoffnungen haben die Organisatoren für die Zukunft? Nenne drei auf Deutsch.", l: "Mehr lizenzierte Spielerinnen, mehr Sponsoren, bessere Sichtbarkeit in den Medien." },
      { q: "Erkläre auf Deutsch, welche Probleme der Frauenfussball in der Schweiz laut Text hat.", l: "Spielerinnen können nicht vom Fussball leben, Clubs haben wenig Geld, zu wenige Plätze und qualifizierte Trainerinnen." },
      { q: "Écris deux phrases en français sur un grand événement sportif que tu as vu (au stade ou à la télé).", l: "Zum Beispiel: J'ai regardé la finale de l'Euro à la télé. C'était très intéressant." }
    ] }
},
"le-lucas": {
  2: { vor: "Was ist in einer Lehre anders als in der Schule?",
    dauer: "ca. 220 Wörter", text: "Lucas a 16 ans et il habite à Morges, au bord du lac Léman. Depuis août, il fait un apprentissage de mécatronicien d'automobiles dans un garage à Lausanne. L'apprentissage dure quatre ans.\n\nLe matin, son réveil sonne à 5 h 50. Il prend un petit-déjeuner rapide et il part à la gare. À 7 h 15, il commence le travail. D'abord, il met ses vêtements de travail et il écoute Marco, son formateur. Marco explique les travaux du jour.\n\nAujourd'hui, une cliente arrive avec un problème : sa voiture fait un bruit bizarre. Marco et Lucas cherchent la cause. Lucas utilise un ordinateur pour lire les données du moteur. « Aujourd'hui, les voitures sont pleines d'électronique », explique Marco. « Un bon mécatronicien doit aussi comprendre l'informatique. » Finalement, ils trouvent le problème : une pièce est cassée. Lucas aide à la changer.\n\nAu début, Lucas avait des difficultés. Il ne connaissait pas les outils et il faisait des erreurs. Une fois, il a oublié de serrer une vis. Marco ne s'est pas fâché, mais il lui a expliqué que la sécurité est très importante.\n\nUn jour par semaine, Lucas va à l'école professionnelle. Il n'aime pas beaucoup les maths, mais il sait maintenant pourquoi elles sont utiles. Son rêve ? Plus tard, il veut travailler sur des voitures de course.",
    wort: [["le mécatronicien d'automobiles","der Automobil-Mechatroniker"],["le réveil","der Wecker"],["le bruit","das Geräusch"],["la cause","die Ursache"],["la pièce","das (Ersatz-)Teil"],["serrer une vis","eine Schraube anziehen"],["se fâcher","wütend werden"]],
    mc: [
      { q: "Wie lange dauert Lucas' Lehre?", o: ["Zwei Jahre","Drei Jahre","Vier Jahre","Ein Jahr"], a: 2 },
      { q: "Welches Problem hat das Auto der Kundin?", o: ["Es fährt nicht mehr","Es macht ein seltsames Geräusch","Es hat einen platten Reifen","Es ist schmutzig"], a: 1 },
      { q: "Was muss ein guter Mechatroniker laut Marco auch verstehen?", o: ["Kochen","Informatik","Musik","Fremdsprachen"], a: 1 },
      { q: "Was ist Lucas' Traum?", o: ["Lehrer werden","An Rennautos arbeiten","Eine eigene Garage in Morges","Fussballprofi werden"], a: 1 }
    ],
    rf: [
      { s: "Lucas' Wecker klingelt um 5.50 Uhr.", a: true },
      { s: "Lucas benutzt einen Computer, um die Daten des Motors zu lesen.", a: true },
      { s: "Als Lucas vergass, eine Schraube anzuziehen, wurde Marco sehr wütend.", a: false, x: "«Marco ne s'est pas fâché» – Marco wurde nicht wütend, er erklärte, dass Sicherheit wichtig ist." },
      { s: "Lucas liebt Mathematik.", a: false, x: "Er mag Mathe nicht sehr, weiss aber jetzt, warum sie nützlich ist." }
    ],
    offen: [
      { q: "Welche Schwierigkeiten hatte Lucas am Anfang der Lehre? Nenne zwei (auf Deutsch).", l: "Er kannte die Werkzeuge nicht, machte Fehler, vergass einmal, eine Schraube anzuziehen." },
      { q: "Schreibe einen Satz auf Französisch über deinen Wunschberuf: «Plus tard, je veux …»", l: "Zum Beispiel: Plus tard, je veux travailler dans un hôpital. / Plus tard, je veux être électricien." }
    ] },
  3: { vor: "Welche Eigenschaften sind in einer Lehre wichtiger als gute Noten?",
    dauer: "ca. 310 Wörter", text: "Lucas a 16 ans. Il y a un an, il ne savait pas du tout quel métier choisir. Il hésitait entre cuisinier, électricien et mécanicien. Pour l'aider, sa conseillère d'orientation lui a proposé de faire plusieurs stages. Pendant une semaine dans un restaurant, il a compris que le travail en cuisine était trop stressant pour lui. Dans un garage, au contraire, il s'est senti tout de suite à l'aise.\n\nAujourd'hui, Lucas est en première année d'apprentissage de mécatronicien d'automobiles dans un garage de Lausanne. Ses journées commencent tôt : il quitte la maison à Morges avant 6 h 30 pour prendre le train. Au garage, il travaille dans une équipe de huit personnes. Son formateur, Marco, lui donne des tâches de plus en plus difficiles : au début, il changeait seulement des pneus et des filtres ; maintenant, il fait des diagnostics avec l'ordinateur et il commence à travailler sur des voitures électriques.\n\n« Ce métier change beaucoup », explique Marco. « Avant, il fallait surtout être fort avec ses mains. Aujourd'hui, il faut aussi comprendre l'électronique et lire des schémas compliqués. Et pour les voitures électriques, il faut une formation spéciale, parce que la haute tension peut être mortelle. »\n\nLucas trouve le travail passionnant, mais pas toujours facile. Après une journée de huit heures et demie, il est souvent épuisé. Il doit aussi apprendre à parler avec les clients, à être poli même quand quelqu'un est énervé. « À l'école, si je faisais une erreur, c'était seulement une mauvaise note. Ici, une erreur peut être dangereuse pour quelqu'un. » Cette responsabilité l'a fait grandir.\n\nLe jeudi, il va à l'école professionnelle. Il y retrouve des apprentis d'autres garages, et ils échangent leurs expériences. Son objectif : obtenir son CFC dans quatre ans, puis peut-être faire une maturité professionnelle.",
    wort: [["hésiter","zögern, unsicher sein"],["la conseillère d'orientation","die Berufsberaterin"],["le stage","die Schnupperlehre"],["à l'aise","wohl, entspannt"],["la tâche","die Aufgabe"],["la haute tension","die Hochspannung"],["épuisé","erschöpft"],["le CFC","das EFZ (Eidg. Fähigkeitszeugnis)"]],
    mc: [
      { q: "Warum entschied sich Lucas gegen den Beruf Koch?", o: ["Weil er nicht gern isst","Weil ihm die Arbeit in der Küche zu stressig war","Weil er keine Lehrstelle fand","Weil seine Eltern es verboten"], a: 1 },
      { q: "Wie haben sich Lucas' Aufgaben verändert?", o: ["Gar nicht","Früher nur Reifen und Filter wechseln, jetzt Diagnosen am Computer und Elektroautos","Er macht jetzt nur noch Büroarbeit","Er wäscht nur noch Autos"], a: 1 },
      { q: "Warum braucht man für Elektroautos eine spezielle Ausbildung?", o: ["Weil sie teurer sind","Weil die Hochspannung tödlich sein kann","Weil sie schneller fahren","Weil sie keine Reifen haben"], a: 1 },
      { q: "Was ist laut Lucas der grosse Unterschied zwischen Schule und Lehre?", o: ["In der Lehre gibt es keine Fehler","In der Schule gibt ein Fehler eine schlechte Note, in der Lehre kann ein Fehler gefährlich sein","In der Schule ist es lauter","In der Lehre lernt man nichts"], a: 1 }
    ],
    rf: [
      { s: "Die Berufsberaterin schlug Lucas mehrere Schnupperlehren vor.", a: true },
      { s: "Lucas arbeitet allein in der Garage.", a: false, x: "Er arbeitet in einem Team von acht Personen." },
      { s: "Lucas muss lernen, auch mit genervten Kunden höflich zu sein.", a: true },
      { s: "Lucas geht am Montag in die Berufsschule.", a: false, x: "Er geht am Donnerstag («le jeudi»)." }
    ],
    offen: [
      { q: "Wie hat sich der Beruf Automobil-Mechatroniker laut Marco verändert? Erkläre auf Deutsch.", l: "Früher brauchte man vor allem geschickte Hände; heute muss man Elektronik verstehen, komplizierte Schemas lesen und für Elektroautos eine Spezialausbildung haben (Hochspannung)." },
      { q: "Der Text sagt, die Verantwortung habe Lucas «grandir» lassen. Was ist damit gemeint?", l: "Er ist reifer und erwachsener geworden, weil er weiss, dass seine Fehler für andere gefährlich sein können, und deshalb sorgfältiger arbeitet." },
      { q: "Écris deux phrases en français sur un stage (Schnupperlehre) que tu as fait ou que tu veux faire.", l: "Zum Beispiel: J'ai fait un stage dans un garage. C'était intéressant, mais fatigant. / Je veux faire un stage dans une pharmacie." }
    ] }
},
"le-portable": {
  2: { vor: "Welche Apps benutzt du am meisten? Warum ist es so schwer, das Handy wegzulegen?",
    dauer: "ca. 230 Wörter", text: "Inès a 15 ans et elle habite à Fribourg. Comme beaucoup de jeunes, elle utilise son portable toute la journée : pour écrire à ses amies, pour regarder des vidéos, pour écouter de la musique et aussi pour l'école.\n\nUn dimanche soir, elle regarde son temps d'écran : en moyenne six heures par jour, dont trois heures sur une application de vidéos courtes. Inès est surprise. « Je pensais que c'était deux heures, maximum ! » Elle remarque aussi qu'elle est souvent fatiguée le matin. Le soir, au lit, elle regarde encore des vidéos jusqu'à minuit.\n\nEn classe, sa prof de biologie a expliqué que la lumière bleue de l'écran peut perturber le sommeil. Et les applications sont faites pour qu'on reste le plus longtemps possible : les vidéos ne s'arrêtent jamais.\n\nInès décide de faire un défi : pendant deux semaines, pas de portable après 20 heures. Elle met son portable dans la cuisine et elle achète un vieux réveil. Les premiers soirs, elle s'ennuie et elle a peur de rater des messages importants. Mais petit à petit, ça change. Elle lit, elle dessine, elle parle plus avec sa famille.\n\nAprès deux semaines, Inès dort mieux et elle est moins stressée. Elle n'a pas supprimé ses applications, mais elle a maintenant une règle : le soir, c'est pour elle, pas pour son portable.",
    wort: [["en moyenne","im Durchschnitt"],["dont","davon"],["perturber","stören"],["le sommeil","der Schlaf"],["le défi","die Herausforderung, Challenge"],["s'ennuyer","sich langweilen"],["rater","verpassen"],["supprimer","löschen"]],
    mc: [
      { q: "Wie viel Zeit verbringt Inès mit Kurzvideos?", o: ["Eine Stunde","Drei Stunden pro Tag","Sechs Stunden pro Tag","Gar keine"], a: 1 },
      { q: "Was hat die Biologielehrerin erklärt?", o: ["Dass Handys verboten sind","Dass blaues Licht vom Bildschirm den Schlaf stören kann","Dass Videos gesund sind","Dass man mehr lesen soll"], a: 1 },
      { q: "Was kauft Inès für ihre Challenge?", o: ["Ein neues Handy","Einen alten Wecker","Ein Buch","Eine Lampe"], a: 1 },
      { q: "Wovor hat Inès an den ersten Abenden Angst?", o: ["Vor der Dunkelheit","Wichtige Nachrichten zu verpassen","Vor ihrem Bruder","Vor der Schule"], a: 1 }
    ],
    rf: [
      { s: "Inès dachte, sie sei höchstens zwei Stunden pro Tag am Handy.", a: true },
      { s: "Die Apps sind so gemacht, dass man möglichst kurz bleibt.", a: false, x: "Sie sind so gemacht, dass man möglichst lange bleibt («le plus longtemps possible»)." },
      { s: "Nach zwei Wochen hat Inès alle Apps gelöscht.", a: false, x: "«Elle n'a pas supprimé ses applications» – sie hat sie nicht gelöscht, hat aber eine Regel." },
      { s: "Nach der Challenge schläft Inès besser.", a: true }
    ],
    offen: [
      { q: "Was macht Inès am Abend statt am Handy zu sein? Nenne drei Dinge auf Französisch.", l: "Elle lit, elle dessine, elle parle avec sa famille." },
      { q: "Wie lautet Inès' neue Regel? Erkläre sie auf Deutsch und sag, ob sie für dich funktionieren würde.", l: "Der Abend gehört ihr, nicht dem Handy (kein Handy nach 20 Uhr). Eigene begründete Meinung." }
    ] },
  3: { vor: "Wer ist verantwortlich dafür, dass Jugendliche nicht zu viel am Handy sind: die Jugendlichen, die Eltern, die Schule oder die App-Firmen?",
    dauer: "ca. 300 Wörter", text: "Inès, 15 ans, habite à Fribourg. Elle a eu son premier smartphone à onze ans, comme la plupart de ses camarades. Au début, c'était surtout pour rester en contact avec ses parents. Puis sont venus les groupes de classe, les réseaux sociaux et les vidéos courtes.\n\nUn soir, en regardant les statistiques de son portable, Inès découvre qu'elle le déverrouille plus de 120 fois par jour et qu'elle y passe en moyenne six heures. « Six heures, c'est presque une journée d'école », se dit-elle. Elle comprend aussi pourquoi elle a souvent du mal à se concentrer pendant ses devoirs : après quelques minutes, sa main cherche automatiquement le téléphone.\n\nEn classe, son enseignant de sciences explique que ce n'est pas un hasard. Les grandes applications utilisent des mécanismes qui ressemblent à ceux des jeux de hasard : le défilement infini, les notifications, les « likes » qui arrivent de manière irrégulière. Chaque nouveau contenu peut être une petite récompense pour le cerveau. Résultat : il devient très difficile de s'arrêter.\n\nInès décide de tester un « détox numérique » pendant un mois. Elle désactive les notifications, elle supprime l'application qu'elle utilise le plus et, le soir, elle laisse son portable hors de sa chambre. Les premiers jours sont difficiles : elle se sent exclue quand ses amies parlent d'une vidéo qu'elle n'a pas vue. Mais après deux semaines, elle remarque des changements : elle s'endort plus vite, elle a plus de temps pour le basket et elle a même terminé un roman.\n\nÀ la fin du mois, Inès réinstalle l'application, mais avec une limite de trente minutes par jour. Pour elle, le portable n'est pas un ennemi. « Le problème, ce n'est pas le téléphone, c'est quand c'est lui qui décide à ma place. »",
    wort: [["déverrouiller","entsperren"],["avoir du mal à","Mühe haben zu"],["le hasard","der Zufall"],["le défilement infini","das endlose Scrollen"],["la récompense","die Belohnung"],["désactiver","ausschalten, deaktivieren"],["exclu(e)","ausgeschlossen"],["s'endormir","einschlafen"]],
    mc: [
      { q: "Warum bekam Inès ihr erstes Smartphone?", o: ["Für Spiele","Vor allem, um mit ihren Eltern in Kontakt zu bleiben","Für die Schule","Als Geschenk von Freundinnen"], a: 1 },
      { q: "Womit vergleicht der Lehrer die Mechanismen der Apps?", o: ["Mit Sport","Mit Glücksspielen","Mit Büchern","Mit Musik"], a: 1 },
      { q: "Was ist für Inès am Anfang der Detox-Zeit schwierig?", o: ["Sie kann nicht schlafen","Sie fühlt sich ausgeschlossen, wenn Freundinnen über Videos sprechen","Sie hat zu viele Hausaufgaben","Sie verliert ihr Handy"], a: 1 },
      { q: "Was ist Inès' Fazit?", o: ["Das Handy ist ein Feind","Das Problem ist, wenn das Handy statt ihr entscheidet","Sie braucht kein Handy mehr","Apps sind ungefährlich"], a: 1 }
    ],
    rf: [
      { s: "Inès entsperrt ihr Handy mehr als 120 Mal pro Tag.", a: true },
      { s: "Laut Lehrer ist es Zufall, dass man schwer aufhören kann.", a: false, x: "«Ce n'est pas un hasard» – die Apps nutzen gezielte Mechanismen." },
      { s: "Nach zwei Wochen hat Inès einen Roman fertig gelesen.", a: true },
      { s: "Nach dem Monat löscht Inès die App für immer.", a: false, x: "Sie installiert sie wieder, aber mit einem Limit von 30 Minuten pro Tag." }
    ],
    offen: [
      { q: "Erkläre auf Deutsch, wie Apps dafür sorgen, dass man schwer aufhören kann. Nenne drei Mechanismen aus dem Text.", l: "Endloses Scrollen, Benachrichtigungen, Likes, die unregelmässig kommen; jeder neue Inhalt ist eine kleine Belohnung fürs Gehirn – ähnlich wie bei Glücksspielen." },
      { q: "Welche drei Massnahmen trifft Inès für ihren «détox numérique»? Schreibe sie auf Französisch aus dem Text heraus.", l: "Elle désactive les notifications; elle supprime l'application qu'elle utilise le plus; elle laisse son portable hors de sa chambre le soir." },
      { q: "Écris une phrase en français : Quelle règle est-ce que tu voudrais essayer avec ton portable ?", l: "Zum Beispiel: Je voudrais laisser mon portable dans la cuisine le soir. / Je voudrais désactiver les notifications." }
    ] }
},
"le-sac": {
  2: { vor: "Was machst du, wenn du in einer stressigen Situation bist? Bleibst du ruhig?",
    dauer: "ca. 250 Wörter", text: "Samedi matin, Noah se réveille en retard. Il a un match de foot important à Bienne à dix heures, et l'entraîneur a dit : « Celui qui arrive en retard ne joue pas ! » Noah met vite son maillot, ses chaussures et ses clés dans son sac à dos bleu et il court à la gare de Neuchâtel.\n\nDans le train, il est fatigué. Il écoute de la musique et il ferme les yeux. Tout à coup, il entend : « Biel/Bienne, Biel/Bienne. » Il se lève et il sort du train en vitesse. Sur le quai, il regarde son dos. Pas de sac ! Le sac est resté dans le train, et le train part déjà vers Soleure.\n\nNoah panique. Son portable est dans sa poche, heureusement. Il appelle son père, mais personne ne répond. Alors, il va au guichet de la gare. La dame l'écoute calmement. « Quel train ? Quel wagon ? Comment est le sac ? » Noah explique : un sac bleu, deuxième classe, au milieu du train. La dame contacte le personnel du train.\n\nQuinze minutes plus tard, bonne nouvelle : le contrôleur a trouvé le sac. Il le donne à un collègue dans un train qui revient à Bienne. À 9 h 40, Noah récupère son sac sur le quai. Il court jusqu'au stade et il arrive à 9 h 55.\n\nPendant le match, Noah marque le but de la victoire. Après le match, l'entraîneur sourit : « Bravo, Noah. Mais la prochaine fois, n'oublie pas ta tête dans le train ! »",
    wort: [["se réveiller en retard","verschlafen"],["l'entraîneur","der Trainer"],["en vitesse","schnell, eilig"],["le quai","das Perron"],["heureusement","zum Glück"],["récupérer","zurückbekommen, abholen"],["la victoire","der Sieg"]],
    mc: [
      { q: "Warum hat Noah Stress am Morgen?", o: ["Er hat verschlafen und muss pünktlich zum Match","Er hat seine Schuhe verloren","Er ist krank","Es regnet"], a: 0 },
      { q: "Was macht Noah im Zug?", o: ["Er liest","Er hört Musik und schliesst die Augen","Er telefoniert","Er isst"], a: 1 },
      { q: "Welche Fragen stellt die Frau am Schalter?", o: ["Name und Adresse","Welcher Zug, welcher Wagen, wie der Rucksack aussieht","Wie alt er ist","Warum er Fussball spielt"], a: 1 },
      { q: "Was sagt der Trainer am Schluss?", o: ["Dass Noah nicht mehr spielen darf","Bravo, aber beim nächsten Mal soll er seinen Kopf nicht im Zug vergessen","Dass Noah zu spät war","Dass das Team verloren hat"], a: 1 }
    ],
    rf: [
      { s: "Der Zug fährt nach Biel weiter Richtung Solothurn.", a: true },
      { s: "Noahs Vater hilft ihm am Telefon.", a: false, x: "«Personne ne répond» – niemand nimmt ab." },
      { s: "Noah kommt um 9.55 Uhr beim Stadion an.", a: true },
      { s: "Noah schiesst das Siegestor.", a: true }
    ],
    offen: [
      { q: "Erzähle auf Deutsch in drei Sätzen, wie Noah seinen Rucksack zurückbekommt.", l: "Er geht zum Schalter; die Frau kontaktiert das Zugpersonal; der Kondukteur findet den Rucksack und gibt ihn einem Kollegen in einem Zug zurück nach Biel; um 9.40 Uhr holt Noah ihn am Perron ab." },
      { q: "Was bedeutet der Witz des Trainers «n'oublie pas ta tête dans le train»?", l: "Noah soll besser aufpassen und nicht so vergesslich sein; man kann den Kopf natürlich nicht vergessen – das ist ein Spass." }
    ] },
  3: { vor: "Erzähle von einem Tag, an dem alles schiefging. Wie endete er?",
    dauer: "ca. 370 Wörter", text: "Ce samedi-là, tout commence mal pour Noah. Son réveil ne sonne pas, parce qu'il a oublié de recharger son portable. Quand il ouvre les yeux, il est déjà 8 h 20. Or, le match de demi-finale de la coupe régionale commence à dix heures à Bienne, et l'entraîneur est très strict : les joueurs doivent être au vestiaire quarante-cinq minutes avant le coup d'envoi.\n\nNoah se lave en deux minutes, attrape une banane et met ses affaires dans son sac à dos : son maillot, ses crampons, son porte-monnaie et les clés de la maison. Il court jusqu'à la gare de Neuchâtel et saute dans le train de 8 h 47, juste avant que les portes se ferment.\n\nÉpuisé, il s'assoit, met ses écouteurs et s'endort presque. Quand l'annonce « Biel/Bienne » le réveille, il se précipite vers la sortie. C'est seulement sur le quai, en voyant le train repartir, qu'il comprend : son sac est resté sous le siège. Sans crampons et sans maillot, impossible de jouer. Et sans clés, il ne pourra même pas rentrer chez lui ce soir.\n\nAu lieu de paniquer, Noah respire profondément et réfléchit. Il se souvient que les CFF ont un service d'objets trouvés. Au guichet, une employée prend le temps de noter tous les détails et contacte l'équipe du train par radio. Pendant ce temps, Noah envoie un message à son entraîneur pour expliquer la situation. À sa grande surprise, celui-ci ne se fâche pas : « Merci de m'avoir prévenu. On t'attend. »\n\nVingt minutes plus tard, l'employée revient avec le sourire : le contrôleur a trouvé le sac et l'a confié à un collègue qui travaille dans le train en sens inverse. À 9 h 38, Noah tient enfin son sac dans les mains. Il arrive au stade un peu en retard, mais l'entraîneur le laisse jouer. À la 78e minute, il marque le but qui qualifie son équipe pour la finale.\n\nLe soir, Noah écrit un message de remerciement aux CFF. Il a appris deux choses : il faut toujours vérifier ses affaires, et quand on a un problème, mieux vaut communiquer que se cacher.",
    wort: [["recharger","aufladen"],["la demi-finale","der Halbfinal"],["le coup d'envoi","der Anpfiff"],["les crampons","die Fussballschuhe (mit Stollen)"],["se précipiter","sich stürzen, eilen"],["les objets trouvés","das Fundbüro"],["prévenir","Bescheid geben, vorwarnen"],["en sens inverse","in die Gegenrichtung"]],
    mc: [
      { q: "Warum klingelt Noahs Wecker nicht?", o: ["Er hat ihn ausgeschaltet","Er hat vergessen, sein Handy aufzuladen","Der Wecker ist kaputt","Seine Schwester hat ihn versteckt"], a: 1 },
      { q: "Warum ist der verlorene Rucksack ein doppeltes Problem?", o: ["Ohne Fussballsachen kann er nicht spielen und ohne Schlüssel nicht nach Hause","Er hat sein Handy darin","Er muss den Rucksack bezahlen","Seine Mutter wird wütend"], a: 0 },
      { q: "Wie reagiert Noah auf das Problem?", o: ["Er weint","Er atmet tief durch, denkt nach und handelt","Er fährt nach Hause","Er gibt auf"], a: 1 },
      { q: "Welche Lehre zieht Noah aus dem Tag?", o: ["Nie mehr Zug fahren","Immer die Sachen kontrollieren und bei Problemen lieber kommunizieren als sich verstecken","Nie mehr Fussball spielen","Immer zwei Rucksäcke mitnehmen"], a: 1 }
    ],
    rf: [
      { s: "Die Spieler müssen 45 Minuten vor dem Anpfiff in der Garderobe sein.", a: true },
      { s: "Noah merkt im Zug, dass sein Rucksack fehlt.", a: false, x: "Er merkt es erst auf dem Perron, als der Zug wegfährt." },
      { s: "Der Trainer ist wütend auf Noah.", a: false, x: "«Celui-ci ne se fâche pas» – er ist nicht wütend und dankt für die Information." },
      { s: "Noahs Tor qualifiziert das Team für den Final.", a: true }
    ],
    offen: [
      { q: "Der Text zeigt, dass Noah in einer schwierigen Situation richtig handelt. Nenne zwei Dinge, die er gut macht (auf Deutsch).", l: "Er bleibt ruhig und denkt nach; er geht zum Fundbüro/Schalter; er informiert seinen Trainer per Nachricht; er bedankt sich am Abend bei den SBB." },
      { q: "Suche im Text die französischen Ausdrücke für: der Anpfiff, das Fundbüro, Bescheid geben.", l: "le coup d'envoi, les objets trouvés, prévenir" },
      { q: "Écris un court message de remerciement en français (deux phrases), comme Noah aux CFF.", l: "Zum Beispiel: Bonjour, merci beaucoup pour votre aide ! Grâce à vous, j'ai retrouvé mon sac et j'ai pu jouer mon match. Noah" }
    ] }
}
});
/* Block d */
Object.assign(window.STUFEN, {
"doping": {
  2: { vor: "Welche Arten von Betrug im Sport kennst du ausser Doping?",
    wort: [["die Substanz","ein Stoff, z. B. ein Medikament"],["die Ausdauer","wie lange man eine Anstrengung durchhält"],["die Sperre","man darf eine Zeit lang nicht mehr mitmachen"],["der Ruf","was andere über eine Person denken"],["die Spielmanipulation","ein Spiel absichtlich beeinflussen"]],
    mc: [
      { q: "Wofür werden Dopingmittel laut Video zum Beispiel eingesetzt?", o: ["Für mehr Muskelaufbau oder mehr Ausdauer","Damit man besser schlafen kann","Damit man weniger trainieren muss, aber langsamer wird","Für schönere Haut"], a: 0 },
      { q: "Welche Organe können durch Doping geschädigt werden?", o: ["Nur die Zähne","Herz und Kreislauf, die Leber und auch die Psyche","Nur die Haare","Gar keine"], a: 1 },
      { q: "Welche Organisation führt eine Liste mit verbotenen Substanzen?", o: ["Die FIFA","Die Welt-Anti-Doping-Agentur (WADA)","Die UNO","Das Rote Kreuz"], a: 1 },
      { q: "Was kann einer Sportlerin oder einem Sportler drohen, wenn Doping nachgewiesen wird?", o: ["Ein Preis","Verlust von Titeln und Medaillen, lange Sperren oder Ausschluss","Ein neuer Vertrag","Nichts"], a: 1 }
    ],
    rf: [
      { s: "Die Liste der verbotenen Mittel wird regelmässig aktualisiert.", a: true },
      { s: "Doping schadet nur dem Körper, nicht dem Ruf.", a: false, x: "Doping kann auch den Ruf dauerhaft beschädigen; Fans und Sponsoren verlieren das Vertrauen." },
      { s: "Spielmanipulation und Wettbetrug sind laut Video auch Formen von Manipulation im Sport.", a: true }
    ],
    offen: [
      { q: "Nenne drei Arten von Doping, die im Video vorkommen.", l: "Anabole Steroide für Muskelaufbau, EPO für mehr Ausdauer, Blutdoping (Manipulation der Blutwerte), verbotene Methoden." },
      { q: "Warum zerstört Doping laut Video das Vertrauen in den Sport? Erkläre.", l: "Sport soll ein fairer Wettkampf sein, bei dem Training und Talent entscheiden. Wer dopt, betrügt; Zuschauer, Fans und Sponsoren können den Resultaten nicht mehr trauen." }
    ] },
  3: { vor: "Sollte jede Sportlerin und jeder Sportler selbst verantwortlich sein, oder müssen Verbände und Trainer stärker kontrolliert werden?",
    wort: [["die Ethik","Nachdenken darüber, was richtig und falsch ist"],["der Grundsatz","eine wichtige Regel, an die man sich hält"],["einwandfrei","ohne Fehler, korrekt"],["die Prävention","Vorbeugung, damit etwas gar nicht passiert"],["die Eigenverantwortung","Verantwortung für das eigene Handeln"],["nachhaltig","so, dass es lange wirkt"]],
    mc: [
      { q: "Welche zwei Hauptgründe gegen Doping nennt das Video?", o: ["Es ist teuer und kompliziert","Es ist unfair und kann der Gesundheit schaden","Es ist langweilig und ungesund","Es ist nur in Europa verboten"], a: 1 },
      { q: "Was bedeutet «Ethik im Sport» laut Video?", o: ["Möglichst viel gewinnen","Faire Regeln einhalten, Gegner und Teamkollegen respektieren und sich korrekt verhalten","Viel Geld verdienen","Nur im Team spielen"], a: 1 },
      { q: "Mit welchen Mitteln wollen die Anti-Doping-Organisationen Doping verhindern?", o: ["Mit Werbung für Energy-Drinks","Mit Kontrollen, strengen Strafen, Programmen und Aufklärung über die Gefahren","Mit höheren Preisgeldern","Mit kürzeren Wettkämpfen"], a: 1 },
      { q: "Welche Aussage passt zum Schluss des Videos?", o: ["Sport ist nur Siegen und Verlieren","Sport hat eine positive Bedeutung für die Gesellschaft, die nur durch Fairplay erhalten bleibt","Doping gehört zum Profisport","Fairplay ist veraltet"], a: 1 }
    ],
    rf: [
      { s: "Laut Video trägt jede Athletin und jeder Athlet eine eigene Verantwortung, die Regeln einzuhalten.", a: true },
      { s: "Das Video nennt Blutdoping als Manipulation der Blutwerte.", a: true },
      { s: "Laut Video setzt man heute weniger auf Vorbeugung als früher.", a: false, x: "Es gibt zunehmend vorbeugende Massnahmen (Prävention)." },
      { s: "Spielmanipulation geschieht laut Video oft, um finanzielle Vorteile zu erhalten.", a: true }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen Doping und Spielmanipulation. Nenne zu beidem ein Beispiel.", l: "Doping: verbotene Mittel/Methoden, um die eigene Leistung zu steigern (z. B. EPO, Steroide). Spielmanipulation: Resultate absichtlich beeinflussen, oft für Geld (z. B. ein Spiel für Wettbetrug absichtlich verlieren)." },
      { q: "Das Video sagt, Doping könne eine Karriere zerstören. Beschreibe drei mögliche Folgen für eine Sportlerin.", l: "Verlust von Titeln, Medaillen und Preisgeld; lange Sperre oder Ausschluss; Gesundheitsschäden (Herz, Leber, Psyche); Verlust des guten Rufs, Fans und Sponsoren." },
      { q: "Wer trägt mehr Verantwortung im Kampf gegen Doping: die Sportlerinnen und Sportler oder die Verbände? Nimm Stellung.", l: "Individuelle Stellungnahme mit Begründung, z. B. Eigenverantwortung der Athleten vs. Druck durch Trainer, Verbände, Sponsoren; Kontrollen und Prävention." }
    ] }
},
"frauenfussball": {
  2: { vor: "Wovon hängt es ab, wie viel ein Fussballprofi verdient? Sammle Ideen.",
    wort: [["der Zuschauerschnitt","wie viele Zuschauer im Durchschnitt kommen"],["die Einnahmen","Geld, das hereinkommt"],["die TV-Rechte","Geld, das Fernsehsender für Übertragungen bezahlen"],["der Faktor","wie oft grösser eine Zahl ist als eine andere"],["mitfinanzieren","teilweise bezahlen"]],
    mc: [
      { q: "Wofür werden Fussballprofis laut Video eigentlich bezahlt?", o: ["Nur für ihre sportliche Leistung","Dafür, wie viele Menschen sie erreichen und wie viel Geld sie einbringen","Für die Anzahl Tore","Für ihr Alter"], a: 1 },
      { q: "Wie viele Zuschauer kommen bei den Männern des FC Bayern ungefähr zu einem Heimspiel?", o: ["7 800","20 000","75 000","200 000"], a: 2 },
      { q: "Wie viel bringt ein Heimspiel der Bayern-Frauen ungefähr ein?", o: ["Etwa 17 000 Euro","Etwa 171 000 Euro","Etwa 4,5 Millionen Euro","Etwa 48 Millionen Euro"], a: 1 },
      { q: "Was wollen die Macher am Ende von den Zuschauern wissen?", o: ["Ihre Lieblingsspielerin","Ob sie das Ganze für einen Skandal oder einfach für die Realität eines Marktes halten","Wie viel sie verdienen","Welches Trikot sie haben"], a: 1 }
    ],
    rf: [
      { s: "Bei den Frauen kostet ein Ticket im Durchschnitt weniger als bei den Männern.", a: true },
      { s: "Die TV-Einnahmen der Frauen-Bundesliga sind fast gleich hoch wie bei den Männern.", a: false, x: "Frauen: etwa 5 Millionen Euro, Männer: über eine Milliarde (Faktor 200)." },
      { s: "Viele Frauenteams werden heute von der Männerabteilung mitfinanziert.", a: true }
    ],
    offen: [
      { q: "Vergleiche zwei Zahlen aus dem Video zwischen Frauen und Männern beim FC Bayern.", l: "Zum Beispiel: Zuschauer 7 800 vs. 75 000; Ticketpreis ca. 22 vs. 60 Euro; Einnahmen pro Saison ca. 3,2 vs. 120 Millionen; Trikotverkäufe ca. 0,5 vs. 48 Millionen; TV 5 Millionen vs. über 1 Milliarde." },
      { q: "Was schlägt das Video vor, damit Spielerinnen in Zukunft mehr verdienen? Nenne zwei Punkte.", l: "Mehr Medienreichweite, besseres Marketing, attraktive Spielorte, Frauenfussball gezielt fördern; dann kommen mehr Zuschauer und mehr Einnahmen." }
    ] },
  3: { vor: "Gleicher Lohn für gleiche Arbeit: Gilt dieser Grundsatz auch im Profisport? Begründe deine erste Meinung.",
    wort: [["die Entwicklung","wie sich etwas über die Zeit verändert"],["das Ungleichgewicht","wenn etwas nicht gleich verteilt ist"],["die Chancengleichheit","alle haben die gleichen Möglichkeiten"],["nachhaltig erwirtschaften","Geld so verdienen, dass es dauerhaft reicht"],["die Stellschraube","ein Punkt, an dem man etwas verändern kann"],["eigenständig","unabhängig, selbständig"]],
    mc: [
      { q: "Warum wirken die Lohnunterschiede nach den Zahlen im Video «gar nicht mehr so extrem»?", o: ["Weil die Frauen heimlich mehr verdienen","Weil die Einnahmeunterschiede (z. B. Faktor 26 bis 200) noch grösser sind als die Lohnunterschiede","Weil die Männer weniger spielen","Weil die Zahlen falsch sind"], a: 1 },
      { q: "Was hat sich seit 2006 in der Frauen-Bundesliga verändert?", o: ["Es gibt keine Liga mehr","Früher gab es viele eigenständige Frauenvereine, heute gehören die Teams fast alle zu grossen Männerklubs","Die Spiele sind kürzer","Die Spielerinnen verdienen gleich viel wie Männer"], a: 1 },
      { q: "Warum ist es laut Video nicht «völlig logisch», alles so zu lassen?", o: ["Weil die Unterschiede nicht aus dem Nichts entstanden sind, sondern auch gesellschaftliche Gründe haben","Weil Männer schlechter spielen","Weil die Zuschauer es verlangen","Weil der Staat es verbietet"], a: 0 },
      { q: "Was sagt das Video über die Qualität des Frauenfussballs?", o: ["Sie ist gleich geblieben","Im Vergleich zu vor zehn Jahren sind Intensität, Technik und Niveau deutlich höher","Sie ist schlechter geworden","Darüber sagt es nichts"], a: 1 }
    ],
    rf: [
      { s: "Bei den Trikotverkäufen ist der Unterschied etwa Faktor 100.", a: true },
      { s: "Laut Video reicht es, einfach mehr Geld für die Spielerinnen zu fordern.", a: false, x: "Mehr Geld fordern reicht nicht; es muss nachhaltig erwirtschaftet werden." },
      { s: "Die Frauen des FC Bayern nehmen pro Saison etwa 3,2 Millionen Euro ein.", a: true },
      { s: "Viele Heimspiele der Frauen finden auf dem Bayern-Campus vor rund 2 000 Zuschauern statt.", a: true }
    ],
    offen: [
      { q: "Fasse die Argumentation des Videos in drei Schritten zusammen: Was ist die Ausgangsfrage, was zeigen die Zahlen, was ist das Fazit?", l: "Frage: Sind die Lohnunterschiede ungerecht oder logisch? Zahlen: Zuschauer, Ticketpreise, Trikots und TV-Geld liegen bei den Männern um ein Vielfaches höher; Frauen werden teils mitfinanziert. Fazit: Unterschiede sind marktlogisch, aber gesellschaftlich gewachsen; man muss gezielt fördern (Medien, Marketing), damit Einnahmen und Löhne nachhaltig steigen." },
      { q: "Das Video spricht von «Chancengleichheit». Was ist damit gemeint, und warum braucht es dafür Förderung?", l: "Frauen sollen die gleichen Möglichkeiten haben, Profisportlerin zu werden; weil die Unterschiede auch durch frühere Benachteiligung entstanden sind, braucht es gezielte Förderung (Medienpräsenz, Infrastruktur, Marketing)." },
      { q: "Ist der Lohnunterschied ein Skandal oder die Realität eines Marktes? Nimm Stellung mit Argumenten aus dem Video.", l: "Individuelle Stellungnahme, z. B. Markt: Einnahmen bestimmen Löhne; Skandal/Ungerechtigkeit: gleiche Leistung, gesellschaftliche Ursachen, Förderpflicht. Gute Antworten nutzen Zahlen aus dem Video." }
    ] }
},
"esport": {
  2: { vor: "Was gehört für dich zu einer «richtigen» Sportart? Notiere drei Merkmale.",
    wort: [["das Klischee","ein einseitiges, oft falsches Bild"],["das Trainingslager","Zeit, in der ein Team intensiv trainiert"],["die Herzfrequenz","wie oft das Herz pro Minute schlägt"],["niedrigschwellig","leicht zugänglich, ohne grosse Hürden"],["das Preisgeld","Geld, das die Sieger gewinnen"]],
    mc: [
      { q: "Was ist laut Frodo der Unterschied zwischen Gamen und E-Sport?", o: ["Es gibt keinen","E-Sport ist organisierter, professioneller Wettkampf mit Training, Strategie, Ligen und Turnieren","E-Sport spielt man nur auf dem Handy","E-Sport ist nur für Kinder"], a: 1 },
      { q: "Wie lange trainieren Profiteams laut Video mindestens pro Tag?", o: ["1 Stunde","4 Stunden","8 Stunden","12 Stunden"], a: 2 },
      { q: "Welche Herzfrequenz erreichen E-Sportler laut Studien der Sporthochschule Köln?", o: ["Bis zu 60 Schläge pro Minute","Bis zu 100","Bis zu 160","Bis zu 250"], a: 2 },
      { q: "Wie hoch war das Rekord-Preisgeld beim Dota-2-Turnier The International?", o: ["Über 4 Millionen Dollar","Über 40 Millionen Dollar","Über 400 Millionen Dollar","4 000 Dollar"], a: 1 }
    ],
    rf: [
      { s: "Zu Profiteams gehören laut Video auch Coaches, Mentaltraining, Fitnesstraining und Essenspläne.", a: true },
      { s: "Laut Frodo braucht man für E-Sport ein grosses Stadion.", a: false, x: "Man braucht technisch kein Stadion; E-Sport geht auch in der Schulaula oder im eigenen Zimmer." },
      { s: "In Südkorea ist E-Sport staatlich anerkannt.", a: true }
    ],
    offen: [
      { q: "Nenne drei Argumente, mit denen Frodo zeigt, dass E-Sport «richtiger» Sport ist.", l: "Z. B. viel Training (8 Std./Tag), Coaches und Trainingspläne, Herzfrequenz bis 160, hohe kognitive Belastung, Hand-Auge-Koordination, grosse Turniere mit Emotionen, Preisgelder und Sponsoren." },
      { q: "Welche Gegenargumente gegen E-Sport erwähnt Frodo, und wie antwortet er darauf?", l: "«Die schwitzen ja nicht mal / nicht körperlich» → Studien zur Herzfrequenz, Belastung. «Macht dumm, stumpf oder süchtig» → Studien: Strategiespiele verbessern das Arbeitsgedächtnis, Teamspiele fördern soziale Kompetenzen." }
    ] },
  3: { vor: "Ein Meinungsvideo will überzeugen. Woran erkennt man, ob ein Argument stark oder schwach ist?",
    wort: [["die Durchlässigkeit","wie leicht man von einer Stufe zur nächsten kommt"],["die kognitive Belastung","Anstrengung für das Denken"],["die Inklusion","alle Menschen gehören dazu und können mitmachen"],["der Ausschlussmechanismus","etwas, das bestimmte Menschen ausschliesst"],["frappierend","erstaunlich, überraschend"],["widerlegen","zeigen, dass etwas falsch ist"]],
    mc: [
      { q: "Welche Bedingungen muss ein Spiel laut Video erfüllen, um als E-Sport zu taugen?", o: ["Schöne Zwischensequenzen und eine spannende Geschichte","Klare Regeln, faire Startbedingungen, gutes Balancing, Raum für individuelles Können und gute Zuschaubarkeit","Möglichst viele Level","Es muss gratis sein"], a: 1 },
      { q: "Warum nennt Frodo E-Sport «niedrigschwellig»?", o: ["Weil er billig ist","Weil man von zu Hause aus beginnen kann, unabhängig von Herkunft, Geschlecht oder Körper","Weil die Spiele einfach sind","Weil es keine Profis gibt"], a: 1 },
      { q: "Was meint er mit der besonderen «Durchlässigkeit» im E-Sport?", o: ["Hobbyspieler können mit genug Können in denselben Lobbys landen wie die Besten der Welt","Man kann jederzeit aufhören","Die Spiele laufen auf allen Geräten","Alle bekommen Preisgeld"], a: 0 },
      { q: "Was zeigt Frodos Bemerkung «Klassischer Boomer-Move» über das Video?", o: ["Es ist eine neutrale Reportage","Es ist ein subjektiver, humorvoll zugespitzter Meinungsbeitrag","Es ist eine wissenschaftliche Studie","Es richtet sich an ältere Menschen"], a: 1 }
    ],
    rf: [
      { s: "Laut Video ist die Teamkommunikation in internationalen Teams meist auf Englisch.", a: true },
      { s: "Frodo spielt selbst sehr gern MOBAs.", a: false, x: "Er spielt keine MOBAs, weil ihm das Verständnis fehlt, schaut sie aber trotzdem gern an." },
      { s: "Beim Fortnite World Cup 2019 wurde ein 16-Jähriger zum Millionär.", a: true },
      { s: "Laut Frodo applaudiert das Publikum im E-Sport auch für starke Spielzüge des gegnerischen Teams.", a: true }
    ],
    offen: [
      { q: "Wähle ein Argument von Frodo, das du überzeugend findest, und eines, das du schwach findest. Begründe beide.", l: "Individuelle Antwort, z. B. überzeugend: Studien zu Herzfrequenz/kognitiver Belastung; schwach: «Magische Momente gibt es häufiger als im Fussball» (subjektiv). Begründung, ob belegt oder nur Meinung." },
      { q: "Frodo sagt, E-Sport habe die Vorteile des klassischen Sports, aber «ohne die Ausschlussmechanismen». Erkläre, was er damit meint.", l: "Im klassischen Sport entscheiden oft Körper, Grösse, Geld der Eltern, Herkunft oder Wohnort; im E-Sport braucht es nur Gerät, Internet und Ehrgeiz – darum ist er inklusiver." },
      { q: "Sollte E-Sport in der Schweiz als Sport anerkannt und gefördert werden, z. B. im Schulsport? Nimm Stellung.", l: "Individuelle Stellungnahme mit mindestens zwei Argumenten, z. B. pro: Training, Teamarbeit, Inklusion; contra: wenig Bewegung, Bildschirmzeit, Suchtgefahr, kommerzielle Interessen." }
    ] }
},
"fastfashion": {
  2: { vor: "Warum kaufen Menschen mehr Kleider, als sie brauchen? Vermute zwei Gründe.",
    wort: [["das Junkfood","ungesundes, schnelles Essen"],["der Zyklus","ein Kreislauf, der sich wiederholt"],["miserabel","sehr schlecht"],["vernichten","zerstören"],["ausbeuten","Menschen für wenig Geld hart arbeiten lassen"]],
    mc: [
      { q: "Womit vergleicht Kirsten Brodde Fast Fashion zu Beginn?", o: ["Mit Junkfood","Mit einem Sportwagen","Mit Gemüse","Mit einem Buch"], a: 0 },
      { q: "Was geschah laut Video zwischen 2000 und 2014?", o: ["Der Modekonsum hat sich verdoppelt, die Tragezeit halbiert","Der Konsum hat sich halbiert","Kleider wurden teurer","Alle Läden haben geschlossen"], a: 0 },
      { q: "Was heizt laut Video den Massenkonsum besonders an?", o: ["Der Onlinehandel","Die Bibliotheken","Der Schulunterricht","Die Bauern"], a: 0 },
      { q: "Was machen Fast-Fashion-Konzerne laut Video mit unverkaufter Ware?", o: ["Sie verschenken sie an Schulen","Sie vernichten sie im grossen Stil","Sie verkaufen sie teurer","Sie lagern sie für immer"], a: 1 }
    ],
    rf: [
      { s: "Fast die Hälfte der Deutschen hat noch nie Kleidung selbst geflickt oder zum Schneider gebracht.", a: true },
      { s: "Laut Video halten Fast-Fashion-Kleider sehr lange.", a: false, x: "Die Qualität ist so miserabel, dass die Sachen nicht lange halten." },
      { s: "Für jedes neue T-Shirt werden Baumwolle, Erdöl und Wasser verbraucht.", a: true }
    ],
    offen: [
      { q: "Mit welchen Werbetricks bringt die Modeindustrie Menschen zum Kaufen? Nenne zwei aus dem Video.", l: "Alles ist nur einen Klick entfernt; Preise herabgesetzt; «3 für 2»; Werbung «Kauf mich!»; immer kürzere Zyklen mit neuen Trends." },
      { q: "Warum ist das Vernichten neuer Kleider laut Video ein Zeichen dafür, wie wenig Fast Fashion wert ist?", l: "Es ist billiger, die Saisonware zu vernichten, als sie günstig zu verkaufen oder aufzuarbeiten." }
    ] },
  3: { vor: "Wer trägt mehr Verantwortung: die Konsumentinnen und Konsumenten oder die Modeindustrie?",
    wort: [["schnelllebig","verändert sich sehr schnell"],["triggern","etwas gezielt auslösen"],["exzessiv","übermässig"],["verramschen","sehr billig verkaufen"],["skrupellos","ohne Rücksicht und schlechtes Gewissen"],["der Treibhausgasausstoss","Abgabe von Gasen, die das Klima erwärmen"]],
    mc: [
      { q: "Was will der Vergleich mit Junkfood ausdrücken?", o: ["Kleider sind essbar","Man kauft Fast Fashion schnell und gierig und fühlt sich danach schlecht","Fast Fashion ist gesund","Kleider und Pommes kosten gleich viel"], a: 1 },
      { q: "Welche drei Probleme fasst das Video am Schluss zusammen?", o: ["Hohe Preise, wenig Auswahl, lange Wartezeiten","Verbrauch knapper Rohstoffe, giftige Chemie für die Umwelt, Ausbeutung von Menschen in Billiglohnländern","Zu viele Läden, zu wenig Personal, zu viel Werbung","Schlechtes Wetter, Lärm, Verkehr"], a: 1 },
      { q: "Mit welchem Vergleich zeigt das Video die Klimabelastung der Textilindustrie (2015)?", o: ["So viel wie alle Autos in Deutschland","So viel wie der Schiffsverkehr und der internationale Langstreckenflugverkehr zusammen","So viel wie ein einziges Flugzeug","So viel wie die Landwirtschaft"], a: 1 },
      { q: "Wozu ruft Greenpeace am Ende auf?", o: ["Zu einem Boykott aller Kleider","Zu einer Auszeit von Fast Fashion, weil niemand dem Kauf-und-Wegwerf-Karussell hilflos ausgeliefert ist","Zu mehr Onlinekäufen","Zu einer Demonstration"], a: 1 }
    ],
    rf: [
      { s: "Laut Video werden Kleider heute weniger wertgeschätzt und gepflegt.", a: true },
      { s: "Die Modeindustrie bremst laut Video den Drang nach immer mehr.", a: false, x: "Sie «triggert» diesen Drang gnadenlos." },
      { s: "Das Video ist von Greenpeace, also einer Umweltorganisation.", a: true },
      { s: "Laut Video sind die Konsumenten dem Karussell hilflos ausgeliefert.", a: false, x: "«Keiner von uns ist diesem Kauf- und Wegwerfkarussell hilflos ausgeliefert.»" }
    ],
    offen: [
      { q: "Erkläre in eigenen Worten, wie Fast Fashion funktioniert: von der Produktion bis zum Abfall.", l: "Billige Massenware in immer kürzeren Zyklen, schlechte Qualität; Werbung und Onlinehandel lösen ständiges Kaufen aus; Kleider werden kurz getragen, kaum gepflegt oder geflickt und weggeworfen; unverkaufte Ware wird vernichtet." },
      { q: "Das Video stammt von Greenpeace. Warum ist es wichtig zu wissen, wer ein Video gemacht hat? Was bedeutet das für die Informationen?", l: "Greenpeace ist eine Umweltorganisation mit klarer Haltung und Ziel (Aufruf zur Auszeit); die Fakten können stimmen, aber die Darstellung ist einseitig/appellativ. Man sollte weitere Quellen prüfen." },
      { q: "«Nehmt euch eine Auszeit von Fast Fashion.» Wäre das für dich realistisch? Plane eine Woche oder einen Monat und begründe.", l: "Individuelle Antwort mit konkreten Massnahmen (nichts Neues kaufen, Second-Hand, tauschen, flicken) und Einschätzung, was schwierig wäre." }
    ] }
},
"machupicchu": {
  2: { vor: "Wie haben Menschen ohne Maschinen eine Stadt auf einem Berg gebaut? Stelle eine Vermutung auf.",
    wort: [["die Anden","Gebirge in Südamerika"],["das Weltkulturerbe","Ort, den die UNESCO als besonders wertvoll schützt"],["die Expedition","Forschungsreise"],["das Artefakt","von Menschen hergestellter Gegenstand aus alter Zeit"],["die Terrasse","flache Stufe am Hang für Pflanzen"]],
    mc: [
      { q: "In welchem Jahrhundert wurde Machu Picchu gebaut?", o: ["Im 5. Jahrhundert","Im 15. Jahrhundert","Im 19. Jahrhundert","Im 20. Jahrhundert"], a: 1 },
      { q: "Was bedeutet «Machu Picchu»?", o: ["Neue Stadt","Alter Berg","Goldener Fluss","Sonnentor"], a: 1 },
      { q: "Auf welcher Höhe liegt die Stadt?", o: ["Etwa 400 m","Etwa 2400 m","Etwa 4800 m","Auf Meereshöhe"], a: 1 },
      { q: "Wer machte Machu Picchu 1911 weltbekannt?", o: ["Hiram Bingham, ein Professor der Yale University","Christoph Kolumbus","Ein spanischer König","Die UNESCO"], a: 0 }
    ],
    rf: [
      { s: "Machu Picchu liegt in Peru, etwa 130 Kilometer von Cusco entfernt.", a: true },
      { s: "Die Stadt ist in einen landwirtschaftlichen und einen städtischen Teil gegliedert.", a: true },
      { s: "Bei der Entdeckung war die Stadt noch fast vollständig erhalten.", a: false, x: "Nur noch etwa 30 Prozent der ursprünglichen Struktur waren erhalten." }
    ],
    offen: [
      { q: "Welche Orte findet man in den Ruinen? Nenne vier.", l: "Häuser, Plätze, Friedhöfe, Heiligtümer, Sonnenuhr (Intihuatana), Sonnentempel, Tempel des Mondes, Tempel der drei Fenster, Terrassen, Lagerräume." },
      { q: "Wozu dienten die Terrassen und Lagerräume?", l: "Auf den Terrassen pflanzten die Inka Nahrungsmittel am steilen Hang an; in den Lagerräumen bewahrten sie Lebensmittel auf." }
    ] },
  3: { vor: "Wem gehören Funde aus der Vergangenheit: dem Land, in dem sie gefunden wurden, oder den Forschenden?",
    wort: [["die Zivilisation","hoch entwickelte Kultur"],["astronomisch","die Sterne und die Sonne betreffend"],["die Mumifizierung","Haltbarmachen von Toten"],["die Passgenauigkeit","wie exakt Teile zusammenpassen"],["plündern","Wertvolles rauben"],["verklagen","vor Gericht gegen jemanden vorgehen"]],
    mc: [
      { q: "Wofür nutzten die Inka die Sonnenuhr «Intihuatana»?", o: ["Als Spielplatz","Für einen Kalender, verbunden mit Beobachtungen der Jahreszeiten, der Zeit und des Wetters","Als Grab","Um Gold zu schmelzen"], a: 1 },
      { q: "Was geschah mit vielen Fundstücken von Machu Picchu?", o: ["Sie wurden vernichtet","Sie kamen in die USA; Peru verklagte 2008 die Universität, und 2010 schickten die USA einen Teil zurück","Sie blieben immer in Peru","Sie wurden versteigert"], a: 1 },
      { q: "Was zeigt, wie gut die Inka-Ingenieure waren?", o: ["Die Steine sind so exakt gehauen, dass sie bis heute fest sind und sogar zwei Erdbeben überstanden","Sie benutzten Beton","Sie bauten Hochhäuser","Sie hatten Kräne"], a: 0 },
      { q: "Was suchte Bingham eigentlich auf seiner Expedition?", o: ["Gold","Eine alte Hauptstadt namens Vilcabamba, in der die Nachfahren der Inka Zuflucht gefunden haben sollen","Einen Vulkan","Eine Eisenbahnroute"], a: 1 }
    ],
    rf: [
      { s: "Es gibt Hinweise, dass die Stadt schon vor 1911 bekannt war.", a: true },
      { s: "Machu Picchu ist seit 1983 Weltkulturerbe und seit 2007 eines der neuen sieben Weltwunder.", a: true },
      { s: "Alle Gold- und Silberverzierungen sind bis heute erhalten.", a: false, x: "Viele Originalstücke wurden geplündert." },
      { s: "Der Sonnentempel war dem Sonnengott gewidmet; dort fanden Zeremonien und Opfergaben statt.", a: true }
    ],
    offen: [
      { q: "Was erfahren wir aus Machu Picchu über die Religion und das Wissen der Inka? Nenne drei Hinweise.", l: "Tempel für Naturelemente (Sonne, Mond), Sonnenuhr/Kalender, astronomisches Wissen, Mumifizierung, Friedhof mit heiligem Felsen, exakte Steinbauweise." },
      { q: "Peru verlangte die Funde von der Yale University zurück. Wer hatte deiner Meinung nach recht? Begründe mit zwei Argumenten.", l: "Für Peru: kulturelles Erbe, Identität, Funde gehören ins Herkunftsland. Für Yale: Forschung, Erhaltung, Verträge damals. Begründetes Fazit." },
      { q: "Machu Picchu zieht Tausende Touristen an. Welche Chancen und Gefahren bringt das?", l: "Chancen: Einnahmen, Arbeitsplätze, Bekanntheit, Geld für Erhaltung. Gefahren: Abnutzung der Ruinen, Abfall, Natur belastet; Lösungen: Besucherbegrenzung, Eintrittsgebühren." }
    ] }
},
"chinesischemauer": {
  2: { vor: "Wozu baut man eine Mauer um ein ganzes Land?",
    wort: [["die Festungsanlage","Bauwerk zur Verteidigung"],["die Dynastie","Herrscherfamilie über viele Generationen"],["der Eindringling","jemand, der unerlaubt in ein Gebiet kommt"],["die Restaurierung","Reparatur eines alten Bauwerks"],["das Rauchsignal","Nachricht mit Rauch"]],
    mc: [
      { q: "Wann begann der Bau der Chinesischen Mauer?", o: ["215 v. Chr.","1644","1987","500 n. Chr."], a: 0 },
      { q: "Wie viele Besucher kommen jährlich?", o: ["Etwa 1 Million","15 bis 16 Millionen","100 Millionen","Etwa 1000"], a: 1 },
      { q: "Wie lang ist die Mauer laut neueren Studien?", o: ["Etwa 2000 km","Etwa 8850 km","Etwa 21 196 km","Etwa 100 000 km"], a: 2 },
      { q: "Wie verständigten sich die Soldaten zwischen den Türmen?", o: ["Mit Telefonen","Mit Rauchsignalen oder schwarz-weissen Fahnen","Mit Briefen","Mit Glocken"], a: 1 }
    ],
    rf: [
      { s: "Die Mauer gehört seit 1987 zum UNESCO-Weltkulturerbe.", a: true },
      { s: "Man kann die Mauer vom Mond aus mit blossem Auge sehen.", a: false, x: "Das ist ein Mythos; sie ist vom Weltraum aus nicht zu sehen." },
      { s: "Entlang der Mauer gibt es rund 40 000 Türme.", a: true }
    ],
    offen: [
      { q: "Wozu diente die Mauer? Nenne drei Zwecke.", l: "Schutz vor nomadischen Eindringlingen (z. B. Mongolen), Kontrolle der Grenzen, der Einwanderung und Migration, Handelsroute, Arbeitsplätze." },
      { q: "Wer baute die Mauer, und unter welchen Bedingungen?", l: "Mindestens 2 Millionen Arbeiter: Bauern, Soldaten, Sklaven, Gefangene; viele starben wegen Kälte und zu wenig Essen." }
    ] },
  3: { vor: "Ist ein Bauwerk ein Erfolg, wenn es sein Ziel am Ende nicht erreicht hat?",
    wort: [["nomadisch","ohne festen Wohnsitz, umherziehend"],["die Kavallerie","Soldaten auf Pferden"],["die Instandhaltung","Pflege und Reparatur"],["entkräften","zeigen, dass etwas nicht stimmt"],["imposant","beeindruckend gross"],["die Ressource","verfügbares Material oder Mittel"]],
    mc: [
      { q: "Warum gilt die Chinesische Mauer nicht als eine einzige Mauer?", o: ["Weil sie aus Holz ist","Weil sie aus mehreren Mauern besteht, die an verschiedenen Orten und in verschiedenen Epochen gebaut wurden","Weil sie nur 7 Meter lang ist","Weil sie unterirdisch ist"], a: 1 },
      { q: "Warum wurden unterschiedliche Materialien verwendet?", o: ["Aus Mode","Je nach den Ressourcen, die in der jeweiligen Region vorhanden waren","Weil der Kaiser es befahl","Um Geld zu sparen"], a: 1 },
      { q: "Warum wurde die Instandhaltung um 1677 beendet?", o: ["Weil sie fertig war","Weil sie nicht mehr sinnvoll war – die Mongolen hatten China trotzdem erobert","Weil das Geld fehlte","Weil Touristen kamen"], a: 1 },
      { q: "Warum schwanken die Längenangaben so stark (8850 km, 21 196 km, 22 000 km)?", o: ["Weil die Mauer wächst","Weil je nach Studie verschiedene Abschnitte und Epochen mitgezählt werden","Weil man falsch gemessen hat","Weil Teile versetzt wurden"], a: 1 }
    ],
    rf: [
      { s: "Der Bau dauerte mehr als 2000 Jahre; die letzten Teile entstanden in der Ming-Zeit (1368–1644).", a: true },
      { s: "Die Mauer konnte die Mongolen dauerhaft aufhalten.", a: false, x: "Die Nachkommen von Dschingis Khan beherrschten schliesslich China." },
      { s: "Am Fuss der Türme gab es Ställe für Tiere und Lagerräume.", a: true },
      { s: "Einige Steine wiegen bis zu einer Tonne.", a: true }
    ],
    offen: [
      { q: "Erkläre, wie das System aus Türmen, Festungen und Signalen funktionierte.", l: "Rund 40 000 Türme zur Überwachung und als Schutz; Soldaten gaben Warnungen mit Rauch oder Fahnen weiter; Festungen mit Toren, Treppen und Rampen für die Kavallerie; Ställe und Lager am Fuss der Türme." },
      { q: "Die Mauer war Schutz, Handelsweg und Arbeitsbeschaffung – aber viele Arbeiter starben. Wie bewertest du das Bauwerk heute?", l: "Individuelle Bewertung: beeindruckende Leistung und Kulturerbe, aber Zwangsarbeit, Tote, militärisch letztlich gescheitert. Abgewogenes Fazit." },
      { q: "Der Mythos «vom Mond aus sichtbar» ist sehr verbreitet. Warum halten sich solche Mythen? Nenne zwei Gründe.", l: "Klingt beeindruckend, wird oft wiederholt (Schulbücher, Medien), schwer selbst zu überprüfen, passt zur Grösse des Bauwerks." }
    ] }
},
"wetzikon": {
  2: { vor: "Was soll es in Wetzikon im Jahr 2040 für Jugendliche geben?",
    wort: [["die Vision","Vorstellung von der Zukunft"],["das Handlungsfeld","Bereich, in dem man etwas tun will"],["die Mobilität","wie sich Menschen fortbewegen"],["klimaneutral","ohne zusätzliche Treibhausgase"],["die Partizipation","Mitbestimmung, Mitwirken"]],
    mc: [
      { q: "Wer hat die Vision 2040 festgelegt?", o: ["Der Kanton Zürich","Der Stadtrat von Wetzikon","Die Schulen","Der Bund"], a: 1 },
      { q: "Wie viele Handlungsfelder hat die Vision?", o: ["Zwei","Sechs","Zehn","Zwanzig"], a: 1 },
      { q: "Was gehört zur Mobilität laut Video?", o: ["Nur Autos","Motorisierter Individualverkehr, öffentlicher Verkehr, Velo und Fussverkehr","Nur Flugzeuge","Nur Züge"], a: 1 },
      { q: "Was soll Wetzikon für Familien bieten?", o: ["Attraktive Betreuungsmöglichkeiten","Mehr Parkplätze","Weniger Schulen","Nichts"], a: 0 }
    ],
    rf: [
      { s: "Wetzikon will eine altersfreundliche Stadt sein.", a: true },
      { s: "Die Abhängigkeit von fossiler Energie soll steigen.", a: false, x: "Sie soll reduziert werden." },
      { s: "Zur Vision gehören auch Grünflächen.", a: true }
    ],
    offen: [
      { q: "Nenne die sechs Handlungsfelder der Vision 2040.", l: "Wohnraum und Arbeitsplatz, qualitatives Wachstum, digitale Transformation, Mobilität, gesellschaftliche Veränderungen, Klima (klimaneutrales Wohnen und Arbeiten)." },
      { q: "Welches Handlungsfeld ist für dich am wichtigsten? Warum?", l: "Individuelle Antwort mit Bezug auf das eigene Leben in Wetzikon." }
    ] },
  3: { vor: "Wie viel Mitsprache sollten Jugendliche bei der Planung ihrer Stadt haben?",
    wort: [["qualitatives Wachstum","Wachstum, bei dem die Lebensqualität besser wird, nicht nur die Grösse"],["die digitale Transformation","Umstellung auf digitale Abläufe"],["Open Government Data","Daten der Verwaltung, die alle frei nutzen können"],["die Inklusion","alle Menschen gehören dazu und können teilnehmen"],["die Kreislaufwirtschaft","Materialien werden wiederverwendet statt weggeworfen"],["die Immobilie","Gebäude oder Grundstück"]],
    mc: [
      { q: "Was bedeutet «Open Government Data» in der Vision?", o: ["Die Stadt verkauft Daten","Städtische Daten werden zugänglich bereitgestellt, damit alle sie nutzen können","Alle Daten werden gelöscht","Nur Politiker sehen die Daten"], a: 1 },
      { q: "Wie will die Stadt die Bevölkerung an der Stadtentwicklung beteiligen?", o: ["Gar nicht","Mit Partizipationsprozessen, physisch und digital","Nur durch Wahlen alle zehn Jahre","Durch Werbung"], a: 1 },
      { q: "Welche Gruppe soll beim Handlungsfeld «gesellschaftliche Veränderungen» aktiv gefördert werden?", o: ["Touristen","Fremdsprachige Eltern und Kinder","Nur Rentner","Firmen"], a: 1 },
      { q: "Was ist laut Video ein Ziel im Bereich Klima?", o: ["Mehr Ölheizungen","Ein Konzept für Kreislaufwirtschaft und eine moderne Hauptsammelstelle","Mehr Autobahnen","Grünflächen abbauen"], a: 1 }
    ],
    rf: [
      { s: "Die Stadt soll ihre eigenen Immobilien aktiv bewirtschaften.", a: true },
      { s: "Zur digitalen Transformation gehören laut Video auch moderne Arbeitsbedingungen in der Verwaltung.", a: true },
      { s: "Laut Vision soll der kantonale Verkehr bei der Planung keine Rolle spielen.", a: false, x: "Mobilität soll ins städtische Entwicklungskonzept integriert werden, und der Kanton muss mitwirken." }
    ],
    offen: [
      { q: "Erkläre den Unterschied zwischen «Wachstum» und «qualitativem Wachstum» an einem Beispiel aus Wetzikon.", l: "Wachstum: mehr Einwohner, mehr Häuser. Qualitativ: bessere Lebensqualität, z. B. Treffpunkte, Grünflächen, Betreuungsangebote, weniger Verkehr." },
      { q: "Wähle ein Handlungsfeld und schreibe zwei konkrete Massnahmen, die Jugendlichen in Wetzikon nützen würden.", l: "Z. B. Mobilität: sichere Velowege zur Schule, Nachtbus. Digitalisierung: Jugend-App zur Mitsprache. Gesellschaft: Jugendtreff, Deutschkurse für Familien." },
      { q: "Der Film ist eine Präsentation der Stadt. Was fehlt dir darin? Formuliere eine kritische Frage an den Stadtrat.", l: "Z. B.: Wie wird die Bevölkerung konkret beteiligt? Was kostet das? Wie wird gemessen, ob die Ziele erreicht werden? Wo kommen Jugendliche vor?" }
    ] }
},
"fischen": {
  2: { vor: "Was braucht man, um einen sehr grossen Fisch zu fangen?",
    wort: [["der Waller","anderer Name für den Wels, grösster Raubfisch in Europas Flüssen"],["der Köder","Futter am Haken, das Fische anlockt"],["die Montage","Schnur mit Haken und Köder"],["der Bissanzeiger","Gerät, das piepst, wenn ein Fisch anbeisst"],["anfüttern","Futter ins Wasser werfen, um Fische anzulocken"]],
    mc: [
      { q: "An welchem Fluss fischen die beiden Christophs?", o: ["An der Naab","Am Rhein","An der Limmat","An der Donau in Wien"], a: 0 },
      { q: "Wie gross war ein Waller, den einer der beiden früher gefangen hat?", o: ["Etwa 30 cm","Etwa 1,80 m","Etwa 5 m","Etwa 50 cm"], a: 1 },
      { q: "Wann ist laut Film die beste Beisszeit?", o: ["Am Mittag","In der Nacht","Am Nachmittag","Nur im Winter"], a: 1 },
      { q: "Welcher Fisch beisst nach einer Stunde zuerst an?", o: ["Ein Waller","Ein Hecht","Ein Karpfen","Eine Forelle"], a: 1 }
    ],
    rf: [
      { s: "Für jeden Fisch braucht es andere Haken und Köder.", a: true },
      { s: "Die beiden machen Feuer mit Feuerstein und Kienspan, obwohl ein Feuerzeug auch gegangen wäre.", a: true },
      { s: "In der Nacht fängt keiner der beiden einen Fisch.", a: false, x: "Einer bleibt im Zelt und fängt am frühen Morgen noch einen schönen Fisch." }
    ],
    offen: [
      { q: "Was gehört für die beiden ausser dem Fischen noch zu einem Nachtansitz? Nenne drei Dinge.", l: "Zusammensitzen, Feuer machen, grillen und essen, etwas trinken, fachsimpeln, die Natur geniessen, im Zelt schlafen." },
      { q: "Wie funktioniert der Bissanzeiger mit Funkbox?", l: "Er piepst, wenn ein Fisch an der Schnur zieht; die Funkbox liegt neben dem Bett im Zelt, so wacht man auf." }
    ] },
  3: { vor: "Ist Fischen eher Sport, Jagd, Naturerlebnis oder Tierquälerei? Was denkst du?",
    wort: [["mäandern","in Schlingen und Kurven fliessen"],["das Aminosäuren-Profil","Zusammensetzung der Eiweissbausteine"],["verschmähen","ablehnen, nicht wollen"],["kapital","sehr gross (bei Fischen und Wild)"],["fachsimpeln","über ein Fachthema plaudern"],["pachten","gegen Bezahlung nutzen dürfen"]],
    mc: [
      { q: "Was ist an der Naab anders als an vielen anderen Flüssen in Bayern?", o: ["Sie ist begradigt","Sie darf fast ungehindert mäandern, in ihrem natürlichen Lauf","Sie ist unterirdisch","Sie hat keine Fische"], a: 1 },
      { q: "Warum bestehen Karpfenköder aus Fischmehl?", o: ["Weil sie billig sind","Weil sie proteinreich sind – der Karpfen nimmt das Aminosäuren-Profil wahr und entscheidet, ob er frisst","Weil sie gut riechen für Menschen","Weil Karpfen nur Pflanzen fressen"], a: 1 },
      { q: "Woran erkennt man nachträglich, ob vielleicht ein Waller angebissen hat?", o: ["An der Farbe des Wassers","Ob der Köder breitflächig abgeschuppt ist","Am Geräusch","Gar nicht"], a: 1 },
      { q: "Warum sind Flussfische laut Film «kämpferischer»?", o: ["Weil sie hungriger sind","Weil sie eine massivere Statur und einen anderen Muskelaufbau haben","Weil sie grösser sind als Meerfische","Weil das Wasser kalt ist"], a: 1 }
    ],
    rf: [
      { s: "Der Karpfen ernährt sich pflanzlich und tierisch, z. B. von Kleintieren und Krebsen.", a: true },
      { s: "Ein Fischer vergleicht das Wallerfischen mit der Jagd.", a: true },
      { s: "Bei einem Piepsen sieht man sofort, welcher Fisch angebissen hat.", a: false, x: "Ins Wasser schauen kann keiner; erst an der Montage sieht man vielleicht Hinweise." },
      { s: "Am Schluss des Ausschnitts plant der Fischereiverein Elektrofischen an der Waldnaab.", a: true }
    ],
    offen: [
      { q: "Vergleiche Waller- und Karpfenangeln: Köder, Technik, Verhalten der Fische.", l: "Waller: nachts aktiv, Raubfisch, frisst fast alles, klassische Wallermontage. Karpfen: frisst Pflanzen und Kleintiere, proteinreiche Köder auf Fischmehlbasis, Anfüttern, Bissanzeiger mit Funkbox." },
      { q: "Einer sagt: «Das Fischen an sich tritt fast in den Hintergrund.» Was meint er damit? Belege mit Beispielen.", l: "Wichtig sind Gemeinschaft und Naturerlebnis: Feuer, Grillieren, Trinken, Fachsimpeln, Warten, Entspannen." },
      { q: "In der Schweiz braucht man für viele Gewässer ein Patent und für die Fischerkarte einen Sachkundenachweis (SaNa). Warum sind solche Regeln sinnvoll? Nenne zwei Gründe.", l: "Tierschutz (Fische richtig und schnell töten, schonend behandeln), Schutz der Bestände (Schonzeiten, Mindestmasse), Umweltschutz, Sicherheit." }
    ] }
},
"roteliste": {
  2: { vor: "Welche Tiere in der Schweiz sind deiner Meinung nach bedroht?",
    wort: [["die Rote Liste","Liste, die zeigt, wie stark Arten gefährdet sind"],["gefährdet","in Gefahr"],["der Bestand","Anzahl der Tiere einer Art"],["der Lebensraum / das Habitat","Ort, an dem eine Art lebt"],["die Forstwirtschaft","Nutzung des Waldes, z. B. Holz fällen"]],
    mc: [
      { q: "Wie oft werden die Roten Listen in Deutschland aktualisiert?", o: ["Jedes Jahr","Alle zehn Jahre","Alle hundert Jahre","Nie"], a: 1 },
      { q: "Wofür hilft die Rote Liste zum Beispiel beim Bau einer neuen Strasse?", o: ["Man sieht, ob dort bedrohte Arten leben, die man schützen muss","Man weiss, wie breit die Strasse wird","Man kennt die Kosten","Gar nicht"], a: 0 },
      { q: "Wie viele Säugetiere in Deutschland sind laut Video in ihrem Bestand gefährdet?", o: ["Etwa ein Zehntel","Etwa ein Drittel","Alle","Keine"], a: 1 },
      { q: "Welche drei Waldarten werden als Beispiele genannt?", o: ["Fuchs, Reh, Wildschwein","Wildkatze, Mopsfledermaus, Hirschkäfer","Bär, Wolf, Luchs","Eichhörnchen, Specht, Igel"], a: 1 }
    ],
    rf: [
      { s: "Es gibt auch eine weltweite Rote Liste (IUCN Red List).", a: true },
      { s: "Die Wildkatze ist ausgestorben.", a: false, x: "Sie gilt als gefährdet; ihr Bestand nimmt sogar leicht zu." },
      { s: "Der Hirschkäfer legt seine Eier gern an Wurzeln von Eichen ab.", a: true }
    ],
    offen: [
      { q: "Was ist eine Rote Liste? Erkläre in zwei Sätzen.", l: "Eine wissenschaftliche Liste, die zeigt, wie stark Tier-, Pflanzen- und Pilzarten gefährdet sind (von ungefährdet bis ausgestorben). Sie hilft, Schutzmassnahmen zu planen." },
      { q: "Warum brauchen Wildkatzen grosse zusammenhängende Wälder?", l: "Sie sind scheu und brauchen viel Raum; wenn Wälder durch Strassen, Felder und Siedlungen zerstückelt werden (Habitat-Fragmentierung), finden sie zu wenig Lebensraum." }
    ] },
  3: { vor: "Wer ist verantwortlich, wenn eine Art ausstirbt: Politik, Wirtschaft oder jeder Einzelne?",
    wort: [["der Artenschwund","immer weniger Arten"],["die Neobiota","Arten, die der Mensch eingeschleppt hat"],["die Habitat-Fragmentierung","Zerstückelung eines Lebensraums"],["das Monitoring","regelmässige Beobachtung und Zählung"],["die Bestandsentwicklung","wie sich die Zahl der Tiere verändert"],["das Totholz","abgestorbene Bäume und Äste im Wald"]],
    mc: [
      { q: "Nach welchen Kriterien wird eine Art eingestuft?", o: ["Nach Farbe und Grösse","Aktueller Bestand, kurz- und langfristiger Bestandstrend und Risikofaktoren der nächsten zehn Jahre","Nach Beliebtheit","Nach dem Alter der Art"], a: 1 },
      { q: "Wie viele Arten sind in Deutschland bekannt, und wie viele wurden eingestuft?", o: ["72 000 bekannt, 36 000 eingestuft","7200 bekannt, alle eingestuft","1 Million bekannt, 100 eingestuft","36 000 bekannt, 72 000 eingestuft"], a: 0 },
      { q: "Warum ist die Mopsfledermaus («Urwaldfledermaus») stark gefährdet?", o: ["Wegen Katzen","Sie braucht Höhlen in alten Bäumen (ca. 130 Jahre), die wegen starker Forstwirtschaft selten sind","Wegen zu viel Licht in Städten","Wegen der Kälte"], a: 1 },
      { q: "Welcher Anteil der bewerteten Insektenarten ist gefährdet?", o: ["Etwa 2,6 %","Etwa 26 %","Etwa 62 %","Etwa 90 %"], a: 1 }
    ],
    rf: [
      { s: "Ein Viertel des weltweiten Vorkommens der Mopsfledermaus liegt in Deutschland.", a: true },
      { s: "In der Gesamtartenliste werden auch Neobiota aufgeführt.", a: true },
      { s: "Der Hirschkäfer braucht junge, gesunde Fichtenwälder.", a: false, x: "Er bevorzugt ältere Eichenwälder mit Bäumen, die absterben dürfen oder schon abgestorben sind." },
      { s: "Herausgeber der Roten Liste in Deutschland ist das Bundesamt für Naturschutz.", a: true }
    ],
    offen: [
      { q: "Was haben die drei Beispielarten gemeinsam? Erkläre, welches Problem der Wald heute hat.", l: "Alle brauchen alte, grosse, naturnahe Wälder (zusammenhängend, alte Bäume mit Höhlen, Totholz, Eichen); intensive Forst- und Landwirtschaft und Zerstückelung zerstören das." },
      { q: "Warum ist die Rote Liste ein «wichtiges Instrument», obwohl sie selbst keine Art rettet?", l: "Sie liefert wissenschaftliche Grundlagen, zeigt Trends, dient als Argument bei Bauprojekten, hilft Schutzgebiete auszuweisen und Schutz- und Monitoringmassnahmen zu planen." },
      { q: "Schlage drei Massnahmen vor, mit denen ein Förster oder eine Gemeinde den Hirschkäfer und die Mopsfledermaus schützen könnte.", l: "Alte Bäume stehen lassen, Totholz liegen lassen, Eichen fördern, Waldreservate, Waldstücke verbinden, weniger standortfremde Baumarten pflanzen." }
    ] }
},
"zuerich": {
  2: { vor: "Wie ist Zürich wohl entstanden? Warum gerade an diesem Ort?",
    wort: [["die Legende","alte Geschichte, die nicht ganz sicher wahr ist"],["der Märtyrer / die Märtyrerin","Person, die für ihren Glauben stirbt"],["enthaupten","jemandem den Kopf abschlagen"],["das Wahrzeichen","bekanntes Bauwerk, typisch für eine Stadt"],["die Reformation","Erneuerung der Kirche im 16. Jahrhundert"]],
    mc: [
      { q: "Was ist das Wahrzeichen Zürichs mit den zwei Türmen?", o: ["Das Fraumünster","Das Grossmünster","Die Wasserkirche","Der Prime Tower"], a: 1 },
      { q: "Wer sind Felix und Regula laut Legende?", o: ["Ein Königspaar","Geschwister, die als Christen flohen und in Zürich hingerichtet wurden","Zwei Bauern aus Zürich","Römische Kaiser"], a: 1 },
      { q: "Wo wurden Felix und Regula laut Überlieferung hingerichtet?", o: ["Auf einer kleinen Insel in der Limmat, wo heute die Wasserkirche steht","Auf dem Uetliberg","In Rom","Am Bahnhof"], a: 0 },
      { q: "Was taten sie laut Legende nach der Hinrichtung?", o: ["Sie flogen davon","Sie gingen kopflos 40 Schritte den Hügel hinauf zu ihrem Grab","Sie schwammen in den See","Nichts"], a: 1 }
    ],
    rf: [
      { s: "Zürich entwickelte sich aus keltischen Siedlungen und einem römischen Stützpunkt.", a: true },
      { s: "Felix und Regula weigerten sich, den römischen Göttern Merkur und Jupiter zu opfern.", a: true },
      { s: "In Zürich leben heute nur Menschen aus der Schweiz.", a: false, x: "Etwa ein Drittel stammt aus dem Ausland; Menschen aus 171 Nationalitäten leben in der Stadt." }
    ],
    offen: [
      { q: "Beschreibe den Fluchtweg von Felix und Regula.", l: "Von der Thebäischen Legion bei Agaunum (St-Maurice im Wallis) durch das Wallis, über die Furka, durch das Glarnerland bis an die Limmat am Zürichsee." },
      { q: "Welche drei Kirchen in der Altstadt werden im Video gezeigt?", l: "Grossmünster, Wasserkirche, Fraumünster." }
    ] },
  3: { vor: "Warum erzählen Städte Gründungslegenden, auch wenn man nicht weiss, ob sie wahr sind?",
    wort: [["die Tetrarchie","Aufteilung des Römischen Reichs in vier Teile"],["das Edikt","Erlass, Befehl eines Herrschers"],["die Christenverfolgung","staatliche Verfolgung von Christen"],["dezimieren","jeden zehnten Mann töten"],["die Reliquie","Überrest eines Heiligen"],["die Prozession","feierlicher religiöser Umzug"]],
    mc: [
      { q: "Warum verfolgten die römischen Kaiser die Christen?", o: ["Weil Christen keine Steuern zahlten","Weil Staat und Religion nicht getrennt waren und der Anspruch «Christus ist der Herr» nicht mit dem Kaiser vereinbar war","Weil Christen Rom angriffen","Weil es zu viele Christen gab"], a: 1 },
      { q: "Warum wurde die Thebäische Legion laut Legende hingerichtet?", o: ["Sie war zu langsam","Sie wollte nicht gegen andere Christen kämpfen","Sie hatte Gold gestohlen","Sie war krank"], a: 1 },
      { q: "Was erzählt die zweite Gründungslegende über Karl den Grossen?", o: ["Er baute die Wasserkirche aus Stein","Er jagte einen Hirsch bis nach Zürich; sein Pferd sank vor den Gräbern der Heiligen auf die Knie, darauf gründete er das Grossmünster","Er wurde in Zürich geboren","Er besiegte die Römer in Zürich"], a: 1 },
      { q: "Welche Rolle spielen Felix und Regula heute noch?", o: ["Keine","Am Zürcher Stadtfeiertag (11. September) gibt es Prozessionen, auch mit orthodoxen Christen, die die Heiligen verehren","Sie sind auf dem Franken","Sie sind Maskottchen des FCZ"], a: 1 }
    ],
    rf: [
      { s: "Die Legende spielt um das Jahr 300 unter Kaiser Diokletian bzw. Maximian.", a: true },
      { s: "Die Thebäische Legion stammte laut Legende aus dem heutigen Ägypten.", a: true },
      { s: "Am Südturm des Grossmünsters (Karlsturm) steht eine Statue von Karl dem Grossen.", a: true },
      { s: "Zwingli lehnte die Heiligenverehrung ab und machte die Legende darum noch wichtiger.", a: false, x: "Mit der Reformation verlor die Heiligenverehrung an Bedeutung; die Prozessionen wurden erst in neuerer Zeit wieder belebt." }
    ],
    offen: [
      { q: "Erkläre den Zusammenhang zwischen der Legende und den Bauwerken Wasserkirche und Grossmünster.", l: "Hinrichtungsstätte auf der Limmatinsel → Wasserkirche; Grab auf dem Hügel (40 Schritte kopflos) → Grossmünster, gegründet laut Legende von Karl dem Grossen über den Gräbern." },
      { q: "Pfarrer Sigrist verbindet Felix und Regula, die aus Ägypten kamen, mit dem heutigen multikulturellen Zürich. Erkläre diesen Gedanken.", l: "Die Stadtheiligen waren selbst Fremde/Migranten (koptische Christen aus Ägypten); heute leben Menschen aus 171 Nationen in Zürich; die Legende zeigt, dass Fremde schon immer zur Stadt gehörten." },
      { q: "Ist eine Legende wie die von Felix und Regula für eine Stadt nützlich, auch wenn sie historisch nicht belegt ist? Nimm Stellung.", l: "Pro: Identität, Gemeinschaft, Tourismus, Tradition, Werte (Glaubensfreiheit, Mut). Contra: Verwechslung mit Geschichte, kritisch prüfen. Begründetes Fazit." }
    ] }
},
"cybermobbing": {
  2: { vor: "Was würdest du einer Freundin oder einem Freund raten, die oder der im Klassenchat fertiggemacht wird?",
    wort: [["fies","gemein, böse"],["ausgegrenzt","nicht dazugehörig, ausgeschlossen"],["sich schämen","sich peinlich und schlecht fühlen"],["verunstalten","hässlich verändern"],["melden","einer Plattform oder Person Bescheid geben"]],
    mc: [
      { q: "Womit begann das Mobbing gegen Tom?", o: ["Mit einem peinlichen Video","Mit fiesen Nachrichten auf sein Smartphone von einer unbekannten Nummer","Mit einem Streit auf dem Pausenplatz","Mit einem gehackten Instagram-Konto"], a: 1 },
      { q: "Was machten Mitschüler in einer WhatsApp-Gruppe?", o: ["Sie planten eine Party für Tom","Sie schickten ein peinliches Bild von Tom herum und machten sich lustig","Sie lernten zusammen","Sie verteidigten Tom"], a: 1 },
      { q: "Was rät Tina Tom?", o: ["Er soll zurückschlagen","Er soll sich Hilfe holen und mit der Klassenlehrerin reden – sie würde ihn begleiten","Er soll das Handy wegwerfen","Er soll die Schule wechseln"], a: 1 },
      { q: "Was passiert, nachdem Tom das Bild bei Facebook gemeldet hat?", o: ["Alles ist vorbei","Das Bild verschwindet, wird aber am Abend erneut hochgeladen","Tom wird gesperrt","Die Polizei kommt"], a: 1 }
    ],
    rf: [
      { s: "Tom löschte die fiesen Nachrichten sofort.", a: true },
      { s: "Toms Mutter merkt nichts.", a: false, x: "Sie merkt sofort, dass etwas nicht stimmt, aber Tom will zuerst nicht reden." },
      { s: "Über die Telefonnummer kann die Polizei herausfinden, wer hinter den Nachrichten steckt.", a: true }
    ],
    offen: [
      { q: "Welche Fehler hat Tom am Anfang gemacht? Nenne zwei.", l: "Er löschte die Nachrichten (keine Beweise), sprach nicht mit seiner Mutter, lehnte Tinas Hilfe ab, hoffte, dass es von allein aufhört." },
      { q: "Wer hilft Tom am Schluss, und was bewirken sie?", l: "Tina, seine Mutter und die Klassenlehrerin. In Gesprächen machen sie den Mobbenden klar, was Mobbing bedeutet und welche Konsequenzen drohen; die Angriffe hören auf." }
    ] },
  3: { vor: "Warum machen Menschen beim Mobbing mit, auch wenn sie es eigentlich nicht gut finden?",
    wort: [["einschüchtern","jemandem Angst machen"],["die Konsequenz","die Folge"],["zuversichtlich","voller Hoffnung"],["der Täter / die Täterin","Person, die etwas Schlimmes tut"],["das Hilfsangebot","wenn jemand Hilfe anbietet"],["die Mobbing-Falle","eine Situation, aus der man allein kaum herauskommt"]],
    mc: [
      { q: "Warum ist Cybermobbing für Tom besonders belastend, auch zu Hause?", o: ["Weil seine Eltern streiten","Weil die Angriffe über Handy und Internet auch zu Hause weitergehen","Weil er keine Hausaufgaben machen kann","Weil er kein Internet hat"], a: 1 },
      { q: "Warum spricht Tom lange nicht über das Mobbing?", o: ["Weil es ihm egal ist","Weil er sich schämt und es ihm peinlich ist","Weil er die Täter schützen will","Weil niemand fragt"], a: 1 },
      { q: "Was hätte Tom mit den Nachrichten besser machen sollen?", o: ["Weiterleiten an alle","Abspeichern, ausdrucken und einer Vertrauensperson zeigen","Beantworten","Ignorieren und löschen"], a: 1 },
      { q: "Welche Botschaft hat das Ende des Videos?", o: ["Gegen Mobbing kann man nichts tun","Wer sich Hilfe holt und nicht allein ist, kann Mobbing stoppen","Man sollte die Täter auch mobben","Man sollte soziale Medien verbieten"], a: 1 }
    ],
    rf: [
      { s: "Tom weiss bis zum Schluss nicht genau, warum er gemobbt wird.", a: true },
      { s: "Das Melden des Bildes bei Facebook löst das Problem dauerhaft.", a: false, x: "Das Bild wird am Abend erneut hochgeladen." },
      { s: "Im Nachhinein tut es Tom leid, dass er Tinas Hilfe abgelehnt hat.", a: true },
      { s: "Die Angriffe hören auf, weil Tom zurückmobbt.", a: false, x: "Sie hören auf, weil Tina, Mutter und Lehrerin ihn unterstützen und mit den Mobbenden sprechen." }
    ],
    offen: [
      { q: "Vergleiche Toms Verhalten am Anfang und am Ende der Geschichte. Was hat sich verändert?", l: "Anfang: Er löscht Nachrichten, schweigt, schämt sich, lehnt Hilfe ab, versucht es allein (melden). Ende: Er spricht mit der Mutter, nimmt Hilfe von Tina und Lehrerin an, steht nicht mehr allein da, ist zuversichtlich." },
      { q: "Welche Rolle spielt Tina in der Geschichte? Warum ist ihr Verhalten wichtig?", l: "Sie informiert Tom, bietet Hilfe an, will ihn zur Lehrerin begleiten; sie zeigt, dass Mitschüler nicht zuschauen müssen, sondern unterstützen können – eine echte Freundin in schlechten Zeiten." },
      { q: "Schreibe drei Regeln für euren Klassenchat, die Cybermobbing verhindern sollen, und begründe eine davon.", l: "Individuelle Regeln, z. B. keine Bilder anderer ohne Erlaubnis, keine Beleidigungen, bei Mobbing nicht mitmachen und es melden; Begründung." }
    ] }
},
"gleichberechtigung": {
  2: { vor: "Arbeiten in deinem Umfeld Mütter und Väter gleich viel? Wer kümmert sich um die Kinder?",
    wort: [["der Gender Pay Gap","die Lohnlücke zwischen Frauen und Männern"],["unbereinigt / bereinigt","alle zusammen verglichen / nur gleiche Berufe verglichen"],["die Führungsposition","eine leitende Stelle mit Macht"],["die Frauenquote","Regel, dass ein bestimmter Anteil Frauen sein muss"],["das Vorurteil","eine Meinung, die man ohne genaue Prüfung hat"]],
    mc: [
      { q: "Wie gross ist der unbereinigte Gender Pay Gap in Deutschland laut Video?", o: ["6 Prozent","18 Prozent","30 Prozent","50 Prozent"], a: 1 },
      { q: "Wie gross ist der bereinigte Gender Pay Gap?", o: ["6 Prozent","18 Prozent","1 Prozent","24,7 Prozent"], a: 0 },
      { q: "Ab welchem Alter öffnet sich laut Diagramm die Lohnlücke zwischen Frauen und Männern?", o: ["Ab etwa 20","Ab etwa 30","Ab etwa 50","Ab der Pensionierung"], a: 1 },
      { q: "Welche Quote gibt es seit 2016 für Aufsichtsräte börsennotierter Firmen in Deutschland?", o: ["10 Prozent","30 Prozent","50 Prozent","Keine"], a: 1 }
    ],
    rf: [
      { s: "Etwa ein Drittel der Sitze im Deutschen Bundestag gehört Frauen.", a: true },
      { s: "Bei den Juniorprofessuren liegt der Frauenanteil fast bei 50 Prozent.", a: true },
      { s: "Harald Lesch meint, 6 Prozent Lohnunterschied seien kein Problem.", a: false, x: "Gerade der Unterschied zwischen 18 und 6 Prozent zeigt, dass Frauen von gut bezahlten, wichtigen Positionen ferngehalten werden." }
    ],
    offen: [
      { q: "Was passiert laut Video um das Alter von 30 Jahren, und welche Folgen hat das für die Löhne von Frauen?", l: "Viele gründen eine Familie, Frauen werden Mütter und arbeiten oft Teilzeit; ihre Lohnkurve wird flach, während die der Männer weiter steigt – die Lücke öffnet sich." },
      { q: "Welche zwei Lösungen schlägt Lesch vor?", l: "Anonyme Bewerbungen ohne Geschlecht und Namen; Quoten (z. B. 30 % in Aufsichtsräten); sich selbst reflektieren und Vorurteile hinterfragen." }
    ] },
  3: { vor: "Glaubst du, dass du selbst keine Vorurteile hast? Wie könnte man das überprüfen?",
    wort: [["systematisch benachteiligt","immer wieder und nach einem Muster schlechter behandelt"],["der Erwartungswert","der Wert, den man eigentlich erwarten würde"],["der naturalistische Fehlschluss","der Fehler, aus «so ist es in der Natur» zu schliessen, dass es richtig ist"],["sozialisiert","durch Erziehung und Umfeld geprägt"],["das Stereotyp","ein festes, vereinfachtes Bild über eine Gruppe"],["das Gremium","eine Gruppe, die zusammen entscheidet"]],
    mc: [
      { q: "Was zeigt laut Lesch der Unterschied zwischen dem unbereinigten (18 %) und dem bereinigten (6 %) Gender Pay Gap?", o: ["Dass Frauen faul sind","Dass Frauen seltener in gut bezahlten Positionen mit Geld und Macht sind","Dass die Statistik falsch ist","Dass Männer mehr arbeiten"], a: 1 },
      { q: "Was ist das Ergebnis der «Howard vs. Heidi»-Studie?", o: ["Heidi wird als kompetenter bewertet","Beide werden gleich kompetent bewertet, aber Howard gilt als viel sympathischer","Howard wird als weniger kompetent bewertet","Beide werden gleich sympathisch gefunden"], a: 1 },
      { q: "Was ist das Überraschende an der Studie mit «Mark und Elisabeth» (2020)?", o: ["Elisabeth bekam mehr Lohn","Gerade die Befragten, die meinten, Gleichberechtigung sei in ihrem Beruf erreicht, bewerteten Elisabeth kritischer und boten Mark mehr Geld","Niemand wollte Mark einstellen","Alle bewerteten gleich"], a: 1 },
      { q: "Warum warnt Lesch vor dem «naturalistischen Fehlschluss»?", o: ["Weil Natur unwichtig ist","Weil man nicht aus «in der Natur ist es so» schliessen darf, dass es richtig ist – Gleichberechtigung ist ein gesetzliches Recht","Weil Frauen von Natur aus anders sind","Weil Gesetze aus der Natur kommen"], a: 1 }
    ],
    rf: [
      { s: "Die Zahlen zu den Machtpositionen stammen vom Statistischen Bundesamt.", a: true },
      { s: "Bei den Verwaltungsspitzen in Städten und Landkreisen liegt der Frauenanteil bei etwa 11 Prozent.", a: true },
      { s: "Lesch sagt, das Ziel wäre eine Welt, in der es gar keine Quote mehr braucht.", a: true },
      { s: "Laut Lesch kann man sich durch guten Willen vollständig von Stereotypen befreien.", a: false, x: "Wir können uns nicht ganz davon befreien; wir können aber reflektieren und uns selbst von aussen betrachten." }
    ],
    offen: [
      { q: "Erkläre mit dem Video, warum Lesch sagt, das Gehalt sei «nicht das wahre Problem».", l: "Das Hauptproblem ist die Verteilung von Macht und guten Positionen: Frauen werden ab der Familiengründung anders bewertet, arbeiten öfter Teilzeit, sind seltener in Führungspositionen; unbewusste Vorurteile beeinflussen Entscheidungen. Der Lohn ist nur die Folge." },
      { q: "Was zeigt die «Mark und Elisabeth»-Studie über den Unterschied zwischen Denken und Handeln? Erkläre mit eigenen Worten.", l: "Menschen glauben, sie seien vorurteilsfrei, handeln aber trotzdem nach Stereotypen (Handlungslücke): Wer meinte, Gleichberechtigung sei erreicht, bevorzugte unbewusst den Mann." },
      { q: "Sind Frauenquoten sinnvoll? Nimm Stellung und verwende mindestens ein Argument aus dem Video.", l: "Individuelle Stellungnahme, z. B. pro: Quote macht Frauen sichtbar, verändert das Umfeld (Erfahrung seit 2016); contra: es sollte nur Kompetenz zählen; Lesch: Quote als Anfang, Ziel ist eine Welt ohne Quote." }
    ] }
},
"frauenstimmrecht": {
  2: { vor: "Warum ist es wichtig, dass alle Erwachsenen abstimmen dürfen? Schreibe einen Satz.",
    wort: [["verärgert","wütend, unzufrieden"],["die Urne","Behälter für Stimmzettel"],["der Streich","ein Scherz, mit dem man jemanden ärgert"],["reklamieren","sich beschweren"],["gleichgestellt","mit gleichen Rechten"]],
    mc: [
      { q: "Wo und wann spielt die Geschichte?", o: ["In Zürich in den 1950er-Jahren","In Bern in den 1970er-Jahren","In Genf im Jahr 2000","In Basel um 1900"], a: 1 },
      { q: "Wie erklärt die Geschichte den Kindern, was Abstimmen ist?", o: ["Mit einem Fussballspiel","Mit der Wahl zwischen zwei Kuchen in der Familie","Mit einer Schulnote","Mit einem Brettspiel"], a: 1 },
      { q: "Welchen Streich spielt die Mutter dem Vater?", o: ["Sie versteckt seine Schuhe","Ab sofort bestimmen nur noch die Frauen der Familie, zum Beispiel wer das Geschirr spült","Sie kocht nicht mehr","Sie fährt in die Ferien"], a: 1 },
      { q: "Was macht der Vater, als er die Ungerechtigkeit versteht?", o: ["Er zieht aus","Er geht ins Bundeshaus und will das Gesetz ändern","Er schreibt ein Buch","Er wird Bundesrat"], a: 1 }
    ],
    rf: [
      { s: "Die Mutter ist verärgert, weil sie nicht abstimmen darf.", a: true },
      { s: "Die Frauen stimmen in der Familie darüber ab, ob die Männer auch abstimmen dürfen, und sagen Ja.", a: false, x: "Es ist ein klares Nein." },
      { s: "Die Frauen erhielten am 7. Februar 1971 das Stimmrecht.", a: true }
    ],
    offen: [
      { q: "Warum haben die Männer lange nie Ja zum Frauenstimmrecht gesagt? Erkläre mit dem Video.", l: "Nur die Männer durften abstimmen, also mussten sie selbst entscheiden, Frauen gleiche Rechte zu geben – lange wollten sie das nicht." },
      { q: "Wie wehrten sich die Frauen schliesslich? Was veränderte sich dadurch?", l: "Sie schlossen sich zusammen und protestierten auf den Strassen; langsam änderte sich die Meinung im Land, bis die Abstimmung angenommen wurde." }
    ] },
  3: { vor: "Wie kann man jemanden überzeugen, der von einer Ungerechtigkeit selbst nicht betroffen ist?",
    wort: [["die Ungerechtigkeit","etwas, das nicht fair ist"],["begreifen","verstehen"],["etwas ausrichten","etwas erreichen, bewirken"],["sich zusammenschliessen","eine Gruppe bilden, um gemeinsam etwas zu erreichen"],["der Rollentausch","wenn zwei ihre Rollen wechseln"],["die direkte Demokratie","das Volk entscheidet selbst über Gesetze"]],
    mc: [
      { q: "Warum ist der Kuchen-Vergleich am Anfang hilfreich?", o: ["Weil Kuchen ein Thema der Abstimmung war","Weil er auf einfache Weise zeigt, dass beim Abstimmen die Mehrheit entscheidet","Weil die Mutter Bäckerin ist","Weil Kinder Kuchen mögen"], a: 1 },
      { q: "Welche Wirkung hat der Rollentausch in der Familie auf den Vater?", o: ["Er findet es lustig und ändert nichts","Er erlebt selbst, wie es ist, nicht mitbestimmen zu dürfen, und begreift die Ungerechtigkeit","Er wird wütend und verlässt die Familie","Er hilft nie mehr im Haushalt"], a: 1 },
      { q: "Warum war es im Bundeshaus «sehr schwierig, etwas auszurichten»?", o: ["Weil das Bundeshaus geschlossen war","Weil ein Einzelner allein wenig ändern kann; es brauchte eine Mehrheit der Männer","Weil Frauen im Bundeshaus arbeiteten","Weil es kein Gesetz gab"], a: 1 },
      { q: "Was bedeutet der Satz «Vielleicht ist nicht alles genau so passiert»?", o: ["Das Datum ist falsch","Die Familiengeschichte ist erfunden und vereinfacht, um die echte Geschichte zu erklären","Das Frauenstimmrecht gibt es nicht","Der Film ist ein Dokumentarfilm"], a: 1 }
    ],
    rf: [
      { s: "Im Rollentausch stimmen die Frauen auch darüber ab, wer das Geschirr spült.", a: true },
      { s: "Laut Video änderte sich die Meinung im Land ganz plötzlich an einem Tag.", a: false, x: "«Langsam, aber sicher» änderte sich die Meinung." },
      { s: "Die Kinder in der Geschichte wissen am Anfang nicht genau, was abstimmen bedeutet.", a: true },
      { s: "Die Geschichte zeigt, dass Männer die Abstimmung über das Frauenstimmrecht allein entscheiden mussten.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum der Weg zum Frauenstimmrecht in der Schweiz so lange dauerte. Beziehe die direkte Demokratie mit ein.", l: "In der direkten Demokratie musste das Stimmvolk – damals nur Männer – einer Verfassungsänderung zustimmen; viele Männer waren lange dagegen, frühere Abstimmungen scheiterten; erst Proteste und ein Meinungswandel führten 1971 zum Ja." },
      { q: "Mit welchem Trick zeigt der Film, wie sich Ausgeschlossene fühlen? Wie wirkungsvoll findest du diesen Trick?", l: "Rollentausch: Zu Hause dürfen nur noch die Frauen abstimmen und sagen Nein zum Männerstimmrecht; der Vater erlebt die Ungerechtigkeit selbst. Eigene Einschätzung mit Begründung." },
      { q: "Auch heute dürfen in der Schweiz nicht alle Menschen abstimmen, z. B. Jugendliche unter 18 oder Ausländerinnen und Ausländer. Sollte sich das ändern? Nimm Stellung.", l: "Individuelle Stellungnahme mit Argumenten, z. B. Stimmrechtsalter 16, Stimmrecht für Ausländer auf Gemeindeebene (gibt es in einigen Kantonen); Vergleich mit dem Frauenstimmrecht." }
    ] }
},
"mauerfall": {
  2: { vor: "Stell dir vor, du darfst dein Land nicht verlassen. Wie würdest du dich fühlen?",
    wort: [["die Todeszone","Grenzstreifen, an dem Flüchtende erschossen werden konnten"],["die Teilung","wenn etwas in zwei Teile getrennt ist"],["die Ausreise","das Verlassen eines Landes"],["genehmigen","offiziell erlauben"],["das Begrüssungsgeld","Geld, das DDR-Bürger im Westen geschenkt bekamen"]],
    mc: [
      { q: "In welchen Schwierigkeiten steckte die DDR im Herbst 1989?", o: ["Sie hatte zu viele Touristen","Wirtschaftliche Probleme, Proteste und immer mehr Menschen flohen","Sie führte Krieg","Es gab eine Naturkatastrophe"], a: 1 },
      { q: "Über welches Land flohen viele DDR-Bürger in die Bundesrepublik?", o: ["Über Polen","Über die damalige ČSSR (heute Tschechien)","Über Österreich","Über Dänemark"], a: 1 },
      { q: "Um welche Uhrzeit sprach Schabowski über die neuen Reiseregeln?", o: ["Um 9 Uhr","Um 17.30 Uhr","Um 18.53 Uhr","Um Mitternacht"], a: 2 },
      { q: "Wie viel Begrüssungsgeld bekam jeder DDR-Bürger im Westen?", o: ["10 Mark","50 Mark","100 Mark","1000 Mark"], a: 2 }
    ],
    rf: [
      { s: "Die Pressekonferenz wurde live im Radio und Fernsehen übertragen.", a: true },
      { s: "Die Grenzbeamten wussten genau, was sie tun sollten.", a: false, x: "Sie waren ahnungslos, weil es noch keine Befehle gab." },
      { s: "Viele DDR-Bürger schauten sich den Westen an und gingen dann wieder nach Hause.", a: true }
    ],
    offen: [
      { q: "Was war der Fehler von Günter Schabowski? Erkläre in zwei Sätzen.", l: "Er sagte an der Pressekonferenz, die neue Reiseregel gelte sofort. Eigentlich war sie erst für den 10. November gedacht." },
      { q: "Was merkten die Menschen aus dem Osten beim Geldwechsel im Verhältnis 1:10?", l: "Wie schlecht es um die Wirtschaft der DDR stand – ihr Geld war im Westen sehr wenig wert." }
    ] },
  3: { vor: "Kann ein kleiner Fehler grosse geschichtliche Folgen haben? Kennst du andere Beispiele?",
    wort: [["sich nicht beneiden lassen","eine sehr unangenehme Aufgabe haben"],["die Pressemitteilung","schriftliche Information für Journalisten"],["brenzlig","gefährlich, angespannt"],["Tatsachen schaffen","etwas tun, das man nicht mehr rückgängig machen kann"],["eingreifen","sich einmischen, etwas mit Gewalt stoppen"],["eingliedern","in etwas Grösseres aufnehmen"]],
    mc: [
      { q: "Warum hatte die DDR-Führung laut Video «keine andere Wahl», als die Ausreise zu erleichtern?", o: ["Weil die USA es befahlen","Wegen Wirtschaftskrise, Protesten, Massenflucht und dem Druck der ČSSR","Weil die Mauer kaputt war","Weil es Wahlen gab"], a: 1 },
      { q: "Was war bisher die Situation für DDR-Bürger, die ausreisen wollten?", o: ["Sie konnten jederzeit gehen","Sie mussten oft viele Jahre warten, und oft wurde es gar nicht erlaubt","Sie mussten eine Prüfung machen","Sie durften nur im Sommer reisen"], a: 1 },
      { q: "Warum war die Lage an der Grenze in der Nacht so gefährlich?", o: ["Weil es dunkel war","Weil Tausende über die Grenze wollten, die Soldaten aber nur auf Befehl handeln durften und keine Befehle hatten","Weil die Westberliner angriffen","Weil die Mauer einstürzte"], a: 1 },
      { q: "Warum war es laut Video gut, dass die DDR nicht mit Waffen eingriff?", o: ["Weil sonst die Mauer beschädigt worden wäre","Weil es sonst wohl zu unkontrollierbaren Aufständen gekommen wäre","Weil die Soldaten keine Waffen hatten","Weil Schabowski es verbot"], a: 1 }
    ],
    rf: [
      { s: "Egon Krenz gab Schabowski den Zettel mit der neuen Regelung.", a: true },
      { s: "Die DDR-Führung entschied ohne Rücksprache mit der Sowjetunion, nicht einzugreifen.", a: false, x: "Sie entschied nach langem Hin und Her und Rücksprachen mit der Sowjetunion." },
      { s: "Weniger als eine Stunde nach der Pressekonferenz berichtete die Tagesschau.", a: true },
      { s: "An vielen Orten in Berlin wurde die Mauer besetzt, weil die Menschen Angst hatten, dass alles schnell wieder vorbei ist.", a: true }
    ],
    offen: [
      { q: "Erstelle eine Zeitleiste des 9. November 1989 mit mindestens vier Stationen und Uhrzeiten aus dem Video.", l: "9 Uhr: Treffen im Innenministerium, neues Reisegesetz wird ausgearbeitet; 17.30 Uhr: Krenz gibt Schabowski das Konzept; 18.53 Uhr: Schabowski verkündet die Regel (live); weniger als 1 Std. später: Tagesschau berichtet; Abend/Nacht: Menschen strömen an die Grenze, Grenzer öffnen; Morgen: Tausende im Westen, Begrüssungsgeld." },
      { q: "Warum nennt das Video den 9. November den «Anfang vom Ende der DDR»?", l: "Die Menschen hatten genug vom System und schufen Tatsachen; die Regierung musste Fehler eingestehen und kam nie wieder auf den alten Stand zurück; am 3. Oktober 1990 wurde die DDR in die Bundesrepublik eingegliedert." },
      { q: "War der Mauerfall wirklich nur die Folge eines Fehlers? Nimm Stellung mit Informationen aus dem Video.", l: "Individuelle Stellungnahme: Der Fehler war der Auslöser, aber Ursachen waren Wirtschaftskrise, Proteste, Massenflucht, Druck der ČSSR, die Entscheidung gegen Gewalt und der Mut der Menschen." }
    ] }
},
"dopinggeschichte": {
  2: { vor: "Welche Mittel nehmen Menschen im Alltag, um wacher oder leistungsfähiger zu sein (z. B. Kaffee)? Ist das schon Doping?",
    wort: [["die Definition","genaue Erklärung eines Begriffs"],["der Zaubertrank","ein Getränk mit magischer Wirkung"],["die Stimulanz","ein aufputschendes Mittel"],["das Narkotikum","ein betäubendes Mittel"],["der Kontrahent","der Gegner"]],
    mc: [
      { q: "Was assen Olympioniken in der Antike, um stärker zu werden?", o: ["Gemüse und Reis","Stierhoden und Löwenherzen","Schokolade","Fisch"], a: 1 },
      { q: "Was kauten die Inka zur Leistungssteigerung?", o: ["Kaugummi","Kokablätter","Tabak","Minze"], a: 1 },
      { q: "Was war «Pervitin»?", o: ["Ein Vitamin","Ein Aufputschmittel (Methamphetamin), das die Wehrmacht ihren Soldaten gab","Ein Schmerzmittel für Pferde","Ein Sportgetränk"], a: 1 },
      { q: "Warum wurde der Schwede Hans-Gunnar Liljenwall 1968 als erster Dopingfall bestraft?", o: ["Er hatte EPO genommen","Er hatte vor dem Wettkampf zwei Bier getrunken","Er hatte Anabolika genommen","Er hatte ein Pferd vergiftet"], a: 1 }
    ],
    rf: [
      { s: "Doping wurde auch im Krieg eingesetzt.", a: true },
      { s: "Im Pferdesport wurden Pferde mit Narkotika «gestoppt», um Rennen zu manipulieren.", a: true },
      { s: "Alkohol steht heute noch auf der Verbotsliste der WADA.", a: false, x: "Seit dem 1.1.2018 steht Alkohol nicht mehr auf der Liste." }
    ],
    offen: [
      { q: "Nenne drei Arten von Dopingmitteln aus dem Video und wofür sie eingesetzt werden.", l: "Narkotika (Morphin, Heroin): lindern Angst und Schmerz; Stimulanzien (Amphetamine, Kokain, Pervitin): putschen auf, mehr Ausdauer; Anabolika/Testosteron: Muskelwachstum; EPO/Blutdoping: mehr Sauerstoff im Blut, bessere Ausdauer." },
      { q: "Warum ist Doping laut Video verboten? Nenne zwei Gründe.", l: "Es verletzt Werte des Sports wie Leistungsprinzip, Fairness und Toleranz; es ist gefährlich und kann zu Schäden bis zum Tod führen." }
    ] },
  3: { vor: "Manche fordern, Doping freizugeben, damit für alle die gleichen Bedingungen gelten. Was hältst du spontan davon?",
    wort: [["der Mythos","eine alte, sagenhafte Geschichte"],["halluzinogen","so, dass man Dinge sieht, die nicht da sind"],["synthetisch","künstlich im Labor hergestellt"],["systematisch","planmässig, nach einem System"],["die Wiedergutmachung","Ausgleich für ein Unrecht"],["das Gendoping","Manipulation der eigenen Erbinformation (DNA)"]],
    mc: [
      { q: "Woher stammt laut Video das Wort «Doping»?", o: ["Aus dem Lateinischen","Von «dope», einem stark alkoholischen, anregenden Getränk aus Südafrika","Von einem Medikament","Aus dem Japanischen"], a: 1 },
      { q: "Warum dopte die DDR ihre Sportlerinnen und Sportler massenhaft?", o: ["Weil sie Geld verdienen wollte","Weil Sporterfolge beweisen sollten, dass der Sozialismus dem Kapitalismus überlegen ist","Weil die Athleten es verlangten","Weil Doping erlaubt war"], a: 1 },
      { q: "Was ist laut Video ein Unterschied zwischen Doping in der DDR und in der BRD?", o: ["In der BRD gab es kein Doping","In der DDR wurde oft zwangsweise und ohne Wissen der Betroffenen gedopt; im Westen waren Sportler meist aktiv beteiligt","In der DDR dopten nur Erwachsene","In der BRD dopte der Staat zwangsweise"], a: 1 },
      { q: "Welche Frage stellt das Video am Schluss?", o: ["Ob Kaffee Doping ist","Ob eine Freigabe von Doping fair wäre oder ob dann die Dopingärzte gegeneinander antreten würden","Ob man Pferderennen verbieten soll","Ob Harry Potter echt ist"], a: 1 }
    ],
    rf: [
      { s: "Ernst Laqueur isolierte 1935 Testosteron aus Stierhoden.", a: true },
      { s: "In der DDR wurden etwa 3000 Menschen durch Doping dauerhaft geschädigt.", a: true },
      { s: "Ben Johnson lief 1988 die 100 Meter in 9,79 Sekunden ohne Doping.", a: false, x: "Er war mit Steroiden gedopt." },
      { s: "Das Internationale Olympische Komitee erstellte schon 1967 eine erste Liste verbotener Substanzen.", a: true }
    ],
    offen: [
      { q: "Erstelle eine Zeitleiste der Dopinggeschichte mit fünf Stationen aus dem Video.", l: "Antike: Stierhoden/Löwenherzen; Inka: Kokablätter; 1810: vergiftetes Rennpferd; Zweiter Weltkrieg: Pervitin; 1935: Testosteron; DDR: Staatsdoping; 1967: IOC-Liste; 1968: erster Dopingfall (Bier); 1988: Ben Johnson; Lance Armstrong; 2018: Alkohol nicht mehr verboten." },
      { q: "Warum sagt das Video, Doping sei nicht nur ein Problem einzelner Sportler, sondern auch von Staaten? Erkläre mit zwei Beispielen.", l: "DDR: staatlich organisiertes Zwangsdoping von über 10 000 Athleten im Kalten Krieg; Wehrmacht: Pervitin für Soldaten; BRD: Staat nahm es lange nicht genau, weil Erfolge im Kalten Krieg zählten." },
      { q: "Sollte Doping freigegeben werden? Nimm Stellung und berücksichtige die Argumente aus dem Video.", l: "Individuelle Stellungnahme: pro (man deckt nur einen Bruchteil auf, gleiche Bedingungen); contra (Gesundheitsgefahr bis zum Tod, Werte des Sports, Wettkampf der Dopingärzte, Druck auf Junge)." }
    ] }
},
"immunsystem": {
  2: { vor: "Warum wirst du manchmal krank, obwohl dein Körper ein Immunsystem hat?",
    wort: [["sich vermehren","mehr werden, sich kopieren"],["mutieren","sich durch Zufall im Erbgut verändern"],["angeboren","von Geburt an vorhanden"],["adaptiv","sich anpassend, lernend"],["das Protein","Eiweiss, ein Baustein des Lebens"]],
    mc: [
      { q: "Wie schnell kann sich ein Bakterium laut Video kopieren?", o: ["In etwa einer halben Stunde","In einem Jahr","In einer Woche","Gar nicht"], a: 0 },
      { q: "Welches biologische System ist laut Video noch komplexer als das Immunsystem?", o: ["Das Herz","Das Gehirn","Die Lunge","Die Haut"], a: 1 },
      { q: "Welche zwei Teile hat dein Immunsystem?", o: ["Ein linkes und ein rechtes","Ein angeborenes und ein adaptives","Ein schnelles und ein langsames Herz","Ein inneres und ein äusseres"], a: 1 },
      { q: "Wie heissen die «Superwaffen» des adaptiven Immunsystems?", o: ["A- und Z-Zellen","T- und B-Zellen","Rote Blutkörperchen","Nervenzellen"], a: 1 }
    ],
    rf: [
      { s: "Ein Virus kann in wenigen Tagen Milliarden Kopien von sich machen.", a: true },
      { s: "Das angeborene Immunsystem kennt jede mögliche Mutation eines Feindes.", a: false, x: "Es kennt viele häufige Puzzleteile, hilft aber nicht gegen Milliarden Mutationen; dafür braucht es das adaptive Immunsystem." },
      { s: "Die Grippe kommt jedes Jahr wieder, weil das Influenzavirus sehr schnell mutiert.", a: true }
    ],
    offen: [
      { q: "Warum haben Bakterien und Viren einen «Riesenvorteil» gegenüber uns? Erkläre.", l: "Sie vermehren sich viel schneller (Bakterium in ca. 30 Min., Virus Milliarden Kopien in Tagen); durch die vielen Generationen mutiert irgendwann eines so, dass es der Abwehr entgeht." },
      { q: "Wie erkennen Zellen, ob etwas Freund oder Feind ist?", l: "Sie haben keine Augen; sie berühren mit Rezeptoren Proteine (Puzzleteile). Passt ein Rezeptor zu einem feindlichen Protein, greifen sie an." }
    ] },
  3: { vor: "Wie kann ein Körper auf Krankheiten vorbereitet sein, die es heute noch gar nicht gibt?",
    wort: [["der Selektionsdruck","Druck, der dafür sorgt, dass nur Angepasste überleben"],["der Rezeptor","Andockstelle einer Zelle"],["die Analogie","ein Vergleich, der etwas erklärt"],["der Thymus","Organ über dem Herzen, das Immunzellen prüft"],["die Autoimmunerkrankung","Krankheit, bei der das Immunsystem den eigenen Körper angreift"],["willkürlich","zufällig, ohne Plan"]],
    mc: [
      { q: "Wie erzeugt das adaptive Immunsystem Milliarden verschiedene Rezeptoren?", o: ["Es kopiert die Rezeptoren der Bakterien","Es mischt einen kleinen Teil seines eigenen genetischen Codes zufällig neu","Es nimmt sie aus der Nahrung auf","Es bekommt sie durch Impfungen"], a: 1 },
      { q: "Wofür steht in der Köche-Analogie jede «Zutat»?", o: ["Für ein Bakterium","Für ein winziges Stück Gencode","Für ein Organ","Für eine Krankheit"], a: 1 },
      { q: "Was passiert im Thymus mit jungen Immunzellen, die körpereigene Proteine angreifen wollen?", o: ["Sie werden befördert","Sie müssen sich selbst töten und werden recycelt","Sie werden ins Blut geschickt","Sie werden zu Nervenzellen"], a: 1 },
      { q: "Warum wird das Immunsystem mit dem Alter schwächer?", o: ["Weil man weniger isst","Weil sich der Thymus ab der Pubertät immer weiter abbaut","Weil die Zellen grösser werden","Weil Bakterien schwächer werden"], a: 1 }
    ],
    rf: [
      { s: "Nur etwa zwei Prozent der adaptiven Immunzellen bestehen die «Killer-Universität».", a: true },
      { s: "Der Thymus ist etwa so gross wie ein Chicken Wing und liegt über dem Herzen.", a: true },
      { s: "Das adaptive Immunsystem ist bei einer Infektion sofort voll einsatzbereit.", a: false, x: "Die T- und B-Zellen vermehren sich kompliziert und brauchen einige Zeit, bis sie einsatzbereit sind." },
      { s: "Das adaptive Immunsystem kann zwischen einer und zehn Milliarden feindliche Puzzleteile unterscheiden.", a: true }
    ],
    offen: [
      { q: "Erkläre mit der Köche-Analogie, wie aus wenigen Genfragmenten Milliarden Rezeptoren entstehen können.", l: "Jeder Koch wählt aus 100 Zutaten zufällig einige aus und mischt sie zu einem eigenen Rezept; so entstehen Milliarden Rezepte. Genauso kombinieren Immunzellen zufällig Genfragmente und bilden Milliarden verschiedene Rezeptoren." },
      { q: "Warum braucht es die «Killer-Universität» im Thymus? Was passiert, wenn sie nicht richtig funktioniert?", l: "Weil durch das zufällige Mischen auch Waffen gegen körpereigene Proteine entstehen; diese werden im Thymus aussortiert. Entwischen solche Zellen, entstehen Autoimmunerkrankungen, bei denen das Immunsystem den eigenen Körper angreift." },
      { q: "Das Video vergleicht deinen Körper mit einem Planeten und das Immunsystem mit einem Wächter. Finde einen eigenen Vergleich für das Immunsystem und erkläre ihn.", l: "Individuelle Antwort, z. B. Polizei mit Datenbank, Sicherheitsdienst eines Flughafens; der Vergleich soll angeborene und adaptive Abwehr oder die Freund-Feind-Erkennung erklären." }
    ] }
},
"schlaf": {
  2: { vor: "Wie viele Stunden schläfst du unter der Woche? Und am Wochenende?",
    wort: [["sich regenerieren","sich erholen, wieder neu bilden"],["das Langzeitgedächtnis","Teil des Gedächtnisses, der lange speichert"],["das Melatonin","Hormon, das müde macht"],["der Chronotyp","der persönliche «Zeittyp»: Lerche oder Eule"],["das Schlafdefizit","Schlaf, der fehlt"]],
    mc: [
      { q: "Was macht das Gehirn laut Video im Schlaf?", o: ["Nichts, es ist ausgeschaltet","Es «entrümpelt» die Informationen des Tages und entscheidet, was ins Gedächtnis kommt","Es wächst doppelt so schnell","Es träumt nur"], a: 1 },
      { q: "Welches Hormon sorgt am Morgen fürs Aufwachen?", o: ["Melatonin","Cortisol","Insulin","Adrenalin"], a: 1 },
      { q: "Wie lange dauert der Rhythmus der inneren Uhr ungefähr?", o: ["Genau 24 Stunden","Zwischen 24 und 25 Stunden","12 Stunden","48 Stunden"], a: 1 },
      { q: "Zu welchem Chronotyp gehört laut Video die Mehrheit der Menschen?", o: ["Zu den Lerchen","Zu den Eulen","Zu den Spechten","Zu den Hühnern"], a: 1 }
    ],
    rf: [
      { s: "Im Schlaf bauen sich Antikörper gegen Viren und Bakterien auf.", a: true },
      { s: "Teenager werden durch den Hormonwandel meist zu Nachteulen.", a: true },
      { s: "Mit etwa 26 bis 27 Jahren werden viele Menschen wieder früher müde.", a: true }
    ],
    offen: [
      { q: "Was ist der Unterschied zwischen einer Lerche und einer Eule? Erkläre mit der inneren Uhr.", l: "Lerche: innere Uhr geht vor, tickt schneller – früh müde, früh wach. Eule: innere Uhr geht nach – später ins Bett, später auf." },
      { q: "Was passiert, wenn Jugendliche dauerhaft zu wenig schlafen? Nenne drei Folgen aus dem Video.", l: "Sozialer Jetlag, Konzentrationsschwierigkeiten, Übergewicht, Depressionen, schlechtere Noten, Emotionen weniger im Griff." }
    ] },
  3: { vor: "Sollten sich die Schulzeiten nach den Jugendlichen richten oder die Jugendlichen nach den Schulzeiten?",
    wort: [["zirkadian","in einem etwa täglichen Rhythmus"],["der Dirigent","Person, die ein Orchester leitet"],["die Veranlagung","was man von Natur aus mitbringt"],["der soziale Jetlag","wenn innere Uhr und Alltag nicht zusammenpassen"],["ausgereift","fertig entwickelt"],["ausgleichen","wieder gut machen, aufholen"]],
    mc: [
      { q: "Warum vergleicht das Video die innere Uhr mit einem Dirigenten?", o: ["Weil sie Musik macht","Weil sie den Organen und Körperprozessen den Takt vorgibt","Weil sie laut ist","Weil sie nur am Abend arbeitet"], a: 1 },
      { q: "Warum sind Schülerinnen und Schüler laut Video nicht «schuld», wenn sie spät einschlafen?", o: ["Weil die Eltern es erlauben","Weil sie ihren Schlafrhythmus grösstenteils gar nicht selbst steuern können","Weil Handys verboten sind","Weil die Schule zu leicht ist"], a: 1 },
      { q: "Was ist ein «sozialer Jetlag»?", o: ["Müdigkeit nach einem Flug","Wenn die innere Uhr Schlafenszeit signalisiert, man aber in der Schule aufmerksam sein soll – Schlafrhythmus und soziales Leben verschieben sich","Ein Streit mit Freunden","Zu viel Zeit auf Social Media"], a: 1 },
      { q: "Was zeigt sich laut Studien, wenn der Unterricht erst um 9 Uhr beginnt?", o: ["Die Schüler sind fauler","Sie sind ausgeschlafener, motivierter und aufmerksamer","Es gibt keinen Unterschied","Sie schlafen noch später ein"], a: 1 }
    ],
    rf: [
      { s: "Gesteuert wird der Schlaf von Nervenzellen im Gehirn mit Hilfe von Hormonen.", a: true },
      { s: "Mädchen und Frauen sind laut Video öfter Lerchen als Eulen.", a: true },
      { s: "Ein Schlafdefizit lässt sich auf Dauer problemlos mit Nickerchen ausgleichen.", a: false, x: "Kurzfristig ja, auf Dauer führt das Defizit zu Problemen wie Konzentrationsschwäche oder Depressionen." },
      { s: "Im Alter sind häufiger Männer die Lerchen.", a: true }
    ],
    offen: [
      { q: "Erkläre, wie Melatonin, Cortisol und die innere Uhr zusammenarbeiten.", l: "Die innere Uhr (zirkadiane Rhythmen) gibt den Zeitpunkt vor; abends macht das Hormon Melatonin müde, morgens sorgt Cortisol fürs Aufwachen. Nervenzellen im Gehirn steuern das mit diesen Hormonen." },
      { q: "Wie verändert sich der Schlafrhythmus im Laufe des Lebens? Beschreibe vier Phasen.", l: "Baby/Kleinkind: viel Schlaf, Mittagsschlaf; Pubertät/junge Erwachsene: Nachteulen; ab ca. 26–27 Jahren: wieder früher müde; Alter: Männer häufiger Lerchen, Frühaufsteherinnen bleiben öfter liegen." },
      { q: "Sollte der Schulbeginn in der Schweiz eine Stunde später sein? Nimm Stellung mit Argumenten aus dem Video und einem Gegenargument.", l: "Pro: biologischer Rhythmus der Teenager, Studien zu Motivation und Aufmerksamkeit, Folgen des Schlafmangels. Contra: Schultag endet später, Freizeit, Arbeitszeiten der Eltern, Transport. Eigenes Fazit." }
    ] }
},
"stress": {
  2: { vor: "Woran merkst du in deinem Körper, dass du gestresst bist?",
    wort: [["der Leistungsdruck","das Gefühl, viel leisten zu müssen"],["der Puls","Anzahl Herzschläge pro Minute"],["monoton","immer gleich, eintönig"],["die Unterforderung","wenn eine Aufgabe zu leicht oder langweilig ist"],["das Schmerzempfinden","wie stark man Schmerzen spürt"]],
    mc: [
      { q: "Wo macht Eric Mayer die Stresstests?", o: ["In einem Spital","In einem Stresslabor an der Uni Mainz","In seiner Schule","Im Fernsehstudio"], a: 1 },
      { q: "Welche Aufgabe soll Eric über eine Stunde lang machen?", o: ["Kopfrechnen","Luftpolsterfolie knacken","Laufen","Singen"], a: 1 },
      { q: "Was muss Eric in der Nacht um 0, 1, 2, 3 und 4 Uhr machen?", o: ["Liegestütze","In einem Comicbuch bestimmte Buchstaben durchstreichen","Eiswasser trinken","Eine Prüfung schreiben"], a: 1 },
      { q: "Wie lange hält Eric die Hand am zweiten Tag im Eiswasser?", o: ["Länger als am ersten Tag","Etwa 1 Minute 17 – weniger als die Hälfte vom ersten Tag","Genau 3 Minuten","10 Minuten"], a: 1 }
    ],
    rf: [
      { s: "Beim ersten Eiswassertest stieg Erics Puls nur um etwa zehn Schläge.", a: true },
      { s: "Auch sinnlose, monotone Aufgaben können Stress verursachen.", a: true },
      { s: "Nach der Nacht im Stresszimmer war Erics Schmerzempfinden schwächer.", a: false, x: "Es war stärker: Er hielt viel kürzer im Eiswasser aus." }
    ],
    offen: [
      { q: "Beschreibe die drei Stressstufen, die Eric durchmacht.", l: "1. Eiswassertest; 2. über eine Stunde Luftpolsterfolie knacken (Monotonie, Unterforderung); 3. Nacht im Stresszimmer mit Wecker jede Stunde und Aufgaben (Schlafentzug); danach erneut Eiswasser und Rückwärtsrechnen." },
      { q: "Was ist der Unterschied zwischen negativem und positivem Stress?", l: "Negativer Stress: zu viel Stress, bis zum Blackout, nichts geht mehr. Positiver Stress, z. B. bei einem Wettkampf: steigert Aufmerksamkeit, Konzentration, Leistung und Motivation." }
    ] },
  3: { vor: "Warum kann man in einer Prüfung plötzlich alles vergessen, obwohl man gelernt hat?",
    wort: [["das limbische System","Teil des Gehirns für Gefühle (Emotionszentrum)"],["die Nebennierenrinde","Teil eines Organs, das Hormone herstellt"],["ausschütten","freisetzen, in den Körper abgeben"],["die Alarmbereitschaft","Zustand, in dem der Körper auf Gefahr reagiert"],["die Schwelle","Grenze, ab der sich etwas ändert"],["sich niederschlagen","sichtbar werden, eine Wirkung zeigen"]],
    mc: [
      { q: "Was passiert laut Video im Körper bei einem Stressimpuls?", o: ["Das Herz bleibt stehen","Das limbische System befiehlt die Ausschüttung von Stresshormonen wie Adrenalin und Cortisol; Blutdruck und Puls steigen","Der Körper wird müde","Die Muskeln werden weich"], a: 1 },
      { q: "Warum hat Eric beim Rückwärtsrechnen einen Blackout?", o: ["Weil er nicht rechnen kann","Weil sich der Stress immer mehr aufgestaut hat, eine Schwelle überschritten wurde und das logische Denken blockiert ist","Weil der Raum zu kalt war","Weil er abgelenkt wurde"], a: 1 },
      { q: "Welche Zeichen von Stress beobachtet die Psychologin auf den Videobildern?", o: ["Lachen und Singen","Nervöses Fingerspielen, zusammengekniffene Augen und angespannte Kiefermuskeln","Gähnen","Ruhiges Atmen"], a: 1 },
      { q: "Warum war Eric trotz seiner Erfahrung vor Kameras so gestresst?", o: ["Weil die Kamera kaputt war","Weil er kontinuierlich immer mehr gestresst wurde: Schlafentzug, monotone Aufgaben, Eiswasser","Weil er krank war","Weil er Angst vor Sandra hatte"], a: 1 }
    ],
    rf: [
      { s: "Erics Durchschnittspuls beim letzten Test war 104, der Höchstwert 113.", a: true },
      { s: "Laut Video ist Unterforderung keine Form von Stress.", a: false, x: "Unterforderung ist auch eine Form von Stress (Luftpolsterfolie)." },
      { s: "Bei Stress übernehmen die Instinkte, und das logische Denken wird blockiert.", a: true },
      { s: "Eric musste von 2043 in 17er-Schritten rückwärts zählen.", a: true }
    ],
    offen: [
      { q: "Erkläre den Ablauf im Körper vom Stressimpuls bis zum Blackout.", l: "Stressimpuls → limbisches System (Emotionszentrum) befiehlt Hormonproduktion → Nebennierenrinde schüttet Adrenalin und Cortisol ins Blut → Puls und Blutdruck steigen, Körper in Alarmbereitschaft, Instinkte übernehmen → logisches Denken blockiert; wird eine Schwelle überschritten → Blackout." },
      { q: "Welche Rolle spielt Schlafmangel im Experiment? Belege mit zwei Beobachtungen.", l: "Nach der fast schlaflosen Nacht war der Ruhepuls höher (gut 90 statt 80), er hielt nur 1:17 statt 3 Minuten im Eiswasser aus (stärkeres Schmerzempfinden), und beim Rechnen hatte er einen Blackout." },
      { q: "Du hast eine wichtige Prüfung. Entwickle einen Plan, wie du negativen Stress vermeidest und positiven Stress nutzt. Beziehe Erkenntnisse aus dem Video ein.", l: "Individuelle Antwort, z. B. genug schlafen, Lernstoff verteilen (nicht alles auf einmal), Pausen, Bewegung, Prüfungssituation üben; positiven Stress für Konzentration nutzen; bei Blackout atmen und kurz pausieren." }
    ] }
},
"abseits": {
  2: { vor: "Warum gibt es wohl eine Abseitsregel? Was würde ohne sie passieren?",
    wort: [["der vorletzte Spieler","der zweitletzte Gegenspieler vor dem Tor (meist ist der letzte der Torwart)"],["auf gleicher Höhe","gleich weit vom Tor entfernt"],["der Querpass / Rückpass","Pass zur Seite / nach hinten"],["der indirekte Freistoss","Freistoss, bei dem nicht direkt ein Tor geschossen werden darf"],["passiv / aktiv","nicht beteiligt / beteiligt"]],
    mc: [
      { q: "Wann ist ein Spieler im Abseits?", o: ["Wenn er im Moment der Ballabgabe der Torlinie näher ist als der vorletzte Gegenspieler","Wenn er den Ball länger als 5 Sekunden hat","Wenn er im eigenen Strafraum steht","Wenn er schneller ist als der Ball"], a: 0 },
      { q: "Welche Situation ist laut Video KEIN Abseits?", o: ["Der Spieler steht beim Abspiel auf gleicher Höhe mit dem vorletzten Gegenspieler","Der Spieler steht allein vor dem Torwart","Der Spieler ist näher am Tor als alle Verteidiger","Der Spieler bekommt einen Steilpass"], a: 0 },
      { q: "Was bekommt die gegnerische Mannschaft bei Abseits?", o: ["Einen Penalty","Einen indirekten Freistoss","Einen Eckball","Einen Einwurf"], a: 1 },
      { q: "Bei welchen Standardsituationen gibt es laut Video kein Abseits?", o: ["Bei Eckball, Abstoss und Einwurf","Bei Freistössen","Bei Steilpässen","Bei Kopfbällen"], a: 0 }
    ],
    rf: [
      { s: "Wenn der Ball vom Gegner kommt, ist es kein Abseits.", a: true },
      { s: "Ein Spieler hinter dem Ball kann nicht im Abseits stehen.", a: true },
      { s: "Die Schiedsrichterassistenten zeigen Abseits mit einer Pfeife an.", a: false, x: "Sie zeigen es mit ihrer Fahne an." }
    ],
    offen: [
      { q: "Wie kann man laut Video Abseits vermeiden, wenn zwei Spieler allein auf den Torwart zulaufen?", l: "Ein Spieler spielt den Ball nach vorne oder quer/zurück, und der andere bleibt hinter dem Ball – dann ist es kein Abseits." },
      { q: "Erkläre den Unterschied zwischen aktivem und passivem Abseits.", l: "Passiv: Der Spieler steht im Abseits, hat aber keinen Einfluss aufs Spiel – kein Pfiff. Aktiv: Er greift ins Spiel ein, z. B. nimmt den Ball an oder beeinflusst den Gegner – Abseits." }
    ] },
  3: { vor: "Im Profifussball gibt es Video-Schiedsrichter. Macht das den Fussball gerechter oder langweiliger?",
    wort: [["die Dynamik","Bewegung, Schwung, Tempo"],["beurteilen","entscheiden, wie etwas zu bewerten ist"],["verursachen","der Grund für etwas sein"],["das Spielgeschehen","alles, was im Spiel passiert"],["beeinflussen","auf etwas oder jemanden einwirken"],["der Grenzfall","eine Situation, die schwer zu entscheiden ist"]],
    mc: [
      { q: "Warum ist laut Video der Moment der Ballabgabe wichtig und nicht der Moment der Ballannahme?", o: ["Weil der Schiedsrichter dann pfeift","Weil entscheidend ist, wo der Spieler steht, wenn der Mitspieler den Ball spielt","Weil die Ballannahme nicht gesehen wird","Weil der Torwart dann zählt"], a: 1 },
      { q: "Was ist der Zweck der Abseitsregel?", o: ["Verteidiger zu bevorzugen","Zu verhindern, dass Stürmer nur vor dem Tor warten – das würde Dynamik und Spannung aus dem Spiel nehmen","Mehr Tore zu ermöglichen","Den Torwart zu schützen"], a: 1 },
      { q: "In welcher Situation ist es KEIN Abseits?", o: ["Der Stürmer steht näher am Tor als der vorletzte Verteidiger und nimmt den Ball an","Mehr als zwei Gegenspieler befinden sich zwischen dem Spieler und dem Tor","Der Stürmer steht vor dem Torwart und bekommt einen Steilpass vom Mitspieler","Der Stürmer läuft dem Verteidiger davon, bevor der Pass gespielt wird"], a: 1 },
      { q: "Wo wird der indirekte Freistoss nach Abseits ausgeführt?", o: ["In der Mitte des Feldes","An der Stelle, an der der Spieler stand, der das Abseits verursacht hat","Am Elfmeterpunkt","An der Eckfahne"], a: 1 }
    ],
    rf: [
      { s: "Abseits gilt nur in der gegnerischen Spielhälfte.", a: true },
      { s: "Meist ist der letzte Gegenspieler vor dem Abseits-Spieler der Torwart.", a: true },
      { s: "Bei passivem Abseits pfeift der Schiedsrichter immer.", a: false, x: "Bei passivem Abseits zeigt der Schiedsrichter kein Abseits an." },
      { s: "Querpässe und Rückpässe können ohne Abseits gespielt werden, wenn der Empfänger hinter dem Ball ist.", a: true }
    ],
    offen: [
      { q: "Zähle alle Situationen aus dem Video auf, in denen es kein Abseits gibt (mindestens fünf).", l: "Mehr als zwei Gegenspieler zwischen Spieler und Tor; gleiche Höhe mit dem vorletzten Gegenspieler; Ball kommt vom Gegner; eigene Spielhälfte; Spieler hinter dem Ball; Eckball, Abstoss, Einwurf; passives Abseits." },
      { q: "Erkläre einem jüngeren Kind die Abseitsregel in höchstens vier einfachen Sätzen.", l: "Individuelle Erklärung, die korrekt enthält: Moment der Ballabgabe, näher am Tor als der zweitletzte Gegner, nur in der gegnerischen Hälfte, Folge: indirekter Freistoss." },
      { q: "Die Abseitsregel soll das Spiel spannend halten. Würde Fussball ohne Abseits besser oder schlechter? Begründe mit dem Video.", l: "Individuelle Stellungnahme; das Video sagt: Stürmer würden nur vor dem Tor warten, das nähme Dynamik und Spannung. Gegenargument z. B. mehr Tore, weniger umstrittene Entscheide." }
    ] }
},
"lehrstellensuche": {
  2: { vor: "Was macht beim ersten Treffen mit einer fremden Person einen guten Eindruck? Nenne drei Dinge.",
    wort: [["der erste Eindruck","wie man auf jemanden wirkt, wenn man sich zum ersten Mal sieht"],["der Händedruck","wenn man sich zur Begrüssung die Hand gibt"],["recherchieren","Informationen suchen"],["sich verstellen","so tun, als wäre man jemand anderes"],["der Ausbildner / die Ausbildnerin","Person, die Lernende im Betrieb ausbildet"]],
    mc: [
      { q: "Was kommt laut einer Ausbildnerin gut an, wenn man zum Gespräch kommt?", o: ["Wenn man die Namen der Interviewer kennt, sie damit begrüsst und Blickkontakt hält","Wenn man zu spät kommt","Wenn man zuerst nach dem Lohn fragt","Wenn man die Eltern mitbringt"], a: 0 },
      { q: "Wie soll man sich über das Unternehmen informieren?", o: ["Gar nicht","Im Internet recherchieren, z. B. welche Produkte die Firma herstellt","Nur die Kollegen fragen","Am Gespräch selbst fragen, was die Firma macht"], a: 1 },
      { q: "Wonach fragen die Ausbildner im Gespräch oft?", o: ["Nach Beispielen, z. B. wie man sich im Team verhält","Nach dem Lieblingsessen","Nach den Ferienplänen","Nach dem Handy-Modell"], a: 0 },
      { q: "Was soll man vor dem Gespräch mit dem Handy machen?", o: ["Auf den Tisch legen","Ausschalten","Laut stellen","Dem Ausbildner geben"], a: 1 }
    ],
    rf: [
      { s: "Ein Ausbildner achtet darauf, ob Jugendliche wirklich motiviert sind oder ob die Eltern sie schicken.", a: true },
      { s: "Im Gespräch soll man den Ausbildner duzen, damit es locker wirkt.", a: false, x: "Man soll nicht zu locker sein und nicht duzen." },
      { s: "Man darf Fragen stellen, wenn man etwas nicht verstanden hat.", a: true }
    ],
    offen: [
      { q: "Nenne drei Tipps aus dem Video für ein gutes Bewerbungsgespräch.", l: "Z. B. Namen der Interviewer kennen, pünktlich, Blickkontakt, guter Händedruck, über die Firma informieren, Fragen notieren, Handy aus, ruhig bleiben, ehrlich und sich selbst sein, Motivation zeigen, nicht unterbrechen." },
      { q: "Warum wurde Fabian für die Lehrstelle ausgewählt?", l: "Er wollte die Lehrstelle unbedingt und zeigte das; er machte zwei Schnupperwochen, um sich sicher zu sein." }
    ] },
  3: { vor: "Wie bereitest du dich auf eine Frage vor wie «Erzähl von einer Situation, in der du im Team eine wichtige Rolle hattest»?",
    wort: [["auflockern","eine angespannte Situation entspannter machen"],["sich auseinandersetzen mit","sich genau mit etwas beschäftigen"],["betonen","besonders hervorheben"],["ablehnen","Nein sagen, eine Absage geben"],["einen guten Riecher haben","etwas richtig einschätzen können"],["die Stärke / die Schwäche","was man gut / weniger gut kann"]],
    mc: [
      { q: "Warum entschieden sich die Ausbildner für Evanaëlle?", o: ["Weil sie die Firma kannte","Auch wegen ihrer sehr guten Schulnoten – der Beruf ist technisch, Mathematik ist wichtig","Weil sie am lautesten war","Weil sie zufällig ausgewählt wurde"], a: 1 },
      { q: "Was überzeugte die Ausbildner bei Seline?", o: ["Ihre Kleidung","Sie kannte den Beruf durchs Schnuppern, wusste etwas über die Firma, war motiviert und brachte Humor ins Gespräch","Sie hatte die längste Bewerbung","Sie war die Älteste"], a: 1 },
      { q: "Welche Gefahr nennt eine Person, auch wenn Selbstsicherheit wichtig ist?", o: ["Man kann auch zu selbstsicher sein","Man kann zu pünktlich sein","Man kann zu viel wissen","Man kann zu höflich sein"], a: 0 },
      { q: "Was fällt einem Ausbildner bei der Auswahl schwer?", o: ["Die Gespräche zu planen","Gute Kandidatinnen und Kandidaten ablehnen zu müssen","Die Namen zu merken","Das Dossier zu lesen"], a: 1 }
    ],
    rf: [
      { s: "Ein Ausbildner holt sich auch die Meinung von Kollegen aus der Produktion, die die Schnupperlernenden beobachtet haben.", a: true },
      { s: "Laut einer Lernenden hat der Ausbildner versucht, sie zum Lachen zu bringen, um die Situation aufzulockern.", a: true },
      { s: "Laut Video ist es gut, im Gespräch eine Rolle zu spielen, um besser zu wirken.", a: false, x: "Man soll ehrlich und sich selbst sein, nicht etwas vorspielen." },
      { s: "Man sollte seine Stärken und Schwächen kennen.", a: true }
    ],
    offen: [
      { q: "Vergleiche, was die Ausbildner bei Evanaëlle, Seline und Fabian überzeugt hat. Was haben die drei gemeinsam?", l: "Evanaëlle: gute Noten (Mathe). Seline: kannte Beruf und Firma, Motivation, Humor. Fabian: unbedingter Wille, zwei Schnupperwochen. Gemeinsam: Vorbereitung, echtes Interesse und Motivation für genau diese Lehre." },
      { q: "Warum fragen Ausbildner nach Beispielen aus der Schule? Bereite selbst ein solches Beispiel vor (zwei bis drei Sätze).", l: "Sie wollen die Person besser kennenlernen und sehen, wie sie sich z. B. im Team verhält. Eigenes Beispiel mit Situation, eigener Rolle und Ergebnis." },
      { q: "Die Ausbildner sagen: «Seid ehrlich und euch selbst», aber auch: «Zeigt euch von eurer besten Seite.» Ist das ein Widerspruch? Nimm Stellung.", l: "Individuelle Stellungnahme, z. B. kein Widerspruch: Man soll echte Stärken zeigen und nichts vorspielen; die beste Seite heisst vorbereitet, motiviert, höflich – nicht jemand anderes sein." }
    ] }
},
"berufsbildung": {
  2: { vor: "Welche Wege gibt es nach der Sekundarschule? Zeichne sie auf.",
    wort: [["eidgenössisch geregelt","von der ganzen Schweiz einheitlich bestimmt"],["berufsspezifisch","für einen bestimmten Beruf"],["die Passerelle","Ergänzungsprüfung, mit der man mit der BM an die Uni kann"],["die Weiterbildung","weiterlernen nach einem Abschluss"],["das Sprungbrett","Ausgangspunkt für einen nächsten Schritt"]],
    mc: [
      { q: "Was lernt man im Betrieb?", o: ["Nur Theorie","Praktische Erfahrung","Nur Sprachen","Nichts"], a: 1 },
      { q: "Wofür sind die überbetrieblichen Kurse?", o: ["Für Sport","Um gezielt berufsspezifische Fertigkeiten zu üben","Für Ferien","Um Lehrer zu werden"], a: 1 },
      { q: "Wo kann Luan mit der Berufsmaturität und der Passerelle studieren?", o: ["Nur an einer Fachhochschule","An einer Universität, ETH oder PH","Nur im Ausland","Nirgends"], a: 1 },
      { q: "Was möchte Luan nach einigen Jahren als Mediamatiker?", o: ["Pensioniert werden","Sich in eine andere Richtung weiterentwickeln","Immer genau dasselbe machen","Zurück in die Sekundarschule"], a: 1 }
    ],
    rf: [
      { s: "Das Schweizer Berufsbildungssystem verbindet Theorie und Praxis.", a: true },
      { s: "Die höhere Berufsbildung bietet praxisnahe Vertiefungen.", a: true },
      { s: "Nach einer Lehre ist laut Film kein Studium mehr möglich.", a: false, x: "Dank der Durchlässigkeit sind viele Wege offen, z. B. Fachhochschule, Universität, ETH, PH." }
    ],
    offen: [
      { q: "Beschreibe die drei Lernorte und was man dort jeweils lernt.", l: "Betrieb: praktische Erfahrung; überbetriebliche Kurse: berufsspezifische Fertigkeiten gezielt üben; Berufsfachschule: allgemeinbildender und berufskundlicher Unterricht." },
      { q: "Warum nennt der Film die Lehre «eine solide Basis für lebenslanges Lernen»?", l: "Weil man nach der Lehre weiterlernen kann: Berufsmaturität, Fachhochschule, Passerelle zur Uni, höhere Berufsbildung, Weiterbildungen – die Lehre ist ein Sprungbrett, nicht das Ende." }
    ] },
  3: { vor: "Viele Länder haben keine Lehre wie die Schweiz. Welche Vor- und Nachteile hat dieses System wohl?",
    wort: [["die Durchlässigkeit","man kann zwischen Bildungswegen wechseln"],["die Fachkraft","gut ausgebildete Person in einem Beruf"],["einzigartig","es gibt nichts Vergleichbares"],["die Perspektive","Aussicht, Möglichkeit für die Zukunft"],["praxisnah","nahe an der echten Arbeit"],["das Erfolgsmodell","ein System, das sehr gut funktioniert"]],
    mc: [
      { q: "Was bedeutet «Kein Abschluss ohne Anschluss» im Zusammenhang mit Luan?", o: ["Er muss sofort studieren","Nach seiner Lehre stehen ihm verschiedene Wege offen, z. B. BM, Studium oder höhere Berufsbildung","Er darf den Beruf nie wechseln","Ohne Abschluss gibt es kein Internet"], a: 1 },
      { q: "Welcher Weg führt laut Film von der Lehre an eine Universität?", o: ["Direkt nach dem EFZ","Mit der Berufsmaturität über die Passerelle","Nur mit einem Gymnasium","Mit einer Weiterbildung im Betrieb"], a: 1 },
      { q: "Warum bezeichnet der Film das System als «weltweit einzigartiges Erfolgsmodell»?", o: ["Weil es am billigsten ist","Weil es Theorie und Praxis verbindet, Durchlässigkeit fördert und Fachkräfte für die Zukunft schafft","Weil es am kürzesten dauert","Weil es nur wenige Berufe gibt"], a: 1 },
      { q: "An wen richtet sich die Aufforderung am Schluss?", o: ["An Lehrpersonen","An alle, die beruflich weiterkommen möchten – sie sollen sich im BIZ beraten lassen","An Firmen","An Touristen"], a: 1 }
    ],
    rf: [
      { s: "Es gibt rund 240 eidgenössisch geregelte berufliche Grundbildungen.", a: true },
      { s: "Die Lehre dauert in der Schweiz immer vier Jahre.", a: false, x: "Sie dauert zwei, drei oder vier Jahre." },
      { s: "In der Berufsfachschule gibt es allgemeinbildenden und berufskundlichen Unterricht.", a: true },
      { s: "Der Film richtet sich auch an Menschen, die bereits arbeiten und sich weiterbilden wollen.", a: true }
    ],
    offen: [
      { q: "Zeichne oder beschreibe Luans mögliche Bildungswege nach der Lehre als Mediamatiker. Nenne mindestens drei.", l: "Berufsmaturität → Fachhochschule; BM + Passerelle → Universität, ETH, PH; höhere Berufsbildung (BP, HFP, HF); gezielte Weiterbildungen; weiter im Beruf arbeiten." },
      { q: "Erkläre einem Jugendlichen aus einem anderen Land, wie die Lehre in der Schweiz funktioniert (vier bis fünf Sätze).", l: "Individuelle Erklärung mit: ca. 240 Berufe, 2–4 Jahre, drei Lernorte (Betrieb, üK, Berufsfachschule), Durchlässigkeit, Weiterbildungsmöglichkeiten, Beratung im BIZ." },
      { q: "Ist eine Lehre oder das Gymnasium der bessere Weg? Nimm Stellung, auch für dich persönlich.", l: "Individuelle Stellungnahme, z. B. Lehre: Praxis, eigener Lohn, Durchlässigkeit; Gymnasium: breite Allgemeinbildung, direkter Weg zur Uni. Begründung mit eigenen Interessen." }
    ] }
},
"fage": {
  2: { vor: "Welche Eigenschaften braucht man wohl, um kranke Menschen zu pflegen?",
    wort: [["die Institution","eine Einrichtung, z. B. ein Spital oder Heim"],["die Rehabilitation","Behandlung, damit man nach einer Krankheit wieder fit wird"],["einfühlsam","man spürt, wie es anderen geht"],["die Infusion","Flüssigkeit, die über eine Nadel in die Vene läuft"],["verdrängen","nicht mehr an etwas denken wollen"]],
    mc: [
      { q: "Wen betreuen Fachpersonen Gesundheit?", o: ["Nur Kinder","Menschen jeden Alters","Nur ältere Menschen","Nur Tiere"], a: 1 },
      { q: "Wie soll man laut Film mit den Patientinnen und Patienten umgehen?", o: ["Schnell und streng","Einfühlsam und respektvoll","Möglichst ohne zu sprechen","Nur über die Ärzte"], a: 1 },
      { q: "Was ist bei der Arbeit mit Medikamenten besonders wichtig?", o: ["Höchste Konzentration und Hygienemassnahmen","Schnell sein","Musik hören","Die Patienten selbst entscheiden lassen"], a: 0 },
      { q: "Was ist laut Film eine wichtige Eigenschaft bei der Unterstützung im Alltag der Patienten?", o: ["Geduld","Ungeduld","Lautstärke","Strenge"], a: 0 }
    ],
    rf: [
      { s: "Fachpersonen Gesundheit arbeiten auch bei der Spitex.", a: true },
      { s: "Fachpersonen Gesundheit messen unter anderem Blutdruck, Gewicht und Sauerstoffsättigung.", a: true },
      { s: "Schwierige Erlebnisse soll man laut Film verdrängen.", a: false, x: "Man soll sie verarbeiten, z. B. in einem Gespräch, und nicht verdrängen." }
    ],
    offen: [
      { q: "Nenne vier Aufgaben einer FaGe aus dem Film.", l: "Tagesplanung im Team besprechen, Patienten bei der Pflege unterstützen, Blutdruck/Gewicht/Sättigung messen, Medikamente richten, Infusionen vorbereiten, Beobachtungen dokumentieren und weiterleiten, mit Ärzten zusammenarbeiten." },
      { q: "Warum ist Zusammenarbeit mit anderen Berufen (Interdisziplinarität) in diesem Beruf wichtig?", l: "Viele Fachpersonen (Ärzte, Therapeuten, Pflege) betreuen dieselben Patienten; nur wenn sie Informationen austauschen, kann man gut und sicher pflegen." }
    ] },
  3: { vor: "Wie geht man damit um, wenn man bei der Arbeit Menschen erlebt, denen es sehr schlecht geht?",
    wort: [["koordinieren","verschiedene Aufgaben aufeinander abstimmen"],["die Psychiatrie","Bereich der Medizin für psychische Krankheiten"],["unverwechselbar","einzigartig, mit nichts zu verwechseln"],["verabreichen","ein Medikament geben"],["die Ansprechperson","Person, an die man sich wenden kann"],["die Interdisziplinarität","Zusammenarbeit verschiedener Fachrichtungen"]],
    mc: [
      { q: "Welche Bereiche des Gesundheits- und Sozialwesens nennt der Film als Arbeitsorte?", o: ["Schulen und Kitas","Spitäler, Pflegeheime, Psychiatrie- und Rehakliniken sowie Spitex","Apotheken und Banken","Fitnesscenter"], a: 1 },
      { q: "Warum findet eine Fachfrau ihren Beruf «extrem spannend»?", o: ["Weil sie viel verdient","Weil jeder Mensch eine eigene, unverwechselbare Geschichte hat","Weil sie wenig arbeiten muss","Weil sie Uniform trägt"], a: 1 },
      { q: "Was gehört laut Film zum Wissen über Medikamente?", o: ["Nur ihre Farbe","Die wichtigsten Medikamente und ihre Wirkung kennen; es kommen immer wieder neue dazu","Den Preis","Nichts, das macht der Arzt"], a: 1 },
      { q: "Was ist laut Film besonders wichtig, wenn es einem Patienten einfach nicht besser geht?", o: ["Den Patienten meiden","Die Situation verarbeiten, z. B. in einem Gespräch, statt sie zu verdrängen","Den Beruf wechseln","Es niemandem sagen"], a: 1 }
    ],
    rf: [
      { s: "Am Morgen wird im Stationszimmer über die Tagesplanung und Besonderheiten orientiert.", a: true },
      { s: "Eine FaGe arbeitet ganz allein und spricht nicht mit Ärzten.", a: false, x: "Ärzte sind wichtige Ansprechpersonen; der Beruf ist interdisziplinär." },
      { s: "Beobachtungen werden dokumentiert und weitergeleitet.", a: true },
      { s: "Im Film richtet die Fachperson auch Infusionen und verabreicht sie.", a: true }
    ],
    offen: [
      { q: "Warum sind Konzentration, Hygiene und genaues Dokumentieren in diesem Beruf so wichtig? Erkläre mit Beispielen.", l: "Fehler bei Medikamenten oder Infusionen können Patienten schaden; Hygiene verhindert Infektionen; Dokumentation sorgt dafür, dass alle im Team (auch Ärzte) die richtigen Informationen haben." },
      { q: "Der Beruf verlangt Fachwissen und Einfühlungsvermögen. Welche dieser Seiten ist schwieriger zu lernen? Begründe.", l: "Individuelle Antwort mit Begründung, z. B. Fachwissen kann man lernen, Einfühlungsvermögen und Umgang mit schweren Situationen brauchen Erfahrung." },
      { q: "Wäre der Beruf FaGe etwas für dich? Beziehe dich auf Aufgaben und Anforderungen aus dem Film.", l: "Individuelle Antwort mit Bezug auf Aufgaben (Pflege, Messen, Medikamente, Dokumentation) und Anforderungen (Einfühlung, Geduld, Konzentration, Teamarbeit, schwierige Situationen)." }
    ] }
},
"logistik": {
  2: { vor: "Welche Waren kommen jeden Tag in deinen Wohnort? Wie kommen sie dorthin?",
    wort: [["die Versorgung","dafür sorgen, dass alle haben, was sie brauchen"],["die Tour","festgelegte Strecke zum Verteilen"],["das Einschreiben","Brief, dessen Empfang bestätigt werden muss"],["die Zollgebühr","Abgabe für Waren aus dem Ausland"],["die Kupplung","Verbindung zwischen zwei Eisenbahnwagen"]],
    mc: [
      { q: "Wie viele Personen arbeiten im Team des Lernenden im Verteilzentrum?", o: ["2 bis 3","10 bis 15","50","100"], a: 1 },
      { q: "Wie lange dauert eine Verteiltour ungefähr?", o: ["Eine halbe Stunde","Dreieinhalb bis vier Stunden","Acht Stunden","Zwei Tage"], a: 1 },
      { q: "Was macht der Logistiker, wenn eine Kundin nicht zu Hause ist?", o: ["Er stellt das Paket vor die Tür","Er legt eine Benachrichtigung in den Briefkasten, damit sie das Paket bei der Post abholen kann","Er nimmt es mit nach Hause","Er gibt es dem Nachbarn ohne Info"], a: 1 },
      { q: "Warum stehen die Lernenden im Rangierbahnhof auf dem Trittbrett vor den Wagen?", o: ["Weil es Spass macht","Weil der Lokführer die Sicht versperrt hat – sie sind seine «Augen»","Um die Wagen zu putzen","Um Fahrkarten zu kontrollieren"], a: 1 }
    ],
    rf: [
      { s: "Im Verteilzentrum arbeiten hauptsächlich Männer.", a: true },
      { s: "Nach der Tour muss man manchmal Geld abliefern und eine Abrechnung machen.", a: true },
      { s: "Die Wagen werden im Rangierbahnhof ohne Computer erfasst.", a: false, x: "Mit dem Tablet werden die Daten der Wagen ins System eingegeben." }
    ],
    offen: [
      { q: "Beschreibe den Arbeitstag im Verteilzentrum der Post in der richtigen Reihenfolge (mindestens vier Schritte).", l: "Start zwischen 5 und 6 Uhr; Lastwagen bringen Briefe und Pakete; Arbeit aufteilen und nach Touren sortieren; Fahrzeug (Auto oder dreirädriger Roller) beladen; Tour fahren (3,5–4 Std.), Pakete und Einschreiben verteilen; zurück, Post für den nächsten Tag sortieren, Werbesendungen, scannen, Geld abrechnen." },
      { q: "Was wird im Lager mit gelieferter Ware gemacht?", l: "Ware abladen, zusammen mit dem Lieferanten Menge und Qualität kontrollieren, Infos ins IT-System eingeben, damit das Büro die Kunden informieren kann; Bestellungen der Kunden vorbereiten." }
    ] },
  3: { vor: "Welche Berufe sorgen dafür, dass eine Gesellschaft funktioniert, auch wenn man sie kaum sieht?",
    wort: [["improvisieren","spontan eine Lösung finden"],["im Wandel","sich verändernd"],["formieren","zusammenstellen, ordnen"],["die Witterung","das Wetter"],["vorausschauend","an das denken, was gleich passieren könnte"],["die Robustheit","körperliche Widerstandskraft"]],
    mc: [
      { q: "Was haben laut Film alle drei Bereiche (Lager, Distribution, Verkehr) gemeinsam?", o: ["Sie arbeiten nur nachts","Sorgfältiger Umgang mit Ware, Einhalten der Betriebsabläufe und Service für die Kunden","Sie brauchen keinen Computer","Sie arbeiten nur im Büro"], a: 1 },
      { q: "Warum sagt ein Logistiker, der Beruf sei «stark im Wandel»?", o: ["Weil die Post schliesst","Weil man heute mit einem Scanner wie einem Smartphone arbeitet, der Arbeitsbeginn, Pausen und Sendungen erfasst","Weil keine Pakete mehr verschickt werden","Weil man nur noch Velo fährt"], a: 1 },
      { q: "Warum muss man beim Kuppeln der Wagen aufpassen?", o: ["Damit sie schön aussehen","Damit die Kupplung nicht zu viel Spiel hat und nicht bricht; ausserdem müssen die Luftschläuche für die Bremsen verbunden werden","Damit der Zug schneller fährt","Damit der Lokführer schlafen kann"], a: 1 },
      { q: "Welches Berufsziel hat einer der Lernenden?", o: ["Pilot","Lokführer oder Verkehrsleiter","Koch","Lehrer"], a: 1 }
    ],
    rf: [
      { s: "Logistiker können in ganz unterschiedlichen Branchen arbeiten, z. B. im Bausektor oder in der Bekleidungsindustrie.", a: true },
      { s: "Das Einstellen der Gleise im Rangierbahnhof ist automatisiert und läuft über ein IT-System.", a: true },
      { s: "Bei Regen ist die Arbeit mit dem Roller besonders sicher.", a: false, x: "Bei Regen muss man stark auf die Sicherheit achten, weil die Roller leicht rutschen." },
      { s: "Volle Kisten können schnell 20 Kilo wiegen.", a: true }
    ],
    offen: [
      { q: "Vergleiche die drei Arbeitsorte im Film (Verteilzentrum, Rangierbahnhof, Baustofflager): Was ist jeweils typisch?", l: "Verteilzentrum: sortieren, Touren, Pakete und Einschreiben, Scanner, Kundenkontakt. Rangierbahnhof: Züge formieren, kuppeln, Luftschläuche, Funk, Tablet, Sicherheit an den Gleisen. Lager: Waren annehmen, mit Lieferant kontrollieren, im System erfassen, Bestellungen vorbereiten, Gabelstapler." },
      { q: "Welche Sicherheitsrisiken gibt es im Beruf, und wie schützen sich die Logistiker?", l: "Rutschige Roller bei Regen, vorbeifahrende Züge, Hubwagen und Kunden im Lager, schwere Lasten; Schutz: Helm, Arbeitskleidung, auffällige Kleidung, Sicherheitsschuhe, Signale beachten, vorsichtig tragen." },
      { q: "Der Film nennt viele Vor- und Nachteile. Würdest du diesen Beruf wählen? Wäge mindestens zwei Vor- und zwei Nachteile ab.", l: "Individuelle Abwägung, z. B. Vorteile: Abwechslung, Bewegung, draussen, Kundenkontakt, Verantwortung; Nachteile: jedes Wetter, schwere Lasten, viele Kilometer, unregelmässige Zeiten, Stress." }
    ] }
},
"maler": {
  2: { vor: "Welche Arbeitsschritte braucht es, bis eine alte Wohnung wieder schön aussieht?",
    wort: [["die Renovation","Erneuerung eines alten Gebäudes"],["die Deckschicht","letzte Farbschicht"],["die Fassade","die Aussenwand eines Hauses"],["der Farbton","eine bestimmte Farbe, z. B. hellblau"],["die Retusche","kleine Verbesserung am Schluss"]],
    mc: [
      { q: "Welche Eigenschaften werden zu Beginn für den Beruf genannt?", o: ["Gern mit den Händen arbeiten, künstlerisches Flair, ordentlich und sorgfältig, körperlich robust","Gern im Büro sitzen","Gut singen können","Angst vor Höhe"], a: 0 },
      { q: "Wo werden die Fensterläden bearbeitet?", o: ["Direkt am Haus","In der Werkstatt","Beim Kunden im Wohnzimmer","Im Freien auf der Strasse"], a: 1 },
      { q: "Womit streichen die Maler die Wände?", o: ["Nur mit den Händen","Mit grossen 30-cm-Rollen, kleinen Rollen und Pinseln","Nur mit der Spritzpistole","Mit Schwämmen"], a: 1 },
      { q: "Was ist laut einer Malerin vielleicht der einzige (kleine) Nachteil?", o: ["Der tiefe Lohn","Dass man schmutzig wird und überall Farbe hat","Dass man nie draussen arbeitet","Dass man allein arbeitet"], a: 1 }
    ],
    rf: [
      { s: "Je nach Farbton braucht es zwei Farbschichten, manchmal reicht eine.", a: true },
      { s: "Bei Gesamtrenovationen mit anderen Fachleuten kann es ziemlich laut werden.", a: true },
      { s: "Maler arbeiten immer am gleichen Ort.", a: false, x: "Sie wechseln ständig den Arbeitsort, von Baustelle zu Baustelle." }
    ],
    offen: [
      { q: "Beschreibe die Arbeitsschritte bei Fensterläden von der Abholung bis zur Rückgabe.", l: "Beim Kunden abholen, in die Werkstatt bringen; von Hand schleifen, Unebenheiten füllen; Grundierung, dann Deckschicht (mit Lösemittel-Farbe); ca. einen Tag trocknen; einladen und sorgfältig zum Kunden zurückbringen." },
      { q: "Was gefällt den Lernenden an ihrem Beruf? Nenne drei Punkte.", l: "Aus etwas Altem etwas Neues machen; Ergebnis sehen (vorher/nachher); Arbeit mit Farben, Tapeten, Dekoration; immer unterwegs; viel Bewegung; Abwechslung; draussen mit Seesicht." }
    ] },
  3: { vor: "Warum ist bei vielen Berufen die Vorbereitung wichtiger als das, was man am Schluss sieht?",
    wort: [["der Untergrund","die Fläche, auf die man die Farbe aufträgt"],["resistent","widerstandsfähig"],["rustikal","ländlich, grob wirkend"],["der Verputz","Schicht auf der Wand aus Gips oder Mörtel"],["die Farbschattierung","feine Abstufung einer Farbe"],["die Sicherheitsvorschrift","Regel für sicheres Arbeiten"]],
    mc: [
      { q: "Warum verwendet man aussen hauptsächlich Farben mit Lösemittel?", o: ["Weil sie billiger sind","Weil sie resistenter sind als wasserlösliche Produkte","Weil sie schneller trocknen","Weil sie besser riechen"], a: 1 },
      { q: "Was macht man bei Fensterläden aus unbehandeltem Holz, um den Holzeffekt zu behalten?", o: ["Man streicht sie schwarz","Man verwendet farblosen oder farbigen Lack","Man tapeziert sie","Man lässt sie im Regen"], a: 1 },
      { q: "Warum werden heute immer mehr wasserlösliche Farben hergestellt?", o: ["Weil sie weniger schädlich sind","Weil sie länger halten","Weil Maler sie lieber mögen","Weil sie teurer sind"], a: 0 },
      { q: "Warum braucht man in diesem Beruf körperliche Kraft?", o: ["Weil man viel rennen muss","Weil man oft mit den Armen in der Luft arbeitet und schwere Farbkübel trägt","Weil man Möbel baut","Weil man Bäume fällt"], a: 1 }
    ],
    rf: [
      { s: "Die Vorbereitung (abdecken, schmirgeln, kitten) macht etwa 70 Prozent des Berufs aus.", a: true },
      { s: "Für einen rustikalen Verputz bringt man den Gips mit einem Reibbrett auf.", a: true },
      { s: "Laut einer Malerin legen die Leute immer weniger Wert auf schöne Wohnräume.", a: false, x: "Sie legen immer mehr Wert darauf; es gibt auch immer mehr Fernsehsendungen dazu." },
      { s: "Bei Arbeiten mit Lösungsmitteln oder Spritzpistolen tragen Maler Gesichtsmasken.", a: true }
    ],
    offen: [
      { q: "Beschreibe, wie die Maler eine Wohnung renovieren – vom Morgen in der Werkstatt bis zur Schlusskontrolle.", l: "Arbeitspläne verteilen, Material vorbereiten und laden; auf der Baustelle Lift, Treppenhaus, Boden, Fenster, Möbel abdecken; Flächen prüfen (schleifen, kitten); grundieren; mit Rollen/Pinseln streichen; ggf. Tapeten entfernen, Gips schleifen, Löcher füllen, neu tapezieren und streichen; Verputz/Farbschattierungen; Kontrolle und Retuschen; zurück in die Werkstatt." },
      { q: "Der Film sagt, der Beruf verändere sich laufend. Nenne zwei Veränderungen und erkläre, warum sie wichtig sind.", l: "Mehr wasserlösliche Farben (weniger schädlich für Mensch und Umwelt); neue Maltechniken, Tapeten und Dekorationstechniken; neue Grundierungen und Materialien – man muss immer weiterlernen." },
      { q: "Für den Beruf braucht man «eine künstlerische Ader» und «Sorgfalt». Welche Eigenschaft ist wichtiger? Begründe mit Beispielen aus dem Film.", l: "Individuelle Antwort, z. B. Sorgfalt: 70 % Vorbereitung, Abdecken, Fensterläden nicht beschädigen; künstlerische Ader: Farbschattierungen, Dekoration, rustikaler Verputz. Abwägung." }
    ] }
},
"automobil": {
  2: { vor: "Was kann an einem Auto alles kaputtgehen? Notiere drei Dinge.",
    wort: [["der Auftrag","Arbeit, die man erledigen soll"],["der Antriebsriemen","Riemen, der Teile im Motor antreibt"],["die Hebebühne","Gerät, das ein Auto in die Höhe hebt"],["die Probefahrt","kurze Fahrt zum Testen"],["das Kältemittel","Stoff, mit dem die Klimaanlage kühlt"]],
    mc: [
      { q: "Wie bekommt Shannon am Morgen ihre Arbeit?", o: ["Der Teamleiter gibt ihr an der Auftragswand einen Auftrag","Sie sucht sich selbst ein Auto aus","Die Kunden rufen sie direkt an","Sie liest eine E-Mail"], a: 0 },
      { q: "Was macht Shannon nach der Reparatur des Antriebsriemens?", o: ["Sie geht sofort nach Hause","Probefahrt, Endkontrolle, Fahrzeug putzen, Flüssigkeiten kontrollieren, Waschanlage","Sie verkauft das Auto","Sie lackiert das Auto neu"], a: 1 },
      { q: "Welche zwei Fachrichtungen gibt es?", o: ["Personenwagen und Nutzfahrzeuge","Velos und Motorräder","Elektro und Benzin","Verkauf und Werkstatt"], a: 0 },
      { q: "Womit sucht Shannon nach einem Leck in der Klimaanlage?", o: ["Mit einer Taschenlampe","Mit einer UV-Lampe und einer speziellen Brille","Mit Wasser","Mit dem Handy"], a: 1 }
    ],
    rf: [
      { s: "Shannon vergleicht die Länge des alten und des neuen Riemens.", a: true },
      { s: "Die Sicherheitsschuhe haben Stahlkappen.", a: true },
      { s: "Die Klimaanlage des Kunden funktionierte in Wirklichkeit gut.", a: false, x: "Der Kunde hatte recht: Die Klimaanlage kühlte nicht." }
    ],
    offen: [
      { q: "Beschreibe in der richtigen Reihenfolge, wie Shannon den Antriebsriemen wechselt.", l: "Teil beim Kundendienstberater mit der Chassis-Nummer holen; alten Riemen entspannen und abmontieren; Länge vergleichen; im Hilfssystem nachschauen; neuen Riemen montieren und spannen; mit der Hebebühne von unten kontrollieren; zusammenbauen, Motorhaube schliessen, Probefahrt, Endkontrolle." },
      { q: "Welche Eigenschaften braucht man für diesen Beruf? Nenne drei.", l: "Technische Zusammenhänge erkennen, handwerklich geschickt, sorgfältig, zuverlässig, verantwortungsbewusst." }
    ] },
  3: { vor: "Autos werden immer elektronischer. Wie verändert das die Arbeit in einer Garage?",
    wort: [["der Kostenvoranschlag","Berechnung, was eine Reparatur kosten wird"],["die Chassis-Nummer","eindeutige Nummer eines Fahrzeugs"],["die Luftfederung","Federung mit Druckluft, z. B. bei Lastwagen"],["die Beanstandung","Reklamation, Meldung eines Problems"],["die Dichtheit","Eigenschaft, dass nichts ausläuft"],["diagnoseunterstützt","mit Hilfe eines Computers, der Fehler sucht"]],
    mc: [
      { q: "Was macht Shannon, bevor sie eine grössere Reparatur ausführt?", o: ["Sie erstellt wenn nötig einen Kostenvoranschlag und informiert den Kundendienstberater","Sie bestellt sofort alle Teile","Sie fragt ihre Familie","Nichts, sie beginnt gleich"], a: 0 },
      { q: "Was ist bei Lastwagen laut Film anders als bei Personenwagen?", o: ["Die Arbeiten sind ganz andere","Die Arbeiten sind gleich, aber der Aufbau ist anders und alles grösser, z. B. Luftkessel für Federung und Bremsen","Lastwagen haben keine Bremsen","Es gibt keinen Unterschied"], a: 1 },
      { q: "In welcher Reihenfolge prüft Shannon die Klimaanlage?", o: ["Neu befüllen – Leck suchen – Kunde fragen","Beanstandung prüfen – Leck suchen – Druck messen – neu befüllen – Funktionskontrolle","Funktionskontrolle – Auto waschen – Probefahrt","Druck messen – Kompressor ersetzen"], a: 1 },
      { q: "Welche Weiterbildungen plant Shannon?", o: ["Automobil-Mechatronikerin EFZ und eventuell Automobil-Diagnostikerin","Pilotin","Verkäuferin","Keine"], a: 0 }
    ],
    rf: [
      { s: "Laut Shannon wird ihre Leidenschaft grösser, je mehr sie versteht.", a: true },
      { s: "Heute macht man sich in der Garage nie mehr die Hände schmutzig.", a: false, x: "Man muss noch oft mechanisch arbeiten, aber dank Elektronik und Diagnose sind auch viele saubere Arbeiten möglich." },
      { s: "Shannon erklärt dem Kunden am Schluss, was sie gemacht hat, und übergibt den Auftrag.", a: true },
      { s: "Zu Shannons Lieblingsarbeiten gehört alles mit Elektronik sowie grosse Arbeiten wie Getriebe wechseln.", a: true }
    ],
    offen: [
      { q: "Warum sind Kontrollen (Länge vergleichen, Kontrolle von unten, Probefahrt, Endkontrolle) in diesem Beruf so wichtig? Begründe.", l: "Fehler können gefährlich werden (Sicherheit im Strassenverkehr), Kunden vertrauen der Garage, falsche Teile kosten Zeit und Geld, Verantwortungsbewusstsein." },
      { q: "Erkläre, wie sich der Beruf durch die Elektronik verändert hat. Was bleibt gleich?", l: "Mehr Diagnosesysteme und Elektrik, Arbeiten ohne Öl an den Fingern; gleich bleibt: mechanische Arbeiten, Sorgfalt, handwerkliches Geschick, Kontakt mit Kunden." },
      { q: "Schreibe die Übergabe an Herrn Berger in eigenen Worten als kurzen Bericht (3–4 Sätze).", l: "Z. B.: Beanstandung Klimaanlage kühlt nicht. Kompressor kontrolliert, Anlage mit UV-Lampe auf Dichtheit geprüft, kein Leck gefunden. Druck gemessen, zu wenig Kältemittel, neu befüllt. Funktionskontrolle: Anlage kühlt wieder einwandfrei." }
    ] }
},
"ict": {
  2: { vor: "Welche digitalen Geräte benutzt du an einem Tag? Wer hilft, wenn eines nicht funktioniert?",
    wort: [["die Digitalisierung","immer mehr wird mit Computern und Internet gemacht"],["das Netzwerk","verbundene Computer und Geräte"],["die Störung","etwas funktioniert nicht richtig"],["der User / die Userin","Person, die ein Gerät benutzt"],["in Betrieb nehmen","ein neues Gerät einrichten und starten"]],
    mc: [
      { q: "Was machen ICT-Fachleute laut Video?", o: ["Sie programmieren nur Spiele","Sie beschaffen Geräte, nehmen sie in Betrieb, binden sie ans Netzwerk an und helfen bei Problemen","Sie verkaufen Handys im Laden","Sie reparieren Autos"], a: 1 },
      { q: "Wie helfen sie den Usern?", o: ["Nur per Brief","Telefonisch oder persönlich","Gar nicht","Nur am Wochenende"], a: 1 },
      { q: "Wie viele Tage pro Woche besuchen Lernende die Berufsfachschule?", o: ["Gar keinen","Einen bis zwei Tage","Vier Tage","Jeden Tag"], a: 1 },
      { q: "Wie viele überbetriebliche Kurse gibt es in der Ausbildung?", o: ["Zwei","Vier","Zehn","Keine"], a: 1 }
    ],
    rf: [
      { s: "Die Menge an Geräten und Tools, die wir nutzen, nimmt stetig zu.", a: true },
      { s: "Schwierige Probleme lösen ICT-Fachleute immer allein.", a: false, x: "Anspruchsvolle Probleme analysieren und lösen sie gemeinsam im Team." },
      { s: "Die Nachfrage nach ICT-Fachleuten ist laut Video riesig.", a: true }
    ],
    offen: [
      { q: "Nenne fünf ICT-Mittel, die im Video genannt werden.", l: "Computer, Notebooks, Smartphones, Tablets, Drucker, Scanner, Apps, Onlinedienste, Software." },
      { q: "Warum ist es für Firmen so wichtig, dass die ICT funktioniert?", l: "Mitarbeitende arbeiten und kommunizieren mit ICT; wenn sie nicht funktioniert, können sie nicht arbeiten – ganze Firmen können lahmgelegt werden." }
    ] },
  3: { vor: "Was würde in deiner Schule passieren, wenn einen Tag lang kein Computer und kein WLAN funktionieren?",
    wort: [["reibungslos","ohne Probleme"],["existenziell","überlebenswichtig"],["der Anwender / die Anwenderin","Person, die Programme benutzt"],["der eidgenössische Fachausweis","anerkannter Abschluss einer Weiterbildung"],["die Applikationsentwicklung","Programmieren von Anwendungen"],["die Systemtechnik","Planung und Betrieb von Netzwerken und Servern"]],
    mc: [
      { q: "Warum sagt das Video, ICT sei für grosse Firmen «existenziell»?", o: ["Weil sie viel Geld kostet","Weil Mitarbeitende ohne funktionierende ICT nicht arbeiten können und die ganze Firma lahmgelegt werden kann","Weil Computer schön aussehen","Weil es ein Gesetz gibt"], a: 1 },
      { q: "Welche Richtungen für den eidgenössischen Fachausweis werden genannt?", o: ["Applikationsentwicklung, Wirtschaftsinformatik, Systemtechnik","Kochen, Malen, Singen","Medizin und Recht","Sport und Musik"], a: 0 },
      { q: "Welcher Weg führt laut Video an eine Fachhochschule?", o: ["Direkt nach der Sek","Berufsmaturität nach der Ausbildung, dann Studium","Ein Onlinekurs","Ein Sprachaufenthalt"], a: 1 },
      { q: "Was lernt man in der Berufsfachschule neben dem Fachwissen?", o: ["Anwenderinnen und Anwender professionell zu unterstützen","Autofahren","Kochen","Fremdsprachen unterrichten"], a: 0 }
    ],
    rf: [
      { s: "In den überbetrieblichen Kursen unterrichten Lehrpersonen aus der Praxis.", a: true },
      { s: "ICT-Systeme werden laut Video immer einfacher.", a: false, x: "Sie werden immer komplexer – darum braucht es Spezialistinnen und Spezialisten." },
      { s: "Die Digitalisierung verändert, wie wir kommunizieren, arbeiten, lernen und konsumieren.", a: true },
      { s: "Nach dem Fachausweis ist auch ein eidgenössisches Diplom möglich.", a: true }
    ],
    offen: [
      { q: "Erkläre mit eigenen Worten, wie die Ausbildung zur ICT-Fachperson aufgebaut ist (drei Lernorte).", l: "Betrieb (Praxis: Geräte einrichten, Support), Berufsfachschule (1–2 Tage pro Woche, Fachwissen), überbetriebliche Kurse (4 Kurse, Vertiefung mit Praxis-Lehrpersonen)." },
      { q: "Beschreibe eine typische Support-Situation: Eine Mitarbeiterin kann nicht mehr drucken. Was würde eine ICT-Fachperson Schritt für Schritt tun?", l: "Nachfragen, Problem genau beschreiben lassen; prüfen (Kabel, Netzwerk, Treiber, Druckerstatus); Lösung umsetzen oder im Team analysieren; testen; freundlich erklären, was gemacht wurde." },
      { q: "Das Video ist ein Werbevideo des Berufsverbands. Woran merkst du das? Was erfährst du nicht?", l: "Nur positive Aussagen, Musik, Website am Schluss, «riesige Nachfrage», «am Puls der Zukunft». Nicht erwähnt: Stress bei Ausfällen, Pikettdienst, langes Sitzen, Lohn, Anforderungen." }
    ] }
},
"bewerbung": {
  2: { vor: "Wie lange schaut eine Personalverantwortliche deiner Meinung nach eine Bewerbung zuerst an?",
    wort: [["prägnant","kurz und klar"],["die Floskel","leere, allgemeine Formulierung"],["der Anhang","Kopien von Zeugnissen und Zertifikaten"],["der Werdegang","Weg durch Schule und Beruf"],["authentisch","echt, ehrlich"]],
    mc: [
      { q: "Welcher Teil der Bewerbung ist in der Schweiz laut Video der wichtigste?", o: ["Das Motivationsschreiben","Der Lebenslauf","Der Anhang","Das Couvert"], a: 1 },
      { q: "Wie lang soll das Motivationsschreiben höchstens sein?", o: ["Eine Seite","Drei Seiten","Fünf Seiten","Eine halbe Zeile"], a: 0 },
      { q: "In welcher Form soll die Bewerbung eingereicht werden?", o: ["Als Foto vom Handy","Digital als PDF-Dokument, fehlerfrei","Handschriftlich","Als Sprachnachricht"], a: 1 },
      { q: "Was wird im Lebenslauf oft als Erstes angeschaut?", o: ["Das Foto","Die Hobbys","Die Adresse","Die Seitenzahl"], a: 0 }
    ],
    rf: [
      { s: "Der Lebenslauf soll ein bis zwei Seiten lang sein.", a: true },
      { s: "Erfahrene Personalverantwortliche erkennen Standardfloskeln sofort.", a: true },
      { s: "Der Lebenslauf bleibt für jede Stelle genau gleich.", a: false, x: "Man soll ihn für jede Stelle etwas anpassen und passende Eigenschaften hervorheben." }
    ],
    offen: [
      { q: "Nenne die drei Tipps aus dem Video.", l: "1. Korrekte Form und Struktur (Lebenslauf, Bewerbungsschreiben, Anhang). 2. Spezifisch auf Person und Stelle zugeschnitten, kein Standard-Blabla. 3. Wichtigste Infos schnell ersichtlich, kurz und prägnant." },
      { q: "Welche Fragen soll das Motivationsschreiben beantworten?", l: "Warum dieses Unternehmen? Warum diese Branche? Was motiviert an der Stelle? Warum bin ich die ideale Kandidatin / der ideale Kandidat?" }
    ] },
  3: { vor: "Stell dir vor, du müsstest aus 100 Bewerbungen fünf auswählen. Worauf würdest du achten?",
    wort: [["die Personalverantwortliche","Person, die neue Mitarbeitende auswählt"],["herausfiltern","aus vielen die passenden auswählen"],["belegen","beweisen, mit Dokumenten zeigen"],["personalisieren","persönlich anpassen"],["der erste Eindruck","wie man auf jemanden wirkt, wenn er einen zum ersten Mal sieht"],["der Mitbewerber","andere Person, die sich auch bewirbt"]],
    mc: [
      { q: "Wie lange schaut sich eine Personalverantwortliche eine Bewerbung für die erste Entscheidung meist an?", o: ["Weniger als 60 Sekunden","Eine Stunde","Einen Tag","Zehn Minuten"], a: 0 },
      { q: "Wozu kann das Anschreiben laut Video auch dienen?", o: ["Um Witze zu erzählen","Um Fragen zu beantworten, die der Lebenslauf aufwirft, z. B. eine Kündigung nach sechs Monaten oder ein Branchenwechsel","Um den Lohn festzulegen","Um die Firma zu kritisieren"], a: 1 },
      { q: "Warum beeinflusst das Foto, wie der Rest gelesen wird?", o: ["Weil es der erste Eindruck ist","Weil es die meisten Informationen enthält","Weil es gross ist","Es beeinflusst nichts"], a: 0 },
      { q: "Was ist laut Video das Ziel der Bewerbung?", o: ["Möglichst viel Text","Zu zeigen, warum man ein Top-Kandidat ist und warum das Unternehmen einen einstellen soll","Die Firma zu loben","Alle Hobbys aufzuzählen"], a: 1 }
    ],
    rf: [
      { s: "Manche Leute haben verschiedene Bewerbungsfotos, z. B. mit oder ohne Krawatte.", a: true },
      { s: "Der Anhang belegt die Informationen im Lebenslauf.", a: true },
      { s: "Laut Video kennt die Personalverantwortliche die Bewerbenden meist persönlich.", a: false, x: "Sie kennt einen meist nicht; sie weiss nur, was in den Dokumenten steht." },
      { s: "Wer die drei Tipps beachtet, hebt sich laut Video bereits von den meisten Mitbewerbern ab.", a: true }
    ],
    offen: [
      { q: "Erkläre, warum man sich beim Schreiben in die Personalverantwortliche versetzen soll. Was folgt daraus für deine Bewerbung?", l: "Sie hat wenig Zeit (unter 60 Sekunden), viele Bewerbungen, kennt dich nicht. Daher: Wichtiges auf einen Blick, kurz, klar strukturiert, gutes Foto, fehlerfrei." },
      { q: "Schreibe einen Satz mit Floskel und verbessere ihn so, dass er persönlich und konkret ist.", l: "Z. B. Floskel: «Ich bin teamfähig und motiviert.» Besser: «In meiner Schnupperlehre bei der Garage Müller habe ich mit zwei Lernenden zusammen Räder gewechselt und gemerkt, wie gern ich im Team arbeite.»" },
      { q: "Das Video endet mit Werbung für ein Angebot. Wie beurteilst du die Quelle? Sind die Tipps trotzdem brauchbar?", l: "Kommerzielles Interesse (Bewerbungsservice, Likes); die Tipps decken sich aber mit Empfehlungen von Berufsberatung und Schule, also brauchbar; kritisch bleiben, kostenlose Hilfe (Lehrperson, BIZ) nutzen." }
    ] }
},
"fabe": {
  2: { vor: "Was braucht ein Kleinkind während eines ganzen Tages? Nenne fünf Dinge.",
    wort: [["betreuen","sich um jemanden kümmern"],["die Gruppe","mehrere Kinder, die zusammen betreut werden"],["planbar","man kann es im Voraus organisieren"],["spontan","ohne Plan, aus dem Moment heraus"],["ansprechen","über etwas reden, es zum Thema machen"]],
    mc: [
      { q: "Welche Eigenschaften nennt Flurin für den Beruf?", o: ["Einfühlsamkeit, Geduld, Belastbarkeit, Teamfähigkeit","Kraft und Schnelligkeit","Gutes Rechnen","Lautes Singen"], a: 0 },
      { q: "Was soll man tun, wenn es im Team ein Problem gibt?", o: ["Es sofort ansprechen","Schweigen","Kündigen","Den Kindern erzählen"], a: 0 },
      { q: "Was gehört laut Flurin zum Kita-Alltag?", o: ["Nur geplante Aktivitäten","Planbare Dinge und spontane Aktivitäten","Nur Schlafen","Nur Hausaufgaben"], a: 1 }
    ],
    rf: [
      { s: "Flurin fühlt sich in seinem Team wohl.", a: true },
      { s: "Bei schlechtem Wetter bleiben die Kinder immer draussen.", a: false, x: "Wenn sie nass sind, gehen sie wieder hinein." },
      { s: "Auch der Kontakt zu den Eltern gehört zum Beruf.", a: true }
    ],
    offen: [
      { q: "Was ist eine hektische Situation in einer Kita? Beschreibe ein Beispiel und wie man ruhig bleibt.", l: "Z. B. mehrere Kinder weinen gleichzeitig, ein Kind fällt hin, Eltern kommen zum Abholen. Ruhig bleiben: tief durchatmen, Prioritäten setzen, Team um Hilfe bitten." },
      { q: "Warum ist Teamfähigkeit in einer Kita besonders wichtig?", l: "Man betreut Kinder gemeinsam, muss sich absprechen (wer macht was), Infos über Kinder weitergeben, Probleme ansprechen, sich gegenseitig entlasten." }
    ] },
  3: { vor: "Warum sind die ersten Lebensjahre für ein Kind so wichtig? Was kann eine gute Betreuung bewirken?",
    wort: [["die Entwicklung","wie ein Kind wächst und lernt"],["die Bezugsperson","Person, der ein Kind vertraut"],["die Eingewöhnung","Zeit, in der ein Kind sich an die Kita gewöhnt"],["die Verantwortung","Pflicht, für jemanden zu sorgen"],["die Psychiatrie","Bereich der Medizin für psychische Krankheiten"],["die Flexibilität","Fähigkeit, sich schnell anzupassen"]],
    mc: [
      { q: "Warum passt die Aussage «Es gibt keinen eigentlichen Alltag» zur Arbeit mit Kindern?", o: ["Weil Kinder immer schlafen","Weil Kinder, Wetter und Situationen sich ständig ändern und man flexibel reagieren muss","Weil die Kita jeden Tag schliesst","Weil es keine Regeln gibt"], a: 1 },
      { q: "Wo befindet sich die Kita, in der Flurin arbeitet?", o: ["Im Psychiatriezentrum Münsingen","In einem Einkaufszentrum","In einem Spital in Zürich","In einer Schule"], a: 0 },
      { q: "Welche Eigenschaft hilft am meisten, wenn ein Kind beim Abschied von den Eltern weint?", o: ["Einfühlsamkeit","Schnelligkeit","Strenge","Kraft"], a: 0 }
    ],
    rf: [
      { s: "Belastbarkeit bedeutet, dass man auch Stress und viel Arbeit gut aushält.", a: true },
      { s: "Für Flurin waren die Beziehungen zu Kindern und Eltern ein Grund für die Wahl des Ausbildungsorts.", a: true },
      { s: "Laut Flurin ist es am besten, Konflikte im Team für sich zu behalten.", a: false, x: "Er sagt, man soll Probleme sofort ansprechen." }
    ],
    offen: [
      { q: "Plane einen Vormittag in der Kita für eine Gruppe von 3- bis 4-jährigen Kindern. Was machst du bei Regen? Begründe deine Planung.", l: "Z. B. Begrüssung, Znüni, Spaziergang oder Spielplatz, Basteln oder Singkreis, Mittagessen; bei Regen Plan B drinnen (Bewegungsspiele, Bilderbuch). Begründung: Bewegung, Rhythmus, Flexibilität." },
      { q: "Das Video ist nur zwei Minuten lang. Welche Informationen über den Beruf fehlen dir? Formuliere drei Fragen, die du Flurin stellen würdest.", l: "Z. B.: Wie lange dauert die Lehre? Welche Arbeitszeiten hast du? Was war die schwierigste Situation? Wie viele Kinder betreust du? Welche Weiterbildungen gibt es?" },
      { q: "Viele denken, FaBe sei ein «Frauenberuf». Flurin ist ein Mann. Nimm Stellung: Warum braucht es auch Männer in Kitas?", l: "Individuelle Stellungnahme, z. B.: Kinder brauchen verschiedene Vorbilder, Vielfalt im Team, Berufe sollen allen offenstehen; Gegenargumente aufnehmen und widerlegen." }
    ] }
},
"vorstellungsgespraech": {
  2: { vor: "Was ziehst du zu einem Vorstellungsgespräch an? Warum?",
    wort: [["sich informieren","Wissen über etwas sammeln"],["die Körpersprache","was man mit Haltung und Gesicht zeigt"],["die Stärke","etwas, das man gut kann"],["die Schwäche","etwas, das man weniger gut kann"],["sich verabschieden","am Schluss «auf Wiedersehen» sagen"]],
    mc: [
      { q: "Was solltest du vor dem Gespräch über den Betrieb wissen?", o: ["Was der Betrieb macht und welche Lehrstelle angeboten wird","Die Telefonnummern aller Mitarbeitenden","Nichts","Wie viel der Chef verdient"], a: 0 },
      { q: "Wie zeigst du mit Körpersprache Interesse?", o: ["Arme verschränken und zum Fenster schauen","Aufrecht sitzen, Blickkontakt, zuhören","Auf das Handy schauen","Gähnen"], a: 1 },
      { q: "Was ist eine gute Frage an den Betrieb?", o: ["«Wann habe ich Ferien?» als erste Frage","«Wie sieht ein typischer Arbeitstag für Lernende aus?»","«Muss ich wirklich arbeiten?»","Gar keine Frage"], a: 1 }
    ],
    rf: [
      { s: "Pünktlich sein bedeutet, lieber ein paar Minuten zu früh da zu sein.", a: true },
      { s: "Man sollte im Gespräch möglichst nur mit Ja oder Nein antworten.", a: false, x: "Ganze Sätze und Beispiele zeigen Interesse und Persönlichkeit." },
      { s: "Am Schluss bedankt man sich für das Gespräch.", a: true }
    ],
    offen: [
      { q: "Beantworte die Frage «Was sind deine Stärken?» mit einer Stärke und einem Beispiel.", l: "Individuelle Antwort mit Beispiel, z. B.: «Ich bin zuverlässig. Ich trainiere jede Woche die Junioren in meinem Verein und bin immer pünktlich.»" },
      { q: "Erstelle eine Checkliste mit vier Punkten für den Tag des Gesprächs.", l: "Z. B.: Weg und Zeit planen, passende Kleidung, Bewerbungsunterlagen und Fragen mitnehmen, Handy aus, freundlich grüssen." }
    ] },
  3: { vor: "Was ist im Vorstellungsgespräch wichtiger: was du sagst oder wie du es sagst?",
    wort: [["die Selbstpräsentation","sich selbst vorstellen"],["überzeugend","so, dass andere es glauben"],["die Nervosität","Aufregung vor etwas Wichtigem"],["reflektiert","gut überlegt, über sich nachgedacht"],["die Gegenfrage","Frage, die man zurückstellt"],["nachfassen","später noch einmal nachfragen"]],
    mc: [
      { q: "Wie antwortest du gut auf «Was ist deine Schwäche?»", o: ["«Ich habe keine Schwächen.»","Eine echte Schwäche nennen und sagen, wie man daran arbeitet","«Ich bin faul.» ohne Erklärung","Die Frage ignorieren"], a: 1 },
      { q: "Warum ist es wichtig, sich über den Betrieb zu informieren?", o: ["Man kann zeigen, dass man sich wirklich für genau diesen Betrieb interessiert, und gezielt Fragen stellen","Damit man nicht hingehen muss","Damit man den Lohn verhandeln kann","Es ist nicht wichtig"], a: 0 },
      { q: "Was tust du, wenn du eine Frage nicht verstanden hast?", o: ["Irgendetwas antworten","Höflich nachfragen","Schweigen","Das Gespräch beenden"], a: 1 }
    ],
    rf: [
      { s: "Nervosität ist normal; gute Vorbereitung hilft dagegen.", a: true },
      { s: "Eigene Fragen am Schluss zeigen Interesse am Betrieb.", a: true },
      { s: "Über frühere Lehrpersonen oder Schnupperbetriebe schlecht zu reden, macht einen guten Eindruck.", a: false, x: "Negative Aussagen über andere wirken unprofessionell." }
    ],
    offen: [
      { q: "Schreibe eine kurze Selbstpräsentation (4–5 Sätze), die du zu Beginn eines Vorstellungsgesprächs sagen könntest.", l: "Name, Schule und Klasse, Hobbys oder Engagement, Erfahrungen (Schnupperlehre), warum dieser Beruf und dieser Betrieb." },
      { q: "Spielt zu zweit ein Vorstellungsgespräch. Notiere danach: Was hat gut geklappt, was würdest du verbessern?", l: "Individuelle Reflexion mit konkreten Punkten, z. B. Blickkontakt, ganze Sätze, Beispiele, Fragen am Schluss." },
      { q: "Nach dem Gespräch hörst du zwei Wochen nichts. Was machst du? Begründe.", l: "Höflich telefonisch oder per E-Mail nachfragen, Interesse bekräftigen; parallel weitere Bewerbungen schreiben." }
    ] }
},
"fussballinternat": {
  2: { vor: "Welche Opfer würdest du für deinen grössten Traum bringen?",
    wort: [["das Talent","besondere Begabung"],["die Aufsicht","Kontrolle durch Erwachsene"],["die Regel","Vorschrift, was man darf und nicht darf"],["der Druck","Gefühl, dass man etwas leisten muss"],["der Profi","Person, die mit Sport Geld verdient"]],
    mc: [
      { q: "Was müssen die Jugendlichen nach der Schule zuerst tun?", o: ["Sofort trainieren","Hausaufgaben und Lernen unter Aufsicht","Videospiele spielen","In die Stadt gehen"], a: 1 },
      { q: "Was passiert mit Spielern, die nicht gut genug sind?", o: ["Sie bekommen mehr Geld","Sie müssen das Internat verlassen","Sie werden Trainer","Nichts"], a: 1 },
      { q: "Wie viel Geld bekommen die Jugendlichen ungefähr pro Monat?", o: ["50 Euro","400 bis 500 Euro","5000 Euro","Gar nichts"], a: 1 }
    ],
    rf: [
      { s: "Die Spieler gehen an normale öffentliche Schulen in München.", a: true },
      { s: "Am Wochenende können die Spieler immer ausschlafen.", a: false, x: "Am Wochenende sind oft Spiele." },
      { s: "Mit GPS-Sendern wird gemessen, wie weit und schnell die Spieler laufen.", a: true }
    ],
    offen: [
      { q: "Beschreibe einen Tag im Internat vom Aufstehen bis zur Bettruhe.", l: "Aufstehen um 6 Uhr, Schule an öffentlichen Schulen, ab 15 Uhr zwei Stunden Lernen unter Aufsicht, Training, Essen, Aufenthaltsraum, Bettruhe mit Handyregeln." },
      { q: "Welche Regeln gibt es im Internat? Nenne drei.", l: "Bettruhe, kein Handy nach der Bettruhe, kein Alkohol (Tests), keine Übernachtung von Freundinnen, Fernsehen nur im Aufenthaltsraum, gute Schulleistungen." }
    ] },
  3: { vor: "Ist es richtig, dass Vereine 14-Jährige so stark kontrollieren und auswählen?",
    wort: [["die Leistungsdaten","Zahlen, die zeigen, wie gut jemand ist"],["selektieren","auswählen und aussortieren"],["der Plan B","Alternative, wenn der erste Plan nicht klappt"],["die Verletzung","körperlicher Schaden, z. B. ein Bänderriss"],["der Verzicht","wenn man auf etwas freiwillig verzichtet"],["die Fürsorge","Sorge für das Wohl anderer"]],
    mc: [
      { q: "Warum verlangt der FC Bayern gute Schulleistungen?", o: ["Weil die Spieler sonst nicht trainieren dürfen","Weil nur sehr wenige Profi werden und man einen Plan B braucht","Weil der Verein Lehrer sucht","Weil es Geld bringt"], a: 1 },
      { q: "Welcher Schulabschluss wird angestrebt?", o: ["Kein Abschluss","Möglichst das Abitur","Nur die Primarschule","Ein Fussballdiplom"], a: 1 },
      { q: "Warum spielen viele mit Angst?", o: ["Weil der Ball zu hart ist","Weil eine Verletzung oder schlechte Bewertungen den Traum beenden können","Weil die Trainer schreien","Weil das Stadion gross ist"], a: 1 }
    ],
    rf: [
      { s: "Im Internat werden die Jugendlichen in Schule, Training und Freizeit stark überwacht.", a: true },
      { s: "Laut Video werden fast alle Internatsspieler später Profis.", a: false, x: "Nur sehr wenige schaffen es wirklich." },
      { s: "Sogar Alkoholtests gehören zu den Regeln.", a: true }
    ],
    offen: [
      { q: "Wäge ab: Vorteile und Nachteile eines Lebens im Fussball-Internat. Nenne je drei.", l: "Vorteile: Top-Training, Förderung, Schule organisiert, Struktur, Taschengeld, Chance auf Profikarriere. Nachteile: wenig Freizeit, weit weg von Familie und Freunden, Druck, strenge Kontrolle, Risiko, aussortiert zu werden." },
      { q: "Ein Freund sagt: «Schule ist egal, ich werde sowieso Profi.» Antworte ihm mit Argumenten aus dem Video.", l: "Nur wenige werden Profi; Verletzungen können Karriere beenden; selbst der FC Bayern verlangt Abitur; Plan B nötig; auch eine Lehre ist wertvoll." },
      { q: "Wie würdest du als Verantwortliche/r das Internat gestalten, damit die Jugendlichen weniger Druck spüren? Mache drei Vorschläge.", l: "Z. B. psychologische Betreuung, mehr Kontakt zur Familie, Hilfe beim Plan B, Freizeitangebote, faire und transparente Bewertungen." }
    ] }
},
"froesche": {
  2: { vor: "Welche Amphibien kennst du? Wo hast du schon welche gesehen?",
    wort: [["die Wanderung","Weg, den Tiere jedes Jahr zurücklegen"],["das Feuchtgebiet","nasses Gebiet, z. B. Sumpf oder Moor"],["die Kaulquappe","Larve eines Froschs, lebt im Wasser"],["bedroht","in Gefahr auszusterben"],["der Lebensraum","Ort, an dem ein Tier lebt"]],
    mc: [
      { q: "Warum überqueren Kröten im Frühling Strassen?", o: ["Weil sie Futter suchen","Weil sie zu ihrem Laichgewässer wandern","Weil sie Autos mögen","Weil es warm ist"], a: 1 },
      { q: "Was entsteht aus den Eiern im Wasser zuerst?", o: ["Kaulquappen","Fische","Vögel","Schnecken"], a: 0 },
      { q: "Was ist ein Krötenzaun?", o: ["Zaun, der Kröten vor Autos schützt","Zaun um einen Garten","Zaun für Kühe","Ein Spielgerät"], a: 0 }
    ],
    rf: [
      { s: "Amphibien brauchen Wasser für ihre Eier.", a: true },
      { s: "Wenn Tümpel verschwinden, finden Amphibien weniger Lebensraum.", a: true },
      { s: "Amphibien gehören zu den am wenigsten bedrohten Tieren.", a: false, x: "Sie gehören zu den am stärksten bedrohten Tieren." }
    ],
    offen: [
      { q: "Zeichne oder beschreibe den Lebenszyklus eines Froschs in vier Schritten.", l: "Laich (Eier) im Wasser – Kaulquappe – Kaulquappe mit Beinen – junger Frosch an Land – erwachsener Frosch." },
      { q: "Warum sind Strassen für Amphibien gefährlich, und wie kann man helfen?", l: "Sie werden auf der Wanderung überfahren; Hilfe: Krötenzäune, Tunnel unter Strassen, Strassen nachts sperren, Kröten über die Strasse tragen." }
    ] },
  3: { vor: "Wenn Frösche verschwinden: Was ändert sich für andere Tiere und für uns Menschen?",
    wort: [["das Ökosystem","Zusammenspiel von Lebewesen und Umwelt"],["die Nahrungskette","wer frisst wen"],["das Pestizid","Gift gegen Schädlinge in der Landwirtschaft"],["die Pilzkrankheit","Krankheit, die durch einen Pilz entsteht"],["der Bioindikator","Lebewesen, das zeigt, ob die Umwelt gesund ist"],["entwässern","Wasser aus einem Gebiet ableiten"]],
    mc: [
      { q: "Warum nennt man Amphibien oft «Bioindikatoren»?", o: ["Weil sie grün sind","Weil sie mit ihrer dünnen Haut empfindlich auf Gifte und Veränderungen reagieren und zeigen, ob die Umwelt gesund ist","Weil sie laut quaken","Weil sie in Laboren leben"], a: 1 },
      { q: "Welche Rolle spielen Frösche in der Nahrungskette?", o: ["Gar keine","Sie fressen Insekten und sind selbst Nahrung für Vögel, Schlangen und andere","Sie fressen nur Pflanzen","Sie fressen grosse Säugetiere"], a: 1 },
      { q: "Warum sind entwässerte Feuchtgebiete ein Problem?", o: ["Weil es dann weniger Laichgewässer gibt","Weil es dann mehr Frösche gibt","Weil Pflanzen besser wachsen","Es ist kein Problem"], a: 0 }
    ],
    rf: [
      { s: "Weil Amphibien im Wasser und an Land leben, sind sie von Veränderungen in beiden Lebensräumen betroffen.", a: true },
      { s: "Pestizide aus der Landwirtschaft können Amphibien schaden.", a: true },
      { s: "Ein kleiner Gartenteich nützt Amphibien nichts.", a: false, x: "Auch kleine Teiche ohne Fische können wertvolle Laichgewässer sein." }
    ],
    offen: [
      { q: "Erkläre, welche Folgen das Verschwinden der Amphibien für ein Ökosystem haben kann (mindestens zwei Folgen).", l: "Mehr Insekten (z. B. Mücken), weniger Nahrung für Vögel, Schlangen, Igel; Gleichgewicht der Nahrungskette gestört." },
      { q: "Gefahren für Amphibien: Ordne sie danach, wie stark der Mensch sie beeinflussen kann. Begründe.", l: "Bitte mit dem Video abgleichen. Z. B. Strassenverkehr und Entwässerung (direkt beeinflussbar), Pestizide (Landwirtschaft, Politik), Pilzkrankheiten (schwer zu bekämpfen, teils durch Menschen verbreitet), Klimawandel (global)." },
      { q: "Deine Gemeinde will einen Tümpel zuschütten, um Parkplätze zu bauen. Schreibe einen kurzen Brief an den Gemeinderat mit drei Argumenten dagegen.", l: "Briefform; Argumente: Lebensraum bedrohter Arten, Bioindikator, Nahrungskette, Naturerlebnis für Schulen, Alternativen für Parkplätze." }
    ] }
},
"ww2verlauf": {
  2: { vor: "Welche Länder kämpften im Zweiten Weltkrieg gegeneinander? Notiere, was du schon weisst.",
    wort: [["die Achsenmächte","Deutschland, Italien und Japan"],["die Alliierten","die Länder, die gegen die Achsenmächte kämpften"],["die Diktatur","Staat, in dem eine Person oder Gruppe alles bestimmt"],["die Aufrüstung","Herstellen von vielen Waffen, Vorbereitung auf Krieg"],["das Bündnis","Vertrag, in dem Länder sich gegenseitig helfen"]],
    mc: [
      { q: "Wie viele Menschen starben laut Video im Zweiten Weltkrieg?", o: ["Etwa 6 Millionen","Mehr als 60 Millionen","Etwa 600 000","Etwa 1 Milliarde"], a: 1 },
      { q: "Welche Länder gehörten zu den Achsenmächten?", o: ["USA, Grossbritannien, Frankreich","Deutschland, Italien, Japan","Schweiz, Schweden, Spanien","Russland, China, Indien"], a: 1 },
      { q: "Wer war der Diktator in Italien?", o: ["Josef Stalin","Benito Mussolini","Winston Churchill","Kaiser Wilhelm"], a: 1 },
      { q: "Warum spricht man von einem «Weltkrieg», obwohl nicht in jedem Land gekämpft wurde?", o: ["Weil sehr viele Länder beteiligt waren – mit Kämpfen auf ihrem Gebiet oder mit Soldaten an der Front","Weil alle Länder der Welt bombardiert wurden","Weil er sieben Jahre dauerte","Weil er in der Schule so heisst"], a: 0 }
    ],
    rf: [
      { s: "Der Zweite Weltkrieg dauerte von 1939 bis 1945.", a: true },
      { s: "In den USA wurde fast gar nicht gekämpft, trotzdem starben mehr als 300 000 US-Soldaten.", a: true },
      { s: "Grossbritannien war zur Zeit des Krieges eine Diktatur.", a: false, x: "Grossbritannien war eine parlamentarische Monarchie mit gewähltem Parlament." }
    ],
    offen: [
      { q: "Ordne die Länder den zwei Lagern zu: Deutschland, USA, Japan, Frankreich, Italien, Grossbritannien, Sowjetunion (später).", l: "Achsenmächte: Deutschland, Italien, Japan. Alliierte: Grossbritannien, Frankreich, USA, später die Sowjetunion." },
      { q: "Was war Hitlers grosser Plan, und wie bereitete er den Krieg vor?", l: "Weltherrschaft und Macht für Deutschland; er baute ein grosses Heer auf, viele Soldaten wurden eingezogen, Tausende Waffen und Panzer hergestellt (Aufrüstung), zuerst geheim, ab 1933–1939 immer offener." }
    ] },
  3: { vor: "Krieg der Systeme: Warum stand die Diktatur Sowjetunion am Ende auf der Seite der Demokratien?",
    wort: [["der Isolationismus","Politik, bei der sich ein Land aus fremden Konflikten heraushält"],["die Sanktion","Strafmassnahme, z. B. Handelsverbot"],["der Kommunismus","Ideologie ohne Privateigentum, in der Sowjetunion mit Diktatur verbunden"],["der Faschismus","nationalistische, diktatorische Ideologie, z. B. unter Mussolini"],["die Fehleinschätzung","falsche Beurteilung einer Lage"],["die Achse Berlin–Rom–Tokio","Bündnis der drei Achsenmächte"]],
    mc: [
      { q: "Warum kämpften laut Video auch indische Soldaten für Deutschland?", o: ["Weil Indien zu Deutschland gehörte","Weil viele Inder wütend auf die Briten waren, die grosse Teile ihres Landes besetzt hatten","Weil sie dafür viel Geld bekamen","Weil Indien eine Diktatur war"], a: 1 },
      { q: "Warum gab es einen Konflikt zwischen Japan und den USA?", o: ["Wegen eines Fussballspiels","Japan kontrollierte grosse Teile Chinas, die USA wollten dort auch Einfluss und verhängten Sanktionen","Wegen der Atombombe","Die USA wollten Japan besetzen"], a: 1 },
      { q: "Was bedeutete das Motto der Achsenmächte «Meine Feinde sind auch deine Feinde»?", o: ["Sie handelten nicht miteinander","Wenn einer Krieg mit einem Land hatte, hatte auch der andere Krieg mit diesem Land","Sie kämpften gegeneinander","Sie blieben neutral"], a: 1 },
      { q: "Welche Haltung hatte Grossbritannien zuerst gegenüber Deutschland?", o: ["Es griff sofort an","«Lass die Deutschen machen, solange es uns nicht betrifft» – eine grobe Fehleinschätzung","Es verbündete sich mit Hitler","Es zog sich aus Europa zurück"], a: 1 }
    ],
    rf: [
      { s: "Mussolini war schon vor Hitler an der Macht und hielt anfangs nicht viel von ihm.", a: true },
      { s: "In Japan hatte der Kaiser die ganze Macht; das Militär hatte nichts zu sagen.", a: false, x: "Umgekehrt: Der Kaiser hatte wenig zu sagen, das Militär regierte mit strenger Hand." },
      { s: "Die USA unterstützten Grossbritannien und Frankreich schon vor ihrem Kriegseintritt finanziell.", a: true },
      { s: "Hitler und Stalin schlossen Ende der 1930er-Jahre einen Vertrag, sich nicht anzugreifen.", a: true }
    ],
    offen: [
      { q: "Vergleiche die Ziele von Deutschland, Italien und Japan. Was hatten sie gemeinsam?", l: "Deutschland: Weltherrschaft, Macht; Italien: ein neues Römisches Imperium; Japan: neuer Einflussbereich, v. a. in China. Gemeinsam: Ausdehnung, Diktatur bzw. Militärherrschaft, gegenseitige Bündnistreue." },
      { q: "Erkläre den Ausdruck «Krieg der Systeme» und warum er nur teilweise stimmt.", l: "Diktaturen (Achsenmächte) gegen Demokratien (Grossbritannien, Frankreich, USA); stimmt nur teilweise, weil die Sowjetunion unter Stalin auch eine brutale Diktatur war, zuerst eher zu den Achsenmächten tendierte und dann zu den Alliierten wechselte." },
      { q: "Der YouTuber sagt, Filme wie «Letters from Iwo Jima» zeigen, dass Krieg nicht schwarz-weiss ist. Was meint er? Bist du einverstanden?", l: "Auf beiden Seiten kämpften Menschen gegen Menschen, nicht nur «Gute» gegen «Böse»; Stellungnahme: Leid auf beiden Seiten, aber Verantwortung für Kriegsbeginn und Verbrechen klar benennen." }
    ] }
},
"schweizww2": {
  2: { vor: "Warum wurde die Schweiz wohl im Zweiten Weltkrieg nicht angegriffen? Notiere eine Vermutung.",
    wort: [["neutral","in einem Krieg auf keiner Seite"],["der Handelspartner","Land, mit dem man Waren austauscht"],["der Transit","Durchfahrt von Waren durch ein Land"],["das Raubgold","gestohlenes Gold"],["das Réduit","Verteidigungsstellung in den Alpen"]],
    mc: [
      { q: "Warum reicht «Wir waren neutral» als Antwort nicht aus?", o: ["Weil die Schweiz nicht neutral war","Weil andere neutrale Länder wie Dänemark trotzdem eingenommen wurden","Weil Neutralität verboten war","Weil es damals keine Grenzen gab"], a: 1 },
      { q: "Welches Land war der wichtigste Handelspartner der Schweiz?", o: ["Frankreich","Deutschland","USA","Italien"], a: 1 },
      { q: "Welcher Alpenübergang verband Deutschland und Italien?", o: ["Der Gotthard","Der Säntis","Der Uetliberg","Der Rigi"], a: 0 },
      { q: "Wie viele deutsche Militärflugzeuge schoss die Schweizer Luftwaffe insgesamt ab?", o: ["Keines","Elf","Hundert","Tausend"], a: 1 }
    ],
    rf: [
      { s: "Nach dem Sieg über Frankreich war die Schweiz fast vollständig von den Achsenmächten umgeben.", a: true },
      { s: "Die Schweizerische Nationalbank kaufte Gold von der deutschen Reichsbank.", a: true },
      { s: "Im Zweiten Weltkrieg fielen nie Bomben auf Schweizer Gebiet.", a: false, x: "Am 1. April 1944 bombardierten amerikanische Flugzeuge irrtümlich Schaffhausen; 1940–1945 starben 84 Menschen durch Bomben." }
    ],
    offen: [
      { q: "Nenne vier Gründe aus dem Video, warum die Schweiz verschont blieb.", l: "Wirtschaftliche Verflechtung mit Deutschland; freier Transit durch die Alpen (Gotthard); geografische Lage, strategisch unwichtig, Deutschland im Mehrfrontenkrieg; Goldgeschäfte der Nationalbank; (kleiner Faktor: Abschreckung durch die Armee)." },
      { q: "Was geschah am 1. April 1944 in Schaffhausen?", l: "Amerikanische Bomber warfen irrtümlich Brand- und Sprengbomben ab; 37 Tote, rund 100 Verletzte, 300 Obdachlose, grosse Schäden in der Stadt." }
    ] },
  3: { vor: "Darf ein neutrales Land Geschäfte mit einer Diktatur machen, um selbst zu überleben?",
    wort: [["die Verflechtung","enge Verbindung"],["die Unabhängige Expertenkommission","Gruppe von Fachleuten, die 2002 einen Bericht zur Schweiz im Zweiten Weltkrieg veröffentlichte"],["die Abschreckung","etwas soll den Gegner davon abhalten anzugreifen"],["die Luftraumverletzung","fremde Flugzeuge fliegen unerlaubt über ein Land"],["die Vergeltung","Rache, Gegenschlag"],["irrtümlich","aus Versehen"]],
    mc: [
      { q: "Was hält der Schlussbericht von 2002 zu den Schweizer Exporten und Krediten fest?", o: ["Sie haben den Krieg deutlich verlängert","Sie haben den Krieg nicht zugunsten Deutschlands verlängert, weil der Krieg dafür viel zu riesig war","Es gab keine Exporte","Sie haben Deutschland zum Verlieren gebracht"], a: 1 },
      { q: "Was war die Idee der Réduit-Strategie?", o: ["Sich zu ergeben","Teile der Armee in die Alpenfestung zurückziehen, bis zum Ende Widerstand leisten und den Nord-Süd-Transit sperren – ein Angriff sollte sich nicht lohnen","Deutschland anzugreifen","Die Bevölkerung zu evakuieren"], a: 1 },
      { q: "Wie reagierte General Guisan auf die Drohungen Görings und Hitlers nach den Luftkämpfen 1940?", o: ["Er befahl mehr Angriffe","Er erliess ein generelles Startverbot für die Kampfflieger; Eindringlinge sollte die Fliegerabwehr bekämpfen","Er trat zurück","Er flog selbst nach Berlin"], a: 1 },
      { q: "Wie viele Soldaten hatte Deutschland bei Kriegsbeginn ungefähr?", o: ["450 000","4,5 Millionen – mehr als die Schweiz Einwohner hatte","45 Millionen","100 000"], a: 1 }
    ],
    rf: [
      { s: "Die Direktoren der Nationalbank wussten nach heutigen Erkenntnissen, dass sie Raubgold kauften.", a: true },
      { s: "Heute gilt die Abschreckung durch die Armee als der wichtigste Grund, warum die Schweiz verschont blieb.", a: false, x: "Heute gilt sie, wenn überhaupt, als kleiner Faktor; wirtschaftliche Gründe waren viel wichtiger." },
      { s: "Die Armee sollte sich laut Plan nicht nur in den Alpen verstecken; Grenzbrigaden und Truppen im Mittelland sollten den Angreifer verlangsamen.", a: true },
      { s: "Die Bombenabwürfe auf die Schweiz waren laut Video geplante Angriffe der Alliierten.", a: false, x: "Nach Aufarbeitung aller Fälle gilt als unumstritten, dass es Irrtümer waren (z. B. Sturm, Radar)." }
    ],
    offen: [
      { q: "Der Sprecher sagt, die Goldgeschäfte seien «blutbefleckt». Erkläre diese Bewertung.", l: "Die Nationalbank kaufte für über 1,2 Milliarden Franken Gold, wissend, dass es geraubt war (u. a. aus besetzten Ländern und von Verfolgten); damit half sie Deutschland, an Devisen zu kommen, und profitierte von Verbrechen." },
      { q: "Wie wird die Réduit-Strategie heute laut Video oft falsch dargestellt, und was entgegnet der Sprecher?", l: "Falsch: Die Armee habe sich versteckt und die Bevölkerung dem Feind überlassen. Sprecher: Ziel war, das Leben «so teuer wie möglich zu verkaufen»; Grenzbrigaden und über 100 000 Mann im Mittelland hätten verzögert; Abschreckung durch hohe Kosten für den Angreifer." },
      { q: "Beurteile: War das Verhalten der Schweiz im Zweiten Weltkrieg richtig? Nenne ein Argument dafür, ein Argument dagegen und dein Fazit.", l: "Dafür: kleines Land, umzingelt, Überleben und Versorgung der Bevölkerung, keine echte Alternative. Dagegen: Raubgold, Waffenlieferungen, Transit für die Achsenmächte. Eigenes, begründetes Fazit." }
    ] }
}
});
/* Block e */
Object.assign(window.STUFEN, {
"fr-eiffel": {
  2: { vor: "Warum baut man ein Bauwerk, das eigentlich keinen praktischen Nutzen hat?",
    wort: [["l'Exposition universelle","die Weltausstellung"],["l'ingénieur","der Ingenieur"],["le fer","das Eisen"],["détruire","zerstören, abreissen"],["utile","nützlich"],["l'antenne","die Antenne"]],
    mc: [
      { q: "In welchem Jahr wurde der Eiffelturm für die Weltausstellung fertig?", o: ["1789","1889","1989","1919"], a: 1 },
      { q: "Was bedeutet «asperge de métal»?", o: ["Metall-Spargel","Eisenbahn","Turm aus Gold","Metallbrücke"], a: 0, x: "So nannten Kritiker den Turm am Anfang." },
      { q: "Was ist «la météo» auf Deutsch?", o: ["Das Wetter","Der Meteor","Die Metro","Das Metall"], a: 0 },
      { q: "Wie heisst «nützlich» auf Französisch?", o: ["utile","inutile","usé","unique"], a: 0 }
    ],
    rf: [
      { s: "Gustave Eiffel war ein Ingenieur.", a: true },
      { s: "Der Turm sollte ursprünglich nur einige Jahre stehen bleiben.", a: true },
      { s: "Der Eiffelturm ist 124 Meter hoch.", a: false, x: "Er ist heute 324 Meter hoch." }
    ],
    offen: [
      { q: "Warum wurde der Turm nicht abgerissen? Nenne zwei Gründe.", l: "Er war nützlich für die Wissenschaft: Wetterstation, Experimente, später Antennen für Radio und Fernsehen." },
      { q: "Ergänze auf Französisch: «La tour Eiffel est à …» / «Elle est très …»", l: "La tour Eiffel est à Paris. Elle est très haute / grande / célèbre." }
    ] },
  3: { vor: "Heute ist der Eiffelturm ein Symbol. Früher wollten ihn viele weg. Kennst du andere Bauwerke, die zuerst kritisiert wurden?",
    wort: [["critiquer","kritisieren"],["laid / laide","hässlich"],["le symbole","das Wahrzeichen, das Symbol"],["les ondes","die (Radio-)Wellen"],["célèbre","berühmt"],["le monument","das Denkmal, das Bauwerk"]],
    mc: [
      { q: "Was zeigt die Geschichte des Eiffelturms?", o: ["Dass Kritik immer recht hat","Dass ein umstrittenes Bauwerk später zum Symbol eines Landes werden kann","Dass Eisen nicht hält","Dass Paris keine Touristen will"], a: 1 },
      { q: "Welcher Satz ist auf Französisch korrekt?", o: ["La tour Eiffel est très haut.","La tour Eiffel est très haute.","Le tour Eiffel est très hautes.","La tour Eiffel sont haute."], a: 1, x: "«la tour» ist weiblich, also «haute»." },
      { q: "Wofür nutzt man den Turm heute auch?", o: ["Als Gefängnis","Für Antennen (Radio, Fernsehen) und als Aussichtspunkt für Touristen","Als Bahnhof","Als Schule"], a: 1 }
    ],
    rf: [
      { s: "Viele Pariser fanden den Turm am Anfang hässlich («laid»).", a: true },
      { s: "Gustave Eiffel zeigte, dass der Turm für die Wissenschaft nützlich ist.", a: true },
      { s: "«Construire» bedeutet «zerstören».", a: false, x: "«construire» = bauen; «détruire» = zerstören." }
    ],
    offen: [
      { q: "Écris deux phrases en français sur la tour Eiffel (Schreibe zwei Sätze auf Französisch).", l: "Zum Beispiel: La tour Eiffel est à Paris. Elle mesure 324 mètres. Gustave Eiffel l'a construite pour l'Exposition universelle de 1889. Beaucoup de touristes la visitent." },
      { q: "Stell dir vor, du bist 1889 in Paris. Bist du für oder gegen den Turm? Begründe auf Deutsch und schreibe einen Satz auf Französisch: «Je trouve la tour … parce que …»", l: "Individuelle Antwort, z. B.: Je trouve la tour belle parce qu'elle est moderne. / Je trouve la tour laide parce qu'elle est en fer." }
    ] }
},
"fr-champs": {
  2: { vor: "Warum wollen teure Marken unbedingt an einer berühmten Strasse einen Laden haben?",
    wort: [["le loyer","die Miete"],["la marque","die Marke"],["le défilé militaire","die Militärparade"],["la Coupe du monde","die Weltmeisterschaft"],["large","breit"],["le paradis","das Paradies"]],
    mc: [
      { q: "Wie breit ist die Avenue des Champs-Élysées?", o: ["7 Meter","70 Meter","700 Meter","17 Meter"], a: 1 },
      { q: "Warum wollen grosse Marken dort sein, obwohl es teuer ist?", o: ["Wegen des Prestiges und der vielen Kundschaft","Weil es dort billig ist","Weil sie müssen","Weil es keine anderen Strassen gibt"], a: 0 },
      { q: "Woher kommt der Name «Champs-Élysées»?", o: ["Von einem König","Aus der griechischen Mythologie: die Elysischen Felder, eine Art Paradies","Von einem Bauern","Von einer Blume"], a: 1 },
      { q: "Was ist «le loyer» auf Deutsch?", o: ["Die Miete","Der Laden","Der Lohn","Das Gesetz"], a: 0 }
    ],
    rf: [
      { s: "Am Ende der Avenue steht der Arc de Triomphe auf der Place Charles-de-Gaulle (Étoile).", a: true },
      { s: "Auf der Place de la Concorde steht ein Obelisk.", a: true },
      { s: "Die Läden müssen am Abend früh schliessen.", a: false, x: "Sie dürfen am Sonntag und bis spät am Abend offen haben." }
    ],
    offen: [
      { q: "Nenne drei Ereignisse, die auf den Champs-Élysées stattfinden.", l: "Militärparade am 14. Juli, Feiern wie der WM-Sieg 1998, Fahrt des neuen Präsidenten im Cabriolet." },
      { q: "Was gibt es auf der Avenue? Antworte mit französischen Wörtern.", l: "des boutiques (de luxe), des magasins, des cinémas, des restaurants." }
    ] },
  3: { vor: "Ist eine Strasse wie die Champs-Élysées für die Menschen in Paris oder für die Touristen gemacht?",
    wort: [["prestigieux / prestigieuse","angesehen, mit hohem Ansehen"],["la clientèle","die Kundschaft"],["le président","der Präsident"],["la décapotable","das Cabriolet"],["saluer","grüssen"],["la tradition","die Tradition"]],
    mc: [
      { q: "Warum fährt ein neuer Präsident die Avenue hinunter?", o: ["Weil er einkaufen will","Es ist Tradition: Er grüsst die Französinnen und Franzosen – das soll Glück bringen für seine Amtszeit","Weil es der kürzeste Weg ist","Für ein Autorennen"], a: 1 },
      { q: "Warum eignet sich die Avenue für grosse Feiern?", o: ["Weil sie sehr breit ist (70 m)","Weil sie kurz ist","Weil sie unterirdisch ist","Weil sie Bäume hat"], a: 0 },
      { q: "Was bedeutet «Les loyers sont parmi les plus chers du monde»?", o: ["Die Läden sind die schönsten der Welt","Die Mieten gehören zu den teuersten der Welt","Die Leute sind die reichsten der Welt","Die Strasse ist die längste der Welt"], a: 1 }
    ],
    rf: [
      { s: "Über 300 000 Menschen gehen jeden Tag auf der Avenue spazieren und einkaufen.", a: true },
      { s: "Der Name bedeutet auf Deutsch «Elysische Felder».", a: true },
      { s: "Die Militärparade findet am 1. August statt.", a: false, x: "Am 14. Juli, dem französischen Nationalfeiertag (der 1. August ist der Schweizer Nationalfeiertag)." }
    ],
    offen: [
      { q: "Décris les Champs-Élysées en deux ou trois phrases (auf Französisch).", l: "Zum Beispiel: Les Champs-Élysées sont une grande avenue à Paris. Il y a des boutiques, des cinémas et des restaurants. Le 14 juillet, il y a un défilé militaire." },
      { q: "Vergleiche die Champs-Élysées mit der Bahnhofstrasse in Zürich. Nenne zwei Gemeinsamkeiten und einen Unterschied.", l: "Gemeinsam: Luxusläden, sehr teure Mieten, viele Touristen. Unterschied: Champs-Élysées 70 m breit mit Autoverkehr und Paraden, Bahnhofstrasse mit Tram, Feiern/Paraden des Staates nur in Paris." }
    ] }
},
"fr-transports": {
  2: { vor: "Welche Billette und Abos braucht man in der Schweiz für Bus und Zug?",
    wort: [["la carte Navigo","die Pariser Abokarte"],["recharger","aufladen"],["valider","entwerten, einlesen"],["l'abonnement mensuel","das Monatsabo"],["l'embouteillage","der Stau"],["s'asseoir","sich setzen"]],
    mc: [
      { q: "Was macht Hélène am Automaten?", o: ["Sie kauft Essen","Sie lädt ihre Carte Navigo auf und bezahlt mit Karte","Sie wechselt Geld","Sie ruft an"], a: 1 },
      { q: "Warum dauert die Busfahrt länger?", o: ["Weil der Bus kaputt ist","Wegen Staus («embouteillages»)","Weil es regnet","Weil der Fahrer Pause macht"], a: 1 },
      { q: "Was muss man tun, wenn man nach der Métro den Bus nimmt?", o: ["Nichts","Ein neues Ticket benutzen oder die Karte nochmals entwerten","Den Fahrer fragen","Zu Fuss gehen"], a: 1 },
      { q: "Was bedeutet «monter dans le métro»?", o: ["In die Métro einsteigen","Aus der Métro aussteigen","Die Métro verpassen","Die Métro putzen"], a: 0 }
    ],
    rf: [
      { s: "Hélène kann in der Métro sitzen, weil nicht viele Leute da sind.", a: true },
      { s: "Im Tram setzt sich Hélène nicht, weil sie bei der nächsten Haltestelle aussteigt.", a: true },
      { s: "Für Vélib' muss man immer bar bezahlen.", a: false, x: "Man kann ein Abo haben oder mit dem Handy oder der Bankkarte bezahlen." }
    ],
    offen: [
      { q: "Wie entsperrt Judith das Velo?", l: "Mit der Vélib'-App auf dem Handy." },
      { q: "Ordne zu: le bus – kurze Strecken; le tram – ?; le métro – ?", l: "Le tram: rund um Paris am Stadtrand; le métro: das meistbenutzte Verkehrsmittel in Paris." }
    ] },
  3: { vor: "Paris oder Zürich: Wo ist der öffentliche Verkehr besser organisiert? Was denkst du?",
    wort: [["le trajet","die Fahrt, die Strecke"],["à l'unité","einzeln"],["la banlieue","die Vororte"],["se tenir à la barre","sich an der Stange festhalten"],["déverrouiller","entsperren"],["le moyen de transport","das Verkehrsmittel"]],
    mc: [
      { q: "Was bedeutet «recharger cette carte avec des trajets à l'unité»?", o: ["Die Karte mit Einzelfahrten aufladen","Die Karte wegwerfen","Ein Jahresabo kaufen","Die Karte verlieren"], a: 0 },
      { q: "Warum hält sich Hélène im Tram an der Stange fest?", o: ["Um nicht hinzufallen","Weil sie müde ist","Weil sie Sport macht","Weil es verboten ist, frei zu stehen"], a: 0 },
      { q: "Was ist der Unterschied zwischen Tram und Métro in Paris laut Video?", o: ["Das Tram fährt nur nachts","Das Tram fährt rund um Paris am Rand der Vororte, nicht ins Zentrum","Es gibt keinen","Das Tram ist gratis"], a: 1 },
      { q: "Welche Form ist korrekt: «Hélène … dans cinq stations.»", o: ["descend","descends","descendons","descendent"], a: 0 }
    ],
    rf: [
      { s: "Ein Ticket kostet im Video 2,10 Euro.", a: true },
      { s: "An allen Tramhaltestellen gibt es Automaten für Tickets.", a: true },
      { s: "Mit dem Tram kommt man bequem ins Zentrum von Paris.", a: false, x: "On ne peut pas aller au centre de Paris en tram." }
    ],
    offen: [
      { q: "Décris ton trajet pour aller à l'école en français (2–3 phrases).", l: "Zum Beispiel: Je prends le bus à 7 h 20. Je descends à la gare. Puis je vais à pied à l'école." },
      { q: "Erkläre einer Touristin auf Deutsch, wie sie in Paris mit Métro und dann Bus fährt. Achte auf die Regel mit dem Ticket.", l: "Carte Navigo aufladen oder Ticket kaufen, entwerten, Métro nehmen; beim Umsteigen auf den Bus ein neues Ticket benutzen bzw. Karte nochmals entwerten." },
      { q: "Écris en français: Quels moyens de transport utilises-tu? (mindestens zwei)", l: "Zum Beispiel: Je prends le train et le bus. Le week-end, je prends le vélo." }
    ] }
},
"fr-quartier": {
  2: { vor: "Welche Geschäfte braucht ein Quartier unbedingt?",
    wort: [["la viennoiserie","Gebäck wie Gipfeli und Schoggibrötli"],["le bureau de tabac","Tabakladen, Kiosk"],["les produits d'entretien","Putzmittel"],["la laverie","der Waschsalon"],["l'ordonnance","das Rezept vom Arzt"],["manger sur le pouce","schnell etwas essen"]],
    mc: [
      { q: "Was gibt es in einer Boulangerie ausser Brot?", o: ["Medikamente","Viennoiseries, Kuchen und salzige Gerichte wie Sandwiches und Quiches","Kleider","Zeitungen"], a: 1 },
      { q: "Was kann man in einem «bureau de tabac» kaufen?", o: ["Zigaretten, Rubbellose, Bonbons und Kaugummi","Brot","Medikamente","Velos"], a: 0 },
      { q: "Wann ist ein Café-Brasserie offen?", o: ["Nur am Abend","Schon sehr früh am Morgen bis zum Abendessen","Nur am Sonntag","Nur mittags"], a: 1 },
      { q: "Was bedeutet «sans ordonnance»?", o: ["Ohne Rezept","Ohne Geld","Ohne Ordnung","Ohne Termin"], a: 0 }
    ],
    rf: [
      { s: "Die Métrostation im Video heisst «Filles du Calvaire» (Linie 8).", a: true },
      { s: "In Kleiderboutiquen findet man Einzelstücke von kleinen Designern.", a: true },
      { s: "Kosmetik kauft man nur im Supermarkt.", a: false, x: "Auch in der Apotheke; eine grössere Auswahl gibt es in der Parapharmacie." }
    ],
    offen: [
      { q: "Warum geht man in eine Laverie, obwohl die meisten Wohnungen eine Waschmaschine haben?", l: "Wenn man viel Wäsche hat oder in einem Studio ohne Waschmaschine wohnt." },
      { q: "Wo kauft man was? Ergänze auf Französisch: Les médicaments → ?, le pain → ?, les produits d'entretien → ?", l: "à la pharmacie; à la boulangerie; au supermarché." }
    ] },
  3: { vor: "Was sagt es über ein Land aus, welche Geschäfte es an jeder Ecke gibt?",
    wort: [["le commerce","das Geschäft"],["déguster","geniessen, kosten"],["les jeux à gratter","die Rubbellose"],["la pièce unique","das Einzelstück"],["le créateur","der Designer"],["la parapharmacie","Laden mit Gesundheits- und Kosmetikprodukten ohne Medikamente"]],
    mc: [
      { q: "Was bedeutet «On en trouve à tous les coins de rue»?", o: ["Man findet sie an jeder Strassenecke","Man findet sie nie","Sie sind an der Ecke geschlossen","Sie sind rund"], a: 0 },
      { q: "Warum sind Kebabs in Frankreich beliebt laut Video?", o: ["Weil sie teuer sind","Weil man draussen günstig essen kann, auch vegetarisch mit Falafel","Weil sie nur am Morgen offen sind","Weil es keine Restaurants gibt"], a: 1 },
      { q: "Wann sind Supermärkte in Paris meistens offen?", o: ["Nie am Sonntag","Jeden Tag, manchmal sehr spät, und am Sonntagmorgen","Nur am Wochenende","Nur am Vormittag"], a: 1 },
      { q: "Was kann man im Café-Brasserie am Abend machen?", o: ["Den Apéro nehmen und sogar zu Abend essen","Wäsche waschen","Medikamente kaufen","Velos mieten"], a: 0 }
    ],
    rf: [
      { s: "In manchen Bäckereien kann man sich hinsetzen und ein Gebäck mit einem heissen Getränk geniessen.", a: true },
      { s: "In einem Bureau de tabac kann man oft auch etwas trinken.", a: true },
      { s: "In Paris gibt es pro Quartier höchstens eine Apotheke.", a: false, x: "Es gibt sie in allen Quartieren, manchmal mehrere in einer Strasse." }
    ],
    offen: [
      { q: "Décris ton quartier en français: Qu'est-ce qu'il y a? (3 Sätze)", l: "Zum Beispiel: Dans mon quartier, il y a une boulangerie et un supermarché. Il y a aussi une pharmacie. Il n'y a pas de laverie." },
      { q: "Vergleiche ein Pariser Quartier mit deinem Quartier in Wetzikon: Was gibt es dort, was hier nicht (oder umgekehrt)?", l: "Individuell, z. B.: In Paris Boulangerie an jeder Ecke, Tabac, Laverie, Café-Brasserie; hier eher Grossverteiler, Kiosk, weniger Waschsalons; Läden am Sonntag meist zu." },
      { q: "Écris un petit dialogue à la boulangerie (3–4 répliques).", l: "Zum Beispiel: – Bonjour! – Bonjour, je voudrais une baguette et un croissant, s'il vous plaît. – Ça fait 2,50 euros. – Voilà. Merci, au revoir!" }
    ] }
},
"fr-croissants": {
  2: { vor: "Ist teuer immer besser? Woran erkennst du Qualität beim Essen?",
    wort: [["le classement","die Rangliste"],["doré","goldbraun"],["le feuilletage","die Blätterteigschichten"],["fondant","zart, schmelzend"],["dense","dicht, kompakt"],["le prix","der Preis / die Auszeichnung"]],
    mc: [
      { q: "Wie viel kostete das Croissant in der ersten Bäckerei?", o: ["1,35 €","1,40 €","1,50 €","2,10 €"], a: 2 },
      { q: "Wie finden die zwei das erste Croissant?", o: ["Trocken und klein","Sehr buttrig, oben knusprig, innen zart, sehr schön geformt","Zu süss","Verbrannt"], a: 1 },
      { q: "Wie ist das zweite Croissant im Vergleich?", o: ["Schöner und kleiner","Weniger perfekt, etwas weniger buttrig, aber knuspriger, grösser und typisch pariserisch","Gleich wie das erste","Nicht essbar"], a: 1 },
      { q: "Was ist «croustillant»?", o: ["knusprig","weich","salzig","kalt"], a: 0 }
    ],
    rf: [
      { s: "Die erste Bäckerei wurde von einem Bäcker koreanischer Herkunft gegründet.", a: true },
      { s: "Die zwei laufen durch den Jardin du Luxembourg.", a: true },
      { s: "Alle drei Croissants kosteten sehr unterschiedlich viel.", a: false, x: "Alle kosteten ungefähr gleich viel (1,35–1,50 €)." }
    ],
    offen: [
      { q: "Warum gehen sie am Schluss in eine andere Bäckerei?", l: "Die Siegerbäckerei (Maison Doucet) hat vor einigen Monaten geschlossen bzw. den Besitzer gewechselt; man empfahl ihnen die Bäckerei «Terroir d'Avenir» daneben." },
      { q: "Schreibe drei französische Adjektive, mit denen man ein Croissant beschreibt, und übersetze sie.", l: "croustillant (knusprig), beurré (buttrig), doré (goldbraun), fondant (zart), dense (dicht), beau (schön)." }
    ] },
  3: { vor: "Wie testet man ein Produkt fair? Was braucht es für einen guten Vergleich?",
    wort: [["gourmand / gourmande","jemand, der gern gut isst"],["aérien","luftig"],["alvéolé","mit vielen Luftlöchern"],["la mésaventure","das Missgeschick"],["l'arrondissement","der Stadtbezirk von Paris"],["avoir l'air","aussehen"]],
    mc: [
      { q: "Warum ist der Preis von 1,50 € laut Hélène «acceptable»?", o: ["Weil das Croissant riesig ist","Weil die Bäckerei in einem besonders touristischen und teuren Arrondissement liegt","Weil es gratis Kaffee gibt","Weil es das billigste ist"], a: 1 },
      { q: "Was erkennen sie dank der «mésaventure» am Schluss?", o: ["Dass Ranglisten nichts bedeuten","Dass es einen echten Unterschied gibt zwischen preisgekrönten und gewöhnlichen Croissants","Dass Croissants in Paris schlecht sind","Dass Busfahren anstrengend ist"], a: 1 },
      { q: "Wie beschreiben sie das letzte Croissant?", o: ["Luftig und gross","Kleiner, dichter, kompakter, fast wie Brioche; Blätterteig weniger aufgegangen","Perfekt","Zu buttrig"], a: 1 },
      { q: "Was bedeutet «Ils ont l'air vraiment très bons»?", o: ["Sie riechen nach Luft","Sie sehen wirklich sehr gut aus","Sie sind sehr leicht","Sie sind schon gegessen"], a: 1 }
    ],
    rf: [
      { s: "Die zweite Bäckerei wurde durch die Serie «Emily in Paris» bekannt.", a: true },
      { s: "Die erste Bäckerei gewann 2023 den Preis für den besten Flan der Île-de-France.", a: true },
      { s: "Die beiden sagen, sie seien Croissant-Expertinnen.", a: false, x: "«Nous ne sommes pas expertes, mais nous sommes des gourmandes confirmées.»" },
      { s: "Zur dritten Bäckerei fahren sie mit dem Bus 86 ins 12. Arrondissement.", a: true }
    ],
    offen: [
      { q: "Erstelle eine Tabelle mit den drei Croissants: Preis, Aussehen, Geschmack, Platz in deiner Rangliste.", l: "1. Boulangerie (rue Saint-Placide, 10. Platz): 1,50 €, perfekt geformt, sehr buttrig, knusprig/zart. 2. Boulangerie Moderne (5e, 7. Platz): 1,40 €, unregelmässig, knuspriger, grösser, dichter. 3. Terroir d'Avenir: ca. 1,35 €, kleiner, kompakt, fast brioche. Eigene Rangliste begründen." },
      { q: "Donne ton avis en français: Quel croissant préfères-tu et pourquoi? (2 phrases)", l: "Zum Beispiel: Je préfère le deuxième croissant parce qu'il est très croustillant. Il est aussi plus gros." },
      { q: "Das Video enthält auch Werbung für den eigenen Podcast. Wo genau, und wie beeinflusst das die Glaubwürdigkeit des Tests?", l: "Nach der ersten Bäckerei (Podcast, Mitgliedschaft). Die Werbung betrifft den Kanal selbst, nicht die Bäckereien – die Bewertungen wirken ehrlich («en toute sincérité»), trotzdem subjektiv (nur zwei Personen)." }
    ] }
},
"ws-lausanne": {
  2: { vor: "Was macht eine Stadt für junge Leute attraktiv?",
    wort: [["la capitale olympique","die olympische Hauptstadt"],["historique","historisch"],["la vie nocturne","das Nachtleben"],["multiculturel","multikulturell"],["ça monte, ça descend","es geht hinauf und hinunter"],["la fête","das Fest, die Party"]],
    mc: [
      { q: "Was gibt es laut der ersten Frau am See?", o: ["Ein olympisches Museum","Einen Flughafen","Ein Stadion","Eine Universität"], a: 0 },
      { q: "Warum gibt es in Lausanne viele junge Leute?", o: ["Weil es eine Studentenstadt ist, auch mit einem Universitätsspital","Weil es billig ist","Weil es dort keine Schule gibt","Weil viele Familien wegziehen"], a: 0 },
      { q: "Was sagt ein Mann über Velofahrer in Lausanne?", o: ["Es gibt keine","Sie sind «Bergchampions», weil es überall steil ist","Sie fahren nur am See","Sie sind langsam"], a: 1 },
      { q: "Was bedeutet «Ça bouge bien»?", o: ["Es ist viel los","Es ist ruhig","Es ist teuer","Es ist kalt"], a: 0 }
    ],
    rf: [
      { s: "Ein Tourist war überrascht, weil Lausanne viel lebendiger ist als sein Bild der Schweiz.", a: true },
      { s: "Im Sommer gibt es am See viele kleine Veranstaltungen.", a: true },
      { s: "Alle Befragten lieben elektronische Musik in den Bars.", a: false, x: "Eine Person sagt, wer Elektro nicht mag, findet das Ausgehen eher mittelmässig." }
    ],
    offen: [
      { q: "Nenne drei Dinge, die die Leute an Lausanne mögen.", l: "Den See, die historische Altstadt, Parks, Bars und Discos, junges Publikum, Festivals, multikulturell, kleine Stadt mit allem in der Nähe." },
      { q: "Was ist der einzige Kritikpunkt, der genannt wird?", l: "Die Bars sind teuer (und wer kein Elektro mag, findet weniger Angebot)." }
    ] },
  3: { vor: "Würdest du in einer Stadt der Westschweiz leben wollen? Was würde dich reizen, was abschrecken?",
    wort: [["dispersé","verstreut"],["étudiant / étudiantine","studentisch"],["s'éclater","sich toll amüsieren"],["proche de chez nous","in der Nähe von zu Hause"],["agréablement surpris","angenehm überrascht"],["plat","flach"]],
    mc: [
      { q: "Warum mag ein junger Mann kleinere Städte wie Lausanne?", o: ["Weil sie billig sind","Weil man alle wichtigen Orte in der Nähe von zu Hause hat","Weil es keine Autos gibt","Weil es ruhig ist"], a: 1 },
      { q: "Warum ist der Park, in dem sie stehen, besonders?", o: ["Weil er sehr gross ist","Weil er mehr oder weniger flach ist – das ist in Lausanne selten","Weil er am Bahnhof liegt","Weil er neu ist"], a: 1 },
      { q: "Welche Gründe nennen Leute, warum sie in Lausanne wohnen?", o: ["Sie haben eine Wohnung gefunden / die Freundin war aus Lausanne","Sie mussten wegen der Armee","Sie gewannen eine Reise","Sie arbeiten im Museum"], a: 0 },
      { q: "Was heisst «C'est très rare de voir des parcs comme ici»?", o: ["Es ist sehr selten, hier Parks wie diesen zu sehen","Hier gibt es sehr viele Parks","Parks sind hier verboten","Der Park ist sehr alt"], a: 0 }
    ],
    rf: [
      { s: "Die Olympischen Einrichtungen sind über die ganze Stadt verteilt.", a: true },
      { s: "Viele Festivals finden in der Region, aber nicht unbedingt in Lausanne selbst statt.", a: true },
      { s: "Das Kind badet nicht gern im See.", a: false, x: "Es spielt und badet am See; der See ist das, was es am meisten mag." }
    ],
    offen: [
      { q: "Réponds en français: Qu'est-ce que tu aimes dans ta ville? (2 phrases)", l: "Zum Beispiel: J'aime le lac de Pfäffikon. Il y a aussi des parcs et des magasins. / J'aime ma ville parce qu'elle est calme." },
      { q: "Erstelle für Lausanne eine kurze Tourismus-Werbung (3 Sätze auf Deutsch) mit Informationen aus dem Video.", l: "Z. B.: Lausanne – olympische Hauptstadt am Genfersee! Historische Altstadt, Museen, Parks und Festivals. Junge, multikulturelle Stadt mit lebendigem Nachtleben – aber bring gute Beine mit, es ist steil!" },
      { q: "Écris une question en français pour une personne de Lausanne.", l: "Zum Beispiel: Qu'est-ce que vous aimez à Lausanne? / Est-ce que vous vous baignez dans le lac? / Où est-ce qu'on peut sortir le soir?" }
    ] }
},
"ws-jetdeau": {
  2: { vor: "Wie funktioniert wohl eine 140 Meter hohe Wasserfontäne?",
    wort: [["la bise","kalter Nordwind"],["la centrale hydraulique","das Wasserkraftwerk"],["la soupape","das Ventil"],["la pression","der Druck"],["le diamètre","der Durchmesser"],["la pompe","die Pumpe"]],
    mc: [
      { q: "Wie ist der Jet d'eau entstanden?", o: ["Als Kunstwerk geplant","Durch Zufall: Abends wurde überschüssiger Druck aus einem Wasserkraftwerk durch ein Ventil abgelassen","Als Feuerwehrübung","Als Geschenk eines Königs"], a: 1 },
      { q: "Wie viel Wasser fliegt pro Sekunde in die Luft?", o: ["5 Liter","50 Liter","500 Liter","5000 Liter"], a: 2 },
      { q: "Wie schnell schiesst das Wasser aus der Düse?", o: ["20 km/h","200 km/h","2000 km/h","50 km/h"], a: 1 },
      { q: "Wer kümmert sich um den Jet d'eau?", o: ["Die SIG (Services Industriels de Genève)","Die UNO","Die SBB","Ein Hotel"], a: 0 }
    ],
    rf: [
      { s: "Seit 1891 steht der Jet d'eau auf der anderen Seite der Mont-Blanc-Brücke in der Rade.", a: true },
      { s: "Am Abend wird der Jet d'eau manchmal farbig beleuchtet.", a: true },
      { s: "Der Wasserstrahl ist ein voller Strahl von 1 Meter Durchmesser.", a: false, x: "Es ist ein hohler Strahl mit 16 Zentimetern Durchmesser." }
    ],
    offen: [
      { q: "Warum beobachten die Betreuer jeden Tag den Wind?", l: "Bei Gefahr (starker Wind) wird der Jet d'eau abgestellt, damit niemand gefährdet wird und das Wasser nicht zu weit getragen wird." },
      { q: "Wie viel Wasser hält der Jet d'eau gleichzeitig in der Luft?", l: "Etwa 7 Tonnen Wasser." }
    ] },
  3: { vor: "Warum wird ein Ding wie eine Wasserfontäne zum Symbol einer ganzen Stadt?",
    wort: [["le hasard","der Zufall"],["l'horloger","der Uhrmacher"],["la buse","die Düse"],["l'emblème","das Wahrzeichen"],["la carte postale","die Postkarte"],["la campagne humanitaire","die humanitäre Kampagne"]],
    mc: [
      { q: "Warum wird der Jet d'eau manchmal farbig beleuchtet?", o: ["Für Werbung von Firmen","Zur Unterstützung von humanitären Kampagnen oder wichtigen Anliegen","Damit Schiffe ihn sehen","Für Geburtstage"], a: 1 },
      { q: "Wie hoch war der Jet d'eau ganz am Anfang?", o: ["30 Meter","90 Meter","140 Meter","10 Meter"], a: 0 },
      { q: "Wodurch erreicht er heute 140 Meter?", o: ["Durch Wind","Durch Pumpen und Motoren direkt unter seinem Fundament","Durch den Druck des Sees","Durch das Wasserkraftwerk der Stadt"], a: 1 },
      { q: "Welche Winde werden genannt?", o: ["Föhn und Mistral","Bise, Séchard und Joran","Sirocco und Bora","Keine"], a: 1 }
    ],
    rf: [
      { s: "Der Jet d'eau spricht im Video in der Ich-Form.", a: true },
      { s: "Er entstand zur Zeit der Industrialisierung, als Handwerker und Uhrmacher Maschinen mit Wasserkraft betrieben.", a: true },
      { s: "Es dauerte nach 1891 noch etwa 60 Jahre bis zur heutigen Höhe.", a: true },
      { s: "Der Jet d'eau steht für eine Stadt, die sich nicht um die Umwelt kümmert.", a: false, x: "Er soll das Bild einer Stadt zeigen, die sich um ihre Umwelt kümmert, kreativ und zukunftsorientiert ist." }
    ],
    offen: [
      { q: "Das Video lässt den Jet d'eau selbst erzählen (Personifikation). Warum wählt die SIG diese Form? Was bewirkt sie?", l: "Emotional, sympathisch, einprägsam; Zuschauer fühlen sich angesprochen («du»); Image der Firma SIG und der Stadt wird positiv; technische Fakten werden unterhaltsam." },
      { q: "Présente le Jet d'eau en français (3 phrases): où, combien de mètres, pourquoi célèbre.", l: "Zum Beispiel: Le Jet d'eau est à Genève, sur le lac Léman. Il mesure 140 mètres. C'est le symbole de la ville et beaucoup de touristes viennent le voir." },
      { q: "Erkläre in eigenen Worten die drei Phasen der Geschichte des Jet d'eau.", l: "1. Zufällig im Wasserkraftwerk als Überdruckventil (30 m). 2. 1891 Umzug in die Rade bei der Mont-Blanc-Brücke. 3. Rund 60 Jahre später eigene Pumpen und Motoren: 140 m." }
    ] }
},
"ws-montreux": {
  2: { vor: "Warum ziehen berühmte Musiker in eine kleine Stadt am See?",
    wort: [["l'incendie","der Brand"],["la fumée","der Rauch"],["le climat doux","das milde Klima"],["la grande roue","das Riesenrad"],["la randonnée","die Wanderung"],["le pont-levis","die Zugbrücke"]],
    mc: [
      { q: "Was bedeutet «Smoke on the Water» auf Französisch?", o: ["Fumée sur l'eau","Feu sur la montagne","Musique sur le lac","Bateau sur l'eau"], a: 0 },
      { q: "Was brannte damals in Montreux?", o: ["Das Schloss","Das Casino","Ein Hotel","Ein Schiff"], a: 1 },
      { q: "Warum kamen früher Besucher nach Montreux?", o: ["Wegen der Fabriken","Wegen der Aussicht auf See und Berge und des besonders milden Klimas","Wegen des Flughafens","Wegen der Skipisten"], a: 1 },
      { q: "Welche Musikstile gab es ursprünglich am Montreux Jazz Festival?", o: ["Nur Rock","Nur Jazz und Blues – später kamen andere Stile dazu","Nur Klassik","Nur Rap"], a: 1 }
    ],
    rf: [
      { s: "Freddie Mercury lebte vor seinem Tod zuletzt in Montreux.", a: true },
      { s: "Am Quai Ernest-Ansermet wachsen Palmen.", a: true },
      { s: "Die Altstadt liegt direkt am Seeufer.", a: false, x: "Sie liegt in der Höhe, etwa zehn Minuten zu Fuss vom Seeufer." }
    ],
    offen: [
      { q: "Was gibt es in der Altstadt zu sehen?", l: "Kopfsteinpflaster, Winzerhäuser, kleine Gassen, tolle Aussicht (v. a. bei der Kirche Saint-Vincent), Start von Wanderungen wie zu den Gorges du Chauderon." },
      { q: "Wie heissen auf Französisch: der Brand, das Riesenrad, das Schloss?", l: "l'incendie, la grande roue, le château." }
    ] },
  3: { vor: "Ein Schloss im Wasser, ein Rocksong und ein Weihnachtsmarkt: Was macht einen Ort berühmt?",
    wort: [["le comte de Savoie","der Graf von Savoyen"],["le rocher","der Fels"],["le fossé","der Graben"],["les vignobles en terrasse","die Rebterrassen"],["l'école hôtelière","die Hotelfachschule"],["féerique","märchenhaft"]],
    mc: [
      { q: "Was bedeutet der Name «Chillon»?", o: ["Weisses Schloss","Felsplattform","Kleiner See","Hohe Mauer"], a: 1 },
      { q: "Wer wohnte im Schloss Chillon?", o: ["Die mächtigen Grafen von Savoyen","Freddie Mercury","Die Berner Regierung","Mönche"], a: 0 },
      { q: "Was sieht man von der Strasse aus in der Ferne?", o: ["Die weltberühmte Hotelfachschule von Glion","Den Jet d'eau","Das Matterhorn","Den Flughafen Genf"], a: 0 },
      { q: "Welche Rebterrassen sieht man vom Spazierweg beim Schloss?", o: ["Die Rebterrassen des Lavaux","Die Reben im Wallis","Die Reben in Neuenburg","Keine"], a: 0 }
    ],
    rf: [
      { s: "Das Schloss Chillon ist das meistbesuchte historische Monument der Schweiz.", a: true },
      { s: "Das Schloss ist durch eine Brücke mit dem Land verbunden, die früher eine Zugbrücke war.", a: true },
      { s: "In der Altstadt gibt es mehr Touristen als am See.", a: false, x: "Die Altstadt ist weniger bekannt, es hat weniger Touristen." },
      { s: "Im Winter steht auf dem Marktplatz ein Riesenrad.", a: true }
    ],
    offen: [
      { q: "Plane einen Tag in Montreux: Was besuchst du am Morgen, am Mittag und am Abend? Begründe mit Infos aus dem Video.", l: "Z. B. Morgen: Château de Chillon; Mittag: Quai mit Palmen, Freddie-Mercury-Statue, Baden an der Corniche; Abend: Altstadt mit Aussicht bei Saint-Vincent oder Jazz Festival / Weihnachtsmarkt je nach Saison." },
      { q: "Écris trois phrases en français sur Montreux.", l: "Zum Beispiel: Montreux est au bord du lac Léman. Il y a une statue de Freddie Mercury. En été, il y a le Montreux Jazz Festival. Le château de Chillon est très célèbre." },
      { q: "Warum ist Montreux besonders für Musikfans interessant? Nenne drei Gründe.", l: "«Smoke on the Water» (Deep Purple, Brand im Casino), Freddie Mercury lebte dort (Statue, Führungen), Montreux Jazz Festival, Konzerte im Casino." }
    ] }
},
"ws-cailler": {
  2: { vor: "Was möchtest du in einer Schokoladenfabrik sehen oder erfahren?",
    wort: [["l'atelier","der Workshop"],["la fève de cacao","die Kakaobohne"],["sentir","riechen"],["la boutique","der Laden"],["le jeu d'évasion","das Escape Game"],["le sentier","der Weg, der Pfad"]],
    mc: [
      { q: "Was kann man in einem Atelier machen?", o: ["Schokolade selbst gestalten","Käse herstellen","Velos reparieren","Malen"], a: 0 },
      { q: "Was gibt es am Ende der Führung?", o: ["Einen grossen Laden","Ein Hallenbad","Eine Prüfung","Nichts"], a: 0 },
      { q: "Was bedeutet «sentir les ingrédients»?", o: ["Die Zutaten riechen","Die Zutaten kaufen","Die Zutaten verstecken","Die Zutaten zählen"], a: 0 }
    ],
    rf: [
      { s: "Das Escape Game findet in einem alten Eisenbahnwagen statt.", a: true },
      { s: "Der Rundweg um die Fabrik dauert ungefähr eine Stunde.", a: true },
      { s: "Die Maison Cailler liegt im Kanton Wallis.", a: false, x: "Sie liegt in Broc im Kanton Freiburg." }
    ],
    offen: [
      { q: "Nenne drei Angebote der Maison Cailler auf Französisch und Deutsch.", l: "la visite (Führung), l'atelier (Workshop), le jeu d'évasion / l'escape game (Escape Game), le sentier (Rundweg), la boutique (Laden)." },
      { q: "Welche Sinne braucht man bei der Führung? Nenne zwei Beispiele.", l: "Riechen (Zutaten), Schmecken (Schokolade probieren), Sehen (Ausstellung), Hören." }
    ] },
  3: { vor: "Die Schweiz ist berühmt für Schokolade, obwohl hier kein Kakao wächst. Wie ist das möglich?",
    wort: [["la dégustation","die Degustation"],["le lait","die Milch"],["la Gruyère","Region im Kanton Freiburg"],["fabriquer","herstellen"],["l'emballage","die Verpackung"],["la recette","das Rezept"]],
    mc: [
      { q: "Warum passt eine Schokoladenfabrik gut in die Region Gruyère?", o: ["Weil dort Kakao wächst","Weil es dort viele Kühe und damit Milch für Milchschokolade gibt","Weil es dort einen Hafen gibt","Weil es dort warm ist"], a: 1 },
      { q: "Welche Antwort ist korrekt? «J'aime le chocolat noir» bedeutet:", o: ["Ich mag dunkle Schokolade","Ich mag weisse Schokolade","Ich mag keine Schokolade","Ich mache Schokolade"], a: 0 },
      { q: "Warum ist ein Besuch mit Atelier, Escape Game und Rundweg für eine Firma sinnvoll?", o: ["Er kostet die Firma nichts","Er macht die Marke bekannt, Besucher bleiben länger und kaufen im Laden ein","Er ist gesetzlich vorgeschrieben","Er ersetzt die Produktion"], a: 1 }
    ],
    rf: [
      { s: "Bei der Führung darf man Schokolade probieren.", a: true },
      { s: "Kakaobohnen wachsen in der Region Gruyère.", a: false, x: "Kakao wächst in tropischen Ländern; in die Schweiz wird er importiert." },
      { s: "Man kann den Besuch mit einer Wanderung verbinden.", a: true }
    ],
    offen: [
      { q: "Écris une petite carte postale en français de la Maison Cailler (3–4 phrases).", l: "Zum Beispiel: Salut! Je suis à Broc, à la Maison Cailler. J'ai fait la visite et j'ai mangé beaucoup de chocolat. Après, on a fait l'escape game. C'est super! À bientôt." },
      { q: "Die Maison Cailler ist Ausflugsziel und Werbung zugleich. Erkläre und nenne ein Beispiel aus dem Video.", l: "Besucher erleben die Marke (Führung, Degustation, Atelier) und kaufen am Ende im grossen Laden ein; so wird die Marke positiv und emotional verankert." }
    ] }
},
"ws-differences": {
  2: { vor: "Welche Klischees gibt es über Französinnen und Franzosen? Und über Schweizerinnen und Schweizer?",
    wort: [["la stabilité économique","die wirtschaftliche Stabilität"],["le passage piéton","der Fussgängerstreifen"],["stressant","stressig"],["arrogant","arrogant, überheblich"],["perdu","verloren, ratlos"],["réservé","zurückhaltend"]],
    mc: [
      { q: "Was ist laut einem Mann in der Schweiz besser als in Frankreich?", o: ["Das Wetter","Die wirtschaftliche Stabilität","Das Essen","Der Fussball"], a: 1 },
      { q: "Was findet die Frau aus Paris an der Schweiz gut?", o: ["Ruhigere Stimmung, nette Leute, Autos halten früh beim Fussgängerstreifen, alles zu Fuss erreichbar","Mehr Verkehr","Höhere Häuser","Mehr Lärm"], a: 0 },
      { q: "Was sagt man in manchen Gegenden über Pariser?", o: ["Sie seien schüchtern","Sie seien ein bisschen arrogant","Sie seien langsam","Sie seien sportlich"], a: 1 },
      { q: "Wo wohnt die Frau aus Paris heute?", o: ["In Genf","In Lyon","In Nizza","In Bern"], a: 1 }
    ],
    rf: [
      { s: "Die Befragten sagen, sie verstehen das Französisch aus Frankreich gut.", a: true },
      { s: "Das Lied «Smoke on the Water» entstand am Genfersee beim Montreux Jazz.", a: true },
      { s: "Ein Mann sagt, die Schweizer würden Phil Collins sofort um ein Autogramm bitten.", a: false, x: "Weil Schweizer zurückhaltend sind, würden sie ihn nicht ansprechen, nur denken: «Cool, da ist Phil Collins.»" }
    ],
    offen: [
      { q: "Warum haben Schweizer im Ausland laut einem Mann weniger Mühe als Franzosen?", l: "Weil Schweizer schon mehrere Sprachen sprechen; Franzosen hätten mehr Schwierigkeiten, sich mit anderen Nationalitäten auszudrücken." },
      { q: "Wo dreht der Moderator seine Einleitung und seinen Schluss?", l: "In Nizza, vor dem Palais de la Méditerranée bzw. am Meer." }
    ] },
  3: { vor: "Wann ist eine Aussage über ein ganzes Volk ein Klischee? Wann steckt etwas Wahres darin?",
    wort: [["la généralité","die Verallgemeinerung"],["hautain","hochnäsig"],["à l'aise","wohl, locker"],["s'exprimer","sich ausdrücken"],["rigoler","lachen, Spass machen"],["la nouvelle génération","die neue Generation"]],
    mc: [
      { q: "Was sagt die Frau aus Lyon zu den Klischees über Pariser?", o: ["Sie stimmen immer","Das sind Verallgemeinerungen («ce sont des généralités»)","Sie kennt keine","Sie findet sie lustig und richtig"], a: 1 },
      { q: "Welcher Unterschied wird beim Sprechen vor der Kamera genannt?", o: ["Schweizer sprechen lauter","Manche Franzosen sind lockerer, wenn sie vor der Kamera sprechen","Franzosen sprechen nie","Es gibt keinen"], a: 1 },
      { q: "Warum leben laut einem Mann viele Künstler in der Region?", o: ["Wegen der tiefen Steuern","Auch weil die Schweizer zurückhaltend sind und sie in Ruhe lassen","Weil es dort viele Studios gibt","Weil es warm ist"], a: 1 },
      { q: "Was bedeutet «On vous trouve un peu bizarres des fois, mais on vous comprend»?", o: ["Wir verstehen euch nicht","Wir finden euch manchmal etwas seltsam, aber wir verstehen euch","Ihr seid sehr nett","Wir sprechen kein Französisch"], a: 1 }
    ],
    rf: [
      { s: "Ein Mann ist schon nach Kuba, Vietnam, Tunesien und Marokko gereist.", a: true },
      { s: "Ein Befragter relativiert: Vielleicht gilt das «Verlorensein» nicht für die neue Generation.", a: true },
      { s: "Laut den Befragten gibt es grosse Unterschiede in der Art zu sprechen.", a: false, x: "Eine Person sagt, im Ganzen gebe es nicht viel Unterschied." }
    ],
    offen: [
      { q: "Liste die Klischees aus dem Video auf und beurteile eines davon.", l: "Schweizer: ruhig, zurückhaltend, mehrsprachig, wirtschaftlich stabil. Franzosen/Pariser: arrogant, hochnäsig, im Ausland «verloren», lockerer vor der Kamera. Beurteilung: Verallgemeinerung, Einzelpersonen, Generationen, Regionen unterschiedlich." },
      { q: "Réponds en français: Qu'est-ce qui est mieux en Suisse? (2 phrases, «En Suisse, … est mieux parce que …»)", l: "Zum Beispiel: En Suisse, les transports sont mieux parce qu'ils sont à l'heure. La nature est belle et les villes sont calmes." },
      { q: "Die Leute sagen auch Dinge «pour rigoler» (aus Spass). Woran erkennt man im Video, dass Klischees nicht ganz ernst gemeint sind?", l: "Sie lachen, sagen «c'est pour rigoler», «ce sont des généralités», relativieren («peut-être pas vous», «la nouvelle génération»), die Frau aus Paris wird nicht als arrogant gesehen." }
    ] }
}
});
