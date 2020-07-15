<template>
  <div class="notes-wrapper">
    <div class="form-group">
      <text-field label="Notes" v-model="note" />
    </div>
    <div class="d-flex">
      <btn class="ml-auto" type="success" @click="onSave">Save Notes</btn>
    </div>
  </div>
</template>

<script>
import { TextField, Btn } from "@/components";

export default {
  components: {
    TextField,
    Btn
  },

  data() {
    return {
      note: ""
    };
  },

  methods: {
    onSave() {
      this.$emit("save", this.note);
    }
  }
};
</script>

<style lang="scss" scoped>
.notes-wrapper {
  padding-top: 30px;
}
</style>