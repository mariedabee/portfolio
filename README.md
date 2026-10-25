# mariedabee 🐝 Portfolio

The personal portfolio of **Mariam Bari**, a software developer from the Bremen area, built as a futuristic, game-style website in neon green on black.

> **Open to work:** part-time (Teilzeit), Bremen area or remote.

## Features

- **Game-style UI:** "Player Select" home screen, character stats, a tabbed "Character Profile", Quest Log, Trophies and Memory Cards
- **Interactive background:** a neon particle network that reacts to the mouse, over a scrolling retro grid
- **English / German:** language switch in the navbar; defaults to the visitor's browser language and remembers their choice
- **CV page with PDF download:** the CV is rendered on the site and generated as a clean A4 PDF in the selected language
- **Contact form:** messages are emailed via SMTP (and optionally stored in MongoDB), with server-side validation and spam protection (honeypot field, minimum fill time, 5 messages per visitor per hour)
- **Link previews:** custom preview card when the site is shared on LinkedIn, WhatsApp, X, …
- **Photo gallery:** tilted memory cards with a lightbox (arrow keys to browse)

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, TypeScript, Material UI, React Router, `@react-pdf/renderer` |
| API | Vercel serverless function (Node.js), Nodemailer, optional MongoDB |
| Hosting | Vercel |
| Tooling | Create React App, Git, VS Code, Postman |

## Project structure

```
frontend/
  api/
    submit-form.js         contact form endpoint (POST /api/submit-form)
    _spamProtection.js     honeypot, timing check and rate limit
  public/                  favicon, app icons, link preview image, index.html
  src/
    components/            pages and UI (home, about, cv, contact, navbar, background, …)
    data/cvData.ts         ALL CV content (EN + DE): jobs, education, skills, certificates, availability
    i18n/translations.ts   UI text (EN + DE)
    shared/                images (profile picture, gallery photos, logo)
    setupProxy.js          runs the API inside the local dev server
  vercel.json              routing for Vercel
```

## Running locally

**Requirements:** Node.js 18+.

```bash
cd frontend
npm install                  # .npmrc sets legacy-peer-deps (@mui/styles still declares React 17)
cp .env.example .env.local   # then fill in your email settings
npm start                    # site + contact form API on http://localhost:3000
```

The contact form API runs inside the dev server, so there is no separate backend to start.

### Settings

`frontend/.env.local` (secrets, git-ignored; on Vercel: Project Settings → Environment Variables):

| Variable | Purpose |
| --- | --- |
| `EMAIL_USER`, `EMAIL_PASS` | SMTP login for contact form emails (for Gmail, use an [App Password](https://myaccount.google.com/apppasswords)) |
| `EMAIL_TO` | optional: where messages are delivered (defaults to `EMAIL_USER`) |
| `EMAIL_HOST`, `EMAIL_PORT` | optional: SMTP server (defaults to Gmail) |
| `MONGODB_URI` | optional: also store messages in MongoDB, e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster |

`frontend/.env` (public, committed):

| Variable | Purpose |
| --- | --- |
| `REACT_APP_SITE_URL` | public address of the site, used for link previews; set it to the live `https://` address |

## Deploying to Vercel

1. Import the GitHub repo on [vercel.com](https://vercel.com) and set **Root Directory** to `frontend`.
2. Add the environment variables from `.env.local` (and `REACT_APP_SITE_URL` with the live address).
3. Deploy. Every `git push` to `main` deploys automatically.
4. Add a custom domain under Project Settings → Domains.

## Updating content

| What | Where |
| --- | --- |
| Jobs, education, skills, certificates, projects, availability | `frontend/src/data/cvData.ts` (edit both `en` and `de`) |
| Page text (home bio, hobbies, buttons, …) | `frontend/src/i18n/translations.ts` |
| Gallery photos and captions | `frontend/src/shared/imagesAlbum/` + `frontend/src/components/about/imageData.js` |
| Profile picture | `frontend/src/shared/profilePicture.jpg` |
| Link preview image | `frontend/public/og-image.png` (1200×630) |

The CV page and the PDF download both read from `cvData.ts`, so they always stay in sync.

## Contact

- GitHub: [@mariedabee](https://github.com/mariedabee)
- Or use the contact form on the website
