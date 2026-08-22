// Site-wide contact and identity constants.
// Override any of these with NEXT_PUBLIC_* env vars in Vercel without touching code.

// TODO(Jad): confirm this is the email you want public on the site.
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jfsawma@gmail.com";

// TODO(Jad): fill in your LinkedIn profile URL.
export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/your-handle";

// TODO(Jad): confirm GitHub handle (Saouma1 is what your project links use).
export const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Saouma1";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jad-site.vercel.app";

export const SITE_TITLE = "Jad Saouma | AI Product Manager & Founder";

export const SITE_DESCRIPTION =
  "Cornell Tech MBA. Founder of REUNION, Photo Finder, and Custos. Product work from insight to shipped system.";
