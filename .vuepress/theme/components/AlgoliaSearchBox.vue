<template>
  <form id="search-form" class="algolia-search-wrapper search-box" role="search">
    <input
      id="algolia-search-input"
      class="search-query"
      :placeholder="placeholder"
      aria-label="Search"
    />
  </form>
</template>

<script>
export default {
  props: { options: { type: Object, required: true } },
  data () { return { placeholder: undefined } },
  watch: {
    $lang (newValue) { this.update(this.options, newValue) },
    options (newValue) { this.update(newValue, this.$lang) }
  },
  mounted () { this.initialize(this.options, this.$lang) },
  methods: {
    initialize (userOptions, lang) {
      if (!userOptions || !userOptions.apiKey || !userOptions.indexName) return
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js').then(ds => ds.default),
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
      ]).then(([docsearch]) => {
        const { algoliaOptions = {} } = userOptions
        docsearch(Object.assign({}, userOptions, {
          inputSelector: '#algolia-search-input',
          algoliaOptions: Object.assign({ 'facetFilters': [`lang:${lang}`].concat(algoliaOptions.facetFilters || []) }, algoliaOptions),
          handleSelected: (_input, _event, suggestion) => {
            const { pathname, hash } = document.createElement('a')
            const a = document.createElement('a')
            a.href = suggestion.url
            this.$router.push(`${a.pathname}${a.hash}`)
          }
        }))
      })
    },
    update (options, lang) {
      this.$el.innerHTML = '<input id="algolia-search-input" class="search-query">'
      this.initialize(options, lang)
    }
  }
}
</script>

<style lang="stylus">
.algolia-search-wrapper
  .search-query
    padding .4rem .8rem
    border 1px solid #dcdfe6
    border-radius 4px
    outline none
</style>
