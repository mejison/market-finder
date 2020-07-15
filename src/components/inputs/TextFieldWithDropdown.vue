<template>
  <div class="text-field-with-dropdown">
    <label>{{ label }}</label>
    <div class="input-group">
      <input type="text" class="form-control" v-model="payload" />
      <div class="input-group-append">
        <button class="btn dropdown-toggle" @click="show = ! show" type="button">{{ selected.name }}</button>
        <div class="dropdown-menu" :class="{'show': show}">
          <a
            class="dropdown-item"
            href="#"
            @click="selected = option; show = false"
            v-for="(option, index) in options"
            :key="index"
          >{{ option.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "text-field-with-dropdown",

  props: {
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => {
        [];
      }
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selected: this.options[0],
      payload: this.value,
      show: false
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
    }
  }
};
</script>

<style lang="scss" scoped>
.text-field-with-dropdown {
  label {
    font-size: 14px;
    font-weight: bold;
    color: #525f7f;
  }
}

.dropdown-toggle {
  background: #e5e5e5;

  &:hover,
  &:active {
    box-shadow: none;
  }
}
</style>