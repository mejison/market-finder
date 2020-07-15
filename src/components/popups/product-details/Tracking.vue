<template>
  <div class="tracker-wrapper">
    <div class="tracker form-group">
      <div class="toggle">
        <toggle label="Tracking" v-model="tracking.tracking" />
      </div>
      <div class="info">
        <div class="info-items">
          <div class="option">
            <dropdown
              label="Repricing Strategy"
              :options="repricingStrategyOptions"
              v-model="tracking.repricing_strategy"
            />
          </div>
          <div class="option">
            <text-field-with-dropdown
              label="Min Profit"
              v-model="tracking.min_profit"
              :options="currOptions"
            />
          </div>
        </div>
        <div class="danger-info">
          <i class="fas fa-info-circle"></i>
          Setting a new repricing value will reprice the selected listing NOW (according to the new value)
        </div>
      </div>
    </div>
    <div class="d-flex">
      <btn class="ml-auto" type="success" @click="onSave">Save Tracking</btn>
    </div>
  </div>
</template>

<script>
import { Btn, Toggle, Dropdown, TextFieldWithDropdown } from "@/components";

export default {
  name: "tracking",

  components: {
    TextFieldWithDropdown,
    Toggle,
    Dropdown,
    Btn
  },

  data() {
    return {
      tracking: {
        tracking: true,
        repricing_strategy: 1,
        min_profit: "5,29",
        currency: "$"
      },
      currOptions: [
        {
          name: "$",
          value: "$"
        },
        {
          name: "€",
          value: "€"
        }
      ],
      repricingStrategyOptions: [
        {
          name: "Beat Lowest - Min Profit",
          value: 1
        }
      ]
    };
  },

  methods: {
    onSave() {
      this.$emit("save", this.tracking);
    }
  }
};
</script>

<style lang="scss" scoped>
.tracker-wrapper {
  padding-top: 30px;

  .tracker {
    display: flex;

    .toggle {
      min-width: 150px;
    }

    .info {
      width: 100%;

      .danger-info {
        font-size: 12px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #525f7f;

        .fas {
          color: #d12121;
          margin-right: 5px;
        }
      }
    }

    .info-items {
      display: flex;
      margin-bottom: 15px;

      .option {
        margin-right: 15px;
        width: 100%;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>