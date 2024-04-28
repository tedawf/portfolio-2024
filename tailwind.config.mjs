/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        bkg: "var(--color-bkg)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        error: "var(--color-error)",
        muted: "var(--color-muted)",
      },
      spacing: {
        "4xs": "var(--space-4xs)",
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      lineHeight: {
        base: "var(--lh-base)",
      },
    },
  },
  plugins: [],
};
