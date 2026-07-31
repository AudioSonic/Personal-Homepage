export const projects = [
    {
        id: 1,
        title: "BrightBoost Landingpage",
        shortDescription: "Eine responsive Landingpage zur Präsentation der Leistungen einer fiktiven Marketingagentur.",
        longDescription: "Die BrightBoost Landing Page ist eine moderne und responsive Website für eine fiktive Marketing-Agentur mit Fokus auf Business Growth, Social Media Marketing und SEO. Ziel des Projekts war es, eine professionelle Unternehmenspräsenz zu gestalten, die Dienstleistungen übersichtlich präsentiert und potenzielle Kunden durch ein ansprechendes Design anspricht. Die Landing Page verfügt über eine klare Seitenstruktur mit einer Hero Section, mehreren Call-to-Action-Bereichen sowie einer Testimonial-Slideshow. Entwickelt wurde das Projekt mit HTML5, CSS3 und JavaScript. Dabei lag der Schwerpunkt auf einer responsiven Umsetzung, einer modernen Gestaltung und einer sauberen Codebasis.",
        category: "personal",
        type: "web",
        status: "completed",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [1,2,3, 20, 21, 24,26],
        github: "https://github.com/AudioSonic/BrightBoost-Landing-Page",
        liveDemo: "https://audiosonic.github.io/BrightBoost-Landing-Page/",
        featured: true,
        heroImage: "../assets/screenshots/BrightBoost_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/BrightBoost_Screenshot_1.png",
                alt: "BrightBoost Hero Section"
            },
            {
                src: "../assets/images/BrightBoost_Screenshot_2.png",
                alt: "Brightboost Caroussel"
            }

        ],
        highlights: [
            "Responsive Design für Desktop, Tablet und Smartphone",
            "Moderne Hero Section mit klarem Fokus auf Conversion",
            "Interaktive Testimonial-Slideshow mit JavaScript",
            "Strukturierte und wartbare Codebasis",
            "Zeitgemäßes UI mit klarer Benutzerführung",
            "Vollständig mit HTML, CSS und JavaScript umgesetzt – ohne Frameworks"
        ],
        startedAt: "2026-04-3",
        completedAt: "2026-04-13"
    },
    {
        id: 2,
        title: "Nordtech-Manufactoring",
        shortDescription: "Eine responsive Unternehmenswebsite zur Präsentation eines fiktiven Industrieunternehmens.",
        longDescription: "Die Nordtech Manufacturing Website ist eine moderne und responsive Unternehmenswebsite für ein fiktives Industrieunternehmen. Sie präsentiert die Leistungen, das Unternehmen und eine Kontaktmöglichkeit in einem professionellen und übersichtlichen Design. Das Projekt wurde mit HTML5, CSS3 und JavaScript entwickelt. Der Schwerpunkt lag auf einer klaren Seitenstruktur, einem modernen Erscheinungsbild sowie einer responsiven Umsetzung nach dem Mobile-First-Prinzip.",
        category: "personal",
        type: "web",
        status: "completed",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [1,2,3, 20, 21, 24,26],
        github: "https://github.com/AudioSonic/Nordtech-Manufactoring",
        liveDemo: "https://audiosonic.github.io/Nordtech-Manufactoring/",
        featured: true,
        heroImage: "../assets/screenshots/Nordtech_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/Nordtech_Screenshot_2.png",
                alt: "Dashboard"
            },
            {
                src: "../assets/screenshots/Nordtech_Screenshot_3.png",
                alt: "Application Mdal"
            },
            {
                src: "../assets/screenshots/Nordtech_Screenshot_4.png",
                alt: "Mobile Version"
            },
                {
                src: "../assets/screenshots/Nordtech_Screenshot_5.png",
                alt: "Mobile Version"
            }

        ],
        highlights: [
            "Mehrseitige Unternehmenswebsite mit klarer Navigation",
            "Responsive Umsetzung nach dem Mobile-First-Prinzip",
            "Modernes, industrielles UI/UX-Design",
            "Kontaktformular mit Validierung",
            "Strukturierte und wartbare Codebasis"
        ],
        startedAt: "2026-04-17",
        completedAt: "2026-05-20"
    },
    {
        id: 3,
        title: "Persönliche Homepage",
        shortDescription: "Eine modulare Portfolio-Website zur Präsentation von Fähigkeiten, Projekten und Erfahrungen.",
        longDescription: "Meine Portfolio-Homepage dient sowohl als persönliche Präsentation meiner Fähigkeiten und Projekte als auch als praxisnahes Lernprojekt im Bereich Frontend-Entwicklung. Ziel war es, eine moderne und professionelle Website zu entwickeln, die als Portfolio für Bewerbungen genutzt werden kann und gleichzeitig den Einstieg in aktuelle Webtechnologien vertieft.  Die Website wurde mit HTML5, CSS3 und JavaScript entwickelt und folgt einem modularen Aufbau mit wiederverwendbaren Komponenten, dynamisch geladenen Inhalten und einer klaren Trennung von Daten, Logik und Darstellung. Projekte und Skills werden vollständig dynamisch gerendert, wodurch moderne JavaScript-Konzepte wie ES Modules, DOM-Manipulation, State Management und asynchrone Datenverarbeitung praktisch umgesetzt werden. Besonderes Augenmerk lag außerdem auf einem responsiven Design, einer wartbaren Architektur und einer sauberen Codebasis.",
        category: "personal",
        type: "web",
        status: "inProgress",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [1,2,3, 20, 21, 24,26],
        github: "https://github.com/AudioSonic/Personal-Homepage",
        liveDemo: "https://audiosonic.github.io/Personal-Homepage/",
        featured: true,
        heroImage: "../assets/screenshots/Personal_Homepage_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/Personal_Homepage_Screenshot_1.png",
                alt: "Startseite"
            },
            {
                src: "../assets/screenshots/Personal_Homepage_Screenshot_2.png",
                alt: "Skills Seite"
            },
            {
                src: "../assets/screenshots/Personal_Homepage_Screenshot_3.png",
                alt: "Projektseite"
            },
                {
                src: "../assets/screenshots/Personal_Homepage_Screenshot_4.png",
                alt: "Mobile Version"
            }

        ],
        highlights: [
            "Modulare Architektur mit wiederverwendbaren Komponenten",
            "Dynamisches Rendering von Skills und Projekten",
            "Responsive Design mit Dark-/Light-Mode",
            "Einsatz von ES Modules, fetch() und State Management",
            "Klare Trennung von Daten, Logik und Darstellung"
        ],
        startedAt: "2026-03-29",
        completedAt: ""
    },
    {
        id: 4,
        title: "ApplyHQ",
        shortDescription: "Eine Webanwendung zur Erfassung, Organisation und Nachverfolgung von Bewerbungen.",
        longDescription: "ApplyHQ ist eine moderne Web-App zur Verwaltung von Bewerbungen und wurde als praxisnahes Lern- und Portfolio-Projekt entwickelt. Ziel der Anwendung ist es, den gesamten Bewerbungsprozess an einem zentralen Ort zu organisieren – von der Erfassung neuer Bewerbungen über die Verwaltung des aktuellen Status bis hin zur schnellen Suche und Bearbeitung bestehender Einträge.  Die Anwendung wurde mit HTML5, CSS3 und modernem JavaScript entwickelt und setzt auf eine modulare Architektur mit wiederverwendbaren UI-Komponenten und dynamischem Rendering. Bewerbungsdaten werden lokal im Browser gespeichert und können über JSON-Dateien importiert oder exportiert werden. Darüber hinaus verfügt ApplyHQ über ein responsives Design, Such-, Filter- und Sortierfunktionen sowie Unterstützung als Progressive Web App (PWA), wodurch die Anwendung auf Desktop- und Mobilgeräten installiert und wie eine native App genutzt werden kann. Das Projekt wird kontinuierlich weiterentwickelt und dient als Grundlage für den schrittweisen Ausbau zu einer vollwertigen Bewerbungsplattform.",
        category: "personal",
        type: "web",
        status: "inProgress",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [1,2,3, 20, 21, 24,26],
        github: "https://github.com/AudioSonic/ApplyHQ",
        liveDemo: "https://audiosonic.github.io/ApplyHQ/",
        featured: true,
        heroImage: "../assets/screenshots/ApplyHQ_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/ApplyHQ_Screenshot_1.png",
                alt: "Startseite"
            }

        ],
        highlights: [
            "Vollständige CRUD-Verwaltung für Bewerbungen",
            "Suche, Filter und Sortierung in Echtzeit",
            "Modulare Architektur mit wiederverwendbaren UI-Komponenten",
            "JSON-Import und -Export sowie Local Storage",
            "Progressive Web App (PWA) mit Installation auf Desktop und Smartphone",
            "Responsives Design für alle Bildschirmgrößen"
        ],
        startedAt: "2026-07-09",
        completedAt: ""
    },
    {
        id: 5,
        title: "itm:MANAGER",
        shortDescription: "Eine Software zur Verwaltung von Kursprogrammen, Teilnehmern und Anmeldungen für Bildungsstätten.",
        longDescription: "Der itm:MANAGER ist eine Software zur Verwaltung von Kursprogrammen für Bildungsstätten. Kurse, Teilnehmer und Anmeldungen werden zentral gespeichert und verwaltet. Über einen Webservice werden die Kursdaten an die jeweiligen Webseiten übertragen. Ich war an der Pflege und Weiterentwicklung beteiligt, integrierte neue Funktionen, suchte und behob Fehler und pflegte die Dokumentation.",
        category: "professional",
        type: "software",
        status: "inProgress",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [8,11,13,9,20, 22,23],
        github: "",
        liveDemo: "",
        featured: true,
        heroImage: "../assets/screenshots/itmMANAGER_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/itmMANAGER_Screenshot_1.png",
                alt: "Startseite"
            },
            {
                src: "../assets/screenshots/itmMANAGER_Screenshot_2.png",
                alt: "Startseite"
            }

        ],
        highlights: [
            "Verwaltung von Kursen, Teilnehmern und Anmeldungen",
            "Zentrale Speicherung und Pflege von Kursprogrammdaten",
            "Übertragung von Kursdaten über einen Webservice",
            "Integration neuer Funktionen und Fehlerbehebung",
            "Pflege der technischen Dokumentation"
        ],
        startedAt: "2026-07-09",
        completedAt: ""
    },
    {
        id: 6,
        title: "itm:PAGES",
        shortDescription: "Ein Tool zur Erstellung digital verlinkter Kursprogrammhefte für Volkshochschulen.",
        longDescription: "itm:PAGES stattet Kursprogrammhefte von Volkshochschulen mit direkten Links zu den jeweiligen Kursseiten aus. Jeder Kurs erhält einen Button, über den Leser direkt zur passenden Kursseite auf der Website der Volkshochschule gelangen. Die fertigen Hefte werden anschließend auf den jeweiligen Webseiten eingebunden. Ich erstelle die Hefte und bin allein für die Pflege und Erweiterung des Programms verantwortlich. Dafür habe ich den bestehenden Code refaktoriert und zahlreiche redundante Arbeitsschritte automatisiert.",
        category: "professional",
        type: "software",
        status: "inProgress",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [8,10,9,20,22,23],
        github: "",
        liveDemo: "",
        featured: true,
        heroImage: "../assets/screenshots/itmPAGES_Screenshot_1.png",
        screenshots: [
        ],
        highlights: [
            "Verlinkung einzelner Kurse mit den jeweiligen Kursseiten",
            "Erstellung digital verlinkter Kursprogrammhefte",
            "Automatisierung redundanter Arbeitsschritte",
            "Refaktorierung des bestehenden Codes",
            "Eigenständige Pflege und Weiterentwicklung"
        ],
        startedAt: "2026-07-09",
        completedAt: ""
    },
    {
        id: 7,
        title: "Tool zur Massendatenänderung",
        shortDescription: "Ein eigenständig entwickeltes Tool zur effizienten Bearbeitung, Validierung und Protokollierung großer Datenmengen im itm:MANAGER.",
        longDescription: "Das Tool zur Massendatenänderung entstand als Abschlussprojekt meiner betrieblichen Einzelumschulung zum Fachinformatiker für Anwendungsentwicklung. Die Anwendung ermöglicht es, große Datenmengen im itm:MANAGER gleichzeitig zu bearbeiten, zu validieren und zu protokollieren. Dadurch wird der administrative Aufwand reduziert und die Nachvollziehbarkeit von Änderungen verbessert. Die funktionale Logik des itm:MANAGER wurde mit einem vollständig in Figma entwickelten UI/UX-Konzept verbunden. Die Anwendung wurde mit C# und Windows Forms entwickelt und um eine direkte Anbindung an Microsoft SQL Server sowie eine Protokollierungsfunktion ergänzt. Ich war für Planung, Konzeption, Implementierung, Testing und Präsentation des gesamten Projekts verantwortlich.",
        category: "professional",
        type: "software",
        status: "completed",
        // Verweise auf die zentralen Einträge in js/data/skills.js
        technologies: [8,11,13,9,20,22,23,26],
        github: "",
        liveDemo: "",
        featured: true,
        heroImage: "../assets/screenshots/Massenaenderung_Screenshot_1.png",
        screenshots: [
            {
                src: "../assets/screenshots/Massenaenderung_Screenshot_1.png",
                alt: "Startseite"
            },
            {
                src: "../assets/screenshots/Massenaenderung_Screenshot_2.png",
                alt: "Startseite"
            }

        ],
        highlights: [
            "Massenbearbeitung großer Datenmengen",
            "Datenvalidierung und nachvollziehbare Änderungsprotokolle",
            "Direkte Anbindung an Microsoft SQL Server",
            "Entwicklung mit C# und Windows Forms",
            "UI/UX-Konzept und Umsetzung in Figma",
            "Performance-Optimierung und eigenständige Projektplanung"
        ],
        startedAt: "2026-07-09",
        completedAt: ""
    }
]
