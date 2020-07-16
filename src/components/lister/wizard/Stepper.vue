<template>
  <div class="stepper-wrapper">
    <span class="progress">
      <span class="fill" :style="`width: ${fillWidth}%`"></span>
    </span>
    <div
      class="step"
      :class="{'active': step >= (index + 1)}"
      v-for="(item, index) in steps"
      :key="index"
    >
      <div class="step-label">
        <span>{{ item.sub_label }}</span>
        {{ item.label }}
      </div>
      <span class="step-icon">
        <i :class="`fas fa-${item.icon}`"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "stepper",

  props: {
    step: {
      type: Number,
      default: 1
    },
    steps: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  computed: {
    fillWidth() {
      let percent = 100 / (this.steps.length - 1);
      return this.step != 1 ? (this.step - 1) * percent : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.stepper-wrapper {
  padding: 20px 20px 50px 20px;
  background-color: #f2f3f9;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  position: relative;

  .progress {
    position: absolute;
    content: "";
    left: 20%;
    right: 20%;
    top: 40%;
    transform: translateY(-50%);
    height: 3px;
    background-color: #eceeef;

    .fill {
      height: 100%;
      background-color: #21d196;
    }
  }

  .step {
    box-shadow: inset 0 1px 2px 0 rgba(90, 97, 105, 0.1);
    background-color: #f4f6f7;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .progress {
      position: absolute;
      content: "";
      width: 100%;
      right: -100%;
      top: 50%;
      transform: translateY(-50%);
      height: 3px;
      background-color: #eceeef;
    }

    .step-label {
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      font-weight: bold;
      line-height: 1.27;
      letter-spacing: 0.99px;
      text-align: center;
      color: #21d196;
      text-transform: uppercase;
      white-space: nowrap;

      span {
        display: block;
        opacity: 0.6;
        font-size: 9px;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 0.81px;
        text-align: center;
        color: #9ba3b5;
      }
    }

    .step-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: #586584;
      background-color: #fdf9f9;
    }

    &.active {
      .step-icon {
        background-color: #b0eed3;
        color: #3cb289;
      }
    }
  }
}
</style>