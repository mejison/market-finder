<template>
  <div class="card">
    <div class="date-range-wrapper">
      <h1>Choose date range</h1>
      <div class="d-flex">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
            <span class="label mr-2">from</span>
            <text-field v-model="range.from" placeholder="from" />
          </div>
          <div class="d-flex align-items-center">
            <span class="label mx-2">to</span>
            <text-field v-model="range.to" placeholder="to" />
          </div>
          <div class="or-wrap">
            <span class="or">
              <span>OR</span>
            </span>
          </div>
        </div>
        <div class="d-flex">
          <btn
            class="mt-auto"
            :type="`${range.period == 'last_day'? 'primary' : 'outline-primary'} mr-2`"
            @click="onChangePeriod('last_day')"
          >Last Day</btn>
          <btn
            class="mt-auto"
            :type="`${range.period == 'last_7_days'? 'primary' : 'outline-primary'} mr-2`"
            @click="onChangePeriod('last_7_days')"
          >Last 7 Days</btn>
          <btn
            class="mt-auto"
            :type="`${range.period == 'last_30_days'? 'primary' : 'outline-primary'}`"
            @click="onChangePeriod('last_30_days')"
          >Last 30 Days</btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Btn, TextField } from "@/components";

export default {
  name: "date-range",

  components: {
    Btn,
    TextField
  },

  data() {
    return {
      range: {
        from: "06/15/2020",
        to: "06/15/2020",
        period: "last_day"
      }
    };
  },

  methods: {
    onChangePeriod(period) {
      this.range = {
        ...this.range,
        period
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.date-range-wrapper {
  padding: 23px 24px;

  h1 {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
    margin-bottom: 0;
  }

  .label {
    font-size: 14px;
    color: #8898aa;
    transform: translateY(10px);
  }

  .or-wrap {
    transform: translateY(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;

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
}
</style>