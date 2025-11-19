# Viliha Hugo Site

This repository contains the **Viliha website** built with [Hugo](https://gohugo.io/).

---

## 📂 Project Structure

```
mysite/
 ├── config.toml         # Default (development) config
 ├── config.qa.toml      # QA environment config
 ├── config.prod.toml    # Production environment config
 ├── themes/
 │    └── my-theme/        # Your custom theme
 ├── content/            # Site content (Markdown)
 ├── layouts/            # Custom layouts (optional)
 ├── static/             # Static assets (CSS, JS, images)
 ├── archetypes/         # Archetypes for new content
 └── public/             # Generated static site (output)
```

---

## 🚀 Getting Started

1. **Install Hugo**

   ```bash
   # macOS
   brew install hugo

   # Windows
   choco install hugo
   ```

2. **Create a new site**

   ```bash
   hugo new site mysite
   cd mysite
   ```

3. **Add the custom theme**

   ```bash
   hugo new theme viliha
   ```

4. **Set the theme in your config**

   In `config.toml`:

   ```toml
   theme = "viliha"
   ```

---

## 🌐 Base URLs

We use **different base URLs** for different environments.

| Environment | Base URL                   |
| ----------- | -------------------------- |
| Development | `http://localhost:1313/`   |
| QA          | `https://demo.viliha.com/` |
| Production  | `https://www.viliha.com/`  |

---

## ⚙️ Config files

- `` (default, development)

  ```toml
  baseURL = "http://localhost:1313/"
  theme = "viliha"
  ```

- `` (QA)

  ```toml
  baseURL = "https://demo.viliha.com/"
  theme = "viliha"
  ```

- `` (Production)

  ```toml
  baseURL = "https://www.viliha.com/"
  theme = "viliha"
  ```

---

## 🧩 Running locally (Development)

```bash
hugo server --config config.toml
```

Access at: [http://localhost:1313](http://localhost:1313)

---

## 🚧 Build for QA

```bash
hugo --config config.qa.toml
```

Output is generated in the `public/` folder. Deploy this folder to your QA server at `https://demo.viliha.com/`.

---

## ✅ Build for Production

```bash
hugo --config config.prod.toml
```

Output is generated in the `public/` folder. Deploy this folder to your production server at `https://www.viliha.com/`.

---

## 🗂️ Deployment Notes

- The `public/` folder contains your complete static site.
- Upload it to your web server or CDN (e.g., Netlify, Vercel, S3, etc.).
- Always verify that the **baseURL** matches your live domain.

---

## 💙 Hugo Docs

- [Hugo Themes](https://gohugo.io/themes/)
- [Configuration](https://gohugo.io/getting-started/configuration/)
- [Hugo Commands](https://gohugo.io/commands/)

---

Happy building!\
**Viliha Web Services 🚀**

