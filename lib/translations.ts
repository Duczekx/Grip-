export type Language = "de" | "en" | "pl";

export const translations = {
  de: {
    header: {
      logo: "TERRA",
      nav: [
        { label: "Produkt", href: "#produkt" },
        { label: "Vorteile", href: "#vorteile" },
        { label: "Technische Daten", href: "#technische-daten" },
        { label: "Einsatzbereiche", href: "#einsatzbereiche" },
        { label: "Galerie", href: "#galerie" },
        { label: "Anfrage", href: "#anfrage" }
      ],
      cta: "Angebot anfragen",
      menu: "Menü öffnen"
    },
    hero: {
      headline: "TERRA GF 1900",
      subheadline: "Hydraulische Spezial-Greifgabel für Antonio Carraro und Kompakttraktoren.",
      text:
        "Leicht, kompakt und robust - entwickelt für Maschinen, bei denen Standard-Greifgabeln zu schwer, zu breit oder nicht passend sind.",
      facts: [
        "Eigengewicht ca. 250 kg",
        "Arbeitsbreite 1900 mm",
        "Gerätedreieck Kat. 1 / Kat. 2 möglich"
      ],
      primaryCta: "Angebot anfragen",
      secondaryCta: "Technische Daten ansehen",
      imageAlt: "TERRA GF 1900 Hydraulische Spezial-Greifgabel",
      imageFallback: "Produktbild: /images/terra-gf-red-cutout.png",
      colorLabel: "Farbe wählen",
      colors: {
        red: "Rot",
        orange: "Orange",
        black: "Schwarz"
      }
    },
    stats: [
      { value: "1900 mm", label: "Arbeitsbreite" },
      { value: "ca. 250 kg", label: "Eigengewicht" },
      { value: "Kat. 1 / Kat. 2", label: "Aufnahme" },
      { value: "Hydraulisch", label: "Obergreifer" }
    ],
    benefits: {
      label: "Vorteile",
      title: "Kompakt gebaut. Technisch präzise. Für enge Einsätze.",
      cards: [
        {
          title: "Leicht & robust",
          text: "Stabile Bauweise bei niedrigem Eigengewicht - ideal für kompakte Traktoren."
        },
        {
          title: "Kompakt gebaut",
          text: "Entwickelt für enge Einsatzbereiche, Hanglagen und wendige Maschinen."
        },
        {
          title: "Hydraulische Greifkraft",
          text: "Der Obergreifer hält Äste, Grünschnitt und loses Material sicher zusammen."
        },
        {
          title: "Individuelle Aufnahme",
          text: "Ausführung passend zur Maschine: Gerätedreieck Kat. 1 / Kat. 2 oder Sonderaufnahme."
        }
      ]
    },
    problemSolution: {
      label: "Speziallösung",
      title: "Warum eine Spezial-Greifgabel?",
      problemTitle: "Das Problem",
      problem:
        "Viele Standard-Greifgabeln sind für kompakte Traktoren zu schwer, zu breit oder auf größere Lader ausgelegt. Bei Maschinen wie Antonio Carraro zählt jedes Kilogramm und die Aufnahme muss exakt passen.",
      solutionTitle: "Die Lösung",
      solution:
        "Die TERRA GF 1900 wurde genau für diesen Einsatz entwickelt: kompakte Abmessungen, ca. 250 kg Eigengewicht, hydraulischer Obergreifer und eine Aufnahme nach Kundenanforderung.",
      imageAlt: "TERRA GF 1900 im Einsatz mit Antonio Carraro",
      imageCaption: "Kompakter Einsatz mit Antonio Carraro auf engem Gelände."
    },
    applications: {
      label: "Einsatzbereiche",
      title: "Für Arbeiten, bei denen große Maschinen nicht sinnvoll sind.",
      items: [
        "Landschaftspflege",
        "Grünschnitt & Äste",
        "Landwirtschaft",
        "Pferdehaltung",
        "Kommunaltechnik",
        "Kompost, Mist & Silage"
      ]
    },
    technicalData: {
      label: "Technische Daten",
      title: "Klare Daten ohne erfundene Leistungswerte.",
      rows: [
        ["Modell", "TERRA GF 1900"],
        ["Typ", "Hydraulische Spezial-Greifgabel"],
        ["Arbeitsbreite", "1900 mm"],
        ["Eigengewicht", "ca. 250 kg"],
        ["Aufnahme", "Gerätedreieck Kat. 1 / Kat. 2 möglich"],
        ["Hydraulik", "Hydraulischer Obergreifer"],
        ["Lackierung", "Epoxy-Primer + Industrielack"],
        ["Fertigung", "Sonderanfertigung nach Kundenwunsch"],
        ["Einsatzbereiche", "Äste, Grünschnitt, Kompost, Mist, Silage"]
      ],
      dimensionTitle: "Draufsicht mit Grundmaßen",
      dimensions: {
        width: "Arbeitsbreite 1900 mm",
        length: "Gabellänge 1500 mm",
        alt: "TERRA GF 1900 Draufsicht mit Maßlinien"
      }
    },
    gallery: {
      label: "Galerie",
      title: "Produktbilder, Fertigung und Einsatz werden hier sauber ergänzt.",
      fallback: "Bildplatzhalter",
      images: [
        { label: "Designvisualisierung Rot", src: "/images/terra-gf-red-cutout.png" },
        { label: "Designvisualisierung Orange", src: "/images/terra-gf-orange-cutout.png" },
        { label: "Designvisualisierung Schwarz", src: "/images/terra-gf-black-cutout.png" },
        { label: "Fertigung im Betrieb", src: "/images/terra-gf-workshop.jpg" },
        { label: "Oberflächenvorbereitung", src: "/images/terra-gf-primer.jpg" },
        { label: "Einsatz mit Antonio Carraro", src: "/images/terra-gf-work-1.jpg" },
        { label: "Einsatz mit Antonio Carraro", src: "/images/terra-gf-work-2.jpg" }
      ]
    },
    comparison: {
      label: "Vergleich",
      title: "Standard-Greifgabel vs. TERRA GF 1900",
      standardTitle: "Standard-Greifgabel",
      terraTitle: "TERRA GF 1900",
      standard: [
        "häufig schwerer aufgebaut",
        "oft für größere Lader entwickelt",
        "meist Standardaufnahme",
        "Serienprodukt ohne Anpassung",
        "einfache Lackierung"
      ],
      terra: [
        "ca. 250 kg Eigengewicht",
        "für kompakte Traktoren entwickelt",
        "Aufnahme nach Kundenwunsch",
        "Sonderanfertigung",
        "Epoxy-Primer + Industrielack"
      ]
    },
    inquiry: {
      label: "Anfrage",
      title: "Anfrage für Ihre Maschine",
      text:
        "Senden Sie uns Ihr Traktormodell, die gewünschte Aufnahme und den geplanten Einsatzbereich. Wir melden uns mit einer passenden Lösung.",
      fields: {
        name: "Name",
        company: "Firma",
        email: "E-Mail",
        phone: "Telefon",
        tractor: "Traktormodell",
        mounting: "Aufnahme",
        application: "Einsatzbereich",
        message: "Nachricht"
      },
      submit: "Anfrage senden",
      note: "Das Formular ist vorbereitet und kann später an eine E-Mail-Funktion angeschlossen werden."
    },
    footer: {
      brand: "TERRA Maschinenbau",
      text: "Speziallösungen für kompakte Maschinen und professionelle Einsätze.",
      contact: "Kontakt auf Anfrage",
      links: ["Impressum", "Datenschutz", "AGB"]
    }
  },
  pl: {
    header: {
      logo: "TERRA",
      nav: [
        { label: "Produkt", href: "#produkt" },
        { label: "Zalety", href: "#vorteile" },
        { label: "Dane techniczne", href: "#technische-daten" },
        { label: "Zastosowania", href: "#einsatzbereiche" },
        { label: "Galeria", href: "#galerie" },
        { label: "Zapytanie", href: "#anfrage" }
      ],
      cta: "Zapytaj o ofertę",
      menu: "Otwórz menu"
    },
    hero: {
      headline: "TERRA GF 1900",
      subheadline: "Hydrauliczna specjalistyczna widło-chwytak do Antonio Carraro i traktorów kompaktowych.",
      text:
        "Lekka, kompaktowa i solidna konstrukcja - zaprojektowana do maszyn, dla których standardowe chwytaki są zbyt ciężkie, zbyt szerokie albo po prostu niedopasowane.",
      facts: [
        "Masa własna ok. 250 kg",
        "Szerokość robocza 1900 mm",
        "Możliwe mocowanie Gerätedreieck Kat. 1 / Kat. 2"
      ],
      primaryCta: "Zapytaj o ofertę",
      secondaryCta: "Zobacz dane techniczne",
      imageAlt: "TERRA GF 1900 Hydrauliczna specjalistyczna widło-chwytak",
      imageFallback: "Zdjęcie produktu: /images/terra-gf-red-cutout.png",
      colorLabel: "Wybierz kolor",
      colors: {
        red: "Czerwony",
        orange: "Pomarańczowy",
        black: "Czarny"
      }
    },
    stats: [
      { value: "1900 mm", label: "szerokość robocza" },
      { value: "ok. 250 kg", label: "masa własna" },
      { value: "Kat. 1 / Kat. 2", label: "mocowanie" },
      { value: "Hydrauliczny", label: "górny chwytak" }
    ],
    benefits: {
      label: "Zalety",
      title: "Kompaktowa budowa. Techniczna precyzja. Do pracy w ciasnych miejscach.",
      cards: [
        {
          title: "Lekka i solidna",
          text: "Stabilna konstrukcja przy niskiej masie własnej - idealna do traktorów kompaktowych."
        },
        {
          title: "Kompaktowa konstrukcja",
          text: "Opracowana do ciasnych miejsc pracy, zboczy i zwrotnych maszyn."
        },
        {
          title: "Hydrauliczny chwyt",
          text: "Górny chwytak pewnie trzyma gałęzie, zielone odpady i luźny materiał."
        },
        {
          title: "Indywidualne mocowanie",
          text: "Wykonanie pod konkretną maszynę: Gerätedreieck Kat. 1 / Kat. 2 albo mocowanie specjalne."
        }
      ]
    },
    problemSolution: {
      label: "Rozwiązanie specjalne",
      title: "Dlaczego specjalistyczna widło-chwytak?",
      problemTitle: "Problem",
      problem:
        "Wiele standardowych chwytaków jest dla kompaktowych traktorów zbyt ciężkich, zbyt szerokich albo projektowanych pod większe ładowacze. Przy maszynach typu Antonio Carraro liczy się każdy kilogram, a mocowanie musi pasować dokładnie.",
      solutionTitle: "Rozwiązanie",
      solution:
        "TERRA GF 1900 została opracowana dokładnie do takich zastosowań: kompaktowe wymiary, ok. 250 kg masy własnej, hydrauliczny górny chwytak i mocowanie wykonane pod wymagania klienta.",
      imageAlt: "TERRA GF 1900 w pracy z Antonio Carraro",
      imageCaption: "Kompaktowa praca z Antonio Carraro w ciasnym terenie."
    },
    applications: {
      label: "Zastosowania",
      title: "Do prac, w których duże maszyny nie mają sensu.",
      items: [
        "Pielęgnacja krajobrazu",
        "Zielone odpady i gałęzie",
        "Rolnictwo",
        "Utrzymanie koni",
        "Prace komunalne",
        "Kompost, obornik i kiszonka"
      ]
    },
    technicalData: {
      label: "Dane techniczne",
      title: "Konkretne dane bez wymyślonych wartości udźwigu.",
      rows: [
        ["Model", "TERRA GF 1900"],
        ["Typ", "Hydrauliczna specjalistyczna widło-chwytak"],
        ["Szerokość robocza", "1900 mm"],
        ["Masa własna", "ok. 250 kg"],
        ["Mocowanie", "Gerätedreieck Kat. 1 / Kat. 2 możliwe"],
        ["Hydraulika", "Hydrauliczny górny chwytak"],
        ["Lakierowanie", "Epoxy-Primer + lakier przemysłowy"],
        ["Wykonanie", "Wykonanie specjalne według wymagań klienta"],
        ["Zastosowania", "Gałęzie, zielone odpady, kompost, obornik, kiszonka"]
      ],
      dimensionTitle: "Widok z góry z wymiarami bazowymi",
      dimensions: {
        width: "Szerokość 1900 mm",
        length: "Długość wideł 1500 mm",
        alt: "TERRA GF 1900 widok z góry z liniami wymiarowymi"
      }
    },
    gallery: {
      label: "Galeria",
      title: "Tutaj można czysto pokazać render, produkcję, przygotowanie powierzchni i pracę w terenie.",
      fallback: "Miejsce na zdjęcie",
      images: [
        { label: "Wizualizacja projektu czerwona", src: "/images/terra-gf-red-cutout.png" },
        { label: "Wizualizacja projektu pomarańczowa", src: "/images/terra-gf-orange-cutout.png" },
        { label: "Wizualizacja projektu czarna", src: "/images/terra-gf-black-cutout.png" },
        { label: "Produkcja w warsztacie", src: "/images/terra-gf-workshop.jpg" },
        { label: "Przygotowanie powierzchni", src: "/images/terra-gf-primer.jpg" },
        { label: "Praca z Antonio Carraro", src: "/images/terra-gf-work-1.jpg" },
        { label: "Praca z Antonio Carraro", src: "/images/terra-gf-work-2.jpg" }
      ]
    },
    comparison: {
      label: "Porównanie",
      title: "Standardowy chwytak vs. TERRA GF 1900",
      standardTitle: "Standardowy chwytak",
      terraTitle: "TERRA GF 1900",
      standard: [
        "często cięższa konstrukcja",
        "często projektowany pod większe ładowacze",
        "zwykle standardowe mocowanie",
        "produkt seryjny bez dopasowania",
        "podstawowe lakierowanie"
      ],
      terra: [
        "ok. 250 kg masy własnej",
        "opracowana do traktorów kompaktowych",
        "mocowanie według wymagań klienta",
        "wykonanie specjalne",
        "Epoxy-Primer + lakier przemysłowy"
      ]
    },
    inquiry: {
      label: "Zapytanie",
      title: "Zapytanie do Twojej maszyny",
      text:
        "Wyślij model traktora, wymagane mocowanie i planowany zakres pracy. Wrócimy z dopasowanym rozwiązaniem.",
      fields: {
        name: "Imię i nazwisko",
        company: "Firma",
        email: "E-mail",
        phone: "Telefon",
        tractor: "Model traktora",
        mounting: "Mocowanie",
        application: "Zastosowanie",
        message: "Wiadomość"
      },
      submit: "Wyślij zapytanie",
      note: "Formularz jest przygotowany wizualnie i później może zostać podłączony do wysyłki e-mail."
    },
    footer: {
      brand: "TERRA Maschinenbau",
      text: "Specjalne rozwiązania do kompaktowych maszyn i profesjonalnych zastosowań.",
      contact: "Kontakt na zapytanie",
      links: ["Impressum", "Polityka prywatności", "AGB"]
    }
  },
  en: {
    header: {
      logo: "TERRA",
      nav: [
        { label: "Product", href: "#produkt" },
        { label: "Benefits", href: "#vorteile" },
        { label: "Technical Data", href: "#technische-daten" },
        { label: "Applications", href: "#einsatzbereiche" },
        { label: "Gallery", href: "#galerie" },
        { label: "Inquiry", href: "#anfrage" }
      ],
      cta: "Request quote",
      menu: "Open menu"
    },
    hero: {
      headline: "TERRA GF 1900",
      subheadline: "Hydraulic special grapple fork for Antonio Carraro and compact tractors.",
      text:
        "Lightweight, compact and robust - developed for machines where standard grapple forks are too heavy, too wide or simply not suitable.",
      facts: [
        "Approx. 250 kg own weight",
        "1900 mm working width",
        "Gerätedreieck Cat. 1 / Cat. 2 available"
      ],
      primaryCta: "Request quote",
      secondaryCta: "View technical data",
      imageAlt: "TERRA GF 1900 hydraulic special grapple fork",
      imageFallback: "Product image: /images/terra-gf-red-cutout.png",
      colorLabel: "Choose color",
      colors: {
        red: "Red",
        orange: "Orange",
        black: "Black"
      }
    },
    stats: [
      { value: "1900 mm", label: "working width" },
      { value: "approx. 250 kg", label: "own weight" },
      { value: "Cat. 1 / Cat. 2", label: "mounting" },
      { value: "Hydraulic", label: "upper grapple" }
    ],
    benefits: {
      label: "Benefits",
      title: "Compact construction. Technical precision. Built for tight working areas.",
      cards: [
        {
          title: "Lightweight & robust",
          text: "Stable construction with low own weight - ideal for compact tractors."
        },
        {
          title: "Compact design",
          text: "Developed for tight work areas, slopes and agile machines."
        },
        {
          title: "Hydraulic grip",
          text: "The upper grapple keeps branches, green waste and loose material securely together."
        },
        {
          title: "Custom mounting",
          text: "Built to match the machine: Gerätedreieck Cat. 1 / Cat. 2 or custom mounting."
        }
      ]
    },
    problemSolution: {
      label: "Special solution",
      title: "Why a special grapple fork?",
      problemTitle: "The problem",
      problem:
        "Many standard grapple forks are too heavy, too wide or designed for larger loaders. With machines like Antonio Carraro, every kilogram matters and the mounting system must fit precisely.",
      solutionTitle: "The solution",
      solution:
        "The TERRA GF 1900 was developed for exactly this use case: compact dimensions, approx. 250 kg own weight, hydraulic upper grapple and a mounting system built to customer requirements.",
      imageAlt: "TERRA GF 1900 in use with Antonio Carraro",
      imageCaption: "Compact work with Antonio Carraro in tight terrain."
    },
    applications: {
      label: "Applications",
      title: "For jobs where large machines are not the right fit.",
      items: [
        "Landscape maintenance",
        "Green waste & branches",
        "Agriculture",
        "Horse keeping",
        "Municipal work",
        "Compost, manure & silage"
      ]
    },
    technicalData: {
      label: "Technical data",
      title: "Clear data without invented load values.",
      rows: [
        ["Model", "TERRA GF 1900"],
        ["Type", "Hydraulic special grapple fork"],
        ["Working width", "1900 mm"],
        ["Own weight", "approx. 250 kg"],
        ["Mounting", "Gerätedreieck Cat. 1 / Cat. 2 available"],
        ["Hydraulics", "Hydraulic upper grapple"],
        ["Coating", "Epoxy primer + industrial topcoat"],
        ["Fabrication", "Custom-built to customer requirements"],
        ["Applications", "Branches, green waste, compost, manure, silage"]
      ],
      dimensionTitle: "Top view with base dimensions",
      dimensions: {
        width: "Working width 1900 mm",
        length: "Fork length 1500 mm",
        alt: "TERRA GF 1900 top view with dimension lines"
      }
    },
    gallery: {
      label: "Gallery",
      title: "Product renders, workshop images and field use can be added cleanly here.",
      fallback: "Image placeholder",
      images: [
        { label: "Red design visualization", src: "/images/terra-gf-red-cutout.png" },
        { label: "Orange design visualization", src: "/images/terra-gf-orange-cutout.png" },
        { label: "Black design visualization", src: "/images/terra-gf-black-cutout.png" },
        { label: "In-house fabrication", src: "/images/terra-gf-workshop.jpg" },
        { label: "Surface preparation", src: "/images/terra-gf-primer.jpg" },
        { label: "In use with Antonio Carraro", src: "/images/terra-gf-work-1.jpg" },
        { label: "In use with Antonio Carraro", src: "/images/terra-gf-work-2.jpg" }
      ]
    },
    comparison: {
      label: "Comparison",
      title: "Standard grapple fork vs. TERRA GF 1900",
      standardTitle: "Standard grapple fork",
      terraTitle: "TERRA GF 1900",
      standard: [
        "often heavier construction",
        "often designed for larger loaders",
        "mostly standard mounting",
        "mass-produced without adaptation",
        "basic paint finish"
      ],
      terra: [
        "approx. 250 kg own weight",
        "developed for compact tractors",
        "mounting built to customer requirements",
        "custom-built",
        "epoxy primer + industrial topcoat"
      ]
    },
    inquiry: {
      label: "Inquiry",
      title: "Inquiry for your machine",
      text:
        "Send us your tractor model, required mounting system and planned application. We will get back to you with a suitable solution.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        tractor: "Tractor model",
        mounting: "Mounting system",
        application: "Application",
        message: "Message"
      },
      submit: "Send inquiry",
      note: "The form UI is prepared and can later be connected to an email function."
    },
    footer: {
      brand: "TERRA Maschinenbau",
      text: "Special solutions for compact machines and professional applications.",
      contact: "Contact on request",
      links: ["Legal notice", "Privacy policy", "Terms"]
    }
  }
} as const;

export type Translations = (typeof translations)[Language];
