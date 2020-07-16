<template>
  <div class="finder-wrapper">
    <component
      :is="getStep"
      :product="current"
      :product-home-depot="currentHomeDepot"
      @pull="onPull"
      @next="onNext"
    ></component>
    <div class="form-group d-flex">
      <div class="ml-auto d-flex">
        <btn type="outline-success mr-3" v-if="step == 1" @click="onCalc">Calculate</btn>
        <btn type="outline-success mr-3" v-if="step > 1" @click="onPrev">Previous</btn>
        <btn type="success" @click="onNext" :disabled=" ! canNext">Next</btn>
      </div>
    </div>
  </div>
</template>

<script>
import StepOne from "./steps/One";
import StepTwo from "./steps/Two";
import StepThree from "./steps/Three";

import { Btn } from "@/components";

export default {
  name: "finder",

  props: {
    step: {
      type: Number,
      default: 1
    }
  },

  components: {
    StepOne,
    StepTwo,
    StepThree,
    Btn
  },

  data() {
    return {
      products: [
        {
          name: "Jonard Tools FTS-240 Fish Tape, 240'",
          bsr: "821243",
          category: "Tools & Home Improvement",
          sales_per_day: "0 - 1 sales /day",
          total_offers: "14+",
          lowest_offer_price: "$93.96",
          image: "/assets/img/product-image.jpg",
          asin: "B00BCSYZMS",
          source: {
            url: "https://www.walmart.com/ip/895251949",
            validation: "Medium|Black|6",
            qty: "1",
            cost: "$14,98",
            shipping: "$5,99"
          }
        }
      ],
      current: {},
      currentHomeDepot: {
        name: "Jonard 1/8 in. x 240 ft. Steel Fish Tape",
        image: "/assets/img/product-image.jpg",
        selling_price: "108,33",
        cost: "$85.71",
        qty: "5",
        markup: "22,62",
        profit: "22,62",
        profit_margin: "22,62",
        markup_percent: "22,62"
      }
    };
  },

  mounted() {
    this.current = this.products[0];
  },

  computed: {
    canNext() {
      return !!Object.keys(this.current).length;
    },

    getStep() {
      return {
        "1": "step-one",
        "2": "step-two",
        "3": "step-three"
      }[this.step];
    }
  },

  methods: {
    onPrev() {
      this.$emit("prev");
    },
    onPull(asin) {
      const current = this.products.find(item => item.asin == asin);
      this.current = current;
    },
    onNext() {
      this.$emit("next");
    },
    onCalc() {
      console.log("calc");
    }
  }
};
</script>

<style lang="scss" scoped>
.finder-wrapper {
  padding: 20px;
}
</style>