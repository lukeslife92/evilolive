<template>
  <component
    :is="type"
    :class="['recipeCard', variation]"
    :style="[ {
      background: tokens.color_rich_black.value,
      color: tokens.color_white.value}]"
  >
    <div v-if="variation === 'default'">
      <div class="default-meta">
        <div class="default-meta-catergory">
          <Icon fill="rgb(37,138,239)" :name="category"/>
        </div>
      </div>
      <div class="default-img">
        <img draggable="false" class="default-img--main" :src="image" >
      </div>
      <div class="default-time">
        <ul class="default-time-ul">
          <li class="default-time-li-name">Prep:</li>
          <li class="default-time-li-number">{{ prepTime }} mins</li>
          <li class="default-time-li-name">Cook:</li>
          <li class="default-time-li-number">{{ cookTime }} mins</li>
          <li class="default-time-li-name">Serves:</li>
          <li class="default-time-li-number">{{ serves }} people</li>
        </ul>
      </div>
      <EWrapper variation="small">
        <div class="default-info">
          <EWrapper variation="small">
            <div class="default-info-title">
              <EHeading level="h3">{{ name }}</EHeading>
              <div class="default-info-title-description">
                <EParagraph variation="small">{{ description }}</EParagraph>
              </div>
            </div>
          </EWrapper>
        </div>
      </EWrapper>
      <div class="default-footer">
        <div class="default-footer-info">
          <EIcon fill="rgb(37,138,239)" size="small" :name="category"/>
          <div class="default-footer-info-author">{{ author }}</div>
        </div>
      </div>
    </div>

    <div v-if="variation === 'mini'">
      <div class="mini-meta">
        <div class="mini-meta-catergory">
          <EIcon fill="rgb(37,138,239)" size="small" :name="category"/>
        </div>
      </div>
      <div class="mini-img">
        <img draggable="false" class="mini-img--circle" :src="image">
      </div>
      <EWrapper>
        <div class="mini-info">
          <EWrapper>
            <div class="mini-info-title">
              <EHeading level="h4">{{ name }}</EHeading>
              <div class="mini-info-title-description">
                <EParagraph variation="small">{{ description }}</EParagraph>
              </div>
            </div>
          </EWrapper>
        </div>
      </EWrapper>
      <div class="mini-footer">
        <div class="mini-footer-info">
          <EIcon fill="rgb(37,138,239)" size="small" :name="category"/>
        </div>
      </div>
    </div>

    <div v-if="variation === 'full'">
      <div class="full-meta">
        <div class="full-meta-catergory">
          <EIcon fill="rgb(37,138,239)" :name="category"/>
        </div>
      </div>
      <div class="full-img">
        <img draggable="false" class="full-img--main" :src="image">
      </div>
      <div class="full-time">
        <ul>
          <li>Prep:</li>
          <li class="liTime">{{ prepTime }} mins</li>
          <li>Cook:</li>
          <li class="liTime">{{ cookTime }} mins</li>
        </ul>
      </div>
      <EWrapper>
        <div class="full-info">
          <EWrapper>
            <div class="full-info-title">
              <EHeading level="h3">{{ name }}</EHeading>
              <div class="full-info-title-description">
                <EParagraph variation="small">{{ description }}</EParagraph>
              </div>
            </div>
          </EWrapper>
        </div>
      </EWrapper>
      <div class="full-footer">
        <div class="full-footer-info">
          <EIcon fill="rgb(37,138,239)" size="small" :name="category"/>
          <div class="full-footer-info-author">{{ author }}</div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
/**
 * Recipe Cards are available for all forms of recipe displays
 * and available actions.
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "PRecipeCard",
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
   * Some Data to export
   * Exporting design tokens
   */
  data() {
    return {
      tokens: designTokens.props,
    }
  },
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The name of the recipe
     */
    name: {
      type: String,
      required: true,
      default: "Creamy Pasta Carbonara",
    },
    /**
     * The description of the card
     */
    description: {
      type: String,
      required: true,
      default: "A lovely, creamy version of a well-known favourite.",
    },
    /**
     * The time it takes to prep a recipe
     */
    prepTime: {
      type: Number,
      required: true,
      default: "15",
    },
    /**
     * The time it takes to cook a recipe
     */
    cookTime: {
      type: Number,
      required: true,
      default: "20",
    },
    /**
     * How many people does this recipe serve
     */
    serves: {
      type: Number,
      required: true,
      default: "4",
    },
    /**
     * The category of the recipe
     */
    category: {
      type: String,
      required: true,
      default: "ready",
    },
    /**
     * The author of the recipe
     */
    author: {
      type: String,
      required: true,
      default: "Luke Boonstra",
    },
    /**
     * The image of the recipe
     */
    image: {
      type: String,
      required: true,
      default: "http://localhost:6060/assets/img/google.97e897b.jpg",
    },
    /**
     * The html element name used for the container of Example component.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, mini, full, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|mini|full|negative)/)
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
.recipeCard {
  @include reset;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 3.5em;
  font-size: $size-m;
  font-family: $font-text;
  color: $color-rich-black;
  border-radius: $radius-l;
  box-shadow: $shadow-m;
  text-align: left;
}

.default {
  margin-top: #{$space-l};
  min-width: 17.875em;
  max-width: 50em;
  min-height: 22.5em;
  max-height: 35em;
  &-meta {
    @include prevent-user-select;
    padding-top: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-rich-black;
    box-shadow: $shadow-s;
    border-top-left-radius: $radius-l;
    border-top-right-radius: $radius-l;
    overflow: hidden;
    &-catergory {
      @include inset-space(#{$space-xs});
      background-color: $color-cloud;
      border-top-left-radius: $radius-l;
      border-top-right-radius: $radius-l;
    }
  }
  &-time {
    @include prevent-user-select;
    margin-top: #{-$space-xl};
    padding-left: #{$space-xs};
    margin-bottom: $space-s;
    border-bottom: 1px, $color-rich-black;
    &-ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    &-li {
      &-name {
      text-shadow: 0px 1px 1px #4d4d4d;
      font-size: $size-xs;
      }
      &-number {
      text-shadow: 0px 1px 1px #4d4d4d;
      font-size: $size-s;
      }
    }
  }
  &-img {
    @include prevent-user-select;
    margin-top: #{-$space-xl};
    padding-left: #{$space-s};
    padding-right: #{$space-s};
    display: flex;
    align-items: center;
    justify-content: center;
    &--main {
      border-radius: $radius-xl;
      margin: $space-xs;
      border: $space-xs solid $color-cloud;
      box-shadow: $shadow-s;
      width: calc(80% - #{$space-m});
      height: calc(80% - #{$space-m});
      max-width: 250px;
    }
  }
  &-info {
    background-color: $color-cloud;
    border-radius: $radius-l;
    overflow: hidden;
    max-height: 200px;
    &-title {
      border-radius: $radius-s;
      box-shadow: $shadow-s;
      text-align: center;
      &-description {
        height: 300px;
        border-top: 1px solid $color-rich-black;
        background-color: $color-white;
        padding-left: $space-xs;
        padding-right: $space-xs;
        padding-top: $space-xs;
        margin-top: #{-$space-m};
        box-shadow: $shadow-s;
      }
    }
  }
  &-footer {
    @include prevent-user-select;
    padding-bottom: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-rich-black;
    border-bottom-left-radius: $radius-l;
    border-bottom-right-radius: $radius-l;
    &-info {
      @include inset-space(#{$space-xs});
      background-color: $color-cloud;
      border-bottom-left-radius: $radius-l;
      border-bottom-right-radius: $radius-l;
      &-author {
        background-color: $color-white;
        float: right;
        padding: #{$space-xs};
        border-radius: $radius-l;
        font-size: $size-s;
        font-family: $font-text;
        color: $color-rich-black;
      }
    }
  }
}

.mini {
  margin-top: #{$space-m};
  min-width: 10em;
  max-width: 10em;
  min-height: 10em;
  max-height: 15em;
  &-meta {
    padding-top: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-rich-black;
    box-shadow: $shadow-s;
    border-top-left-radius: $radius-l;
    border-top-right-radius: $radius-l;
    overflow: hidden;
    &-catergory {
      @include inset-space(#{$space-xs});
      background-color: $color-white;
      border-top-left-radius: $radius-l;
      border-top-right-radius: $radius-l;
    }
  }
  &-img {
    margin-top: #{-$space-xl};
    padding-left: #{$space-s};
    padding-right: #{$space-s};
    display: flex;
    align-items: center;
    justify-content: center;
    &--circle {
      border-radius: $radius-circle;
      margin: $space-xs;
      border: $space-xs solid $color-cloud;
      box-shadow: $shadow-l;
      max-width: 7em;
      min-height: 6em;
      transition: $cubic;
      transition-duration: $duration-quickly;
    }
    &--circle:hover {
      box-shadow: $shadow-xl;
    }
  }
  &-info {
    background-color: $color-cloud;
    border-radius: $radius-l;
    overflow: hidden;
    max-height: 9em;
    &-title {
      border-radius: $radius-s;
      box-shadow: $shadow-s;
      text-align: center;
      &-description {
        border-top: 1px solid $color-rich-black;
        background-color: $color-white;
        padding-left: $space-xs;
        padding-right: $space-xs;
        padding-top: $space-xs;
        margin-top: #{-$space-m};
        box-shadow: $shadow-s;
      }
    }
  }
  &-footer {
    padding-bottom: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-rich-black;
    border-bottom-left-radius: $radius-l;
    border-bottom-right-radius: $radius-l;
    &-info {
      @include inset-space(#{$space-xs});
      background-color: $color-cloud;
      border-bottom-left-radius: $radius-l;
      border-bottom-right-radius: $radius-l;
    }
  }
}

.full {
  margin-top: #{$space-l};
  min-width: 17.875em;
  max-width: 50em;
  min-height: 22.5em;
  max-height: 35em;
  &-meta {
    padding-top: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-white;
    box-shadow: $shadow-s;
    border-top-left-radius: $radius-l;
    border-top-right-radius: $radius-l;
    overflow: hidden;
    &-catergory {
      @include inset-space(#{$space-xs});
      background-color: $color-cloud;
      border-top-left-radius: $radius-l;
      border-top-right-radius: $radius-l;
    }
  }
  &-time {
    margin-top: #{-$space-xl};
    padding-left: #{$space-xs};
    margin-bottom: $space-s;
    border-bottom: 1px, $color-rich-black;
  }
  &-img {
    margin-top: #{-$space-xl};
    padding-left: #{$space-s};
    padding-right: #{$space-s};
    display: flex;
    align-items: center;
    justify-content: center;
    &--main {
      border-radius: $radius-xl;
      margin: $space-xs;
      border: $space-xs solid $color-cloud;
      box-shadow: $shadow-s;
      width: calc(80% - #{$space-m});
      height: calc(80% - #{$space-m});
      max-width: 250px;
      max-height: 250px;
    }
  }
  &-info {
    background-color: $color-cloud;
    border-radius: $radius-l;
    overflow: hidden;
    max-height: 200px;
    &-title {
      border-radius: $radius-s;
      box-shadow: $shadow-s;
      text-align: center;
      &-description {
        height: 300px;
        border-top: 1px solid $color-white;
        background-color: $color-white;
        padding-left: $space-xs;
        padding-right: $space-xs;
        padding-top: $space-xs;
        margin-top: #{-$space-m};
        box-shadow: $shadow-s;
      }
    }
  }
  &-footer {
    padding-bottom: #{$space-xs};
    padding-left: #{$space-xs};
    padding-right: #{$space-xs};
    background-color: $color-white;
    border-bottom-left-radius: $radius-l;
    border-bottom-right-radius: $radius-l;
    &-info {
      @include inset-space(#{$space-xs});
      background-color: $color-cloud;
      border-bottom-left-radius: $radius-l;
      border-bottom-right-radius: $radius-l;
      &-author {
        background-color: $color-white;
        float: right;
        padding: #{$space-xs};
        border-radius: $radius-l;
        font-size: $size-s;
        font-family: $font-text;
        color: $color-white;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <PRecipeCard 
      name="Pancakes" 
      description="Fluffy buttermilk pancakes, served with maple syrup" 
      image="https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg" 
      serves="4"
      author="Luke Boonstra" 
      category="ready"
      cookTime="10"
      prepTime="5"
    />
  </div>
  ```
</docs>
