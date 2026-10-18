---
title: Hoe het werkt
description: Van materiaalspecificatie tot poortcontrole en Wkb-opleverdossier. Lokaal geimplementeerd, wiskundig onderbouwd, met volledig redeneerproces.
lede: Dundir koppelt wiskundige inkoopoptimalisatie aan fysieke controle aan de poort en een lerend contractgeheugen. De professional oordeelt en beslist. Het systeem berekent, controleert en archiveert.
sections:
- eyebrow: De keten
  heading: Vijf stappen van bestek tot oplevering.
  steps:
  - h: Specificatie structureren
    p: 'De AI-taallaag leest uw bestek of offerteaanvraag in gewoon Nederlands. Het systeem extraheert harde randvoorwaarden, leveringsvensters, budgetlimieten en CPR 2024 certificeringseisen. Dit is het enige punt waar een taalmodel actief is.'
  - h: Deterministische solver berekent het optimum
    p: 'De optimalisatie-engine berekent de wiskundig beste toewijzing over prijs, levertijd, transportkilometers en CO2. Harde wiskunde: dezelfde invoer geeft altijd exact dezelfde uitkomst, met een auditklaar redeneerproces.'
  - h: Slimme poortcontrole en drieweg-matching
    p: 'Bij aankomst op de bouwplaats scant mobiele of vaste edge OCR de vrachtbrief en het kenteken. Het systeem voert direct een automatische drieweg-matching uit tussen inkooporder, fysieke leverbon en inkomende factuur.'
  - h: Realtime Wkb-dossieropbouw
    p: 'Keuringscertificaten, vrachtbrieven en kwaliteitsstempels worden automatisch gekoppeld aan het Dossier Bevoegd Gezag conform de Wet kwaliteitsborging voor het bouwen (Wkb). Geen ontbrekende papieren bij oplevering.'
  - h: Terugkoppeling naar contractgeheugen
    p: 'Werkelijke leverbetrouwbaarheid, kwaliteitsafwijkingen en levertijden worden automatisch geregistreerd. Deze data kalibreert de scoringsparameters voor de volgende aanbesteding.'
- tone: chalk
  eyebrow: Data-soevereiniteit
  heading: Waarom het lokaal op uw eigen server draait.
  body: 'Bouwdata, calculaties en contractafspraken zijn commercieel vertrouwelijk en strategisch gevoelig. Dundir draait 100% on-premise op uw eigen infrastructuur of lokale edge-hardware:'
  after: 'Lokale implementatie is geen voorkeur, maar een harde operationele eis. In onderzoek bij Cedervall bleken publieke cloudmodellen onbruikbaar door hoge abonnementskosten, afhankelijkheid van externe API''s en strikte interne databescherming. Voor Nederlandse overheden en bouwers geldt de Baseline Informatiebeveiliging Overheid (BIO 2019): data mag het eigen netwerk simpelweg niet verlaten.'
  claims:
  - fig: Soevereiniteit
    body: Uw inkoopdata en leveranciersprijzen verlaten uw interne netwerk nooit. Er vindt geen datadoorgifte plaats naar externe cloudproviders, en uw bedrijfsdata traint nooit andermans modellen.
    word: true
  - fig: Continuïteit
    body: Volledige werking zonder internetverbinding aan de bouwplaatspoort. Het systeem blijft operationeel bij netwerkstoringen en is immuun voor prijswijzigingen of beleidswijzigingen van derden.
    word: true
  - fig: Compliance
    body: Voldoet direct aan BIO 2019 overheidsnormen, ISO 27001 en AVG-richtlijnen, zonder dat er complexe uitzonderingsprocedures voor clouddiensten doorlopen hoeven te worden.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Uitlegbaarheid
  heading: Elke beslissing en controle is wiskundig controleerbaar.
  proof:
    fig: Deterministisch
    label: Dezelfde invoer geeft exact dezelfde uitkomst. Generieke AI gaf bij identieke aanbestedingsinvoer afwijkingen tot 8.354 euro op een enkele regel.
    src: Hamppi 2025, Aalto Universiteit · Atil e.a. 2025
  body: 'Welke randvoorwaarden zijn gehanteerd, welke afweging is gemaakt tussen transportafstand en materiaalkosten, en waarom een leverancier is geselecteerd: het systeem documenteert de exacte rekenformule en wegingsfactoren.

    Aan de poort geldt hetzelfde: elke vrachtbriefscan en matchingsbeslissing wordt gelogd met tijdstempel, referentienummer en afwijkingspercentage.

    Voor gemeenten voldoet dit direct aan Aanbestedingswet artikel 2.130. Voor aannemers levert het een sluitend juridisch dossier op bij geschillen over meerwerk of ondeugdelijke leveringen.'
- tone: chalk-2
  eyebrow: Grenzen
  heading: Wat het systeem niet doet.
  body: 'Dundir neemt geen beslissingen en vervangt de professional niet. De calculator, inkoper en uitvoerder behouden de regie.

    Het systeem elimineert het handmatige zoek- en invoerwerk zodat de specialist zich kan richten op onderhandeling, kwaliteitsbeoordeling en relatiebeheer. De formele beslissing en contractuele verantwoordelijkheid blijven altijd bij uw organisatie.

    Het systeem kalibreert op uw eigen inkoophistorie en leverprestaties. Als een ervaren hoofdinkoper vertrekt, blijft de opgebouwde leveranciersintelligentie bewaard binnen het bedrijf.'
  caveat:
    lab: Eerlijk over de fase
    text: De drie modules zijn ontworpen en functioneren in afgebakende validatie-opstellingen, niet als gestandaardiseerd massaproduct. Wie nu instapt, doet dat als ontwerppartner en stuurt direct de kalibratie en integratie aan.
---
