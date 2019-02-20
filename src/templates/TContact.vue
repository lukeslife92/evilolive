<template>
  <component :is="type" class="contact">
    <ELogo />
    <PNavBar
      active="Contact"
      :navItems="[
        { name: 'Home', component: 'Home', href: '/' },
        { name: 'About', component: 'About', href: '/about/' },
        { name: 'Contact', component: 'Contact', href: '/contact/' },
        { name: 'EvilolivE', component: 'Index', href: '/evilolive/' },
        { name: 'Documentation', href: 'http://localhost:6060/' },
      ]"
    />
    <EWrapper>
      <PDraggable><PRecipeCard variation="mini" /></PDraggable>
    </EWrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "TContact",
  status: "prototype",
  release: "1.0.0",
  metaInfo: {
    title: "EvilolivE - Contact",
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
$color-template-background: $color-rich-black;
$color-template-background-top: tint($color-template-background, 5%);
$color-template-background-bottom: shade($color-template-background, 5%);
$color-template-text: $color-white;
$color-template-link: $color-bleu-de-france;

.contact {
  @include reset;
  @include inset-space($space-m);
  min-height: $space-xxl * 4;
  background: $color-template-background;
  background: linear-gradient(
    0deg,
    $color-template-background-bottom,
    $color-template-background-top 100%
  );
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
  <TContact />
  ```
</docs>
