import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#EDF5FB",
          100: "#D5E8F5",
          200: "#AACFEA",
          300: "#74B0D8",
          400: "#4090C4",
          500: "#2A8FC1",
          600: "#1B6CA8",   // ← main primary
          700: "#155083",
          800: "#10395E",
          900: "#0B2540",
        },
        accent: {
          50:  "#E0F7F5",
          100: "#B3EDE9",
          400: "#1CC9B9",
          500: "#0BA898",   // ← main accent
          600: "#098A7D",
          700: "#076B61",
        },
        slate: {
          50:  "#F5F8FC",
          100: "#EEF3FA",
          200: "#DDE6F0",
          300: "#C4D3E3",
          400: "#93A8BE",
          500: "#7A8FA6",
          600: "#4A5A72",
          700: "#2E3D52",
          800: "#1A2740",
          900: "#0D1824",
        },
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float:     "float 6s ease-in-out infinite",
        pulse:     "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary":  "linear-gradient(135deg, #1B6CA8 0%, #2A8FC1 60%, #0BA898 100%)",
        "hero-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B6CA8' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass:       "0 8px 32px 0 rgba(27, 108, 168, 0.08)",
        card:        "0 2px 16px rgba(27, 108, 168, 0.07)",
        "card-hover":"0 10px 40px rgba(27, 108, 168, 0.15)",
        blue:        "0 4px 20px rgba(27, 108, 168, 0.28)",
        teal:        "0 4px 20px rgba(11, 168, 152, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;

