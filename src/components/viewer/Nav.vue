<template>
  <div class="viewer-nav-wrapper">
    <div class="row">
      <div class="col">
        <text-field label="ASIN" v-model="nav.asin" placeholder="ASIN" />
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <div class="or-wrap">
          <span class="or">
            <span>OR</span>
          </span>
        </div>
      </div>
      <div class="col">
        <text-field label="Source URL" v-model="nav.source_url" placeholder="Source URL" />
      </div>
      <div class="col-2">
        <text-field label="Variation" v-model="nav.variation" placeholder="Variation" />
      </div>
      <div class="col-2">
        <text-field label="Quantity" v-model="nav.quantity" placeholder="Quantity" />
      </div>
      <div class="col-2 d-flex w-100">
        <div class="mt-auto w-100">
          <btn type="success btn-block" @click="onView">View Product</btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TextField, Btn } from "@/components";

export default {
  name: "viwer-nav",

  props: {},

  components: {
    TextField,
    Btn
  },

  data() {
    return {
      nav: {
        asin: "",
        source_url: "",
        variation: "",
        quantity: ""
      }
    };
  },

  methods: {
    onView() {
      this.$emit("view", this.nav);
    }
  }
};
</script>

<style lang="scss" scoped>
.viewer-nav-wrapper {
  padding: 26px;

  .or-wrap {
    transform: translateY(13px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .or {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: #8898aa;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #d9dbde;
    position: relative;
    margin: 0;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 25px;
      height: 1px;
      background: #d9dbde;
    }

    &:after {
      left: -100%;
    }

    &:before {
      right: -100%;
    }
  }
}
</style>