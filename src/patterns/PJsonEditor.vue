<template>
  <component :is="type" :class="['json-editor', variation]">
    <json-editor ref="JsonEditor" :schema="schema" v-model="model">
      <EButton type="primary" @click="submit">Subscribe</EButton>
      <EButton type="reset" @click="reset">Reset</EButton>
    </json-editor>
  </component>
</template>

<script>
import DesignTokens from '../utils/jsonEditorLoader';
import JsonEditor from 'vue-json-ui-editor';

/**
 * Json Editor is used to visually communicate core parts of the product
 * and available actions.
 */
export default {
  components: { JsonEditor },
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "PJsonEditor",
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
     * The html element name used for the container of Example component.
     */
    schema: {
      type: Object,
    },
    /**
     * Style variation to give additional meaning.
     * `default, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|strong|positive|negative)/)
      },
    },
  },
    data: () => ({
    model: {
    },
  }),
  computed: {
    jsonString() {
      return JSON.stringify(this.model, null, 2).trim();
    },
  },
  methods: {
    submit(_e) {
      this.$refs.JsonEditor.form().validate(valid => {
        if (valid) {
          // this.model contains the valid data according your JSON Schema.
          // You can submit your model to the server here
          // eslint-disable-next-line no-console
          console.log('model', JSON.stringify(this.model));
          this.$refs.JsonEditor.clearErrorMessage();
        } else {
          this.$refs.JsonEditor.setErrorMessage('Please fill out the required fields');
          return false;
        }
      });
    },
    reset() {
      this.$refs.JsonEditor.reset();
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.7em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.2em;
}
h2 + small {
  display: block;
  text-align: center;
  margin-bottom: 1.2em;
}
small {
  line-height: 20px;
  display: block;
}
.el-alert {
  margin-bottom: 15px;
}
.el-form .sub {
  margin-left: 10%;
}
.json {
  text-align: left;
}
</style>

<docs>
  ```jsx
  <PJsonEditor>
    Hello
  </PJsonEditor>
  ```
</docs>