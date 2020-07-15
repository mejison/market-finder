<template>
  <div class="text-field-wrapper">
    <label>{{ label }}</label>
    <div class="counter-wrapper">
      <a href="#" class="minus" @click="onClickMinus">-</a>
      <input type="text" v-model="payload" class="form-control" :placeholder="placeholder" />
      <a href="#" class="plus" @click="onClickPlus">+</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "counter-field",

  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      payload: this.value
    };
  },

  watch: {
    value() {
      this.payload = this.value;
    }
  },

  methods: {
    onChange() {
      this.$emit("input", this.payload);
    },
    onClickMinus() {
      this.payload = this.payload * 1 - 1;
      this.$emit("input", this.payload);
    },
    onClickPlus() {
      this.payload = this.payload * 1 + 1;
      this.$emit("input", this.payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-field-wrapper {
  width: 100%;
  max-width: 168px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
  }

  input {
    width: 100%;
    padding: 0 50px;
    text-align: center;
  }

  .counter-wrapper {
    position: relative;
    width: 100%;

    .minus,
    .plus {
      min-width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 1px;
      bottom: 1px;
      border-radius: 4px;
      background-color: #f4f5f7;
      font-weight: 600;
    }

    .minus {
      left: 1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .plus {
      right: 1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>