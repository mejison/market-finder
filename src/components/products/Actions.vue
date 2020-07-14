<template>
  <div class="actions">
    <a href="#">...</a>
  </div>
</template>

<script>
export default {
  name: "actions",

  props: {},

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.actions {
  width: 30px;
  height: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08);
  background-color: #21d196;
  position: relative;

  a {
    font-size: 18px;
    color: #fff;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>