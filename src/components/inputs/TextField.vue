<template>
  <div class="text-field-wrapper">
    <label>{{ label }}</label>
    <input
      type="text"
      v-model="payload"
      class="form-control"
      @input="onChange"
      :readonly="disabled"
      :class="{'readonly': disabled}"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "text-field",

  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
.text-field-wrapper {
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
  }

  input {
    width: 100%;
  }
}
</style>