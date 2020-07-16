<template>
  <div class="home-depot-shipping-wrapper">
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
          <div class="col">
            <dropdown
              label="Shipping Template"
              :options="templatesOptions"
              v-model="product.shipping_template"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <text-field label="Shipping Delay" v-model="product.shipping_delay" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <dropdown
              label="Repricing Strategy"
              :options="repricingStrateOptions"
              v-model="product.repricing_strategy"
            />
          </div>
          <div class="col">
            <text-field-with-dropdown
              label="Min Profit"
              v-model="product.min_profit"
              :options="currOptions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TextField, TextFieldWithDropdown, Dropdown } from "@/components";

export default {
  name: "home-depot-shipping",

  components: {
    TextField,
    Dropdown,
    TextFieldWithDropdown
  },

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      repricingStrateOptions: [
        {
          name: "Beat Lowest - Min Profit",
          value: 1
        }
      ],
      templatesOptions: [
        {
          name: "AMZ FREE",
          value: 1
        }
      ],
      currOptions: [
        {
          name: "$",
          value: "$"
        },
        {
          name: "€",
          value: "€"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-depot-shipping-wrapper {
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