# AtemGuard PWA Beta

## Start
Die App muss über `https://` oder `localhost` laufen, damit der Kamerazugriff funktioniert.

Einfacher lokaler Test:
```bash
cd AtemGuard_PWA_Beta
python -m http.server 8000
```

Dann öffnen:
```text
http://localhost:8000
```

Auf dem Handy muss die Seite über HTTPS laufen, z.B. über einen kleinen Webserver, GitHub Pages, Netlify oder lokalen HTTPS-Server.

## Installation
Android Chrome:
Menü -> Zum Startbildschirm hinzufügen.

iPhone Safari:
Teilen -> Zum Home-Bildschirm.

## QR-Testformat

JSON:
```json
{"name":"Max Mustermann","einheit":"LE 12","agtNr":"4711","funktion":"Truppführer"}
```

Einfaches Textformat:
```text
Max Mustermann;LE 12;4711;Truppführer
```

## Hinweis
Die QR-Scanner-Bibliothek wird in dieser Beta per CDN geladen. Für eine komplett offlinefähige Einsatzversion sollte die Bibliothek lokal eingebunden werden.
