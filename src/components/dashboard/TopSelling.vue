<template>
  <div class="top-selling-wrapper">
    <div class="card">
      <div class="head">
        <h1>Top selling items</h1>
        <div class>
          <div class="d-flex">
            <btn
              :type="`${period == 'last_day'? 'primary' : 'outline-primary'} mr-2`"
              @click="onSelectPeriod('last_day')"
            >Last Day</btn>
            <btn
              :type="`${period == 'last_week'? 'primary' : 'outline-primary'} mr-2`"
              @click="onSelectPeriod('last_week')"
            >Last Week</btn>
            <btn
              :type="`${period == 'last_month'? 'primary' : 'outline-primary'} mr-2`"
              @click="onSelectPeriod('last_month')"
            >Last Month</btn>
            <btn
              :type="`${period == 'all_time'? 'primary' : 'outline-primary'} mr-2`"
              @click="onSelectPeriod('all_time')"
            >All Time</btn>
          </div>
        </div>
      </div>
      <table-selling :columns="columns" :data="data">
        <template v-slot:image="{ row }">
          <div class="image-product">
            <img class="img-thumbnail" :src="row.image" alt="image" />
          </div>
        </template>

        <template v-slot:product="{ row }">
          <div class="title">{{ row.name }}</div>
          <div>
            <a class="article" href="#">
              <i class="far fa-flag"></i>
              {{ row.article }}
            </a>
            <span class="sku">SKU: {{ row.sku }}</span>
          </div>
        </template>

        <template v-slot:number_of_sales="{ row }">
          <div class="d-flex justify-content-center">{{ row.number_of_sales }}</div>
        </template>
      </table-selling>
    </div>
  </div>
</template>

<script>
import { Btn, Table as TableSelling } from "@/components";

export default {
  name: "top-selling",

  components: {
    TableSelling,
    Btn
  },

  props: {
    columns: {
      type: Array,
      default: () => ({})
    },
    data: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onSelectPeriod(period) {
      this.period = period;
      this.$emit("change");
    }
  },

  data() {
    return {
      period: "last_week"
    };
  }
};
</script>

<style lang="scss" scoped>
.top-selling-wrapper {
  font-size: 18px;
  font-weight: bold;
  color: #32325d;

  .head {
    padding: 20px 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 18px;
      font-weight: bold;
      color: #32325d;
    }
  }
}
</style>