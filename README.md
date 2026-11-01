# Niklas Blum — Portfolio

Personal portfolio built with Next.js and Tailwind CSS. Clean, accessible, and responsive design showcasing projects and a contact form.

## Features

- Dark / light theme with system preference and persistence
- Responsive sections: Hero, Projects, About, Contact
- Contact form with server-side email sending (Resend API)
- Component-driven structure (atoms → molecules → organisms)
- SEO metadata, service pages, project references, sitemap and robots rules

## Project structure (high level)

- `app/` — Next.js App Router pages and layout
- `components/` — UI components (atoms, molecules, organisms, providers)
- `hooks/` — reusable React hooks
- `constants/` — static content and project data
- `public/` — static assets

## SEO deployment configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin (for example
`https://www.example.de`) in the deployment environment. On Vercel,
`VERCEL_PROJECT_PRODUCTION_URL` is used when the explicit variable is absent.
The sitemap and canonical/Open Graph URLs are generated from this origin.

After deployment, verify the site in Google Search Console and submit
`/sitemap.xml`. Search Console ownership verification and ongoing performance
monitoring require access to the production domain and must be completed there.
