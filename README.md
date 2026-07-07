# 🎵 ArtistsHub

## 📖 About the Project

ArtistsHub is a web application for discovering new music artists. Users can browse a list of artists, read their biographies, listen to their music, and leave reviews.

---

## 🖼️ Preview

<img width="1747" height="860" alt="image" src="https://github.com/user-attachments/assets/efb82809-d6e7-4313-80e2-f76c1a431d71" />

---

## 🛠️ Technologies

- **HTML5** / **CSS3** / **JavaScript (ES6+)**
- **Vite** — project bundler
- **SCSS** — CSS preprocessor
- **Axios** — HTTP requests
- **Swiper.js** — reviews slider
- **iziToast** — notification library
- **Raty.js** — star rating system
- **TUI Pagination** — pagination (optional task)

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 📁 Project Structure

```text
src/
├── js/
│   ├── api/          # API requests
│   ├── components/   # Components (modals, cards)
│   ├── sections/     # Section logic
│   ├── utils/        # Utilities (loader, toast, modal)
│   └── main.js       # Entry point
├── scss/
│   ├── sections/     # Section styles
│   ├── components/   # Component styles
│   ├── utils/        # Variables and mixins
│   └── styles.scss   # Main stylesheet
├── partials/         # HTML partials
└── index.html        # Main page
```

## 📋 Development Guidelines

### Git Workflow

- **`main` branch** — protected, changes are allowed only through Pull Requests.
- **Branch naming:** `feature/section-name`, `fix/bug-name`
- Before creating a Pull Request, make sure the project builds and runs without errors.

### Code Standards

- Use **BEM** methodology for CSS class names.
- Write styles using **SCSS** (use variables from `_variables.scss`).
- Use **Axios** for all HTTP requests (**never use `fetch`**).
- Follow **ES6+** syntax (arrow functions, async/await, etc.).

### Before Committing

```bash
npm run build
```

## 🌐 API

Backend: `https://sound-wave.b.goit.study/api`  
Documentation: https://sound-wave.b.goit.study/api-docs/

### Available Endpoints

- `GET /artists` — Get the list of artists
- `GET /artists/:id` — Get artist details
- `GET /artists/:id/albums` — Get an artist's albums
- `GET /feedbacks` — Get all reviews
- `POST /feedbacks` — Create a new review
- `GET /genres` — Get the list of music genres

## 👥 Team

- **Team Lead:** [@INitosI](https://github.com/INitosI)
- **Developer 1:** [Name]
- **Developer 2:** [Name]

## 📄 License

This project was created for educational purposes.
