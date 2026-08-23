---
title: Dundir
description: AI sistem za optimizaciju nabavke u gradjevinarstvu. Lokalna implementacija. Matematicki utemeljen. Spreman za reviziju.
headline: Sedamdeset odsto vašeg projekta je <span class="cut">nabavka.</span>
sub: Ne planiranje, ne nadzor, ne kancelarijski troškovi. Materijal. A tih sedamdeset odsto i dalje se odlučuje u tabeli, od strane nabavljača koji jedanaest sati nedeljno upoređuje ponude.
stack:
  label: Jedan evro troškova projekta, podeljen
  source: Donyavi i dr. 2024, u Hamppi 2025
  alt: 'Podela troškova projekta: 70 odsto materijal, 18 odsto rad, 12 odsto ostalo.'
  segments:
  - kind: material
    pct: 70%
    name: Materijal · ovde Dundir računa
  - kind: labour
    pct: 18%
    name: Rad
  - kind: other
    pct: 12%
    name: Ostalo
  footLeft: Nabavka nije pomoćna funkcija
  footRight: Ona je struktura troška
sections:
- eyebrow: Šta košta
  heading: Račun već teče.
  claims:
  - fig: 11 sati
    body: nedeljno, po nabavljaču, na upoređivanje dobavljača u Excelu i e-pošti. Sa tri nabavljača to je 148.500 evra godišnje neproduktivnog vremena, pre troška pogrešnog izbora.
  - fig: '8.354'
    body: evra greške na jednoj jedinoj stavci tendera. Generički enterprise AI sistem je za identičan unos vratio različite numeričke rezultate. To nije izuzetak, tako generativna veštačka inteligencija radi.
  - fig: <5%
    body: zaposlenih prati holandski infrastrukturni projekat od 500 do 600 miliona evra od početka do kraja. Znanje o nabavci odlazi između dve faze projekta, a nijedan sistem ga ne zadržava.
  source: Rockx 2023, TU Delft
- tone: chalk
  eyebrow: Razlika
  heading: Računanje, ne generisanje.
  lede: 'Jezički model napiše odgovor. Optimizaciona mašina ga izračuna. Ta razlika nije akademska: to je razlika između saveta koji ne možete da odbranite i odluke koju će revizor ili komisija za nabavke prihvatiti.'
  body: 'Dundir fiksira vaša tvrda ograničenja, KOMO sertifikaciju, rok isporuke i budžetski plafon, a unutar njih meri cenu, pouzdanost i CO2 prema težinama koje sami zadajete. Ostaje jedna kombinacija dobavljača, sa pravilom koje ju je izabralo ispod nje. AI sloj čita specifikaciju i piše izveštaj. Optimizacija donosi odluku.


    Sistem radi na vašem serveru. Vaše cene, dogovori sa dobavljačima i podaci iz ugovora ne napuštaju vašu mrežu. Za opštinu to nije želja nego uslov.


    <strong>Isti unos daje isti rezultat. Svaki put.</strong>'
- tone: chalk-2
  eyebrow: Gde smo
  heading: Nije gotovo, i radije to kažemo sami.
  body: 'Dundir je istraživački program sa firmom oko njega, a ne gotov proizvod sa istraživačkom pričom oko njega. Teorija optimizacije nije nova. Njena primena na holandsku građevinsku nabavku jeste, a ključno pitanje je i dalje otvoreno: šta tačno znači <em>optimalno</em>, izmereno preko cene, roka, sertifikacije i održivosti, i pri kojoj količini podataka taj pristup nadmašuje iskusnog nabavljača.


    Upravo zato tražimo partnere, a ne kupce. Ko se priključi u ovoj fazi, odlučuje na čemu se sistem kalibriše i zadržava ono što je izgrađeno.'
  caveat:
    lab: Šta istraživanje ne dokazuje
    text: Literatura potkrepljuje problem i model lokalne implementacije. Ne dokazuje da naš konkretan pristup optimizaciji u praksi kupuje jeftinije od iskusnog nabavljača. Ta validacija mora da dođe iz pilot podataka, a njih još nemamo.
- eyebrow: Za koga
  heading: Dva kupca, jedan problem.
  claims:
  - fig: 50 do 500
    body: <strong>Srednji izvođači.</strong> Administracija nabavke troši vreme koje se bolje koristi drugde, a dobitak je merljiv u vraćenim satima. CPR 2024 povrh toga postavlja nove zahteve za dokumentaciju. Dundir tu dokumentaciju isporučuje usput.
  - fig: '342'
    body: <strong>Holandske opštine.</strong> Svaka odluka o nabavci mora biti dokazivo odbranjiva. Zakon o javnim nabavkama zahteva dokumentovanu procenu izbora dobavljača, a 342 opštine to rade gotovo istim procesima. Dundir uz svaku odluku proizvodi potreban revizorski trag.
  chipslabel: Propisi koji ovo nameću
  chips:
  - label: Aanbestedingswet
    live: true
  - label: CPR 2024/3110
    live: true
  - label: CSRD Scope 3
    live: false
---
