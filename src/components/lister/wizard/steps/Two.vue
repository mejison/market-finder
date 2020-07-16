<template>
  <div class="step-wrapper">
    <div class="left">
      <amazon-details :product="product" />
    </div>
    <div class="right">
      <home-depot-pricing-qty :product="productHomeDepot" />
    </div>
  </div>
</template>


<script>
import HomeDepotPricingQty from "../HomeDepotPricingQty";
import AmazonDetails from "../AmazonDetails";

export default {
  name: "step-two",

  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    productHomeDepot: {
      type: Object,
      default: () => ({})
    }
  },

  components: {
    HomeDepotPricingQty,
    AmazonDetails
  }
};
</script>