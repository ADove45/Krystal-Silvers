# Krystal Silvers

Mafia Romance interactive stories, hosted on GitHub Pages. No build step.

- `index.html` – author landing page
- `good-girl.html` – *Mafia Daddy's Captivating Good Girl*, a self-contained interactive romance (5 acts, 6 endings, HER/HIM scenes, Listen).
- `config.js` – the one settings file both pages read: the novel's sales link, the cover image file name, and the email sign-up address.

## Settings (`config.js`)
- `BOOK_URL` – sales link for the novel. Shows the cover and a link on the landing page, the game's title page and every ending.
- `COVER_IMG` – cover image file in this folder (default `cover.jpg`).
- `EMAIL_FORM_URL` – form address from your email service. Readers are asked for an email once, before the story starts.
- `EMAIL_FIELD` – name of the email box your service expects (usually `email`).
- `EMAIL_REQUIRED` – `false` lets readers skip the sign-up; `true` makes it required.

Anything left blank stays hidden.

## Publish
Repo Settings → Pages → Deploy from branch → `main` and `/ (root)`.
