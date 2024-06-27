import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        text: {
          50: '#0a0b10',
          100: '#131620',
          200: '#272c3f',
          300: '#3a425f',
          400: '#4e587e',
          500: '#616e9e',
          600: '#818bb1',
          700: '#a0a8c5',
          800: '#c0c5d8',
          900: '#dfe2ec',
          950: '#eff1f5',
        },
        background: {
          50: '#0a0b10',
          100: '#14171f',
          200: '#282d3e',
          300: '#3c445d',
          400: '#505b7c',
          500: '#63719c',
          600: '#838eaf',
          700: '#a2aac3',
          800: '#c1c6d7',
          900: '#e0e3eb',
          950: '#eff1f5',
        },
        primary: {
          50: '#0a0b10',
          100: '#131720',
          200: '#272e3f',
          300: '#3a455f',
          400: '#4e5b7e',
          500: '#61729e',
          600: '#818eb1',
          700: '#a0abc5',
          800: '#c0c7d8',
          900: '#dfe3ec',
          950: '#eff1f5',
        },
        secondary: {
          50: '#0d0a10',
          100: '#191320',
          200: '#332640',
          300: '#4c3960',
          400: '#664d80',
          500: '#7f609f',
          600: '#9980b3',
          700: '#b29fc6',
          800: '#ccbfd9',
          900: '#e6dfec',
          950: '#f2eff5',
        },
        accent: {
          50: '#0f0a10',
          100: '#1d1320',
          200: '#3a273f',
          300: '#583a5f',
          400: '#754e7e',
          500: '#92619e',
          600: '#a881b1',
          700: '#bea0c5',
          800: '#d3c0d8',
          900: '#e9dfec',
          950: '#f4eff5',
        }
      },
      borderColor: {
        DEFAULT: '#a0a8c5'
      },
      textColor: {
        DEFAULT: '#0a0b10'
      }
    },
  },
  plugins: [],
};

export default config;
