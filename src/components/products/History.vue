<template>
  <div class="history-wrapper">
    <h1>History</h1>
    <table-history :columns="columns" :data="data">
      <template v-slot:status="{ row }">
        <i :class="`fas fa-${getIcon(row.status)}`"></i>
        <span class="status-label">{{ row.status }}</span>
      </template>
      <template v-slot:stock_change="{ row }">
        <span
          class="range"
          v-html="row.stock_change ? `<span>${row.stock_change.from}</span> <i class='fas fa-long-arrow-alt-right'></i> <span>${row.stock_change.to}</span>` : 'No Change'"
        ></span>
      </template>
      <template v-slot:price_change="{ row }">
        <template v-if="row.price_change">
          <i
            class="fas direction fa-arrow-alt-circle-down"
            v-if="row.price_change.from > row.price_change.to"
          ></i>
          <i class="fas direction fa-arrow-alt-circle-up" v-else></i>
        </template>
        <span
          class="range"
          v-html="row.price_change ? `<span>${row.price_change.from}</span> <i class='fas fa-long-arrow-alt-right '></i> <span>${row.price_change.to}</span>` : 'No Change'"
        ></span>
      </template>
    </table-history>
  </div>
</template>

<script>
import TableHistory from "@/components/Table";

export default {
  name: "history",

  components: {
    TableHistory
  },

  props: {
    data: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  data() {
    return {
      columns: [
        {
          label: "Status",
          field: "status",
          styled: true
        },
        {
          label: "Time",
          field: "time"
        },
        {
          label: "Stock Change",
          field: "stock_change",
          styled: true
        },
        {
          label: "Price Change",
          field: "price_change",
          styled: true
        },
        {
          label: "Warning",
          field: "warning"
        }
      ]
    };
  },

  methods: {
    getIcon(status) {
      const icons = {
        Done: "check-circle",
        Working: "hourglass-half",
        Error: "exclamation-circle"
      };
      return icons[status];
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0 0 15px 24px;
}

.status-label {
  margin-left: 15px;
}

.range {
  i {
    display: inline-block;
    margin: 0 18px;
  }
}

.direction {
  margin-right: 5px;
}
</style>