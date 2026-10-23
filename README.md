# 🚀 Personal Portfolio — Alex Veluz

A **modern, fully responsive** personal portfolio built with **React 18 + Vite + TypeScript**, featuring glassmorphism design, animated particle background, Framer Motion scroll reveals, smooth Lenis scrolling, and a working EmailJS contact form.

---

## ✨ Features

- ⚡ **Vite + React 18 + TypeScript** — blazing fast DX
- 🎨 **Tailwind CSS v4** — utility-first styling with custom design tokens
- 🌀 **Framer Motion** — scroll-triggered reveals, layout animations
- 🔵 **Custom Canvas Particles** — interactive particle network in the hero
- 🌊 **Lenis** — buttery smooth scrolling
- 🌗 **Dark / Light mode** — persisted in localStorage
- 📬 **EmailJS contact form** — with client-side validation + success/error states
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation, skip-nav, `prefers-reduced-motion`
- 📱 **Mobile-first responsive** — hamburger nav, fluid grids
- 🔍 **SEO ready** — meta tags, Open Graph, Twitter Card, page title

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf           ← [REPLACE] your actual resume
│   └── projects/            ← [ADD] project screenshot images
│       ├── project1.png
│       └── ...
├── src/
│   ├── assets/              ← static images, icons
│   ├── components/
│   │   ├── FadeIn.tsx       ← reusable scroll-reveal wrapper
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticlesBackground.tsx
│   │   └── SectionWrapper.tsx
│   ├── data/                ← ✏️ EDIT THESE to personalise your portfolio
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollSpy.ts
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            ← design tokens, global styles
├── .env                     ← EmailJS keys (do NOT commit)
├── .env.example             ← template for env variables
└── index.html               ← SEO meta tags, Google Fonts, Devicon CDN
```

---

## 🛠️ Setup & Running Locally

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Install & Run
```bash
# Clone or copy the project
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Copy env template and fill in your EmailJS keys
cp .env.example .env

# Start the dev server
npm run dev
# → Open http://localhost:5173
```

---

## ✏️ How to Edit Content

All site content lives in `/src/data/` — **never touch components to update text**.

### Personal Info (`/src/data/personal.ts`)
```ts
export const personal = {
  name: 'Your Name',
  roles: ['Full-Stack Developer', 'React Specialist'],
  tagline: 'Your one-liner tagline...',
  bio: `Your 2-3 sentence bio...`,
  location: 'City, Country',
  socials: {
    github: 'https://github.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourhandle',
    twitter: 'https://twitter.com/yourhandle',
    email: 'you@example.com',
  },
  resume: '/resume.pdf',
  stats: [
    { label: 'Years Experience', value: '3+' },
    // ...
  ],
}
```

### Projects (`/src/data/projects.ts`)
Add entries to the `projects` array:
```ts
{
  id: 'project-1',
  title: 'My Project',
  description: 'Short description...',
  image: '/projects/myproject.png', // add image to /public/projects/
  tech: ['React', 'Node.js'],
  category: 'fullstack', // 'fullstack' | 'frontend' | 'backend' | 'mobile'
  github: 'https://github.com/you/repo',
  live: 'https://myproject.com',
  featured: true,
}
```

### Skills (`/src/data/skills.ts`)
Update the `skills` array. Icons use [Devicon](https://devicon.dev/) class names.

### Certifications (`/src/data/certifications.ts`)
Add/edit certification entries with name, issuer, date, and credential URL.

### Experience (`/src/data/experience.ts`)
Add work and education entries to the `timeline` array.

---

## 📧 Configuring EmailJS

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an **Email Service** (e.g., Gmail, Outlook)
3. Create an **Email Template** — use these variable names:
   - `{{user_name}}` — sender's name
   - `{{user_email}}` — sender's email
   - `{{message}}` — the message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Edit your `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Never commit your `.env` file.** It's already in `.gitignore`.

---

## 📸 Adding Your Profile Photo

Replace the photo placeholder in `AboutSection.tsx`:
1. Add your photo to `/public/` or `/src/assets/` (e.g., `profile.jpg`)
2. Open `/src/sections/AboutSection.tsx`
3. Find the comment `{/* [PLACEHOLDER] Replace src with your actual photo */}`
4. Replace the placeholder `<div>` with:
```tsx
<img
  src="/profile.jpg"
  alt="Alex Veluz — profile photo"
  className="w-full h-full object-cover"
/>
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy --prod
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) → **Import Project**.

**Add Environment Variables** in Vercel dashboard:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Netlify
```bash
npm run build
# Then drag the /dist folder to netlify.com/drop
```

Or connect your repo and set:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Environment variables**: same as above

---

## 🎨 Customising the Design

Design tokens are defined in `/src/index.css` inside `:root`:

```css
:root {
  --color-primary: #7c3aed;      /* Violet accent */
  --color-secondary: #06b6d4;   /* Cyan accent */
  --color-accent: #f472b6;      /* Pink accent */
  --color-bg: #050816;           /* Dark background */
  /* ... */
}
```

Change these to instantly retheme the entire site.

---

## 📝 Placeholder Checklist

Search for `[PLACEHOLDER]` in the data files to find everything you need to replace:

- [ ] Your name, bio, location, tagline
- [ ] Social media URLs and email
- [ ] Add `/public/resume.pdf`
- [ ] Add your profile photo
- [ ] Update project details and images in `/public/projects/`
- [ ] Update skills with your actual tech stack
- [ ] Replace placeholder certifications and experience
- [ ] Configure EmailJS credentials in `.env`

---

## 📄 License

MIT — free to use and modify for your personal portfolio.
