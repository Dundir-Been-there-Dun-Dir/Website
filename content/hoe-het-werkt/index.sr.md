---
title: Kako radi
description: Od specifikacije materijala do izveštaja spremnog za reviziju. Lokalno, matematički utemeljeno, sa celim tragom rezonovanja.
slug: kako-radi
lede: Dundir uklanja administrativni rad pre odluke i dokumentuje rezonovanje posle nje. Nabavljač pregleda i odlučuje. Sistem računa i beleži.
sections:
- eyebrow: Lanac
  heading: Pet koraka, jedan izveštaj.
  steps:
  - h: Unosite specifikaciju materijala
    p: Običnim jezikom, isto kao što biste je danas opisali. Bez obrasca za popunjavanje, bez posebne notacije.
  - h: AI sloj prevodi specifikaciju
    p: 'Sistem je pretvara u strukturirane zahteve nabavke: potrebne sertifikate, rokove isporuke, budžetska ograničenja i ponderisane ciljeve. Ovo je jedino mesto u lancu gde jezički model radi.'
  - h: Optimizaciona mašina računa najbolju kombinaciju
    p: Radi nad vašom bazom dobavljača i nalazi matematički dokazivo najbolju kombinaciju prema vašim tvrdim zahtevima i ponderisanim ciljevima. Ne predlog. Izračunat odgovor sa celim tragom rezonovanja.
  - h: Pregledate rezultat i odlučujete
    p: Vidite rangirano poređenje sa izvorima, statusom sertifikacije i celim tragom rezonovanja. Vi odlučujete. Sistem beleži vašu odluku i razlog.
  - h: Izveštaj spreman za reviziju nastaje automatski
    p: Spreman za internu saglasnost, eksternu reviziju ili ocenu javne nabavke. Bez dodatnog posla posle.
- tone: chalk
  eyebrow: Lokalno
  heading: Zašto radi na vašem serveru.
  body: 'Tri posledice lokalne implementacije koje su direktno važne opštinama i građevinskim firmama:'
  after: Ovo nije naša sklonost. To praksa nameće. U istraživanju u arhitektonskom birou Cedervall, GPT-4 je prototipiran pa odbačen zbog cene i zavisnosti od trećih strana; Llama-3 u oblaku je odbačena zbog dvadeset sekundi kašnjenja i zahteva da podaci ostanu na internoj mreži. Lokalna implementacija je bila jedini prihvatljiv ishod, i to u arhitektonskom birou, ne u opštini.
  claims:
  - fig: Podaci
    body: Vaši podaci o nabavci nikada ne napuštaju vaš server. Cene, dogovori sa dobavljačima i podaci iz ugovora ostaju gde im je mesto.
    word: true
  - fig: Kontinuitet
    body: Nema zavisnosti od spoljnih API-ja ili provajdera oblaka. Sistem ne staje kada dobavljač promeni cene ili uslove.
    word: true
  - fig: Usklađenost
    body: Sistem zadovoljava GDPR i IT politiku opština, bez potrebe da se za njega traži izuzetak.
    word: true
  source: Friðriksson 2025, KTH · van Duuren 2025, TU Delft
- eyebrow: Objašnjivost
  heading: Svaki rezultat pokazuje svoje rezonovanje.
  proof:
    fig: Identično
    label: Isti unos daje isti rezultat. Generički AI sistem je za identičan unos dao različite rezultate, sa greškama do 8.354 evra na jednoj stavci.
    src: Hamppi 2025, Univerzitet Aalto
  body: 'Koji izvori podataka su korišćeni, kako je svaki dobavljač ocenjen, zašto je jedan iznad drugog. Sistem to izričito beleži.


    Za opštine je to zakonski zahtev. Za građevinske firme je to razlika između izveštaja koji rukovodilac potpiše i izveštaja koji vrati.'
- tone: chalk-2
  eyebrow: Granice
  heading: Šta sistem ne radi.
  body: 'Dundir ne donosi odluke o nabavci. Nabavljač pregleda rezultat i odlučuje. Sistem ne zamenjuje nabavljača.


    On uklanja administrativni rad da bi nabavljač mogao da radi svoj pravi posao: da procenjuje, održava odnose i eskalira. Odluka i odgovornost ostaju kod vas.


    Sistem se obučava na vašoj istoriji nabavke, a ne na generičkom modelu. Rezultat poznaje vaše preferirane dobavljače, vaše zahteve za sertifikacijom i vaše ranije odluke. Kada iskusan nabavljač ode, to znanje ostaje dostupno celom timu.'
  caveat:
    lab: Iskreno o fazi
    text: Ovaj lanac je projektovan i delimično izgrađen, nije u produkciji kod klijenta. Ko sada ulazi, ulazi kao partner u razvoju i odlučuje na čemu se sistem kalibriše.
---
