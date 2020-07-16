<template>
  <div class="text-field-wrapper">
    <div class="input-group mb-3">
      <div class="input-group-prepend" @click="onClick" v-if="position == 'left'">
        <span class="input-group-text">{{ label }}</span>
      </div>
      <input
        type="text"
        @click="onClick"
        v-model="payload"
        class="form-control"
        :readonly="disabled"
        :class="{'readonly': disabled}"
        :placeholder="placeholder"
        @focus="onFocus"
      />
      <div class="input-group-append" @click="onClick" v-if="position == 'right'">
        <span class="input-group-text">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "text-field-with-title",

  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "left"
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
    onClick() {
      this.$emit("click", this.payload);
    },
    onFocus() {
      this.$emit("focus");
    }
  }
};
</script>

<style lang="scss" scoped>
.text-field-wrapper {
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
  }

  input {
    width: 100%;

    &::placeholder {
      font-size: 15px;
      line-height: 1.87;
      letter-spacing: -0.28px;
      color: #525f7f;
    }
  }

  .input-group-prepend,
  .input-group-append {
    .input-group-text {
      font-size: 15px !important;
      letter-spacing: -0.28px;
      color: #525f7f;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>