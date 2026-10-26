
![Personal Homepage](assets/screenshots/Personal_Homepage_Screenshot_1.png)

# Personal Homepage

Die **Personal Homepage** ist die persönliche Portfolio-Website von Alexander Stach. Sie präsentiert den beruflichen Schwerpunkt als Frontend- und Softwareentwickler und gibt einen kompakten Überblick über Projekte, Fähigkeiten und Kontaktmöglichkeiten.

**Live-Demo:** [alexander-stach.dev](https://alexander-stach.dev/)

## Zweck

Die Website dient als zentrale digitale Visitenkarte und Portfolio. Interessierte können sich über bisherige private und berufliche Projekte, eingesetzte Technologien sowie den persönlichen Werdegang informieren. Das Kontaktformular validiert die Eingaben clientseitig, versendet jedoch keine Nachrichten direkt. Nach dem Absendeversuch wird stattdessen ein Hinweis mit der E-Mail-Adresse angezeigt.

## Highlights

- Moderne, responsive Portfolio-Oberfläche für Desktop und mobile Geräte
- Übersichtliche Bereiche für Startseite, Projekte, Skills und Kontakt
- Dynamische Darstellung von Projekten und Technologien
- Projekt- und Skill-Details in interaktiven Modalfenstern
- Screenshot-Karussell für Projektansichten
- Kategorien und Tabs zur schnellen Filterung der Inhalte
- Kontaktformular mit clientseitiger Validierung und Hinweis auf die direkte E-Mail-Adresse statt direktem Nachrichtenversand
- SEO-Grundlagen mit Meta-Tags, Open Graph, Sitemap und `robots.txt`
- Deployment als statische Website, unter anderem für GitHub Pages geeignet

## Technologien

- **HTML5** für die semantische Struktur der Seiten
- **CSS3** für Layout, responsive Design, Komponenten und Animationen
- **JavaScript (ES Modules)** für Navigation, Datenverarbeitung und Interaktionen
- **JSON** als Datenbasis für Projekte, Skills und weitere Inhalte
- **Node.js** und `backend/` als vorbereitete, derzeit nicht implementierte Backend-Struktur
- **GitHub Pages** für die Veröffentlichung der statischen Website

Die produktive Implementierung befindet sich im Repository-Stamm und basiert auf statischem HTML, CSS und JavaScript. Langfristig ist geplant, die Website zu einer Fullstack-React-Anwendung weiterzuentwickeln.

## Lokaler Start

Da die Website HTML-Komponenten und JSON-Daten per `fetch()` lädt, sollte sie über einen lokalen HTTP-Server und nicht direkt über `file://` geöffnet werden. Mit Python kann sie beispielsweise aus dem Repository-Stamm gestartet werden:

```bash
python -m http.server 8000
```

Anschließend ist die Website unter [http://localhost:8000](http://localhost:8000) erreichbar. Der Befehl benötigt eine installierte Python-Version.

## Projektstruktur

```text
├── assets/      Bilder, Screenshots und Icons
├── backend/     Backend-Struktur
├── css/         Globale, komponenten- und seitenspezifische Styles
├── data/        JSON-Daten für Projekte und Inhalte
├── html/        Wiederverwendbare HTML-Komponenten
├── js/          Module, Komponenten und Seitenskripte
├── *.html       Die einzelnen Seiten der Website
└── README.md    Projektdokumentation
```

## Screenshots

![Personal Homepage Screenshot 1](assets/screenshots/Personal_Homepage_Screenshot_1.png)

![Personal Homepage Screenshot 2](assets/screenshots/Personal_Homepage_Screenshot_2.png)

![Personal Homepage Screenshot 3](assets/screenshots/Personal_Homepage_Screenshot_3.png)

![Personal Homepage Screenshot 4](assets/screenshots/Personal_Homepage_Screenshot_4.png)

![Personal Homepage Screenshot 5](assets/screenshots/Personal_Homepage_Screenshot_5.png)

![Personal Homepage Screenshot 6](assets/screenshots/Personal_Homepage_Screenshot_6.png)
