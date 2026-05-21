# 🐾 PetConnect — Digital Pet Adoption Platform

> A modern, 3D-styled pet adoption web application built with pure HTML, CSS, and JavaScript. No frameworks. No dependencies. Just open and run.

![PetConnect Banner](https://images.unsplash.com/photo-1444212477490-ca407925329e?w=1200&q=80&fit=crop)

---

## 📌 About the Project

**PetConnect** is a fully functional multi-page pet adoption platform where users can browse over **100 pets** across **10 categories**, view detailed profiles, and submit adoption applications — all with a premium 3D visual experience.

Built as a **2nd-year Computer Science Engineering project**, this website demonstrates clean separation of concerns, localStorage-based authentication, dynamic DOM rendering, and modern CSS 3D effects — all without a single external library.

---

## ✨ Features

- 🔐 **User Authentication** — Signup, Login, and Logout using `localStorage`
- 🏠 **3D Landing Page** — Hero with mouse-tilt parallax, floating pet cards, animated category grid
- 🐾 **Browse Page** — 104 pets with live search + category filter + 3D flip cards on hover
- 📋 **Adoption Form** — Auto-filled from session, with validation and animated success screen
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎨 **Custom Cursor** — Gold dot that grows on hover
- 🖼️ **Real Animal Photos** — Sourced from Unsplash (no API key needed)
- 🌿 **Premium Color Palette** — Deep Forest Green + Warm Gold + Ivory

---

## 🗂️ Project Structure

```
PetConnect3D/
│
├── index.html        → Home / Landing page
├── pets.html         → Browse all pets (search + filter + flip cards)
├── login.html        → Login page
├── signup.html       → Signup page
├── adopt.html        → Adoption application form
│
├── style.css         → Shared global styles (navbar, buttons, forms, footer)
├── index.css         → Homepage-only styles (hero, categories, steps, CTA)
├── pets.css          → Browse page styles (flip cards, filter bar, grid)
├── auth.css          → Login & signup split-layout styles
├── adopt.css         → Adoption form page styles
│
├── main.js           → Homepage JS (3D tilt, scroll-reveal, cursor, nav)
├── pets.js           → Pet data (104 pets) + browse page logic
├── auth.js           → Signup & login handlers
└── adopt.js          → Adoption form auto-fill, validation, success state
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser
1. Download or clone this repository
2. Open `index.html` in any modern browser
3. That's it — no build step, no server needed

### Option 2 — VS Code Live Server (recommended)
1. Open the `PetConnect3D` folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser auto-opens at `http://127.0.0.1:5500`

```bash
# Or clone and open
git clone https://github.com/your-username/PetConnect3D.git
cd PetConnect3D
code .
```

---

## 🧭 How to Use

| Step | Action |
|------|--------|
| 1 | Go to `signup.html` and create a free account |
| 2 | You'll be redirected to the homepage automatically |
| 3 | Click **Browse Pets** to explore all 104 animals |
| 4 | Use the **search bar** or **category filters** to find your pet |
| 5 | **Hover** any pet card to flip it and see details |
| 6 | Click **Adopt** on the back of a card |
| 7 | Submit the adoption form (auto-filled with your info) |

> **Note:** Protected pages (Browse, Adopt) require login. You'll be redirected automatically if not signed in.

---

## 🐾 Pet Categories

| Category | Count | Category | Count |
|----------|-------|----------|-------|
| 🐕 Dogs | 11 | 🐹 Hamsters | 10 |
| 🐈 Cats | 11 | 🐢 Turtles | 10 |
| 🐦 Birds | 11 | 🐾 Guinea Pigs | 10 |
| 🐠 Fish | 10 | 🐴 Horses | 10 |
| 🐇 Rabbits | 10 | 🦎 Exotic Pets | 11 |

**Total: 104 pets** across 10 categories, each with name, age, breed, gender, location, and description.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--forest` | `#1B3D2B` | Primary color, navbar, badges |
| `--gold` | `#C8943A` | Accents, CTA buttons, numbers |
| `--ivory` | `#FAF7F1` | Page background |
| `--font-d` | Cormorant Garamond | Headings, pet names |
| `--font-b` | Outfit | Body text, UI |

---

## ⚙️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure and semantics |
| CSS3 | Styling, 3D transforms, animations |
| Vanilla JavaScript | DOM manipulation, auth, filtering |
| localStorage | User accounts and session storage |
| Unsplash | Free high-quality animal photos |
| Google Fonts | Cormorant Garamond + Outfit |

---

## 🧠 Key Concepts Demonstrated

- **CSS `transform-style: preserve-3d`** — 3D flip cards
- **`perspective` & `rotateX/Y`** — Hero tilt on mouse movement
- **`backface-visibility: hidden`** — Clean card flip effect
- **`IntersectionObserver`** — Scroll-triggered reveal animations
- **`localStorage`** — Client-side auth without a backend
- **DOM manipulation** — Dynamic card rendering from a JS data array
- **URL query params** — Category pre-selection across pages (`?category=Dogs`)
- **CSS custom properties** — Consistent design tokens across all files

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| `index.html` | Hero with floating pet cards + 3D category grid |
| `pets.html` | 104 pets in a 3D flip-card grid with search + filter |
| `login.html` | Split-panel design with full-bleed photo |
| `adopt.html` | Two-column layout with pet image + form |

---

## 🔒 Authentication Notes

- User data is stored in **`localStorage`** under the key `petconnect_users`
- Passwords are stored as plain text (suitable for a college project — not for production)
- Session is stored under `petconnect_current_user`
- Logging out clears the session key

---

## 📁 Data Notes

All pet data lives in **`pets.js`** as a JavaScript array at the top of the file. Each pet object follows this structure:

```js
{
  id:          1,
  name:        'Bruno',
  age:         '2 years',
  breed:       'Golden Retriever',
  category:    'Dogs',
  gender:      'Male',
  location:    'Mumbai',
  description: 'Playful and affectionate...',
  img:         'https://images.unsplash.com/...'
}
```

To add a new pet, just push a new object into the `petsData` array in `pets.js`.

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 🤝 Contributing

This is a college project, but contributions are welcome!

1. Fork the repo
2. Create a new branch (`git checkout -b feature/add-pets`)
3. Make your changes
4. Commit (`git commit -m 'Add 5 new rabbit breeds'`)
5. Push and open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ as a **CSE 2nd Year Web Development Project**

> *"Every pet deserves a loving home."*

---

⭐ If you found this useful, consider giving it a star on GitHub!
