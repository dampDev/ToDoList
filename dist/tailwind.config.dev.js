"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App/**/*.{js,jsx,ts,tsx}", "./src/index.js", "./src/App/**/**.{js,jsx}", "./src/App/index.js"],
  theme: {
    extend: {}
  },
  plugins: []
};