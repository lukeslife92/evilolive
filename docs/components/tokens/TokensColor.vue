<template>
  <div class="colors">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="color"
      :class="prop.category"
      v-if="prop.type === 'color'"
    >
      <div class="swatch" :style="{ backgroundColor: prop.value }" />
      <h3>{{ prop.name.replace(/_/g, " ").replace(/color/g, "") }}</h3>
      <span> <em>RGB:</em> {{ prop.value }} </span>
      <span> <em>SCSS:</em> ${{ prop.name.replace(/_/g, "-") }} </span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * The color palette comes with 5 different weights for each hue. These hues
 * should be used purposefully to communicate how things function in the
 * interface. Keep in mind that `vermilion` is only used in special cases
 * like destructive actions and error messages. To edit the colors, see
 * [/src/tokens/color.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/color.yml).
 */
export default {
  name: "TokensColor",
  status: "under-review",
  release: "1.0.0",
  methods: {
    orderData: function(data) {
      // let byValue = orderBy(data, "value", "asc")
      let byName = orderBy(data, "name", "asc")
      let byCategoryAndName = orderBy(byName, "category")
      return byCategoryAndName
    },
  },
  data() {
    return {
      tokens: this.orderData(designTokens.props),
    }
  },
}
</script>

<style lang="scss" scoped>
/* STYLES
--------------------------------------------- */

.colors {
  margin-top: $space-l;
  display: block;
  width: 100%;
  @supports (display: grid) {
    display: grid;
    max-width: 1900px;
    align-content: stretch;
    justify-content: left;
    grid-template-columns:
      calc(16.6% - #{$space-m})
      calc(16.6% - #{$space-m})
      calc(16.6% - #{$space-m})
      calc(16.6% - #{$space-m})
      calc(16.6% - #{$space-m})
      calc(16.6% - #{$space-m});
    grid-column-gap: $space-m;
    @media (max-width: 1800px) {
      grid-template-columns:
        calc(20% - #{$space-m})
        calc(20% - #{$space-m})
        calc(20% - #{$space-m})
        calc(20% - #{$space-m})
        calc(20% - #{$space-m});
    }
    @media (max-width: 1550px) {
      grid-template-columns:
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m});
    }
    @media (max-width: 1300px) {
      grid-template-columns:
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m});
    }
    @media (max-width: 1100px) {
      grid-template-columns:
        calc(50% - #{$space-m})
        calc(50% - #{$space-m});
    }
    @media (max-width: 900px) {
      grid-template-columns: 100%;
    }
  }
}
.swatch {
  @include stack-space($space-s);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: $space-xxl;
  margin-left: -#{$space-s};
  margin-top: -#{$space-s};
  width: calc(100% + #{$space-l});
  float: left;
}
h3 {
  @include reset;
  @include stack-space($space-xs);
  text-transform: capitalize;
  line-height: $line-height-s;
  width: 100%;
  float: left;
}
.color {
  @include reset;
  @include inset-space($space-s);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: $space-m;
  box-shadow: $shadow-s;
  font-size: $size-s;
  font-family: $font-text;
  color: $color-rich-black;
  border-radius: $radius-default;
  overflow: hidden;
  text-align: left;
  transition: all $duration-slowly $cubic;
  @supports (display: grid) {
    width: 100%;
    float: left;
  }
  @media (max-width: 400px) {
    margin-bottom: $space-m;
  }
  &:hover {
    box-shadow: $shadow-m;
    span {
      color: $color-rich-black;
      em {
        color: $color-silver;
      }
    }
  }
  span {
    margin-bottom: $space-xs;
    line-height: $line-height-s;
    color: $color-silver;
    font-size: $size-s;
    width: 100%;
    float: left;
    em {
      user-select: none;
      font-style: normal;
    }
  }
}
</style>

<docs>
  ```jsx
  <TokensColor/>
  ```
</docs>
