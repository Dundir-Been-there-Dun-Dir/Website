---
title: Dundir
description: KI-gestützte Beschaffungsentscheidungen und Baustellensysteme für die Bauwirtschaft, ausgelegt für den lokalen Betrieb und eine prüfbare Dokumentation. In Entwicklung mit Designpartnern.
headline: Bis zu siebzig Prozent Ihres Projekts sind <span class="cut">Beschaffung.</span>
sub: Der Einheitspreis ist optimiert. Das ist selten das größte Problem. Wo ist das Material, wann kommt es an, und ist es zertifiziert? Dundir entwickelt einen mathematischen Beschaffungs-Solver und einen digitalen Zwilling der Baustelle.
stack:
  label: Ein Euro Projektkosten, aufgeteilt
  source: Donyavi et al. 2024, in Hamppi 2025
  alt: 'Aufteilung der Projektkosten: bis zu 70 Prozent Material, der Rest Arbeit und sonstige Kosten.'
  segments:
  - kind: material
    pct: bis zu 70 %
    name: Material · hier rechnet und prüft Dundir
  - kind: rest
    pct: der Rest
    name: Arbeit und Sonstiges
  footLeft: Beschaffung ist keine Backoffice-Funktion
  footRight: Sie ist die Kostenstruktur
sections:
- eyebrow: Die dreifache Krise
  heading: Die Rechnung läuft bereits.
  claims:
  - fig: 31,7 %
    body: der Arbeitszeit von Kalkulatoren gehen für manuelle Datenerfassung statt für Kostenanalyse verloren. Die Kalkulation eines einzigen formalen Angebots dauert im Median 42 Arbeitsstunden.
  - fig: 50 min
    body: Wartezeit am Baustellentor für 70 % der Materiallieferungen. 95 % der Lieferscheine erfüllten in einer Prüfung von 831.206 Datensätzen die Qualitätskriterien nicht. Nach dem niederländischen Wkb (Gesetz zur Qualitätssicherung im Bau) werden Übergabeverzögerungen von 4 bis 6 Wochen gemeldet.
  - fig: <5 %
    body: des Personals erleben ein niederländisches Infrastrukturprojekt von 500 bis 600 Millionen Euro von Anfang bis Ende, schätzt ein Befragter in einer Studie der TU Delft. Beschaffungswissen geht mit jedem Personalwechsel verloren. Bei einem untersuchten Bauunternehmen blieben nach der Bereinigung von mehr als 1.000 historischen Projekten 54 verwertbare übrig.
  source: Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Eerste Kamer 2026 · VNG 2024 · Rockx 2023, TU Delft · Steuer et al. 2023
- tone: chalk
  figure: cycle
  eyebrow: Die Plattform
  heading: Drei Module, die sich ergänzen.
  lede: 'Ein Sprachmodell schreibt eine Antwort. Ein Optimierungsverfahren berechnet eine. Dundir wird entwickelt, um mathematische Beschaffungsoptimierung mit der Prüfung am Tor und einem wachsenden Vertragsgedächtnis zu verbinden.'
  body: 'Der Entwurf umfasst drei verbundene Module, die lokal auf Ihrer eigenen Infrastruktur laufen sollen. Jedes befindet sich in einem eigenen Stadium:


    <strong>1. Deterministische Beschaffungs-Engine (Forschung und Entwurf):</strong> Kombinatorische Optimierung über Einheitspreis, Lieferplan, Transportkilometer und CO₂-Intensität. Deterministisch per Design: Identische Eingaben müssen jedes Mal identische Ergebnisse liefern, ohne die numerische Abweichung generativer KI (bis zu 8.354 Euro Abweichung in der Summe eines Nachunternehmers in Hamppi 2025).


    <strong>2. Digitaler Zwilling der Baustelle und Smart Gate (Laborprototyp):</strong> Das Ziel: OCR am Tor liest bei Ankunft Lieferscheine und Kennzeichen, gleicht Bestellungen, Wareneingänge und Rechnungen ab und baut dabei das Dossier Bevoegd Gezag (Übergabedossier für die Baubehörde) nach dem niederländischen Wkb laufend auf. Heute läuft die erste Edge-Hardware auf dem Labortisch: zwei gekoppelte Boards mit einem kleinen Sprachmodell auf dem Chip, ohne Internetverbindung. Kamera und Datenbrille folgen als Nächstes.


    <strong>3. Prognose und institutionelles Gedächtnis (Entwurf):</strong> Tatsächliche Liefertreue, Mängelquoten und Terminabweichungen sollen in die Bewertungsparameter künftiger Ausschreibungen einfließen, damit operatives Wissen bleibt, wenn Mitarbeitende gehen.


    <strong>Ausgelegt, um Ihre Daten in Ihrem Netzwerk zu halten.</strong> Das System ist für den Betrieb vor Ort ausgelegt, damit eine öffentliche Stelle innerhalb ihrer eigenen Sicherheitsrahmen bleiben kann (etwa der niederländischen BIO). Der Entwurf sieht vor, dass mit Ihren Daten keine Modelle anderer trainiert werden.'
- tone: chalk-2
  eyebrow: Wo wir stehen
  heading: Nicht fertig, und das sagen wir lieber selbst.
  body: 'Dundir ist eine Forschungsinitiative mit einem Unternehmen darum, kein fertiges Standardprodukt mit einer Marketinggeschichte darum. Die Optimierungstheorie ist etabliert; ihre Anwendung auf die niederländische Baubeschaffung und Baustellenlogistik ist neu.


    Die grundlegende Frage bleibt offen: Was bedeutet <em>optimal</em>, wenn Preis, Lieferzeit, Zertifizierung, Torlogistik und CO₂-Fußabdruck gleichzeitig abgewogen werden, und ab welchem Datenvolumen übertrifft dieser Ansatz einen erfahrenen Einkäufer und Bauleiter?


    Deshalb suchen wir Designpartner statt Softwarekäufer. Partner, die in diesem Stadium einsteigen, bestimmen mit, wie das System kalibriert wird und was zuerst gebaut wird.'
  caveat:
    lab: Was die Forschung nicht behauptet
    text: Die wissenschaftliche Literatur belegt das Problem und das lokale Betriebsmodell. Sie beweist nicht, dass unser Solver in der Praxis günstiger einkauft als Ihr erfahrener Kalkulator. Diese Validierung erfordert empirische Pilotdaten, die wir gemeinsam erheben.
- eyebrow: Für wen
  heading: Zwei Auftraggeber, eine Lieferkette.
  claims:
  - fig: 50 bis 500
    body: <strong>Mittelständische Bauunternehmen.</strong> Manuelle Datenerfassung abschaffen und Verzögerungen auf der Baustelle stoppen. Das Ziel ist, die Wkb-Übergabedokumentation und die Zertifikate nach CPR 2024 im Moment der Lieferung zu erfassen.
  - fig: '342'
    body: <strong>Niederländische Gemeinden.</strong> Jede öffentliche Vergabeentscheidung muss nach Aanbestedingswet Artikel 2.130 (niederländisches Vergabegesetz) nachweisbar begründet sein. Dundir ist darauf ausgelegt, bei der Auswahl einen mathematischen Prüfpfad zu liefern und bei der Lieferung die Vertragstreue zu prüfen.
  chipslabel: Regulatorische Treiber, die das erzwingen
  chips:
  - label: Aanbestedingswet art. 2.130
    live: true
  - label: CPR 2024/3110
    live: true
  - label: Wkb-Übergabedossier
    live: true
  - label: EU-KI-Verordnung Dez. 2027
    live: false
  - label: CSRD Scope 3
    live: false
---
