<template>
  <div class="spacing">
    <div v-for="(prop, index) in tokens" class="box" :key="index" v-if="prop.category === 'space'">
      <div :style="{ lineHeight: prop.value, height: prop.value }" class="space" />
      <div class="label">
        ${{ prop.name.replace(/_/g, "-") }} <span>({{ prop.value }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * A framework for creating a predictable and harmonious spacing system. These
 * tokens are used for padding, margins, and position together with
 * [spacing utilities](https://github.com/viljamis/vue-design-system/wiki/spacing).
 * To edit spacing, see
 * [/src/tokens/spacing.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/spacing.yml).
 */
export default {
  name: "TokensSpacing",
  status: "under-review",
  release: "1.0.0",
  methods: {
    orderData: function(data) {
      let order = orderBy(data, "category", "asc")
      return order
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

.spacing {
  margin-top: $space-l;
  overflow: hidden;
  max-width: 1800px;
  width: 100%;
}
.box {
  border: 1px solid $color-rich-black;
  border-radius: $radius-default;
  background: tint($color-oxford-blue, 15%);
  box-shadow: $shadow-s;
  width: 99%;
  height: 100%;
  margin: $space-s 0;
}
.space {
  border-radius: $radius-default;
  box-shadow: $shadow-xs-inset;
  background: tint($color-cloud, 15%);
  position: relative;
  margin: $space-s 0 $space-s $space-m;
  float: center;
  width: calc(100% - #{$space-l});
}
.label {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $size-m;
  font-family: $font-text;
  color: $color-cloud;
  text-align: center;
  margin: $space-xs;
  span {
    margin-left: 5px;
    color: $color-white;
    user-select: none;
    font-style: normal;
  }
}
</style>

<docs>
  ```jsx
  <TokensSpacing/>
  ```
</docs>
