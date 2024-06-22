import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        "arch-rival": ["var(--font-arch-rival)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
