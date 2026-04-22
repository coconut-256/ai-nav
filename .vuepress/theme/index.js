module.exports = (options, ctx) => ({
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/search', { searchMaxSuggestions: 10 }]
  ]
})
