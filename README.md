# Composer App

A simple Angular project demonstrating the use of `async` pipes and component interaction. Built as part of an academic exercise and deployed via GitHub Pages.

---

## 🚀 Live Site

🔗 [https://dross73.github.io/composer-app/](https://dross73.github.io/composer-app/)

> ⚠️ **Note:** This app is hosted on GitHub Pages. There may be a brief delay (a few seconds) if the site has not been accessed recently, due to GitHub Pages caching and cold-loading behavior.

---

## 🧰 Tech Stack

- Angular (v10+)
- TypeScript
- HTML/CSS

---

## 📦 Development

### Serve Locally

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will auto-reload on file changes.

### Build for Production

```bash
ng build --configuration production --base-href /composer-app/
```

This builds the project for GitHub Pages under the `/composer-app/` path.

---

## 🌐 Deployment

Deployment is handled via the `angular-cli-ghpages` tool:

```bash
npx angular-cli-ghpages --dir=dist/composer-app
```

This publishes the production build to the `gh-pages` branch for GitHub Pages hosting.

---

## ✨ Author

Dan Ross
[GitHub](https://github.com/dross73)
