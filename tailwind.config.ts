import type { Config } from 'tailwindcss'

const config: Config = {
   content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            'casino-gradient-start': '#1E2B38',
            'casino-gradient-end': '#1E2A38',
         },
      },
   },
   plugins: [],
}

export default config
