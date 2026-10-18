---
title: Dundir
description: AI sistem za optimizaciju nabavke i gradilišne sisteme u građevinarstvu. Lokalna implementacija. Matematički utemeljen. Spreman za reviziju.
headline: Sedamdeset odsto vašeg projekta je <span class="cut">nabavka.</span>
sub: Jedinična cena je optimizovana. To retko predstavlja najveći problem. Gde je materijal, kada stiže i da li poseduje validne sertifikate? Dundir kombinuje matematički solver za nabavku sa digitalnim blizancem gradilišta.
stack:
  label: Jedan evro troškova projekta, podeljen
  source: Donyavi i dr. 2024, u Hamppi 2025
  alt: 'Podela troškova projekta: 70 odsto materijal, 18 odsto rad, 12 odsto ostalo.'
  segments:
  - kind: material
    pct: 70%
    name: Materijal · ovde Dundir računa i proverava
  - kind: labour
    pct: 18%
    name: Rad
  - kind: other
    pct: 12%
    name: Ostalo
  footLeft: Nabavka nije pomoćna funkcija
  footRight: Ona je struktura troška
sections:
- eyebrow: Trostruka kriza
  heading: Račun već teče.
  claims:
  - fig: 31,7%
    body: radnog vremena kalkulanata gubi se na administrativni unos umesto na analizu troškova. Izračunavanje pojedinačne ponude u proseku zahteva 42 radna sata.
  - fig: 50 min
    body: čekanja na kapiji gradilišta za 70% kamiona koji dovoze materijal. Čak 95% papirnih otpremnica sadrži greške ili sertifikate koji nedostaju, što uzrokuje kašnjenja primopredaje od 4 do 6 nedelja.
  - fig: <5%
    body: zaposlenih ostaje na velikom infrastrukturnom projektu od početka do završetka. Znanje o nabavci nestaje sa odlascima kadrova, dok je 95% istorijskih ERP zapisa posle deset godina neupotrebljivo.
  source: Rockx 2023, TU Delft · Hamppi 2025 · Aldeeb 2024 · Qflow 2025 · VNG 2024
- tone: chalk
  eyebrow: Platforma
  heading: Tri komplementarna modula.
  lede: 'Jezički model napiše tekstualni odgovor. Optimizaciona mašina izračuna egzaktno rešenje. Dundir povezuje matematičku optimizaciju nabavke sa verifikacijom na kapiji gradilišta u realnom vremenu i trajnom ugovornom memorijom.'
  body: 'Platforma se sastoji od tri međusobno povezana modula koji rade lokalno na vašoj infrastrukturi:

    <strong>1. Deterministički solver za nabavku:</strong> Matematička kombinatorna optimizacija cene, rokova isporuke, transportnih kilometara i CO2 emisija. Egzaktna matematika: isti unos uvek daje identičan rezultat, bez numeričkih grešaka generativnog AI-ja (do 8.354 evra greške po stavci u istraživanju Hamppi 2025).

    <strong>2. Digitalni blizanac gradilišta i Pametna kapija:</strong> Mobilni i stacionarni edge OCR skenira otpremnice i registarske tablice pri dolasku. Automatsko trostrano uparivanje narudžbenice, fizičke otpremnice i ulazne fakture. Formiranje zakonskog dosijea o primopredaji u realnom vremenu.

    <strong>3. Predviđanje i institucionalna memorija:</strong> Stvarna pouzdanost isporuka, vremenska odstupanja i reklamacije automatski ažuriraju parametre za ocenjivanje budućih tenderskih ponuda. Znanje ostaje sačuvano u preduzeću.

    <strong>Podaci nikada ne napuštaju vašu mrežu.</strong> Sistem radi u lokalnom okruženju u skladu sa bezbednosnim standardima javne uprave (BIO 2019). Nema zavisnosti od eksternih cloud servisa.'
- tone: chalk-2
  eyebrow: Gde se nalazimo
  heading: Nije gotovo, i to radije otvoreno kažemo sami.
  body: 'Dundir je istraživački program sa preduzećem oko njega, a ne standardizovani komercijalni softver sa marketinškom pričom. Teorija optimizacije je dokazana; njena primena na građevinsku nabavku i logistiku gradilišta predstavlja inovaciju.

    Ključno pitanje ostaje otvoreno: šta tačno znači <em>optimalno</em> kada se istovremeno mere cena, rok isporuke, sertifikati, logistika kapije i CO2 otisak, i pri kojoj količini podataka algoritam nadmašuje iskusnog šefa nabavke i poslovođu?

    Zato tražimo projektne partnere, a ne pasivne kupce licenci. Partneri koji se uključe u ovoj fazi direktno utiču na kalibraciju sistema i zadržavaju implementirano rešenje.'
  caveat:
    lab: Šta istraživanje ne garantuje
    text: Naučna literatura potvrđuje problem i model lokalne implementacije. Ona ne dokazuje da naš algoritam u praksi kupuje povoljnije od vašeg najboljeg kalkulanta. Ta potvrda mora da proistekne iz empirijskih pilot projekata.
- eyebrow: Za koga
  heading: Dva kupca, jedan lanac snabdevanja.
  claims:
  - fig: 50 do 500
    body: <strong>Građevinska preduzeća srednje veličine.</strong> Zaustavite gubljenje radnih sati na ručnu administraciju i sprečite zastoje na kapiji. CPR 2024 sertifikati i dokumentacija za primopredaju beleže se automatski pri istovaru.
  - fig: '342'
    body: <strong>Holandske opštine.</strong> Svaka odluka o javnoj nabavci mora biti pravno i matematički odbranjiva. Dundir obezbeđuje revizorski trag pri izboru i proverava usklađenost pri isporuci na gradilištu.
  chipslabel: Regulatorni okviri koji ovo zahtevaju
  chips:
  - label: Zakon o javnim nabavkama
    live: true
  - label: CPR 2024/3110
    live: true
  - label: Zakon o obezbeđenju kvaliteta (Wkb)
    live: true
  - label: EU AI Act Dec 2027
    live: false
  - label: CSRD Scope 3
    live: false
---
