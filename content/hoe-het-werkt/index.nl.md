---
title: Hoe het werkt
description: Van materiaalspecificatie tot poortcontrole en Wkb-opleverdossier. Ontworpen voor lokale installatie, wiskundig onderbouwd, met volledig redeneerproces.
lede: Dundir wordt ontworpen om wiskundige inkoopoptimalisatie te koppelen aan fysieke controle aan de poort en een lerend contractgeheugen. De professional oordeelt en beslist. Het systeem berekent, controleert en archiveert.
sections:
- eyebrow: De keten
  heading: Het ontwerp in vijf stappen, van bestek tot oplevering.
  figure: cycle
  steps:
  - h: Specificatie structureren
    p: 'De AI-taallaag leest uw bestek of offerteaanvraag in gewoon Nederlands. Het systeem extraheert harde randvoorwaarden, leveringsvensters, budgetlimieten en CPR 2024 certificeringseisen. Dit is het enige punt waar een taalmodel actief is.'
  - h: Deterministische solver berekent het optimum
    p: 'De optimalisatie-engine berekent de wiskundig beste toewijzing over prijs, levertijd, transportkilometers en CO2. Harde wiskunde: dezelfde invoer geeft altijd exact dezelfde uitkomst, met een auditklaar redeneerproces.'
  - h: Slimme poortcontrole en drieweg-matching
    p: 'Bij aankomst op de bouwplaats scant mobiele of vaste edge OCR de vrachtbrief en het kenteken. Het systeem voert direct een automatische drieweg-matching uit tussen inkooporder, fysieke leverbon en inkomende factuur. Deze stap bestaat nu als labprototype op de werkbank.'
  - h: Realtime Wkb-dossieropbouw
    p: 'Keuringscertificaten, vrachtbrieven en kwaliteitsstempels moeten automatisch worden gekoppeld aan het Dossier Bevoegd Gezag conform de Wet kwaliteitsborging voor het bouwen (Wkb). Geen ontbrekende papieren bij oplevering.'
  - h: Terugkoppeling naar contractgeheugen
    p: 'Werkelijke leverbetrouwbaarheid, kwaliteitsafwijkingen en levertijden worden automatisch geregistreerd. Deze data kalibreert de scoringsparameters voor de volgende aanbesteding.'
- tone: chalk
  eyebrow: Data-soevereiniteit
  heading: Waarom het lokaal op uw eigen server draait.
  body: 'Bouwdata, calculaties en contractafspraken zijn commercieel vertrouwelijk en strategisch gevoelig. Dundir wordt ontworpen om volledig on-premise te draaien, op uw eigen infrastructuur of lokale edge-hardware:'
  after: 'Lokale implementatie is geen voorkeur, maar een harde operationele eis. In onderzoek bij Cedervall bleken publieke cloudmodellen onbruikbaar door hoge abonnementskosten, afhankelijkheid van externe API''s en strikte interne databescherming. Nederlandse overheden werken binnen de Baseline Informatiebeveiliging Overheid (BIO). Een lokaal systeem past binnen die kaders zonder uitzondering voor een clouddienst.'
  claims:
  - fig: Soevereiniteit
    body: Uw inkoopdata en leveranciersprijzen blijven in uw interne netwerk. Het ontwerp kent geen doorgifte naar externe cloudproviders, en uw bedrijfsdata traint nooit andermans modellen.
    word: true
  - fig: Continuïteit
    body: Ontworpen om aan de bouwplaatspoort zonder internetverbinding te werken, zodat netwerkstoringen en prijs- of beleidswijzigingen van derden het werk niet stilleggen.
    word: true
  - fig: Compliance
    body: Ontworpen om binnen de kaders van de BIO en de AVG te passen, zonder uitzonderingsprocedure voor een clouddienst.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Uitlegbaarheid
  heading: Elke beslissing en controle moet controleerbaar zijn.
  proof:
    fig: Deterministisch
    label: Dezelfde invoer geeft exact dezelfde uitkomst. Generieke AI gaf bij identieke aanbestedingsinvoer afwijkingen tot 8.354 euro op een enkele regel.
    src: Hamppi 2025, Aalto Universiteit · Atil e.a. 2025
  body: 'Welke randvoorwaarden zijn gehanteerd, welke afweging is gemaakt tussen transportafstand en materiaalkosten, en waarom een leverancier is geselecteerd: het systeem is zo ontworpen dat het de exacte rekenformule en wegingsfactoren vastlegt.


    Aan de poort geldt hetzelfde: elke vrachtbriefscan en matchingsbeslissing moet worden gelogd met tijdstempel, referentienummer en afwijkingspercentage.


    Voor gemeenten ondersteunt dit de motivering onder Aanbestedingswet artikel 2.130. Voor aannemers levert het een onderbouwd dossier op bij geschillen over meerwerk of ondeugdelijke leveringen.'
- tone: chalk-2
  eyebrow: Grenzen
  heading: Wat het systeem niet doet.
  body: 'Dundir neemt geen beslissingen en vervangt de professional niet. De calculator, inkoper en uitvoerder behouden de regie.


    Het systeem elimineert het handmatige zoek- en invoerwerk zodat de specialist zich kan richten op onderhandeling, kwaliteitsbeoordeling en relatiebeheer. De formele beslissing en contractuele verantwoordelijkheid blijven altijd bij uw organisatie.


    Het systeem kalibreert op uw eigen inkoophistorie en leverprestaties. Als een ervaren hoofdinkoper vertrekt, blijft de opgebouwde leveranciersintelligentie bewaard binnen het bedrijf.'
  caveat:
    lab: Eerlijk over de fase
    text: Geen van de drie modules is al een product. De inkoopsolver is in onderzoek en ontwerp, de slimme poort is een labprototype op de werkbank, het contractgeheugen is een ontwerp. Wie nu instapt, doet dat als ontwerppartner en bepaalt mee wat er eerst gebouwd wordt.
---
