<template>
  <div class="product-offers-wrapper">
    <div class="card">
      <offers-actions @change-per-page="onChangePerPage" @search="onSearch" />
      <offers-table
        :is-selectable="true"
        :is-actions="true"
        :is-pagination="true"
        :pagination="pagination"
        :columns="columns"
        :data="data"
      ></offers-table>
    </div>
  </div>
</template>

<script>
import { Table as OffersTable } from "@/components";
import OffersActions from "./OffersActions";

export default {
  name: "product-offers",

  components: {
    OffersTable,
    OffersActions
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      pagination: {
        per_page: 5,
        total: this.data.length,
        current: 1
      },
      columns: [
        {
          label: "Seller",
          field: "seller",
          sortable: true
        },
        {
          label: "Price",
          field: "price",
          sortable: true
        },
        {
          label: "Profit",
          field: "profit",
          sortable: true
        },
        {
          label: "Prime",
          field: "prime",
          sortable: true
        },
        {
          label: "Condition",
          field: "condition",
          sortable: true
        },
        {
          label: "FB30",
          field: "fb30",
          sortable: true
        },
        {
          label: "FB90",
          field: "fb90",
          sortable: true
        },
        {
          label: "FByear",
          field: "fbyear",
          sortable: true
        },
        {
          label: "FBtotal",
          field: "fbtotal",
          sortable: true
        }
      ]
    };
  },

  methods: {
    onChangePerPage(per_page) {
      this.pagination = {
        ...this.pagination,
        per_page
      };
    },
    onSearch() {
      console.log("search");
    }
  }
};
</script>