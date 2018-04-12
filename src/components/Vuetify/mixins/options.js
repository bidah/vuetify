const OPTIONS_DEFAULTS = {
  themeVariations: ['primary', 'secondary', 'accent'],
  minifyTheme: null,
  themeCache: null
}

export default function options (options = {}) {
  return {
    data: () => ({
      options: Object.assign({}, OPTIONS_DEFAULTS, options)
    })
  }
}
