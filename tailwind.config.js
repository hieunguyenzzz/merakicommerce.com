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
    extend: {
      colors: {
        'element-1': "#F7F5EF",
        'element-2': "#FFFDFB",
        'element-3': "#656D51",
        'element-4': "#B4BA90",
        'element-5': "#333333",
        'element-6': "#faebd7",
        'element-7': "#e5dfd6",
        "element-8": "#fdf6f0",
        "element-9": "#e8e5dd",

      },
      fontFamily: {

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
      },
      boxShadow: {

      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
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
