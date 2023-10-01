/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default <Partial<Config>>{
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mdi']),
    })
  ],
  darkMode: 'class',
  // content: [],
  theme: {
    // extend: {},
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    }
  }
}
