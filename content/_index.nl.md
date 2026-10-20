---
title: Dundir
description: AI-gedreven inkoopbeslissingen en bouwplaatssystemen, ontworpen voor lokale installatie en een controleerbaar auditspoor. In ontwikkeling met ontwerppartners.
headline: Tot zeventig procent van uw project is <span class="cut">inkoop.</span>
sub: De prijs is geoptimaliseerd. Dat is zelden het grootste probleem. Waar is het materiaal, wanneer komt het aan, en is het gecertificeerd? Dundir bouwt aan een wiskundige inkoop-solver en een digitale tweeling van uw bouwplaats.
stack:
  label: Eén euro projectkosten, verdeeld
  source: Donyavi e.a. 2024, in Hamppi 2025
  alt: 'Verdeling van projectkosten: tot 70 procent materiaal, de rest arbeid en overige kosten.'
  segments:
  - kind: material
    pct: tot 70%
    name: Materiaal · hier rekent en toetst Dundir
  - kind: rest
    pct: de rest
    name: Arbeid en overig
  footLeft: Inkoop is geen backoffice-functie
  footRight: Het is de kostenstructuur
sections:
- eyebrow: De drievoudige crisis
  heading: De rekening staat er al.
  claims:
  - fig: 31,7%
    body: van de tijd van calculators en inkopers gaat verloren aan administratieve data-invoer in plaats van analyse. Een enkele offertecalculatie kost mediaan 42 arbeidsuren.
  - fig: 50 min
    body: wachttijd bij de bouwplaatspoort voor 70% van de materiaalvrachtwagens. 95% van de vrachtbrieven voldeed niet aan de kwaliteitscriteria in een audit van 831.206 records. Onder de Wkb worden opleververtragingen van 4 tot 6 weken gemeld.
  - fig: <5%
    body: van de medewerkers maakt een infraproject van 500 tot 600 miljoen euro van begin tot eind mee, schat een geïnterviewde in een studie van de TU Delft. Inkoopkennis verdwijnt bij personeelsverloop. Bij een onderzochte aannemer bleven na opschoning van ruim 1.000 historische projecten er 54 bruikbaar over.
  source: Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Eerste Kamer 2026 · VNG 2024 · Rockx 2023, TU Delft · Steuer e.a. 2023
- tone: chalk
  figure: cycle
  eyebrow: Het platform
  heading: Drie complementaire engines.
  lede: 'Een taalmodel schrijft een antwoord op. Een optimalisatie-engine rekent er een uit. Dundir wordt gebouwd om wiskundige inkoopoptimalisatie te verbinden met verificatie aan de poort en een lerend contractgeheugen.'
  body: 'Het ontwerp bestaat uit drie onderling verbonden modules, bedoeld om lokaal op uw eigen infrastructuur te draaien. Elk staat in een eigen fase:


    <strong>1. Deterministic Procurement Engine (onderzoek en ontwerp):</strong> Combinatorische optimalisatie over prijs, levertijd, transportkilometers en CO2. Deterministisch ontworpen: dezelfde invoer moet altijd exact dezelfde uitkomst geven, zonder de numerieke afwijkingen van generatieve AI (tot 8.354 euro verschil in het totaal van één onderaannemer in Hamppi 2025).


    <strong>2. Jobsite Digital Twin & Slimme Poort (labprototype):</strong> Het doel: OCR aan de poort leest vrachtbrieven en kentekens bij aankomst, matcht bestelbon, leveringsbon en factuur, en bouwt het Dossier Bevoegd Gezag onder de Wet kwaliteitsborging voor het bouwen (Wkb) mee op. Vandaag draait de eerste edge-hardware op de werkbank: twee gekoppelde bordjes met een klein taalmodel op de chip, zonder internet. Camera en slimme bril volgen.


    <strong>3. Forecasting & Institutioneel Geheugen (ontwerp):</strong> Werkelijke leverbetrouwbaarheid, levertijden en afwijkingen moeten terugvloeien naar de scoringsparameters voor volgende aanbestedingen, zodat operationele kennis blijft wanneer personeel vertrekt.


    <strong>Uw data blijft in uw netwerk.</strong> Het systeem wordt ontworpen om on-premise te draaien, zodat een overheid binnen haar eigen kaders (zoals de BIO) kan blijven. Uw data traint nooit modellen van anderen.'
- tone: chalk-2
  eyebrow: Waar wij staan
  heading: Nog niet af, en dat zeggen wij liever zelf.
  body: 'Dundir is een onderzoekstraject met een bedrijf eromheen, niet een afgerond product met een onderzoeksverhaaltje eromheen. De optimalisatietheorie is niet nieuw, de toepassing op Nederlandse bouwinkoop en bouwplaatslogistiek wel.


    De kernvraag staat nog open: wat betekent <em>optimaal</em> precies wanneer prijs, levertijd, certificering, poortlogistiek en duurzaamheid gelijktijdig worden afgewogen, en vanaf hoeveel data verslaat die aanpak een ervaren inkoper en uitvoerder?


    Dat is precies waarom wij nu partners zoeken en geen licenties verkopen. Wie in deze fase meedoet als ontwerppartner, bepaalt mee waarop het systeem gekalibreerd wordt en wat er eerst gebouwd wordt.'
  caveat:
    lab: Wat het onderzoek niet aantoont
    text: De literatuur onderbouwt het probleem en het lokale implementatiemodel. Zij bewijst niet dat onze specifieke optimalisatie-aanpak in de praktijk goedkoper inkoopt dan een ervaren inkoper. Die validatie moet uit pilotdata komen, en die hebben wij nog niet.
- eyebrow: Voor wie
  heading: Twee kopers, één keten.
  claims:
  - fig: 50 tot 500
    body: <strong>Middelgrote aannemers.</strong> Stop urenverlies aan handmatige administratie en voorkom faalkosten aan de poort. Het doel is om Wkb-dossier en CPR 2024-certificaten vast te leggen op het moment van ontvangst.
  - fig: '342'
    body: <strong>Nederlandse gemeenten.</strong> Elke inkoopbeslissing moet aantoonbaar verdedigbaar zijn onder Aanbestedingswet artikel 2.130. Dundir wordt ontworpen om bij selectie een rekenkundig auditspoor te leveren en bij levering de naleving te toetsen.
  chipslabel: Regelgeving die dit afdwingt
  chips:
  - label: Aanbestedingswet art. 2.130
    live: true
  - label: CPR 2024/3110
    live: true
  - label: Wkb Opleverdossier
    live: true
  - label: EU AI Act Dec 2027
    live: false
  - label: CSRD Scope 3
    live: false
---
