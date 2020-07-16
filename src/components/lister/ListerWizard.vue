<template>
  <div class="bulk-uploads-wrapper">
    <div class="card">
      <stepper :step="step" :steps="steps" />
      <finder :step="step" :steps="steps" @next="onNext" @prev="onPrev" @finish="onFinish" />
    </div>
  </div>
</template>

<script>
import Stepper from "./wizard/Stepper";
import Finder from "./wizard/Finder";

export default {
  name: "lister-wizard",

  components: {
    Stepper,
    Finder
  },

  props: {},

  data() {
    return {
      step: 1,
      steps: [
        {
          label: "asin & source",
          sub_label: "step 1",
          icon: "link"
        },
        {
          label: "pricing & quantity",
          sub_label: "step 2",
          icon: "dollar-sign"
        },
        {
          label: "shipping & repricing",
          sub_label: "step 3",
          icon: "paper-plane"
        }
      ]
    };
  },

  methods: {
    onNext() {
      if (this.step != this.steps.length) {
        this.step++;
      }
    },
    onFinish() {
      console.log("finish submit");
    },
    onPrev() {
      if (this.step != 1) {
        this.step--;
      }
    }
  }
};
</script>