<template>
  <component :is="type" :class="['wrapper', variation]"> <slot /> </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper doesn’t provide customizable options.
 */
export default {
  name: "EWrapper",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, small, medium, large, extra-large`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|small|medium|large|extra-large)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include reset;
  font-family: $font-text;
  font-weight: $weight-normal;
  font-size: $size-m;
  line-height: $line-height-m;
  width: 100%;
}
.default {
  @include inset-space($space-xl);
  @media #{$media-query-l} {
    @include inset-space($space-xl);
  }
}
.small {
  @include inset-space($space-s);
  @media #{$media-query-l} {
    @include inset-space($space-s);
  }
}
</style>

<docs>
  ```jsx
  <EWrapper>Wrapper can be used to wrap any components together.</EWrapper>
  ```
</docs>
