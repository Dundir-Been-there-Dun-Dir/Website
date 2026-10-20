---
title: So funktioniert es
description: Von der Materialspezifikation über die Prüfung am Smart Gate bis zum Wkb-Übergabedossier. Ausgelegt für den lokalen Betrieb, mathematisch fundiert, mit vollständigem Prüfpfad.
slug: so-funktioniert-es
lede: Dundir wird entwickelt, um mathematische Beschaffungsoptimierung mit der physischen Prüfung am Tor und einem wachsenden Vertragsgedächtnis zu verbinden. Die Fachkraft bewertet und entscheidet. Das System soll rechnen, prüfen und archivieren.
sections:
- eyebrow: Der Ablauf
  heading: Der Entwurf in fünf Schritten, von der Spezifikation bis zur Übergabe.
  figure: cycle
  steps:
  - h: Die Spezifikation strukturieren
    p: 'Im Entwurf liest eine KI-Sprachschicht Ihre Spezifikation oder Ihre Ausschreibungsunterlagen in normaler Sprache und extrahiert harte Vorgaben, Lieferpläne, Budgetobergrenzen und Zertifizierungskriterien nach CPR 2024. Dies soll die einzige Stufe sein, in der ein Sprachmodell arbeitet.'
  - h: Der deterministische Solver berechnet das Optimum
    p: 'Das Optimierungsverfahren soll Einheitspreis, Lieferpläne, Transportkilometer und CO₂-Intensität bewerten. Reine Mathematik per Entwurf: Identische Eingaben müssen jedes Mal identische Ergebnisse liefern, mit einer prüffähigen Begründung. Der Solver ist in Forschung und Entwurf.'
  - h: Prüfung am Smart Gate und dreifacher Abgleich
    p: 'Das Ziel: Bei Ankunft am Baustellentor erfasst mobile oder fest installierte Edge-OCR Lieferscheine und Kennzeichen der Lkw, und das System gleicht Bestellung, Wareneingang und Lieferantenrechnung ab. Heute läuft die erste Edge-Hardware auf dem Labortisch, noch ohne Kamera. OCR und Abgleich folgen.'
  - h: Wkb-Übergabedossier in Echtzeit zusammenstellen
    p: 'Prüfprotokolle, Wareneingänge und Qualitätsnachweise sollen automatisch in das gesetzlich vorgeschriebene Dossier Bevoegd Gezag (Übergabedossier für die Baubehörde) nach dem niederländischen Wkb (Gesetz zur Qualitätssicherung im Bau) eingebunden werden, damit bei der Schlussabnahme durch die Gemeinde keine Unterlagen fehlen.'
  - h: Rückfluss in das wachsende Vertragsgedächtnis
    p: 'Tatsächliche Liefertreue der Lieferanten, Mängelhäufigkeit und Abweichungen beim Einheitspreis sollen automatisch protokolliert werden und die Bewertungsparameter für die nächste Ausschreibung neu kalibrieren.'
- tone: chalk
  figure: sovereignty
  eyebrow: Datensouveränität
  heading: Warum es für den Betrieb auf Ihrer eigenen Infrastruktur ausgelegt ist.
  body: 'Baudaten, Kostenschätzungen und Konditionen sind strategisch sensibel. Dundir ist für den vollständigen Betrieb vor Ort ausgelegt, auf Ihren Unternehmensservern oder auf lokaler Edge-Hardware auf der Baustelle:'
  after: 'Der lokale Betrieb ist eine betriebliche Notwendigkeit, keine Vorliebe. Forschung bei Cedervall zeigte, dass Modelle aus der Public Cloud wegen hoher Abokosten, Abhängigkeiten von Drittanbieter-APIs und verpflichtender interner Datentrennung unbrauchbar waren. Niederländische öffentliche Stellen arbeiten innerhalb der BIO (Baseline Informatiebeveiliging Overheid, Grundschutz für die Informationssicherheit der Verwaltung). Ein lokales System passt in diesen Rahmen ohne Cloud-Ausnahme.'
  claims:
  - fig: Souveränität
    body: Ausgelegt, um Ihre Beschaffungsdaten und Ihre Preishistorie in Ihrem internen Netzwerk zu halten. Der Entwurf sieht keinen Datenabfluss zu kommerziellen Cloud-Anbietern und kein Training externer Modelle mit Ihren Daten vor.
    word: true
  - fig: Kontinuität
    body: Ausgelegt für den Betrieb am Baustellentor ohne Internetverbindung, damit Netzausfälle und Preis- oder Richtlinienänderungen von Drittanbietern die Arbeit nicht stoppen.
    word: true
  - fig: Konformität
    body: Ausgelegt, um in den Rahmen der niederländischen BIO und der DSGVO zu passen, ohne Verfahren für eine Cloud-Ausnahme.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Nachvollziehbarkeit
  heading: Jede Berechnung und jede Prüfung am Tor muss überprüfbar sein.
  proof:
    fig: Deterministisch
    label: Identische Eingaben liefern identische Ergebnisse. Generische KI für Unternehmen lieferte bei identischen Eingaben bis zu 8.354 Euro Abweichung in der Summe eines Nachunternehmers.
    src: Hamppi 2025, Aalto University · Atil et al. 2025
  body: 'Welche Vorgaben durchgesetzt wurden, wie Transportweg und Materialeinheitskosten gegeneinander abgewogen wurden und warum ein Lieferant ausgewählt wurde: Das System ist darauf ausgelegt, die genaue Formel und die Gewichtung der Parameter festzuhalten.


    Dieselbe Strenge gilt am Tor: Jeder Scan eines Lieferscheins und jede Entscheidung im dreifachen Abgleich soll mit Zeitstempel, Referenznummern und prozentualer Abweichung protokolliert werden.


    Niederländischen Gemeinden soll das bei der Begründung helfen, die nach Aanbestedingswet Artikel 2.130 (niederländisches Vergabegesetz) erforderlich ist. Bauunternehmen sollen eine dokumentierte Akte erhalten für Streitfälle und Nachträge mit Nachunternehmern.'
- tone: chalk-2
  eyebrow: Grenzen
  heading: Was das System nicht tut.
  body: 'Dundir trifft keine eigenständigen Geschäftsentscheidungen und ersetzt keine Fachleute. Kalkulator, Einkäufer und Bauleiter behalten die volle Kontrolle.


    Die Plattform soll manuelle Datenerfassung und manuellen Abgleich übernehmen, damit sich Fachleute auf Verhandlungen, Qualitätsprüfungen und das strategische Lieferantenmanagement konzentrieren können. Formale Freigabe und rechtliche Verantwortung bleiben bei Ihrer Organisation.


    Das System soll sich an Ihrer eigenen Transaktionshistorie kalibrieren, damit das gesammelte Lieferantenwissen im Unternehmen bleibt, wenn erfahrene Mitarbeitende gehen.'
  caveat:
    lab: Ehrlich zum Stand
    text: Keines der drei Module ist bereits ein Produkt. Der Beschaffungs-Solver ist in Forschung und Entwurf, das Smart Gate ist ein Laborprototyp im Testaufbau, das Vertragsgedächtnis ist ein Entwurf. Partner, die jetzt einsteigen, entscheiden mit, was zuerst gebaut wird.
---
