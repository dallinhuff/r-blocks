import preline from 'preline/plugin'

export default {
  content: [
    'src/**/*.{vue,ts}',
    './node_modules/preline/preline.js',
  ],
  plugins: [
    preline,
  ],
}

