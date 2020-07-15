<template>
  <div class="dropdown-wrapper">
    <label>{{ label }}</label>
    <select v-model="payload" class="form-control">
      <option
        :value="option.value"
        v-for="(option, index) in options"
        :key="index"
      >{{ option.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "dropdown",

  props: {
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => {
        [];
      }
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      payload: this.value
    };
  },

  watch: {
    value() {
      this.payload = this.value;
    }
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
  }
}
</style>