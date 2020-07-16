<template>
  <div class="finder-wrapper">
    <component :is="getStep" :source="current.source" @pull="onPull" @next="onNext"></component>
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
          title: "iLive IHB613B Audio CD Micro System with Bluetooth and FM",
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
      current: {}
    };
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