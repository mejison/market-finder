<template>
  <div class="card-calc-wrapper">
    <div class="card">
      <div class="d-flex justify-content-between">
        <div class="left">
          <h3>{{ data.left.subtitle }}</h3>
          <h1>{{ data.left.title }}</h1>
          <span>{{ data.left.value }}</span>
        </div>
        <div class="right">
          <h3>{{ data.right.subtitle }}</h3>
          <h1>{{ data.right.title }}</h1>
          <span>{{ data.right.value }}</span>
        </div>
      </div>
      <div class="sub-desc">
        <span class="type">
          <i v-if="data.type == 'up'" class="fas fa-arrow-up"></i>
          <i v-else class="fas fa-arrow-down"></i>
        </span>
        <span class="percent" :class="{'up': data.type}">{{ data.percent }}</span>
        <span>{{ data.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-calc",

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.card-calc-wrapper {
  .card {
    padding: 15px 26px;
    display: flex;

    .left,
    .right {
      width: 100%;
    }

    .right {
      margin-left: 15px;
    }

    .left {
      border-right: 1px solid #e9ecef;
    }

    .sub-desc {
      .percent {
        font-size: 14px;
        color: #2dce89;
        margin-right: 15px;
      }

      .type {
        .fas {
          margin-right: 5px;
        }

        .fas.fa-arrow-up {
          color: #2dce89;
        }

        .fas.fa-arrow-down {
          color: #d12121;
        }
      }

      span {
        font-size: 14px;
        font-weight: 300;
        color: #8898aa;
      }
    }

    h1,
    h3 {
      font-weight: bold;
      line-height: 1.27;
      color: #8898aa;
    }

    span {
      font-size: 20px;
      font-weight: bold;
      color: #32325d;
    }

    h3 {
      font-size: 10px;
      text-transform: uppercase;
    }

    h1 {
      font-size: 15px;
    }
  }
}
</style>