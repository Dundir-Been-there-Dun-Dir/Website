---
title: Problem
description: Građevinski projekti ne propadaju na nacrtima, već u nabavci i na kapiji gradilišta. Stvarna cena ručnog rada, WhatsApp haosa i nedostajuće dokumentacije.
slug: problem
lede: Građevinski projekti retko doživljavaju neuspeh zbog proračuna nosivosti. Neuspeh nastaje zato što 70% troškova leži u materijalu, dok se odluke o nabavci i kontrole na kapiji i dalje vode kroz Excel tabele, WhatsApp poruke i papirne priznanice.
sections:
- eyebrow: Istorijski primeri
  heading: Kada lanac snabdevanja pukne.
  claims:
  - fig: '€900M'
    body: <strong>Fyra HSL (2013).</strong> Potpuni otpis investicije nakon javne nabavke dodeljene isključivo po kriterijumu najniže kupovne cene. Zimska izdržljivost i specifikacije materijala nikada nisu verifikovane; vozovi su trajno povučeni posle samo šest nedelja.
  - fig: '€435M'
    body: <strong>Afsluitdijk (2024).</strong> Masovno prekoračenje budžeta uzrokovano odstupanjem ugrađenog materijala od projektnih uslova bez revizorskog traga. Ono što je isporučeno na gradilište nije odgovaralo onome što je ugovoreno.
  source: Parlamentarna istraga Fyra 2015 · Državni revizorski sud Holandije 2024
- tone: chalk
  figure: gate
  eyebrow: Trostruka kriza
  heading: Kancelarija, kapija i zaborav.
  body: 'Kolaps tradicionalnog upravljanja nabavkom manifestuje se kroz tri uzastopne faze svakog građevinskog projekta:


    <strong>1. Administrativno usko grlo u pripremi:</strong> Kalkulanti troše 31,7% radnog vremena na unos podataka umesto na analizu ponuda. Priprema jedne formalne tenderske ponude zahteva medijanu od 42 radna sata. Dok su neto marže izvođača stisnute između 1,0% i 2,0%, troškovi grešaka i propusta iznose između 5% i 11% ukupnog prometa.


    <strong>2. Haos na kapiji gradilišta:</strong> 70% kamiona koji dovoze materijal čeka do 50 minuta na kapiji zbog ručne provere. Čak 95% papirnih otpremnica sadrži greške, neprecizne podatke ili sertifikate koji nedostaju. Zastoji u isporuci obustavljaju 8% do 25% planiranih dnevnih radova.


    <strong>3. Institucionalna amnezija:</strong> 78% nabavke materijala odvija se preko neformalne elektronske pošte i WhatsApp komunikacije. Manje od 50% porudžbina sa gradilišta poštuje ugovorene okvirne sporazume. Kod jednog ispitanog izvođača, od preko 1.000 istorijskih projekata posle čišćenja ostalo je 54 upotrebljivih, dok manje od 5% inženjera ostane na velikom projektu od tendera do predaje objekta.'
  source: Donyavi i dr. 2024 · Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Rockx 2023, TU Delft · Steuer i dr. 2023
- eyebrow: Zašto sada
  heading: Zakoni zahtevaju proverljive dokaze.
  body: 'Improvizacija u lancu snabdevanja je zakonski zatvorena. Četiri obavezujuća pravna okvira čine tabelarne proračune i papirne sveske neodbranjivim:'
  after: <strong>Tabele i papirne fascikle više ne ispunjavaju zakonske uslove.</strong>
  claims:
  - fig: Wkb
    body: <strong>Zakon o obezbeđenju kvaliteta (Wkb).</strong> Zakonski dosije o primopredaji zahteva egzaktne dokaze o svim ugrađenim materijalima i atestima. Sertifikati koji nedostaju dovode do zastoja u izdavanju upotrebne dozvole od 4 do 6 nedelja.
    word: true
  - fig: CPR 2024
    body: <strong>Uredba o građevinskim proizvodima (EU 2024/3110).</strong> Digitalni pasoš proizvoda (DPP) i deklaracije o zaštiti životne sredine (EPD) postaju obavezni na kapiji gradilišta radi praćenja porekla.
    word: true
  - fig: Član 2.130
    body: <strong>Zakon o javnim nabavkama.</strong> Svaka odluka o dodeli ugovora od strane javnih naručilaca zahteva objektivan, merljiv i ponovljiv revizorski trag.
    word: true
  - fig: AI Act
    body: <strong>EU Akt o veštačkoj inteligenciji (High-Risk).</strong> Sistemi koji podržavaju odluke o nabavci podležu strogim zahtevima transparentnosti, dokumentovanja i determinizma od decembra 2027.
    word: true
- tone: chalk-2
  eyebrow: Preciznost
  heading: Generički AI pravi nedopustive računske greške.
  proof:
    fig: '8.354 €'
    label: greške na jednoj stavci tendera pri korišćenju generičkog enterprise AI alata
    src: Hamppi 2025, Univerzitet Aalto. Studija slučaja na osnovu internog Skanska eksperimenta.
  body: 'U kontrolisanom eksperimentu unutar kompanije Skanska, generički enterprise jezički model dao je različite numeričke iznose za identične tenderske ulazne podatke, uz odstupanja do čak 28%. To nije izuzetak, već osnovna karakteristika rada verovatnosnih jezičkih modela (Atil i dr. 2025).


    Jezički model predviđa najverovatniju sledeću reč; optimizacioni algoritam računa matematički optimum. Odluke o nabavci sa ugovornom odgovornošću zahtevaju preciznu matematiku, a ne statističko pogađanje.


    Dundir razdvaja jezik od računanja: AI sloj strukturira zahteve iz tehničkog opisa, dok deterministički solver računa optimalan izbor.'
  caveat:
    lab: Šta ovo ne dokazuje
    text: Eksperiment dokazuje da generički jezički modeli nisu pogodni za pouzdano numeričko poređenje ponuda. On ne dokazuje da naš algoritam u praksi automatski kupuje povoljnije od iskusnog glavnog inženjera nabavke. Ta potvrda dolazi kroz rad na pilot projektima.
---
