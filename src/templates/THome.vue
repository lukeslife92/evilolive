<template>
  <component :is="type" class="home">
    <ELogo />
    <PNavBar
      active="Home"
      :navItems="[
        { name: 'Home', component: 'Home', href: '/' },
        { name: 'About', component: 'About', href: '/about/' },
        { name: 'Contact', component: 'Contact', href: '/contact/' },
        { name: 'EvilolivE', component: 'Index', href: '/evilolive/' },
        { name: 'Documentation', href: 'http://localhost:6060/' },
      ]"
    />
    <EWrapper>
      <EHeading>Home</EHeading>
      <EParagraph contenteditable>
        <a href="https://vueds.com">EvilolivE</a> is an open-source tool for building design systems
        with Vue.js. It provides you and your team a set of organized tools, patterns &amp;
        practices. It works as the foundation for your application development.
      </EParagraph>
    </EWrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "THome",
  status: "prototype",
  release: "1.0.0",
  metaInfo: {
    title: "EvilolivE - Home",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-template-background: $color-white;
$color-template-text: $color-rich-black;
$color-template-link: $color-bleu-de-france;

.home {
  @include reset;
  @include inset-space($space-m);
  min-height: $space-xxl * 4;
  background: $color-template-background;
  text-align: center;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
  .heading {
    color: $color-template-text;
  }
  .paragraph {
    color: $color-template-text;
  }
  .text-link {
    color: $color-template-link;
  }
  .wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: $space-xxl * 4.5;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  a {
    font-family: $font-text;
    color: $color-bleu-de-france;
    text-decoration: underline;
  }
}
</style>

<docs>
  ```jsx
  <THome />
  ```
</docs>
