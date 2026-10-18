---
title: Kako radi
description: Od specifikacije materijala do provere na kapiji i zakonskog dosijea o primopredaji. Projektovano za lokalnu instalaciju, matematički utemeljeno, sa potpunim revizorskim tragom.
slug: kako-radi
lede: Dundir se projektuje da poveže matematičku optimizaciju nabavke sa fizičkom verifikacijom na kapiji gradilišta i trajnim ugovornim pamćenjem. Inženjer procenjuje i odlučuje. Sistem računa, proverava i arhivira.
sections:
- eyebrow: Lanac procesa
  heading: Dizajn u pet koraka, od tehničkog opisa do primopredaje.
  steps:
  - h: Strukturiranje specifikacije
    p: 'AI jezički sloj analizira vaš tehnički opis ili tendersku dokumentaciju na standardnom jeziku. Sistem izdvaja tvrda ograničenja, rokove isporuke, budžetske limite i CPR 2024 zahteve za sertifikaciju. Ovo je jedina faza u kojoj je jezički model aktivan.'
  - h: Deterministički solver računa optimum
    p: 'Optimizacioni algoritam vrednuje jediničnu cenu, dinamiku isporuke, transportne kilometre i utrošak CO2. Čista matematika: identičan unos uvek daje identičan rezultat, uz transparentan trag proračuna.'
  - h: Pametna kontrola na kapiji i trostrano uparivanje
    p: 'Pri dolasku kamiona na gradilište, mobilni ili stacionarni edge OCR skenira otpremnicu i registarske tablice. Sistem u realnom vremenu vrši automatsko trostrano uparivanje narudžbenice, fizičke otpremnice i fakture. Ovaj korak danas postoji kao laboratorijski prototip.'
  - h: Formiranje dosijea o primopredaji
    p: 'Atesti, otpremnice i zapisi o kontroli kvaliteta treba automatski da se povezuju u zakonski dosije o primopredaji (Dossier Bevoegd Gezag prema Wkb regulativi). Nema dokumentacije koja nedostaje pri konačnom pregledu.'
  - h: Povratna sprega u ugovornu memoriju
    p: 'Stvarna tačnost isporuka, uočena odstupanja i odstupanja u cenama automatski se evidentiraju. Ovi podaci rekalibrišu parametre ocenjivanja za naredne tendere.'
- tone: chalk
  eyebrow: Suverenitet podataka
  heading: Zašto sistem radi lokalno na vašem serveru.
  body: 'Građevinski proračuni, cene i ugovorni uslovi predstavljaju poslovnu tajnu najvišeg nivoa. Dundir se projektuje da radi potpuno lokalno, na vašoj infrastrukturi ili namenskom hardveru na gradilištu:'
  after: 'Lokalna implementacija je operativna nužnost. Istraživanje u birou Cedervall pokazalo je da su javni cloud modeli neprihvatljivi zbog visokih mesečnih naknada, zavisnosti od eksternih servera i strogih internih pravila o izolaciji podataka. Holandska javna uprava radi u okviru bezbednosnog standarda BIO. Lokalni sistem se uklapa u taj okvir bez izuzetka za cloud servis.'
  claims:
  - fig: Suverenitet
    body: Vaši podaci o nabavci i cenama ostaju u internoj mreži. Dizajn ne predviđa prenos podataka na servere trećih strana, a vaši zapisi nikada ne služe za obučavanje tuđih modela.
    word: true
  - fig: Kontinuitet
    body: Projektovan da na kapiji gradilišta radi bez internet veze, tako da mrežni prekidi i odluke spoljnih dobavljača ne zaustavljaju posao.
    word: true
  - fig: Usklađenost
    body: Projektovan da se uklopi u BIO standard i GDPR, bez posebnih odobrenja za cloud servise.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Objašnjivost
  heading: Svaka računica i kontrola na kapiji mora biti proverljiva.
  proof:
    fig: Deterministički
    label: Identičan unos daje identičan rezultat. Generički enterprise AI pravio je greške do 8.354 evra na jednoj stavci za iste ulazne podatke.
    src: Hamppi 2025, Univerzitet Aalto · Atil i dr. 2025
  body: 'Koja su ograničenja primenjena, kako je izbalansiran odnos cene i udaljenosti transporta, i zašto je izabran određeni dobavljač: sistem je projektovan da beleži tačnu matematičku formulu i težinske faktore.

    Isti princip važi na kapiji gradilišta: svako skeniranje otpremnice i uparivanje treba da se beleži sa vremenskim žigom, brojem narudžbine i procentom odstupanja.

    Za javne naručioce ovo podržava obrazloženje po članu 2.130 holandskog Zakona o javnim nabavkama. Za izvođače radova stvara dokumentovan dosije pri sporovima oko naknadnih radova ili neadekvatnog materijala.'
- tone: chalk-2
  eyebrow: Granice
  heading: Šta sistem ne radi.
  body: 'Dundir ne donosi samostalne poslovne odluke i ne zamenjuje stručnjake. Kalkulant, inženjer nabavke i poslovođa zadržavaju punu kontrolu.

    Sistem eliminiše ručni unos i proveru papira kako bi se profesionalci posvetili pregovorima, kontroli kvaliteta i strateškim odnosima. Formalna odluka i ugovorna odgovornost uvek ostaju na vašoj organizaciji.

    Sistem se kalibriše na bazi vaše stvarne istorije poslovanja. Kada iskusan inženjer ode, prikupljeno znanje o dobavljačima ostaje sačuvano u preduzeću.'
  caveat:
    lab: Iskreno o fazi razvoja
    text: Nijedan od tri modula još nije proizvod. Solver za nabavku je u fazi istraživanja i dizajna, pametna kapija je laboratorijski prototip, ugovorna memorija je dizajn. Partneri koji se sada pridruže odlučuju šta se prvo gradi.
---
