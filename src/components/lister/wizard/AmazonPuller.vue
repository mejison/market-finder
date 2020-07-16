<template>
  <div class="amazon-asin-wrapper">
    <h1>Amazon ASIN</h1>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <text-field
            label="Pull info from ASIN"
            placeholder="Enter ASIN and press Pull"
            v-model="asin"
          />
        </div>
        <div class="col-lg-3 d-flex">
          <div class="mt-auto">
            <btn type="success justify-self-end" @click="onPull">Pull</btn>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col d-flex justify-content-center mt-5">
          <img src="/assets/img/unnamed.jpg" alt="amazon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TextField, Btn } from "@/components";

export default {
  name: "source-porduct",

  components: {
    TextField,
    Btn
  },

  data() {
    return {
      asin: "B00BCSYZMS"
    };
  },

  methods: {
    onPull() {
      this.$emit("pull", this.asin);
    }
  }
};
</script>

<style lang="scss" scoped>
.amazon-asin-wrapper {
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
  }
}
</style>