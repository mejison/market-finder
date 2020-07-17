<template>
  <div class="box-calc-wrapper">
    <div class="card">
      <div class="title">{{ data.title }}</div>
      <div class="wp-icon">
        <a :href="data.link">{{ data.count }} {{ data.desc }}</a>
        <span class="icon" :style="{'background': data.color}">
          <i :class="`fas fa-${data.icon}`"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "box-calc",

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.box-calc-wrapper {
  .card {
    padding: 22px 26px;
    display: flex;

    .title {
      font-size: 11px;
      font-weight: bold;
      line-height: 1.73;
      color: #8898aa;
      text-transform: uppercase;
    }

    .wp-icon {
      position: relative;
    }

    .icon {
      margin-left: auto;
      position: absolute;
      right: -15px;
      bottom: -10px;
      border-radius: 50%;
      color: #fff;
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 14px;
      }
    }
  }
}
</style>