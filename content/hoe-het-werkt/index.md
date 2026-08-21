---
title: Hoe het werkt
description: Van materiaalspecificatie naar auditklaar vergelijkingsrapport. Lokaal geimplementeerd, wiskundig onderbouwd, met volledig redeneerproces.
lede: Dundir verwijdert het administratieve handwerk voor de beslissing en documenteert het redeneerproces erna. De inkoper beoordeelt en beslist. Het systeem rekent en legt vast.
sections:
- eyebrow: De keten
  heading: Vijf stappen, één rapport.
  steps:
  - h: U voert een materiaalspecificatie in
    p: In gewoon Nederlands, dezelfde manier waarop u het nu ook zou omschrijven. Geen invulformulier, geen aparte notatie.
  - h: De AI-laag vertaalt de specificatie
    p: 'Het systeem zet de specificatie om naar gestructureerde inkoopeisen: vereiste certificeringen, levertijden, budgetlimieten en gewogen doelstellingen. Dit is de enige plek in de keten waar een taalmodel aan het werk is.'
  - h: De optimalisatie-engine berekent de beste combinatie
    p: Het systeem draait op uw leveranciersdatabase en vindt de wiskundig aantoonbaar beste combinatie op basis van uw harde eisen en gewogen doelstellingen. Geen suggestie. Een berekend antwoord met volledig redeneerproces.
  - h: U beoordeelt de uitvoer en beslist
    p: U ziet een gerangschikte vergelijking met bronvermelding, certificeringsstatus en volledig redeneerproces. U beslist. Het systeem registreert uw beslissing en de reden.
  - h: Het auditklare rapport wordt automatisch gegenereerd
    p: Klaar voor interne goedkeuring, externe audit of openbare aanbestedingsbeoordeling. Geen extra werk achteraf.
- tone: chalk
  eyebrow: Lokaal
  heading: Waarom het op uw eigen server draait.
  body: 'Drie gevolgen van lokale implementatie die voor gemeenten en bouwbedrijven direct relevant zijn:'
  after: Dit is geen voorkeur van ons. Het is wat de praktijk oplegt. In een onderzoek bij architectenbureau Cedervall werd GPT-4 geprototypeerd en afgewezen op kosten en afhankelijkheid van derden; cloud-Llama-3 viel af op twintig seconden latentie en de eis dat data op het interne netwerk bleef. On-premise was de enige acceptabele uitkomst, en dat was in een architectenbureau, niet in een gemeente.
  claims:
  - fig: Data
    body: Uw inkoopdata verlaat uw eigen server nooit. Prijzen, leveranciersafspraken en contractgegevens blijven waar ze horen.
    word: true
  - fig: Continuïteit
    body: Er is geen afhankelijkheid van externe APIs of cloudproviders. Het systeem stopt niet als een leverancier zijn prijzen of voorwaarden verandert.
    word: true
  - fig: Naleving
    body: Het systeem voldoet aan GDPR en aan het IT-beleid van gemeenten, zonder dat daar een uitzondering voor aangevraagd hoeft te worden.
    word: true
  source: Friðriksson 2025, KTH · van Duuren 2025, TU Delft
- eyebrow: Uitlegbaarheid
  heading: Elke uitvoer laat het redeneerproces zien.
  proof:
    fig: Identiek
    label: Dezelfde invoer geeft dezelfde uitkomst. Een generiek AI-systeem gaf bij identieke invoer verschillende uitkomsten, met fouten tot 8.354 euro op een enkele regel.
    src: Hamppi 2025, Aalto Universiteit
  body: 'Welke databronnen zijn gebruikt, hoe elke leverancier is beoordeeld, waarom de ene leverancier hoger staat dan de andere. Het systeem legt het expliciet vast.


    Voor gemeenten is dit een wettelijke vereiste. Voor bouwbedrijven is het het verschil tussen een rapport dat een manager ondertekent en een rapport dat hij terugstuurt.'
- tone: chalk-2
  eyebrow: Grenzen
  heading: Wat het systeem niet doet.
  body: 'Dundir neemt geen inkoopbeslissingen. De inkoper beoordeelt de uitvoer en beslist. Het systeem vervangt de inkoper niet.


    Het verwijdert het administratieve handwerk zodat de inkoper het eigenlijke werk kan doen: oordelen, relaties onderhouden en escaleren. De beslissing en de verantwoordelijkheid blijven bij u.


    Het systeem wordt getraind op uw eigen inkoopgeschiedenis, niet op een generiek model. Het resultaat kent uw voorkeursleveranciers, uw certificeringseisen en uw eerdere beslissingen. Als een senior inkoper vertrekt, blijft die kennis beschikbaar voor het hele team.'
  caveat:
    lab: Eerlijk over de fase
    text: Deze keten is ontworpen en deels gebouwd, niet in productie bij een klant. Wie nu instapt doet dat als ontwerppartner en bepaalt mee waarop het systeem gekalibreerd wordt.
---
