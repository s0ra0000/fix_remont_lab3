import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary": "#F9572E",
        "silver": "#666666",
        "silver-2": "#CCCCCC",
        "secondary": "#FF7B59",
        "emerald": "#33B5A3",
        "emerald-2": "#63D2C1",
        "footer": "#F2F2F2"
      },
      dropShadow:{
        "primary": "0 7px 15px rgba(249, 87, 46, 0.60)",
      },
       outlineWidth: {
        0.5: '0.5px',
      }
    },
  },
  plugins: [],
}
export default config
