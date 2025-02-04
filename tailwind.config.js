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
              50: "#0A0A0B",
              100: "#101114",
              DEFAULT: "#121212",
            },
            foreground: {
              200: "#3C4045",
              300: "#555A61",
              400: "#818892",
              500: "#525866",
              600: "#BEC4CE",
              900: "#F8FAFD",
              950: "#FFFFFF",
              DEFAULT: "#E0E4EA",
            },
            primary: {
              200: "#2D363A",
              300: "#3E4A44",
              400: "#5C6169",
              500: "#767A84",
              600: "#90949B",
              700: "#A5A8B1",
              800: "#B9BDC4",
              900: "#D0D4D9",
              DEFAULT: "#FFFFFF",
            },
            secondary: {
              600: "#FFBA4D",
              DEFAULT: "#FFBA4D",
            },
            danger: {
              DEFAULT: "#F6606C",
            },
            accent1: {
              200: "#397655",
              500: "#00C15C",
              DEFAULT: "#00C15C",
            },
            accent2: {
              100: "#B35C1F",
              200: "#CC772F",
              300: "#FFA356",
              400: "#BF9463",
              500: "#FF8F3D",
              600: "#FF7A00",
              DEFAULT: "#FF7A00",
            },
            accent3: {
              200: "#376A8C",
              300: "#4B89B0",
              400: "#7FBCE6",
              500: "#69AFFF",
              DEFAULT: "#69AFFF",
            },
          },
        },
      },
    }),
  ],
};
