<template>
  <component :is="type" class="nav">
    <a
      v-for="(item, index) in navItems"
      :key="index"
      :href="item.href"
      :class="{ active: localActive === item.component }"
      v-html="item.name"
    />
  </component>
</template>

<script>
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "PNavBar",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  props: {
    /**
     * The html element name used for the nav bar.
     */
    type: {
      type: String,
      default: "nav",
    },
    /**
     * State which tab is active when initiated (using name of the component).
     */
    active: {
      required: true,
      type: String,
    },
    /**
     * Menu items to be displayed on the nav bar.
     */
    navItems: {
      required: true,
      type: Array,
    },
  },
  computed: {
    localActive: {
      get() {
        return this.active
      },
      set(val) {
        this.$emit("input", val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-nav-link: set-text-color($color-cloud, $color-white);
$color-nav-link-active: set-text-color($color-silver, $color-white);

.nav {
  @include reset;
  @include stack-space($space-m);

  font-family: $font-text;
  font-size: $size-s;
  line-height: $line-height-m;
  color: $color-white;
  text-align: right;
  width: 100%;
  @media #{$media-query-xxl} {
  }
  @media #{$media-query-m} {
    text-align: center;
  }
  a {
    color: $color-nav-link;
    padding: $space-xs 0;
    margin: 0 $space-xs;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: $color-nav-link-active;
    }
    &.active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: $weight-bold;
      color: $color-nav-link;
    }
  }
}
</style>

<docs>
  ```jsx
  <PNavBar active="Dashboard" :navItems="[
    {name: 'Dashboard', component: 'Dashboard', href: '/Patterns/PNavBar'},
    {name: 'Posts', component: 'Posts', href: '/Patterns/PNavBar'},
    {name: 'Users', component: 'Users', href: '/Patterns/PNavBar'},
    {name: 'Settings', component: 'Settings', href: '/Patterns/PNavBar'}
  ]"/>
  ```
</docs>
