---
title: Das Problem
description: Bauprojekte scheitern in der Beschaffung und am Tor, nicht an den Plänen. Die echten Kosten von Papierkram, WhatsApp-Chaos und fehlenden Prüfnachweisen.
slug: das-problem
lede: Bauprojekte scheitern selten an der Statik. Sie scheitern, weil 70 % der Projektkosten im Material liegen, während Vergaben und Anlieferungen am Tor über Tabellen, WhatsApp-Nachrichten und Papierbelege laufen.
sections:
- eyebrow: Historische Fehlschläge
  heading: Wenn die Lieferkette bricht.
  claims:
  - fig: '900 Mio. €'
    body: <strong>Fyra HSL (2013).</strong> Vollständig abgeschrieben nach einer öffentlichen Ausschreibung, die ausschließlich nach dem niedrigsten Kaufpreis vergeben wurde. Wintertauglichkeit und Materialleistung wurden nie geprüft; die Flotte wurde innerhalb von sechs Wochen dauerhaft stillgelegt.
  - fig: '435 Mio. €'
    body: <strong>Afsluitdijk (2024).</strong> Massive Kostenüberschreitung, weil Materialspezifikationen ohne prüfbaren Nachweis von den Vertragsbedingungen abwichen. Was auf die Baustelle geliefert wurde, entsprach nicht dem, was vertraglich vereinbart war.
  source: Parliamentary Inquiry Fyra 2015 · Netherlands Court of Audit 2024
- tone: chalk
  figure: gate
  eyebrow: Die dreifache Krise
  heading: Büro, Tor und Gedächtnis.
  body: 'Das Versagen der klassischen Baubeschaffung verläuft über drei aufeinanderfolgende operative Stufen:


    <strong>1. Administrativer Engpass vor Baubeginn:</strong> Kalkulatoren verbringen 31,7 % ihrer Arbeitszeit mit administrativer Datenerfassung statt mit Wertanalyse. Die Kalkulation eines einzigen formalen Angebots dauert im Median 42 Arbeitsstunden. Während die Margen der Bauunternehmen bei 1,0 % bis 2,0 % liegen, betragen die Fehlerkosten im Bau 5 % bis 11 % des Umsatzes.


    <strong>2. Ausfall an Baustelle und Tor:</strong> 70 % der Lieferfahrzeuge warten wegen manueller Kontrolle bis zu 50 Minuten am Baustellentor. 95 % der Lieferscheine erfüllten in einer Prüfung von 831.206 Datensätzen die Qualitätskriterien nicht. Lieferausfälle stoppen 8 % bis 25 % der geplanten Arbeiten auf der Baustelle.


    <strong>3. Institutioneller Gedächtnisverlust:</strong> 78 % der Materialbeschaffung beruhen auf informellen E-Mails und WhatsApp-Chats. Weniger als 50 % der Einkäufe auf der Baustelle entsprechen den ausgehandelten Rahmenverträgen. Bei einem untersuchten Bauunternehmen blieben nach der Bereinigung von mehr als 1.000 historischen Projekten 54 verwertbare übrig, während bei Projekten von 500 bis 600 Millionen Euro weniger als 5 % des Personals von der Ausschreibung bis zur Fertigstellung dabeibleiben, schätzt ein Befragter.'
  source: Donyavi et al. 2024 · Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Rockx 2023, TU Delft · Steuer et al. 2023
- eyebrow: Warum jetzt
  heading: Die Regulierung verlangt prüfbare Nachweise.
  body: 'Informelle Prozesse sind rechtlich nicht mehr haltbar. Vier verbindliche Regelwerke machen Tabellen und Klemmbretter unvertretbar:'
  after: <strong>Tabelle und Klemmbrett erfüllen die rechtlichen Anforderungen nicht mehr.</strong>
  claims:
  - fig: Wkb
    body: <strong>Wkb (niederländisches Gesetz zur Qualitätssicherung im Bau).</strong> Das Dossier Bevoegd Gezag (Übergabedossier für die Baubehörde) verlangt einen Nachweis aller verbauten Materialien und Prüfungen im Ist-Zustand. Fehlende Zertifikate verzögern die Übergabe um 4 bis 6 Wochen, bevor die Gemeinde die Nutzungsgenehmigung erteilt.
    word: true
  - fig: CPR 2024
    body: <strong>Bauproduktenverordnung (EU 2024/3110).</strong> Digitale Produktpässe (DPP) und Umweltproduktdeklarationen (EPD) sind am Tor für die Rückverfolgbarkeit der Lieferkette verpflichtend.
    word: true
  - fig: Art. 2.130
    body: <strong>Aanbestedingswet 2012 (niederländisches Vergabegesetz).</strong> Jede öffentliche Vergabeentscheidung erfordert einen objektiven, überprüfbaren und reproduzierbaren Prüfpfad für die kommunale Kontrolle und die behördliche Prüfung.
    word: true
  - fig: KI-VO
    body: <strong>EU-KI-Verordnung (Hochrisiko).</strong> Systeme, die Beschaffung und Lieferantenauswahl unterstützen, unterliegen bis Dezember 2027 strengen Pflichten zu Transparenz, Dokumentation und Determinismus.
    word: true
- tone: chalk-2
  eyebrow: Präzision
  heading: Generische KI rechnet nicht zuverlässig.
  proof:
    fig: '8.354 €'
    label: Abweichung in der Summe eines Nachunternehmers, als ein generisches KI-Werkzeug für Unternehmen dieselben Daten in einer neuen Sitzung erhielt
    src: Hamppi 2025, Aalto University. Fallstudie auf Basis eines internen Experiments bei Skanska.
  body: 'In einem internen Experiment bei Skanska lieferte ein generisches Sprachmodell für Unternehmen bei identischen Beschaffungsdaten unterschiedliche Zahlen, mit Abweichungen bis zu 28 %. Das liegt in der Natur probabilistischer Sprachmodelle (Atil et al. 2025).


    Ein Sprachmodell sagt das wahrscheinlichste nächste Wort voraus; ein Optimierungsverfahren berechnet das mathematische Optimum. Beschaffungsentscheidungen mit vertraglicher Haftung erfordern exakte Mathematik, keine statistischen Näherungen.


    Dundir trennt Sprache von Berechnung: Die KI-Schicht strukturiert die Spezifikationen, der deterministische Solver berechnet die optimale Zuteilung.'
  caveat:
    lab: Was das nicht beweist
    text: Das Experiment zeigt, dass generische Sprachmodelle für verlässliche Zahlenvergleiche ungeeignet sind. Es beweist nicht, dass unser Solver in der Praxis günstiger einkauft als ein erfahrener leitender Kalkulator. Diese Validierung erfordert empirische Pilotdaten aus laufenden Projekten.
---
