# Marlo S. Veluz Jr. — Personal Portfolio

My personal portfolio as an Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Application Development. It brings together my projects, technical skills, certifications, education, and contact details.

Built with React, TypeScript, and Vite, the site uses a monochrome design with a fixed sidebar, responsive layouts, and light and dark themes.

## Features

- Seven sections: Home, Projects, About, Skills, Certificates, Education, and Contact.
- Project filtering by All, Web, and Mobile, with screenshots, technology lists, development roles, and website or demo links.
- Light and dark themes that follow the system preference until a theme is selected, with the selection saved in the browser.
- Theme-specific profile portraits and a matching favicon.
- GitHub contribution calendar with daily activity details, loading feedback, and a retry option when data is unavailable.
- Thirteen certification entries with external credential links when provided.
- Education and student organization timeline.
- Direct email, telephone, and social links.
- Scroll reveal animations, reduced motion support, a skip link, and labeled navigation with active section tracking.
- Page metadata for search engines and social sharing.

## Featured projects

| Project | Description | My role | Website or demo |
| --- | --- | --- | --- |
| ISKKOLAR Web Application | Capstone scholarship management system for Kapatiran-Kaunlaran Foundation, Inc. | Backend Developer | [Visit website](https://www.kkfi-iskkolar.org) |
| ISKKOLAR Mobile App | Mobile companion to the ISKKOLAR scholarship management system. | Backend Developer | [Watch demo](https://drive.google.com/file/d/1f6LKSBNGPmuSGTxah60-Ef5TPbP50t2H/view?usp=sharing) |
| Legendary Lifestyle | Personal full-stack e-commerce project for clothing and everyday essentials. | Full-Stack Developer | [Visit website](https://legendary-ecommerce.vercel.app) |

## Technology

| Purpose | Technology |
| --- | --- |
| User interface | React 19, TypeScript 6 |
| Development and production build | Vite 8 |
| Styling | Tailwind CSS 4 and custom CSS |
| Animation | Framer Motion |
| Icons | Lucide React and React Icons |
| GitHub activity | Browser requests to the GitHub Contributions API at `github-contributions-api.jogruber.de` |

## Run locally

Use a Node.js version compatible with Vite 8: `^20.19.0 || >=22.12.0`, with npm installed.

From the project directory:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The GitHub calendar needs an internet connection to load contribution data.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Run the TypeScript build checks and generate the production site in `dist/`. |
| `npm run preview` | Serve the production build locally after building it. |
| `npm run lint` | Check the source with Oxlint. |

## Project structure

```text
portfolio/
├── public/                  Static files copied into the build
├── src/
│   ├── assets/
│   │   ├── Interface/       Project screenshots
│   │   └── profile/         Light and dark profile portraits
│   ├── components/          Navigation, theme provider, calendar, and shared UI
│   ├── data/                Personal details, projects, skills, and credentials
│   ├── hooks/               Theme, scroll tracking, and reduced motion hooks
│   ├── sections/            The seven portfolio sections
│   ├── App.tsx              Page composition
│   ├── main.tsx             Application entry point
│   └── index.css            Theme variables, layout, and responsive styles
├── index.html               Document title, metadata, and initial theme setup
├── package.json             Dependencies and npm scripts
└── vite.config.ts           React, Tailwind CSS, and the @/ import alias
```

## Maintain the content

| Content | File |
| --- | --- |
| Name, biography, contact details, social links, and resume URL | [src/data/personal.ts](src/data/personal.ts) |
| Project details, screenshots, technologies, and preview links | [src/data/projects.ts](src/data/projects.ts) |
| Skill categories and current learning topics | [src/data/skills.ts](src/data/skills.ts) |
| Skill icon mappings | [src/data/skillIcons.ts](src/data/skillIcons.ts) |
| Certificate details and credential URLs | [src/data/certifications.ts](src/data/certifications.ts) |
| Education and organization timeline | [src/data/experience.ts](src/data/experience.ts) |

Shared content lives in these data files. Section headings and introductory copy also appear in `src/sections/`, while sidebar labels appear in `src/components/Navbar.tsx`.

### Credential links

In [src/data/certifications.ts](src/data/certifications.ts), paste the public verification or badge URL into the matching certificate's `credentialUrl` field:

```ts
credentialUrl: 'https://your-credential-link',
```

A filled field shows a **View credential** link that opens in a new tab. An empty field shows **Credential link coming soon**. Set `availableUponRequest: true` on a certificate to show **Certificate available upon request** in place of a public link, as used for the TESDA Azure AI certificate. Certificates use external links rather than PDF previews or downloads.

### Images, themes, and resume

- Project images are imported from `src/assets/Interface/` in `src/data/projects.ts`.
- Profile portraits live in `src/assets/profile/` and are selected by `src/components/ProfilePicture.tsx`. The theme provider uses the same images for the favicon.
- Theme colors, layout rules, and responsive breakpoints live in `src/index.css`. Theme colors are defined under `:root` and `:root[data-theme="dark"]`.
- The resume link is optional. Set `personal.resume` to a valid file URL to display it in the sidebar; it remains hidden while the value is empty.
- Update `index.html` when changing the page title, description, author, or social metadata.

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting service. For a Git-connected deployment, use `npm run build` as the build command and `dist` as the output directory, with a compatible Node.js version. No environment variables are required by the current application.

## Author

**Marlo S. Veluz Jr.** — Navotas City, Philippines

[GitHub](https://github.com/Marlo522) · [LinkedIn](https://www.linkedin.com/in/marlo-jr-veluz-383a80284)
