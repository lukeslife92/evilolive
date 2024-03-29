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
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, extra-small, small, medium, large`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|extra-small|small|medium|large)/)
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
  @include prevent-user-select;
  display: flex;
  color: set-text-color($color-rich-black, $color-white);
  @media #{$media-query-xxl} {
    float: left;
  }
  @media #{$media-query-m} {
    justify-content: center;
  }
}
.logo #logo-evil {
  color: set-text-color($color-cloud, $color-rich-black);
  background: $color-rich-black;
  border-radius: 50%;
  padding-top: 0.2em;
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

.extra-small {
  font-size: $size-m;
  font-family: $font-logo;
  font-weight: $weight-bold;
  letter-spacing: $spacing-l;
}

.small {
  font-size: $size-l;
  font-family: $font-logo;
  font-weight: $weight-bold;
  letter-spacing: $spacing-m;
}

.medium {
  font-size: $size-xl;
  font-family: $font-logo;
  font-weight: $weight-bold;
}

.large {
  font-size: $size-xxxl;
  font-family: $font-logo;
  font-weight: $weight-bold;
}

</style>

<docs>
  ```jsx
  <div>
  <ELogo />
  <ELogo variation="extra-small"/>
  <ELogo variation="small"/>
  <ELogo variation="medium"/>
  <ELogo variation="large"/>
  </div>
  ```
</docs>
