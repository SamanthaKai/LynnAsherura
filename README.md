# Asherura Marilynn · Portfolio

Personal portfolio for Asherura Marilynn, Information Technology graduate of Mbarara University of Science and Technology.

Built with React, Vite, Tailwind CSS and Lucide icons.

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

- `src/data/content.js`: all site content
- `src/components/sections/`: one component per page section
- `src/components/ui/`: shared building blocks
- `src/hooks/`: scroll reveal and active-section tracking
