# mariedabee 🐝 Portfolio

The personal portfolio of **Mariam Bari**, a software developer from the Bremen area, built as a futuristic, game-style website in neon green on black.

> **Open to work:** part-time (Teilzeit), Bremen area or remote.

## Features

- **Game-style UI:** "Player Select" home screen, character stats, a tabbed "Character Profile", Quest Log, Trophies and Memory Cards
- **Interactive background:** a neon particle network that reacts to the mouse, over a scrolling retro grid
- **English / German:** language switch in the navbar; defaults to the visitor's browser language and remembers their choice
- **CV page with PDF download:** the CV is rendered on the site and generated as a clean A4 PDF in the selected language
- **Contact form:** messages are stored in MongoDB and emailed via SMTP, with server-side validation and spam protection (honeypot field, minimum fill time, 5 messages per visitor per hour)
- **Link previews:** custom preview card when the site is shared on LinkedIn, WhatsApp, X, …
- **Photo gallery:** tilted memory cards with a lightbox (arrow keys to browse)

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, TypeScript, Material UI, React Router, `@react-pdf/renderer` |
| Backend | Node.js, Express, MongoDB, Nodemailer |
| Tooling | Create React App, Git, VS Code, Postman |

## Project structure

```
frontend/
  public/                  favicon, app icons, link preview image, index.html
  src/
    components/            pages and UI (home, about, cv, contact, navbar, background, …)
    data/cvData.ts         ALL CV content (EN + DE): jobs, education, skills, certificates, availability
    i18n/translations.ts   UI text (EN + DE)
    shared/                images (profile picture, gallery photos, logo)
backend/
  server.js                Express app
  routes/                  contact form + spam protection
  .env.example             template for local settings
```

## Running locally

**Requirements:** Node.js 18+ and MongoDB (e.g. `brew services start mongodb-community`).

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env     # then fill in your values
node server.js           # runs on http://localhost:3001
```

`.env` settings:

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB connection, e.g. `mongodb://localhost:27017/portfolio` |
| `EMAIL_USER`, `EMAIL_PASS` | SMTP login for contact form emails (for Gmail, use an [App Password](https://myaccount.google.com/apppasswords)) |
| `EMAIL_TO` | optional: where messages are delivered (defaults to `EMAIL_USER`) |
| `EMAIL_HOST`, `EMAIL_PORT` | optional: SMTP server (defaults to Gmail) |

Without email settings, contact messages are still saved to the `messages` collection.

### 2. Frontend

```bash
cd frontend
npm install --legacy-peer-deps   # @mui/styles still declares a React 17 peer dependency
npm start                        # runs on http://localhost:3000
```

Settings live in `frontend/.env`:

| Variable | Purpose |
| --- | --- |
| `REACT_APP_SITE_URL` | public address of the site, used for link previews; set it to the live `https://` address when deploying |
| `REACT_APP_API_URL` | optional: backend address (defaults to `http://localhost:3001`) |

## Updating content

| What | Where |
| --- | --- |
| Jobs, education, skills, certificates, projects, availability | `frontend/src/data/cvData.ts` (edit both `en` and `de`) |
| Page text (home bio, hobbies, buttons, …) | `frontend/src/i18n/translations.ts` |
| Gallery photos and captions | `frontend/src/shared/imagesAlbum/` + `frontend/src/components/about/imageData.js` |
| Profile picture | `frontend/src/shared/profilePicture.jpg` |
| Link preview image | `frontend/public/og-image.png` (1200×630) |

The CV page and the PDF download both read from `cvData.ts`, so they always stay in sync.

## Useful MongoDB commands

```bash
mongosh portfolio
db.messages.find().sort({ createdAt: -1 })   # latest contact messages
show collections
```

## Contact

- GitHub: [@mariedabee](https://github.com/mariedabee)
- Or use the contact form on the website
