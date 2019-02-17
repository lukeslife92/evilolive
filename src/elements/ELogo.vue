<template>
  <component :is="type" :class="['logo', variation]">
    <div id="logo">Evil<span id="logo-evil">O</span>liv<span id="logo-flip">E</span></div>
  </component>
</template>

<script>
/**
 * Example component is used to visually communicate core parts of the product
 * and available actions.
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "ELogo",
  /**
   * Components in the system are labelled with status labels that reflect their
   * state of completion. See example below. All available statuses are:
   *
   * STATUS:        COLOR:     DESCRIPTION:
   *
   * deprecated     Red        Component is deprecated
   * prototype      Blue       Prototype, do not implement!
   * under-review   Yellow     Component is currently being reviewed
   * ready          Green      Ready to be used
   */
  status: "prototype",
  /**
   * Release indicates when this component was added into the system.
   * (in which design system version)
   */
  release: "1.0.0",
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The html element name used for the container of Example component.
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * Style variation to give additional meaning.
     * `default, small, medium, large`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|small|medium|large)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
/**
 * Styles in a top-level App component and in layout components may be global,
 * but all other components should always be scoped (using either scoped
 * attribute or class based scoping).
 */
.logo {
  @include reset;
  @include stack-space($space-s);
  color: set-text-color($color-rich-black, $color-white);
  @media #{$media-query-xxl} {
    text-align: left;
  }
  @media #{$media-query-m} {
    text-align: center;
  }
}
.logo #logo-evil {
  color: set-text-color($color-vermilion, $color-white);
}

.logo #logo-flip {
  -moz-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.logo:hover #logo-flip {
  -moz-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

#logo-flip {
  display: inline-block;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  transition: transform 1s;
}

.default {
  font-size: $size-xxl;
  font-family: $font-logo;
  font-weight: $weight-bold;
}

.default #logo-evil {
  background: $color-rich-black;
  padding: #{$space-xs} 0 0 0;
  border-radius: $radius-circle;
}

.small {
  font-size: $size-m;
  font-family: $font-logo;
  font-weight: $weight-bold;
}
.medium {
  font-size: $size-l;
  font-family: $font-logo;
  font-weight: $weight-bold;
}
.large {
  font-size: $size-xl;
  font-family: $font-logo;
  font-weight: $weight-bold;
}
</style>

<docs>
  ```jsx
  <ELogo /><br>
  <ELogo variation="small"/><br>
  <ELogo variation="medium"/><br>
  <ELogo variation="large"/><br>
  ```
</docs>
