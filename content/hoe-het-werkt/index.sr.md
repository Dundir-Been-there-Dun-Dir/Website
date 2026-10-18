---
title: Kako radi
description: Od specifikacije materijala do provere na kapiji i zakonskog dosijea o primopredaji. Lokalno implementirano, matematički utemeljeno, sa potpunim revizorskim tragom.
slug: kako-radi
lede: Dundir povezuje matematičku optimizaciju nabavke sa fizičkom verifikacijom na kapiji gradilišta i trajnim ugovornim pamćenjem. Inženjer procenjuje i odlučuje. Sistem računa, proverava i arhivira.
sections:
- eyebrow: Lanac procesa
  heading: Pet koraka od tehničkog opisa do primopredaje.
  steps:
  - h: Strukturiranje specifikacije
    p: 'AI jezički sloj analizira vaš tehnički opis ili tendersku dokumentaciju na standardnom jeziku. Sistem izdvaja tvrda ograničenja, rokove isporuke, budžetske limite i CPR 2024 zahteve za sertifikaciju. Ovo je jedina faza u kojoj je jezički model aktivan.'
  - h: Deterministički solver računa optimum
    p: 'Optimizacioni algoritam vrednuje jediničnu cenu, dinamiku isporuke, transportne kilometre i utrošak CO2. Čista matematika: identičan unos uvek daje identičan rezultat, uz transparentan trag proračuna.'
  - h: Pametna kontrola na kapiji i trostrano uparivanje
    p: 'Pri dolasku kamiona na gradilište, mobilni ili stacionarni edge OCR skenira otpremnicu i registarske tablice. Sistem u realnom vremenu vrši automatsko trostrano uparivanje narudžbenice, fizičke otpremnice i fakture.'
  - h: Formiranje dosijea o primopredaji
    p: 'Atesti, otpremnice i zapisi o kontroli kvaliteta automatski se povezuju u zakonski dosije o primopredaji (Dossier Bevoegd Gezag prema Wkb regulativi). Nema dokumentacije koja nedostaje pri konačnom pregledu.'
  - h: Povratna sprega u ugovornu memoriju
    p: 'Stvarna tačnost isporuka, uočena odstupanja i odstupanja u cenama automatski se evidentiraju. Ovi podaci rekalibrišu parametre ocenjivanja za naredne tendere.'
- tone: chalk
  eyebrow: Suverenitet podataka
  heading: Zašto sistem radi lokalno na vašem serveru.
  body: 'Građevinski proračuni, cene i ugovorni uslovi predstavljaju poslovnu tajnu najvišeg nivoa. Dundir radi 100% lokalno na vašoj infrastrukturi ili namenskom hardveru na gradilištu:'
  after: 'Lokalna implementacija je operativna nužnost. Istraživanje u birou Cedervall pokazalo je da su javni cloud modeli neprihvatljivi zbog visokih mesečnih naknada, zavisnosti od eksternih servera i strogih internih pravila o izolaciji podataka. Za holandsku javnu upravu i građevinske lidere važi standard BIO 2019: podaci ne smeju da napuste internu mrežu.'
  claims:
  - fig: Suverenitet
    body: Vaši podaci o nabavci i cenama nikada ne napuštaju internu mrežu. Nema prenosa podataka na servere trećih strana, a vaši zapisi nikada ne služe za obučavanje tuđih modela.
    word: true
  - fig: Kontinuitet
    body: Potpuna funkcionalnost bez stalne internet veze na kapiji gradilišta. Sistem nesmetano radi tokom mrežnih prekida i nezavisan je od politike spoljnih dobavljača.
    word: true
  - fig: Usklađenost
    body: Direktno zadovoljava BIO 2019 standarde javne uprave, ISO 27001 i GDPR regulativu bez potrebe za traženjem posebnih odobrenja za cloud servise.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Objašnjivost
  heading: Svaka računica i kontrola na kapiji je proverljiva.
  proof:
    fig: Deterministički
    label: Identičan unos daje identičan rezultat. Generički enterprise AI pravio je greške do 8.354 evra na jednoj stavci za iste ulazne podatke.
    src: Hamppi 2025, Univerzitet Aalto · Atil i dr. 2025
  body: 'Koja su ograničenja primenjena, kako je izbalansiran odnos cene i udaljenosti transporta, i zašto je izabran određeni dobavljač: sistem beleži tačnu matematičku formulu i težinske faktore.

    Isti princip važi na kapiji gradilišta: svako skeniranje otpremnice i uparivanje beleži se sa vremenskim žigom, brojem narudžbine i procentom odstupanja.

    Za javne naručioce ovo zadovoljava član 2.130 Zakona o javnim nabavkama. Za izvođače radova stvara pouzdan pravni dosije pri sporovima oko naknadnih radova ili neadekvatnog materijala.'
- tone: chalk-2
  eyebrow: Granice
  heading: Šta sistem ne radi.
  body: 'Dundir ne donosi samostalne poslovne odluke i ne zamenjuje stručnjake. Kalkulant, inženjer nabavke i poslovođa zadržavaju punu kontrolu.

    Sistem eliminiše ručni unos i proveru papira kako bi se profesionalci posvetili pregovorima, kontroli kvaliteta i strateškim odnosima. Formalna odluka i ugovorna odgovornost uvek ostaju na vašoj organizaciji.

    Sistem se kalibriše na bazi vaše stvarne istorije poslovanja. Kada iskusan inženjer ode, prikupljeno znanje o dobavljačima ostaje sačuvano u preduzeću.'
  caveat:
    lab: Iskreno o fazi razvoja
    text: Tri modula su projektovana i potvrđena u testiranim okruženjima, a ne kao masovni proizvod sa police. Partneri koji se sada pridružuju direktno učestvuju u podešavanju i integraciji.
---
