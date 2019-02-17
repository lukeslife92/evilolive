<template>
  <component :is="type" class="about">
    <ELogo />
    <PNavBar
      active="About"
      :navItems="[
        { name: 'Home', component: 'Home', href: '/' },
        { name: 'About', component: 'About', href: '/about/' },
        { name: 'Contact', component: 'Contact', href: '/contact/' },
        { name: 'EvilolivE', component: 'Index', href: '/evilolive/' },
        { name: 'Documentation', href: 'http://localhost:6060/' },
      ]"
    />
    <EWrapper>
      <EHeading>About</EHeading>
      <EParagraph>
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
  name: "TAbout",
  status: "prototype",
  release: "1.0.0",
  metaInfo: {
    title: "EvilolivE - About",
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
$color-template-text: $color-white;
$color-template-link: $color-cloud;

.about {
  @include reset;
  @include inset-space($space-m);
  min-height: $space-xxl * 4;
  background: linear-gradient(
    -45deg,
    $color-oxford-blue,
    $color-vermilion-light,
    $color-ucla-gold-darker,
    $color-bleu-de-france-lighter
  );
  background-size: 500% 500%;
  -webkit-animation: Gradient 60s $cubic infinite;
  -moz-animation: Gradient 60s $cubic infinite;
  animation: Gradient 60s $cubic infinite;
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
    color: $color-template-link;
    text-decoration: underline;
  }
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

<docs>
  ```jsx
  <TAbout />
  ```
</docs>
