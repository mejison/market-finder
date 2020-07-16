<template>
  <div class="source-wrapper">
    <h1>Product source</h1>
    <div class="form-group">
      <text-field label="Source URL" v-model="source.url" />
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <text-field label="Variation" v-model="source.validation" />
        </div>
        <div class="col">
          <text-field label="Bundle Quantity" v-model="source.qty" />
        </div>
      </div>
    </div>
    <div class="form-group">
      <ul class="list-group">
        <li class="list-group-item">
          <span>Cost</span>
          <span class="value">{{ source.cost }}</span>
        </li>
        <li class="list-group-item">
          <span>Shipping</span>
          <span class="value">{{ source.shipping }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { TextField } from "@/components";

export default {
  name: "source-porduct",

  components: {
    TextField
  },

  props: {
    source: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.source-wrapper {
  h1 {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32325d;
    margin: 20px 0;
  }

  .list-group-item {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.08;
    color: #546080;
    display: flex;

    span {
      width: 100%;
    }
  }
}
</style>