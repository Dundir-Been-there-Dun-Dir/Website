---
title: Dundir
description: AI-gedreven inkoopbeslissingen en bouwplaatssystemen. Lokaal geimplementeerd. Wiskundig onderbouwd. Audit-klaar.
headline: Zeventig procent van uw project is <span class="cut">inkoop.</span>
sub: De prijs is geoptimaliseerd. Dat is zelden het grootste probleem. Waar is het materiaal, wanneer komt het aan, en is het gecertificeerd? Dundir combineert een wiskundige inkoop-solver met een digitale tweeling van uw bouwplaats.
stack:
  label: Eén euro projectkosten, verdeeld
  source: Donyavi e.a. 2024, in Hamppi 2025
  alt: 'Verdeling van projectkosten: 70 procent materiaal, 18 procent arbeid, 12 procent overig.'
  segments:
  - kind: material
    pct: 70%
    name: Materiaal · hier rekent en toetst Dundir
  - kind: labour
    pct: 18%
    name: Arbeid
  - kind: other
    pct: 12%
    name: Overig
  footLeft: Inkoop is geen backoffice-functie
  footRight: Het is de kostenstructuur
sections:
- eyebrow: De drievoudige crisis
  heading: De rekening staat er al.
  claims:
  - fig: 31,7%
    body: van de tijd van calculators en inkopers gaat verloren aan administratieve data-invoer in plaats van analyse. Een enkele offertecalculatie kost gemiddeld 42 arbeidsuren.
  - fig: 50 min
    body: wachttijd bij de bouwplaatspoort voor 70% van de materiaalvrachtwagens. 95% van de papieren leverbonnen bevat fouten of ontbrekende certificaten, met opleververtragingen van 4 tot 6 weken onder de Wkb tot gevolg.
  - fig: <5%
    body: van de staf maakt een groot infraproject van begin tot eind mee. Inkoopkennis verdwijnt bij personeelsverloop, terwijl 95% van historische ERP-transacties na tien jaar corrupt of onbruikbaar blijkt.
  source: Rockx 2023, TU Delft · Hamppi 2025 · Aldeeb 2024 · Qflow 2025 · VNG 2024
- tone: chalk
  eyebrow: Het platform
  heading: Drie complementaire engines.
  lede: 'Een taalmodel schrijft een antwoord op. Een optimalisatie-engine rekent er een uit. Dundir verbindt wiskundige inkoopoptimalisatie met realtime verificatie aan de poort en een lerend contractgeheugen.'
  body: 'Het platform bestaat uit drie onderling verbonden modules die lokaal op uw eigen infrastructuur draaien:

    <strong>1. Deterministic Procurement Engine:</strong> Wiskundige combinatorische optimalisatie over prijs, levertijd, transportkilometers en CO2. Harde deterministische berekeningen: dezelfde invoer geeft altijd exact dezelfde uitkomst, zonder de numerieke afwijkingen van generatieve AI (tot 8.354 euro fout per regel in Hamppi 2025).

    <strong>2. Jobsite Digital Twin & Slimme Poort:</strong> Mobiele en vaste OCR scant vrachtbrieven en kentekens bij aankomst. Automatische drieweg-matching tussen bestelbon, leveringsbon en factuur. Realtime samenstelling van het Dossier Bevoegd Gezag conform de Wet kwaliteitsborging voor het bouwen (Wkb).

    <strong>3. Forecasting & Institutioneel Geheugen:</strong> Werkelijke leverbetrouwbaarheid, levertijden en afwijkingen worden direct teruggekoppeld naar de scoringsparameters voor toekomstige aanbestedingen. Uw operationele kennis blijft behouden wanneer personeel vertrekt.

    <strong>Data verlaat uw netwerk niet.</strong> Het systeem draait on-premise conform de Baseline Informatiebeveiliging Overheid (BIO 2019). Geen afhankelijkheid van externe cloud-API''s.'
- tone: chalk-2
  eyebrow: Waar wij staan
  heading: Nog niet af, en dat zeggen wij liever zelf.
  body: 'Dundir is een onderzoekstraject met een bedrijf eromheen, niet een afgerond product met een onderzoeksverhaaltje eromheen. De optimalisatietheorie is niet nieuw, de toepassing op Nederlandse bouwinkoop en bouwplaatslogistiek wel.

    De kernvraag staat nog open: wat betekent <em>optimaal</em> precies wanneer prijs, levertijd, certificering, poortlogistiek en duurzaamheid gelijktijdig worden afgewogen, en vanaf hoeveel data verslaat die aanpak een ervaren inkoper en uitvoerder?

    Dat is precies waarom wij nu partners zoeken en geen licenties verkopen. Wie in deze fase meedoet als ontwerppartner, bepaalt mee waarop het systeem gekalibreerd wordt en houdt wat er gebouwd is.'
  caveat:
    lab: Wat het onderzoek niet aantoont
    text: De literatuur onderbouwt het probleem en het lokale implementatiemodel. Zij bewijst niet dat onze specifieke optimalisatie-aanpak in de praktijk goedkoper inkoopt dan een ervaren inkoper. Die validatie moet uit pilotdata komen, en die hebben wij nog niet.
- eyebrow: Voor wie
  heading: Twee kopers, één keten.
  claims:
  - fig: 50 tot 500
    body: <strong>Middelgrote aannemers.</strong> Stop urenverlies aan handmatige administratie en voorkom faalkosten aan de poort. Wkb-dossieropbouw en CPR 2024-certificaten worden direct bij ontvangst geborgd.
  - fig: '342'
    body: <strong>Nederlandse gemeenten.</strong> Elke inkoopbeslissing moet aantoonbaar verdedigbaar zijn onder Aanbestedingswet artikel 2.130. Dundir levert het wiskundige auditspoor bij selectie en bewaakt de naleving bij fysieke oplevering.
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
