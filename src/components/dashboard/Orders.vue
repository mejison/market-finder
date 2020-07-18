<template>
  <div class="wrapper-orders">
    <div class="card">
      <div class="filters">
        <div class="d-flex justify-content-center align-items-center">
          <h3 class="mb-0">My Orders</h3>
          <div class="search">
            <span>Search</span>
            <input
              type="text"
              class="form-control form-control-sm search"
              placeholder="Type to Search..."
              @input="onSearch"
            />
          </div>
          <div class="per-page">
            <span>Show</span>
            <select
              class="form-control form-control-sm"
              v-model="pagination.per_page"
              @change="onChangePerPage"
            >
              <option v-for="(page, index) in perPageOptions" :key="index" :value="page">{{ page }}</option>
            </select>
            <span>entries</span>
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-success btn-sm">
            <i class="fas fa-download"></i>
            Export Selected
          </button>
          <button class="btn btn-danger btn-sm" @click="onDelete">
            <i class="fas fa-times"></i>
            Deleted Selected
          </button>
        </div>
      </div>

      <orders-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :is-selectable="true"
        :is-actions="true"
        :is-pagination="true"
        @select="onSelect"
        @change-page="onChangePage"
        @action="onAction"
      >
        <template v-slot:status="{ row }">
          <div class="status">
            <i :class="`fas fa-${iconStatuses[row.status]}  ${row.status}`"></i>
            <span class="ml-2">{{ row.status }}</span>
          </div>
        </template>

        <template v-slot:image="{ row }">
          <div class="image-product">
            <img class="img-thumbnail" :src="row.image" alt="image" />
          </div>
        </template>

        <template v-slot:amazon_order_id="{ row }">
          <a href>{{ row.amazon_order_id }}</a>
        </template>

        <template v-slot:asin="{ row }">
          <a href>{{ row.asin }}</a>
        </template>

        <template v-slot:source="{ row }">
          <a href>{{ row.source }}</a>
        </template>

        <template v-slot:net_profit="{ row }">{{ row.net_profit }}</template>
      </orders-table>
    </div>
  </div>
</template>

<script>
import { Table as OrdersTable } from "@/components";

export default {
  name: "orders-dashboard",

  components: {
    OrdersTable
  },

  data() {
    return {
      perPageOptions: [5, 10, 15, 20, 50, 100],
      columns: [
        {
          label: "Status",
          sortable: true,
          field: "status",
          styled: true,
          style: "max-width: 50px"
        },
        {
          label: "",
          field: "image",
          styled: true
        },
        {
          label: "Date",
          sortable: true,
          field: "date"
        },
        {
          label: "Amazon Order ID",
          sortable: true,
          field: "amazon_order_id",
          styled: true
        },
        {
          label: "ASIN",
          sortable: true,
          field: "asin",
          styled: true
        },
        {
          label: "Source",
          sortable: true,
          field: "source",
          styled: true
        },
        {
          label: "Supplier Order ID",
          sortable: true,
          field: "supplier_order_id"
        },
        {
          label: "Tracking number",
          sortable: true,
          field: "tracking_number"
        },
        {
          label: "Latest Ship Date",
          sortable: true,
          field: "latest_ship_date"
        },
        {
          label: "QTY",
          sortable: true,
          field: "qty"
        },
        {
          label: "Purchase Cost",
          sortable: true,
          field: "purchase_cost"
        },
        {
          label: "Buyer Paid",
          sortable: true,
          field: "buyer_paid"
        },
        {
          label: "Price after AZ fee",
          sortable: true,
          field: "price_after_az_fee"
        },
        {
          label: "Net Profit",
          sortable: true,
          field: "net_profit",
          styled: true
        }
      ],
      data: [
        {
          status: "Shipped",
          image: "//placehold.it/150",
          date: "06/15/2020 16:04",
          amazon_order_id: "114-8984330-6125827	",
          asin: "B00BCSYZMS",
          source: "Home Depot",
          supplier_order_id: "WA90753583",
          tracking_number: "391936026903",
          latest_ship_date: "04/29/2020 23:59",
          qty: "1",
          purchase_cost: "$266.44",
          buyer_paid: "$266.44",
          price_after_az_fee: "$266.44",
          net_profit: "$9.42"
        },
        {
          status: "Shipped",
          image: "//placehold.it/150",
          date: "06/15/2020 16:04",
          amazon_order_id: "114-8984330-6125827	",
          asin: "B00BCSYZMS",
          source: "Home Depot",
          supplier_order_id: "WA90753583",
          tracking_number: "391936026903",
          latest_ship_date: "04/29/2020 23:59",
          qty: "1",
          purchase_cost: "$266.44",
          buyer_paid: "$266.44",
          price_after_az_fee: "$266.44",
          net_profit: "$9.42"
        },
        {
          status: "Canceled",
          image: "//placehold.it/150",
          date: "06/15/2020 16:04",
          amazon_order_id: "114-8984330-6125827	",
          asin: "B00BCSYZMS",
          source: "Home Depot",
          supplier_order_id: "WA90753583",
          tracking_number: "391936026903",
          latest_ship_date: "04/29/2020 23:59",
          qty: "1",
          purchase_cost: "$266.44",
          buyer_paid: "$266.44",
          price_after_az_fee: "$266.44",
          net_profit: "$9.42"
        },
        {
          status: "Pending",
          image: "//placehold.it/150",
          date: "06/15/2020 16:04",
          amazon_order_id: "114-8984330-6125827	",
          asin: "B00BCSYZMS",
          source: "Home Depot",
          supplier_order_id: "WA90753583",
          tracking_number: "391936026903",
          latest_ship_date: "04/29/2020 23:59",
          qty: "1",
          purchase_cost: "$266.44",
          buyer_paid: "$266.44",
          price_after_az_fee: "$266.44",
          net_profit: "$9.42"
        },
        {
          status: "Canceled",
          image: "//placehold.it/150",
          date: "06/15/2020 16:04",
          amazon_order_id: "114-8984330-6125827	",
          asin: "B00BCSYZMS",
          source: "Home Depot",
          supplier_order_id: "WA90753583",
          tracking_number: "391936026903",
          latest_ship_date: "04/29/2020 23:59",
          qty: "1",
          purchase_cost: "$266.44",
          buyer_paid: "$266.44",
          price_after_az_fee: "$266.44",
          net_profit: "$9.42"
        }
      ],
      pagination: {
        per_page: 5,
        page: 1,
        total: 15
      },
      iconStatuses: {
        Shipped: "check-circle",
        Pending: "hourglass-half",
        warning: "exclamation-triangle",
        Unshipped: "eye",
        Canceled: "trash"
      }
    };
  },

  methods: {
    onChangePerPage() {},
    onSelect() {},
    onChangePage() {},
    onAction() {},
    onDelete() {},
    onSearch() {}
  }
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
}

.per-page,
.search {
  display: flex;
  align-items: center;
}

.per-page,
.search {
  font-size: 13px;
  color: #525f7f;

  span {
    margin: 0 15px;
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search {
  font-size: 13px;
  color: #8898aa;

  &::placeholder {
    font-size: 13px;
    color: #8898aa;
  }
}
</style>