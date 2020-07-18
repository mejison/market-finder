<template>
  <div class="graph-sales-wrapper">
    <div class="card">
      <div class="head">
        <h1>Total sales</h1>
      </div>
      <div>
        <canvas id="chart-sales-dark" class="chart-canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "graph-sales",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.graph-sales-wrapper {
  .card {
    padding: 20px 23px;

    .head {
      h1 {
        font-size: 18px;
        font-weight: bold;
        color: #32325d;
      }
    }
  }
}
</style>