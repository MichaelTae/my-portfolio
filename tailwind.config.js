/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        backgroundAnimation: {
          '0% , 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
        }, 
        toolTipBounce: {
          '0%, 100%': { 
            transform: 'translateY(calc(-100% - 3.5rem))', 
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' 
          },
          '50%': { 
            transform: 'translateY(-50px)',
             
            'animation-timing-function': 'cubic-bezier(0.0,0,2,1)' 
          },
        },
        reflection:{
          
          '50%':{
            opacity: '0.05',
          }
        }
      }, 
      animation: {
        'background-animation': 'backgroundAnimation 22s ease infinite',
        'toolTipBounce': 'toolTipBounce 1.5s infinite',
        'reflection': 'reflection 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        orbitron:['var(--font-orbitron)'],
        inter:['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

