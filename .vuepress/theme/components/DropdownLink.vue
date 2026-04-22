<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <button class="dropdown-title" type="button" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'up' : 'down'" />
    </button>
    <DropdownTransition>
      <ul v-show="open" class="nav-dropdown">
        <li v-for="(subItem, index) in item.items" :key="subItem.link || subItem.text || index" class="dropdown-item">
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>
          <NavLink v-else :item="subItem" />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  components: { NavLink, DropdownTransition },
  props: { item: { required: true } },
  data () { return { open: false } },
  methods: {
    toggle () { this.open = !this.open }
  },
  mounted () {
    this.$router.afterEach(() => { this.open = false })
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  position relative
  cursor pointer
  .dropdown-title
    background transparent
    border 0
    font-size .95rem
    color inherit
    cursor pointer
  .nav-dropdown
    position absolute
    top 2rem
    right 0
    list-style none
    background #fff
    box-shadow 0 2px 8px rgba(0,0,0,.08)
    padding .6rem
    min-width 10rem
    border-radius 6px
  .arrow
    display inline-block
    width 0
    height 0
    border 4px solid transparent
    margin-left .3rem
    &.down
      border-top-color #999
    &.up
      border-bottom-color #999
</style>
