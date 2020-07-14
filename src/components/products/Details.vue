<template>
  <div class="card">
    <div class="card-body">
      <div class="head d-flex justify-content-between align-items-center">
        <h1>{{ order.title }}</h1>
        <div>
          <button class="btn btn-success btn-sm">
            <i class="fas fa-pencil-alt"></i>
            Edit Listings
          </button>
          <button class="btn btn-success btn-sm">
            <i class="fas fa-eye"></i>
            Toggle Tracking
          </button>
          <button class="btn btn-danger btn-sm">
            <i class="fas fa-times"></i>
            Delete Selected
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
</style>