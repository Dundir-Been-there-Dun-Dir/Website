---
title: So funktioniert es
description: Von der Materialspezifikation über die Prüfung am Smart Gate bis zum Wkb-Übergabedossier. Ausgelegt für den lokalen Betrieb, mathematisch fundiert, mit vollständigem Prüfpfad.
slug: so-funktioniert-es
lede: Dundir wird entwickelt, um mathematische Beschaffungsoptimierung mit der physischen Prüfung am Tor und einem wachsenden Vertragsgedächtnis zu verbinden. Die Fachkraft bewertet und entscheidet. Das System rechnet, prüft und archiviert.
sections:
- eyebrow: Der Ablauf
  heading: Der Entwurf in fünf Schritten, von der Spezifikation bis zur Übergabe.
  steps:
  - h: Die Spezifikation strukturieren
    p: 'Die KI-Sprachschicht liest Ihre Spezifikation oder Ihre Ausschreibungsunterlagen in normaler Sprache. Das System extrahiert harte Vorgaben, Lieferpläne, Budgetobergrenzen und Zertifizierungskriterien nach CPR 2024. Dies ist die einzige Stufe, in der ein Sprachmodell arbeitet.'
  - h: Der deterministische Solver berechnet das Optimum
    p: 'Das Optimierungsverfahren bewertet Einheitspreis, Lieferpläne, Transportkilometer und CO₂-Intensität. Reine Mathematik: Identische Eingaben liefern jedes Mal identische Ergebnisse, begleitet von einer prüffähigen Begründung.'
  - h: Prüfung am Smart Gate und dreifacher Abgleich
    p: 'Bei Ankunft am Baustellentor erfasst mobile oder fest installierte Edge-OCR Lieferscheine und Kennzeichen der Lkw. Das System gleicht sofort Bestellung, physischen Wareneingang und Lieferantenrechnung miteinander ab. Dieser Schritt existiert heute als Laborprototyp im Testaufbau.'
  - h: Wkb-Übergabedossier in Echtzeit zusammenstellen
    p: 'Prüfprotokolle, Wareneingänge und Qualitätsnachweise sollen automatisch in das gesetzlich vorgeschriebene Dossier Bevoegd Gezag (Übergabedossier für die Baubehörde) nach dem niederländischen Wkb (Gesetz zur Qualitätssicherung im Bau) eingebunden werden. Keine fehlenden Unterlagen bei der Schlussabnahme durch die Gemeinde.'
  - h: Rückfluss in das wachsende Vertragsgedächtnis
    p: 'Tatsächliche Liefertreue der Lieferanten, Mängelhäufigkeit und Abweichungen beim Einheitspreis werden automatisch protokolliert. Diese Daten kalibrieren die Bewertungsparameter für die nächste Ausschreibung neu.'
- tone: chalk
  eyebrow: Datensouveränität
  heading: Warum es lokal auf Ihrer eigenen Infrastruktur läuft.
  body: 'Baudaten, Kostenschätzungen und Konditionen sind strategisch sensibel. Dundir ist für den vollständigen Betrieb vor Ort ausgelegt, auf Ihren Unternehmensservern oder auf lokaler Edge-Hardware auf der Baustelle:'
  after: 'Der lokale Betrieb ist eine betriebliche Notwendigkeit, keine Vorliebe. Forschung bei Cedervall zeigte, dass Modelle aus der Public Cloud wegen hoher Abokosten, Abhängigkeiten von Drittanbieter-APIs und verpflichtender interner Datentrennung unbrauchbar waren. Niederländische öffentliche Stellen arbeiten innerhalb der BIO (Baseline Informatiebeveiliging Overheid, Grundschutz für die Informationssicherheit der Verwaltung). Ein lokales System passt in diesen Rahmen ohne Cloud-Ausnahme.'
  claims:
  - fig: Souveränität
    body: Ihre Beschaffungsdaten und Ihre Preishistorie bleiben in Ihrem internen Netzwerk. Der Entwurf sieht keinen Datenabfluss zu kommerziellen Cloud-Anbietern vor, und mit Ihren eigenen Daten werden nie externe Modelle trainiert.
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
    label: Identische Eingaben liefern identische Ergebnisse. Generische KI für Unternehmen lieferte bei identischen Eingaben Fehler bis zu 8.354 Euro auf einer einzigen Ausschreibungsposition.
    src: Hamppi 2025, Aalto University · Atil et al. 2025
  body: 'Welche Vorgaben durchgesetzt wurden, wie Transportweg und Materialeinheitskosten gegeneinander abgewogen wurden und warum ein Lieferant ausgewählt wurde: Das System ist darauf ausgelegt, die genaue Formel und die Gewichtung der Parameter festzuhalten.


    Dieselbe Strenge gilt am Tor: Jeder Scan eines Lieferscheins und jede Entscheidung im dreifachen Abgleich soll mit Zeitstempel, Referenznummern und prozentualer Abweichung protokolliert werden.


    Niederländischen Gemeinden hilft das bei der Begründung, die nach Aanbestedingswet Artikel 2.130 (niederländisches Vergabegesetz) erforderlich ist. Bauunternehmen erhalten eine dokumentierte Akte für Streitfälle und Nachträge mit Nachunternehmern.'
- tone: chalk-2
  eyebrow: Grenzen
  heading: Was das System nicht tut.
  body: 'Dundir trifft keine eigenständigen Geschäftsentscheidungen und ersetzt keine Fachleute. Kalkulator, Einkäufer und Bauleiter behalten die volle Kontrolle.


    Die Plattform beseitigt manuelle Datenerfassung und manuellen Abgleich, damit sich Fachleute auf Verhandlungen, Qualitätsprüfungen und das strategische Lieferantenmanagement konzentrieren können. Formale Freigabe und rechtliche Verantwortung bleiben bei Ihrer Organisation.


    Das System kalibriert sich an Ihrer eigenen Transaktionshistorie. Wenn erfahrene Mitarbeitende gehen, bleibt das gesammelte Lieferantenwissen in Ihrem Unternehmen.'
  caveat:
    lab: Ehrlich zum Stand
    text: Keines der drei Module ist bereits ein Produkt. Der Beschaffungs-Solver ist in Forschung und Entwurf, das Smart Gate ist ein Laborprototyp im Testaufbau, das Vertragsgedächtnis ist ein Entwurf. Partner, die jetzt einsteigen, entscheiden mit, was zuerst gebaut wird.
---
