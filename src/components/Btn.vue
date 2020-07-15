<template>
  <div class="btn-wrapper">
    <button :class="`btn btn-${type}`">
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
    }
  }
};
</script>


