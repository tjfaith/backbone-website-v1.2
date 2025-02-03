import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      height: {
        "screen-20": "20vh",
        "screen-25": "25vh",
        "screen-30": "30vh",
        "screen-35": "35vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-55": "55vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-72": "72vh",
        "screen-80": "80vh",
        "screen-82": "82vh",
        "screen-90": "90vh",
        "screen-91": "91vh",
      },
      width: {
        "screen-5": "5vw",
        "screen-10": "10vw",
        "screen-20": "20vw",
        "screen-30": "30vw",
        "screen-35": "35vw",
        "screen-40": "40vw",
        "screen-50": "50vw",
        "screen-55": "55vw",
        "screen-60": "60vw",
        "screen-70": "70vw",
        "screen-72": "72vw",
        "screen-80": "80vw",
        "screen-90": "90vw",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: {
              50: "#fff",
              100: "#FCFCFD",
              DEFAULT: "#fff",
            },
            foreground: {
              200: "#F0F1F4",
              300: "#E1E4EA",
              400: "#99A0AE",
              600: "#525866",
              900: "#000C19",
              950: "#0E121B",
              DEFAULT: "#525866",
            },
            primary: {
              200: "#CACFD8",
              300: "#2D433B",
              400: "#0E121B",
              500: "#646671",
              600: "#4C4F55",
              700: "#30343C",
              800: "#242628",
              900: "#000000",
              DEFAULT: "#000000",
            },
            secondary: {
              600: "#E6A819",
              DEFAULT: "#E6A819",
            },
            danger: {
              DEFAULT: "#FB3748",
            },
            accent1: {
              200: "#C4EEDD",
              500: "#00AB51",
              DEFAULT: "#00AB51",
            },
            accent2: {
              100: "#FFF1EB",
              200: "#FFE4C9",
              300: "#FED8B2",
              400: "#8E6945",
              500: "#FD7D00",
              600: "#FF7300",
              DEFAULT: "#FD7D00",
            },
            accent3: {
              200: "#EBF8FF",
              300: "#C6E4FF",
              400: "#B4D5FD",
              500: "#0075FF",
              DEFAULT: "#0075FF",
            },
          },
        },
        dark: {
          colors: {
            background: {
              50: "#fff",
              100: "#FCFCFD",
              DEFAULT: "#fff",
            },
            foreground: {
              200: "#F0F1F4",
              300: "#E1E4EA",
              400: "#99A0AE",
              600: "#525866",
              900: "#000C19",
              950: "#0E121B",
              DEFAULT: "#525866",
            },
            primary: {
              200: "#CACFD8",
              300: "#2D433B",
              400: "#0E121B",
              500: "#646671",
              600: "#4C4F55",
              700: "#30343C",
              800: "#242628",
              900: "#000000",
              DEFAULT: "#000000",
            },
            secondary: {
              600: "#E6A819",
              DEFAULT: "#E6A819",
            },
            danger: {
              DEFAULT: "#FB3748",
            },
            accent1: {
              200: "#C4EEDD",
              500: "#00AB51",
              DEFAULT: "#00AB51",
            },
            accent2: {
              100: "#FFF1EB",
              200: "#FFE4C9",
              300: "#FED8B2",
              400: "#8E6945",
              500: "#FD7D00",
              600: "#FF7300",
              DEFAULT: "#FD7D00",
            },
            accent3: {
              200: "#EBF8FF",
              300: "#C6E4FF",
              400: "#B4D5FD",
              500: "#0075FF",
              DEFAULT: "#0075FF",
            },
          },
        },
      },
    }),
  ],
};
