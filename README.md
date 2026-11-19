# Asherura Marilynn · Portfolio

Personal portfolio for Asherura Marilynn, Information Technology graduate of Mbarara University of Science and Technology.

Built with React, Vite, Tailwind CSS and Lucide icons. Type: Newsreader (headings) and Hanken Grotesk (body).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5190
npm run build    # production build in dist/
npm run preview  # serve the build on http://localhost:5191
```

## Contact form

The form posts to [Web3Forms](https://web3forms.com), so no email address or phone number is published in the site or this repository.
Set `VITE_WEB3FORMS_KEY` (see `.env.example`) in a local `.env` file or in the Vercel project's environment variables.

## Structure

- `src/data/content.js`: all site content (add public profile links to `profile.links`; they appear in the contact section)
- `src/components/sections/`: one component per page section
- `src/components/ui/`: shared building blocks (`Section` gives every section its sticky-title editorial layout)
- `tailwind.config.js`: palette. Brand blue `#547BA6` is for large type and fills only; small text and buttons use `blue-600`/`blue-700` for AA contrast
- `src/hooks/`: scroll reveal and active-section tracking

## CV and share image

- `cv/cv.html` is the source of `public/Asherura_Marilynn_CV.pdf`. Edit it, then print it to PDF with Edge or Chrome (`--headless=new --no-pdf-header-footer --print-to-pdf=...`). It deliberately leaves out phone, email, date of birth and referees.
- `cv/og-image.html` is the 1200×630 link-preview card. Screenshot it at that size and save as `public/og-image.jpg`.
