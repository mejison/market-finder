<template>
  <div class="price-and-quantity-wrapper">
    <div class="form-group d-flex">
      <div class="option cost_at_field">
        <span class="cost_at">
          Cost at
          <a href="#">Home Depot</a>
          : ${{ price_and_quantity.cost }}
        </span>
        <text-field
          label="Selling Price"
          :disabled="true"
          v-model="price_and_quantity.selling_price"
        />
      </div>
      <div class="option quantity_field">
        <counter-field label="Quantity" v-model="price_and_quantity.quantity" />
      </div>
      <div class="option">
        <text-field label="Shipping Delay" v-model="price_and_quantity.shipping_delay" />
      </div>
    </div>
    <div class="form-group">
      <div class="d-flex">
        <div class="option">
          <text-field label="Markup $" :disabled="true" v-model="price_and_quantity.markup_usd" />
        </div>
        <div class="option">
          <text-field label="Markup %" :disabled="true" v-model="price_and_quantity.markup_euro" />
        </div>
        <div class="option">
          <text-field label="Profit $" :disabled="true" v-model="price_and_quantity.profit_usd" />
        </div>
        <div class="option">
          <text-field
            label="Profit %"
            :disabled="true"
            v-model="price_and_quantity.profit_percent"
          />
        </div>
      </div>
    </div>
    <div class="info-text form-group">
      <i class="fas fa-info-circle"></i> Price for listings with "Beat Lowest" repricing strategy will not be changed. Change their repricing strategy first.
    </div>
    <div class="d-flex">
      <btn class="ml-auto" type="success" @click="onSave">Save Pricing &amp; Quantity</btn>
    </div>
  </div>
</template>

<script>
import { TextField, CounterField, Btn } from "@/components";

export default {
  name: "price-and-qty",

  components: {
    TextField,
    CounterField,
    Btn
  },

  data() {
    return {
      price_and_quantity: {
        cost: "85.71",
        selling_price: "108,33",
        quantity: "5",
        shipping_delay: "7",

        markup_usd: "22,62",
        markup_euro: "15",
        profit_usd: "5,29",
        profit_percent: "5"
      }
    };
  },

  methods: {
    onSave() {
      this.$emit("save", this.note);
    }
  }
};
</script>

<style lang="scss" scoped>
.price-and-quantity-wrapper {
  padding-top: 30px;
}

.cost_at {
  font-size: 12px;
  font-weight: 600;
  line-height: 2;
  color: #525f7f;
}

.info-text {
  font-size: 12px;
  font-weight: 600;
  line-height: 2;
  color: #525f7f;

  .fas {
    color: #d12121;
    margin-right: 5px;
  }
}

.option {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}

.cost_at_field {
  min-width: 356px;
  position: relative;

  .cost_at {
    position: absolute;
    top: 2px;
    right: 0;
  }
}

.quantity_field {
  min-width: 168px;

  .text-field-wrapper {
    margin: 0;
  }
}
</style>