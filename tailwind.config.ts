import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    colors: {
      slate: colors.slate,
      black: colors.slate[700],
      white: colors.white,
      bg: '#f0f2f5',
      rose: colors.rose
    },
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
