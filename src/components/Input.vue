<script>
import { randomNumber } from "@/lib/functions";

export default {
  name: "AppInput",
  data() {
    return {
      value: this.defaultValue,
    };
  },
  props: {
    label: String,
    name: String,
    type: String,
    placeholder: String,
    defaultValue: String,
    error: Array,
    required: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit("update", e.target.value);
      this.value = e.target.value;
    },
  },
  computed: {
    errorString() {
      return this.error?.join(",");
    },
    id() {
      return this.name + randomNumber(0, 1000);
    },
  },
};
</script>

<template>
  <div class="app-input">
    <div class="error-notification" v-if="!!errorString">
      {{ this.errorString }}
    </div>

    <div class="input-side">
      <label :for="this.id">{{ this.label }}</label>
      <input
        :required="this.required"
        :type="this.type"
        :name="this.name"
        :id="this.id"
        :placeholder="this.placeholder"
        :value="this.value"
        @input="onChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.app-input {
  margin-bottom: 10px;

  .error-notification {
    color: red;
  }

  .input-side {
    display: flex;
    width: max-content;
    background: white;
    border-radius: 5px;
    box-shadow: 4px 5px 8px 0 #0000002e;
    overflow: hidden;

    label {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      color: white;
      background: $primary-hover-color;
    }

    input {
      min-width: 300px;
      padding: 5px 10px;
      border: none;
      outline: none;
    }
  }
}
</style>
