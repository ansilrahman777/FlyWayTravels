/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],
        amita: ['"Amita"', 'serif'],
        allison: ['"Allison"', 'cursive'],
        unifraktur: ['"UnifrakturMaguntia"', 'cursive'],
        monoton: ['"Monoton"', 'sans-serif'],
        moirai: ['"Moirai One"', 'system-ui'],
        ruge: ['"Ruge Boogie"', 'cursive'],
        mystery: ['"Mystery Quest"', 'system-ui'],
        emilys: ['"Emilys Candy"', 'serif'],
        clicker: ['"Clicker Script"', 'cursive'],
        rubikvinyl: ['"Rubik Vinyl"', 'system-ui'],
        londrina: ['"Londrina Shadow"', 'sans-serif'],
        synemono: ['"Syne Mono"', 'monospace'],
        fascinate: ['"Fascinate Inline"', 'system-ui'],
        berkshire: ['"Berkshire Swash"', 'serif'],
        'playwrite-ng-modern': ['"Playwrite NG Modern"', 'cursive'],

      },
    },
  },
  plugins: [],
}