<template>
  <div class="amazon-details-wrapper">
    <div class="form-group d-flex">
      <div class="img-prod mr-2">
        <img :src="product.image" alt="alt" class="img-thumbnail" />
      </div>
      <h1 class="d-flex align-items-center">
        <img src="/assets/img/home-depot.jpg" alt="amazon" class="mr-2" />
        {{ product.name }}
      </h1>
    </div>
    <div>
      <div class="form-group">
        <div class="row">
          <div class="col selling-price">
            <span class="cost">
              Cost at
              <a href="#">Home Depot</a>
              : {{ product.cost }}
            </span>
            <text-field label="Selling Price" v-model="product.selling_price" />
          </div>
          <div class="col-lg-4">
            <text-field label="Quantity" v-model="product.qty" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <text-field label="Markup" v-model="product.markup" />
          </div>
          <div class="col">
            <text-field label="Profit" v-model="product.profit" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <text-field label="Markup (%)" v-model="product.markup_percent" />
          </div>
          <div class="col">
            <text-field label="Profit Margin (%)" v-model="product.profit_margin" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TextField } from "@/components";

export default {
  name: "amazon-details",

  components: {
    TextField
  },

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.amazon-details-wrapper {
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

  .img-prod {
    width: 75px;
    height: 75px;

    img {
      width: 100%;
    }
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

  .selling-price {
    position: relative;

    .cost {
      position: absolute;
      right: 15px;
      top: 5px;
      font-size: 12px;
      font-weight: 600;
      text-align: right;
    }
  }
}
</style>