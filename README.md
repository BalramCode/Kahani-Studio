# 🎬 Kahani Studio | Cinematic Filmography Portfolio

![Kahani Studio Banner](https://res.cloudinary.com/ddptxvwrj/video/upload/so_0/v1777883965/KS_Clips_krfhrk.jpg)

**Kahani Studio** is a premium, high-performance digital portfolio designed for a film production house based in Bhawanipatna, Odisha. Built with a focus on **Cinematic UI**, it utilizes advanced animations, glassmorphism, and seamless video integration to showcase provocative narratives and elite-level filmmaking.

---

## 🌟 The Vision

"Kahani" means *Story*. This project was built to bridge the gap between traditional filmography and modern web experiences. The goal was to create a website that feels like a movie trailer—fast, immersive, and visually striking.

### 📊 Performance Analytics (MAA: The Unsolved Mystery)

Our storytelling isn't just visual; it's data-driven:

- **60%+ Audience Retention:** Holding attention across a 13.5-minute narrative  
- **8–9 Min Avg. View Duration:** Category-leading engagement on YouTube  
- **20K+ Organic Views:** Authentic, culture-driven pull with zero paid promotion  

---

## 🎬 Featured Filmography

### 🎥 MAA: The Unsolved Mystery (2025)

- **Status:** Released  
- **Tagline:** *"A prayer answered in the wrong voice. A mystery that refuses to close its eyes."*  
- **Highlights:** A provocative mystery thriller that turned a small-town whisper into a digital phenomenon  

### 🎥 ROOP (2026)

- **Status:** In Production *(Teaser drops 06 April 2026)*  
- **Tagline:** *"Is she a curse… or the reason curse exists?"*  
- **Highlights:** A folk-horror set in dark woods where the swing never stops moving. Directed by Anushka Mishra  

---

## 🛠️ Tech Stack

| Layer        | Technology |
|-------------|-----------|
| Frontend    | React.js (Vite) |
| Styling     | Tailwind CSS |
| Animations  | Framer Motion (Staggered, Magnetic, Layout transitions) |
| Icons       | Lucide React |
| Media       | Cloudinary (Adaptive Bitrate Streaming) |

---

## 📂 Project Structure

```text
Kahani-Studio/
├── public/                     # Static assets (favicon, meta images, etc.)
│
├── src/
│   ├── assets/                # Images, videos, textures (Ember/Obsidian theme)
│   │   ├── images/
│   │   └── videos/
│   │
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Base UI elements (dialog, sheet, toaster)
│   │   │   ├── dialog.jsx
│   │   │   ├── sheet.jsx
│   │   │   └── toaster.jsx
│   │   │
│   │   ├── Hero.jsx           # Cinematic landing section
│   │   ├── Header.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer section
│   │   ├── Gallery.jsx        # Film gallery (masonry/grid)
│   │   ├── Careers.jsx        # Roles & hiring section
│   │   ├── Analytics.jsx      # Performance metrics UI
│   │   ├── Sponsorship.jsx    # Brand collaboration section
│   │   └── Work.jsx           # Filmography showcase
│   │
│   │── mock.js            # FILMS, SOCIALS, ANALYTICS, CAREERS
│   │
│   │── index.css          # Tailwind + custom effects (grain, vignette)
│   ├── App.jsx                # Root component (layout orchestration)
│   ├── main.jsx               # Entry point
│
├── .gitignore
├── index.html                # HTML template
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BalramCode/Kahani-Studio.git
cd Kahani-Studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## ✨ UI Implementation Highlights

### 🎭 Staggered Interactive Roles

The careers section features a filtered list of roles like **Cinematographers, Screenwriters, and Film Editors**. It uses `AnimatePresence` to handle smooth layout transitions when switching between departments such as Camera and Post Production.

### 🎞️ Cinematic Hero Section

Implements a dual-source video strategy (WebM/MP4) with a parallax-ready wrapper. Typography includes a **"Halo" glow effect** to mimic a cinema screen.

### 🖼️ Film Gallery

A masonry-style grid showcasing the visual storytelling of films—from **"Raghu" and "Shiv"** in *MAA* to the haunting **"Pisachini"** and **"Dark Woods"** in *ROOP*.

---

## 🤝 Connect with the Studio

- **YouTube:** https://www.youtube.com/@KahanixStudio  
- **Instagram:** https://www.instagram.com/kahanixstudio  
- **Email:** kahanixstudio@gmail.com  
- **Location:** Bhawanipatna, Odisha — India  

---

## 👨‍💻 Author

**Balram Naik (Tech Lead)**  
*EST. 2024 | Kahani Studio — Storytelling That Commands Attention.*
