<template>
  <div class="btn-wrapper">
    <button
      :class="`btn btn-${type} ${disabled ? 'disabled': ''}`"
      :disabled="disabled"
      @click="onClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "btn",

  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>


