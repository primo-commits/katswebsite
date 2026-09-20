import type { Config } from "tailwindcss";

/**
 * Colors are CSS variables so a palette swaps by setting `data-palette`
 * on <html> — see app/globals.css. Three cool palettes, all deliberately
 * clear of the FeeSlayers identity (navy/cream/gold/rust/sage).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        line: "var(--line)",
        ink: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "on-accent": "var(--on-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "d-8xl": ["var(--text-8xl)", { lineHeight: "var(--lh-s)", letterSpacing: "var(--ls-s)" }],
        "d-7xl": ["var(--text-7xl)", { lineHeight: "var(--lh-s)", letterSpacing: "var(--ls-s)" }],
        "d-6xl": ["var(--text-6xl)", { lineHeight: "var(--lh-s)", letterSpacing: "var(--ls-s)" }],
        "d-5xl": ["var(--text-5xl)", { lineHeight: "var(--lh-s)", letterSpacing: "var(--ls-s)" }],
        "d-4xl": ["var(--text-4xl)", { lineHeight: "var(--lh-s)", letterSpacing: "var(--ls-s)" }],
        "d-3xl": ["var(--text-3xl)", { lineHeight: "var(--lh-m)" }],
        "d-2xl": ["var(--text-2xl)", { lineHeight: "var(--lh-m)" }],
        "d-xl": ["var(--text-xl)", { lineHeight: "var(--lh-m)", letterSpacing: "var(--ls-m)" }],
        "t-l": ["var(--text-l)", { lineHeight: "var(--lh-xl)" }],
        "t-m": ["var(--text-m)", { lineHeight: "var(--lh-xl)" }],
        "t-s": ["var(--text-s)", { lineHeight: "var(--lh-l)" }],
      },
      borderRadius: {
        s: "var(--radius-s)",
        m: "var(--radius-m)",
        l: "var(--radius-l)",
        xl: "var(--radius-xl)",
      },
      spacing: {
        section: "var(--section-y)",
        card: "var(--card-padding)",
      },
      maxWidth: { shell: "1280px", medium: "1065px", small: "52rem" },
      screens: { sm: "480px", md: "768px", lg: "992px", xl: "1280px" },
    },
  },
  plugins: [],
};
export default config;
