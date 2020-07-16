<template>
  <div class="col">
    <div class="card form-group">
      <viewer-nav />
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col">
          <div class="card">1</div>
        </div>
        <div class="col">
          <div class="card">2</div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col">
          <product-offers />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ViewerNav, ProductOffers } from "@/components";

export default {
  name: "viewer",

  components: {
    ViewerNav,
    ProductOffers
  }
};
</script>