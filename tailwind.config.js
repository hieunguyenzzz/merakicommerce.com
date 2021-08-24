module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './templates/**/*.{js,ts,jsx,tsx}',
      './sections/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '1.4rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#6f42c1',
        secondary: '#656D51',
        'element-1': "#232834",
        'element-2': "#cbccc6",
        'element-3': "#f29e74",
        'element-4': "#9ef0f0",
        'element-5': "#73d0ff",
        'element-6': "#78a9ff",
        'element-7': "#d4bfff",
        "element-8": "#f06897",
        "element-9": "#e8e5dd",
      },
      fontFamily: {
        'body': ["Roboto Mono", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        'heading': ['Abril Fatface', 'cursive']
      },
      boxShadow: {
      },
      spacing: {
        'header': 'var(--header-height)'
      },
      letterSpacing: {
      },
      lineHeight: {
      },
      fontSize: {
        'icon': '2em',
      },
      boxShadow: {

      },
      minHeight: {
        'fit': 'calc(100vh - var(--header-height))',
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('./tailwind/plugins/nestedGroup'),
    require('./tailwind/plugins/responsive-typography'),
  ],
  variants: {
    extend: {
      translate: ['active', 'group-hover', 'group-focus'],
      display: ['active', 'group-hover', 'group-focus'],
      margin: ['group-hover', 'group-focus'],
      pointerEvents: ['focus', 'group-hover', 'group-focus'],
      width: ['focus', 'group-hover', 'group-focus'],
      zIndex: ['focus'],
      pointerEvents: ['hover', 'focus'],
    },
    lineClamp: ['responsive', 'hover', 'focus'],
  },
}
