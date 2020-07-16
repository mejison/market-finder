<template>
  <div class="step-wrapper">
    <div class="left">
      <amazon-puller @pull="onPull" />
    </div>
    <div class="right">
      <product-source :source="source" />
    </div>
  </div>
</template>

<script>
import ProductSource from "../Source";
import AmazonPuller from "../AmazonPuller";

export default {
  name: "step-one",

  components: {
    ProductSource,
    AmazonPuller
  },

  props: {
    source: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    onPull(asin) {
      this.$emit("pull", asin);
    }
  }
};
</script>