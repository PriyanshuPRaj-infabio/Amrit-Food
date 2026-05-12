import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFDF7",
        cream: "#F5F1E8",
        dairy: "#E8D8BD",
        navy: "#0F172A",
        royal: "#1E3A8A",
        gold: "#C8A85A",
        copper: "#A66A44",
        sage: "#6E8068",
        ink: "#172033"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(200,168,90,0.2)",
        cinematic: "0 24px 80px rgba(15,23,42,0.24)",
        "glow-lg": "0 0 100px rgba(200,168,90,0.35)",
        "glow-gold": "0 0 40px rgba(200,168,90,0.4)",
        "glow-royal": "0 0 40px rgba(30,58,138,0.3)"
      },
      backgroundImage: {
        "navy-radial": "radial-gradient(circle at 30% 20%, rgba(200,168,90,0.22), transparent 32%), radial-gradient(circle at 78% 12%, rgba(110,128,104,0.16), transparent 30%), linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
        "ivory-warm": "linear-gradient(135deg, #FFFDF7 0%, #F5F1E8 100%)",
        "gold-glow": "radial-gradient(circle at 50% 0%, rgba(200,168,90,0.3), transparent 70%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(200,168,90,0.7)"
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(200,168,90,0)"
          }
        }
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-in": "cubic-bezier(0.4, 0, 1, 1)",
        "smooth-out": "cubic-bezier(0, 0, 0.2, 1)"
      }
    }
  },
  plugins: []
};

export default config;
