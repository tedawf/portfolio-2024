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
        lbkg: "var(--_local-bkg)",
        lborder: "var(--_local-border)",
        lcolor: "var(--_local-color)",
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
      fontSize: {
        "2xs": "var(--fs-2xs)",
        xs: "var(--fs-xs)",
        sm: "var(--fs-sm)",
        md: "var(--fs-md)",
        lg: "var(--fs-lg)",
        xl: "var(--fs-xl)",
        "2xl": "var(--fs-2xl)",
        "3xl": "var(--fs-3xl)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      lineHeight: {
        base: "var(--lh-base)",
      },
      borderRadius: {
        sm: "var(--rounded-sm)",
        full: "var(--rounded-full)",
      },
    },
  },
  plugins: [],
};
