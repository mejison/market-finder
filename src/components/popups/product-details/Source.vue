<template>
  <div class="source-wrapper">
    <div class="form-group source">
      <div class="cost-wrapper">
        <div class="cost">
          <span class="label-cost">COST</span>
          <span class="cost-value">${{ source.cost }}</span>
        </div>
      </div>
      <div class="info">
        <div class="form-group">
          <text-field label="Source URL" v-model="source.source_url" />
        </div>
        <div class="form-group options">
          <div class="option">
            <text-field label="Validation" v-model="source.validation" />
          </div>
          <div class="option">
            <text-field label="Shipping" v-model="source.shipping" />
          </div>
          <div class="option">
            <counter-field label="Quantity" v-model="source.quantity" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <btn class="ml-auto" type="success" @click="onSave">Save Source</btn>
    </div>
  </div>
</template>

<script>
import { TextField, CounterField, Btn } from "@/components";

export default {
  name: "source-tab",

  components: {
    TextField,
    CounterField,
    Btn
  },

  data() {
    return {
      source: {
        cost: "85,71",
        source_url: "https://www.homedepot.com/p/300842929",
        validation: "Blue",
        shipping: "0",
        quantity: "1"
      }
    };
  },

  methods: {
    onSave() {
      this.$emit("save", this.source);
    }
  }
};
</script>

<style lang="scss" scoped>
.source-wrapper {
  padding-top: 30px;

  .cost {
    width: 169px;
    height: 169px;
    border: dashed 2px #e5e5e5;
    background-color: #fafbfd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .label-cost {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-align: center;
      color: #525f7f;
    }

    .cost-value {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      color: #525f7f;
      transform: translateY(-5px);
    }
  }

  .source {
    display: flex;

    .cost-wrapper {
      min-width: 200px;
    }

    .info {
      width: 100%;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;

    .option {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>