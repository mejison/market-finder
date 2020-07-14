<template>
  <div class="col">
    <div class="card">
      <div class="card-header border-0 d-flex align-items-center justify-content-between">
        <product-filters
          :can-do-actions="!!selected.length"
          @change-per-page="onChangePerPage"
          @search="onSearch"
          @delete="onDelete"
        />
      </div>

      <product-table
        :columns="columns"
        :data="mapedData"
        :pagination="pagination"
        @select="onSelect"
        @change-page="onChangePage"
      >
        <template v-slot:status="{ row }">
          <div class="status">
            <i :class="`fas fa-${iconStatuses[row.status]}  ${row.status}`"></i>
          </div>
        </template>

        <template v-slot:image="{ row }">
          <div class="image-product">
            <img class="img-thumbnail" :src="row.image" alt="image" />
          </div>
        </template>

        <template v-slot:title="{ row }">
          <div class="title">{{ row.title }}</div>
          <div>
            <a class="article" href="#">
              <i class="far fa-flag"></i>
              {{ row.article }}
            </a>
            <span class="sku">SKU: {{ row.sku }}</span>
          </div>
        </template>

        <template v-slot:bsr="{ row }">
          <a href="#">{{ row.bsr }}</a>
        </template>

        <template v-slot:source="{ row }">
          <a href="#">{{ row.source }}</a>
        </template>

        <template v-slot:stock="{ row }">
          <span class="stock correct" v-if="row.stock">
            <i class="fas fa-check"></i>
          </span>
          <span class="stock incorrect" v-else>
            <i class="fas fa-times"></i>
          </span>
        </template>

        <template v-slot:profit="{ row }">
          <span class="profit">{{ row.profit }}</span>
        </template>

        <template v-slot:changed="{ row }">
          <span>{{ row.changed.date }}</span>
          <div>
            <span class="who">{{ row.changed.who }}</span>
          </div>
        </template>
      </product-table>
    </div>
  </div>
</template>

<script>
import { ProductTable, ProductFilters } from "@/components";
import { mapActions, mapGetters } from "vuex";

import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export default {
  name: "products",

  components: {
    ProductTable,
    ProductFilters
  },

  methods: {
    ...mapActions("orders", ["getOrders", "deleteOrder"]),
    ...mapActions("auth", ["login"]),
    onDelete() {
      const deletingCount = this.selected.length;
      let finishedDeleting = 0;
      this.selected.forEach(row => {
        this.deleteOrder(row.id)
          .then(() => {
            finishedDeleting++;
          })
          .catch(() => {
            finishedDeleting++;
          })
          .then(() => {
            if (finishedDeleting == deletingCount) {
              swal.fire({
                title: "Deleted!",
                text: `You deleted ${this.selected.length} rows`,
                type: "success",
                confirmButtonClass: "btn btn-success btn-fill",
                buttonsStyling: false
              });
              this.selected = [];
              this.init();
            }
          });
      });
    },
    onSearch(search) {
      this.filter = {
        ...this.filter,
        "customer_notes[like]": `${search}`
      };

      this.init();
    },
    onChangePerPage(per_page) {
      this.pagination = {
        ...this.pagination,
        per_page
      };

      this.filter = {
        ...this.filter,
        per_page
      };
      this.init();
    },
    onSelect(selected) {
      this.selected = selected;
    },
    onChangePage(page) {
      this.pagination = {
        ...this.pagination,
        page
      };
      this.filter = {
        ...this.filter,
        page
      };
      this.init();
    },
    init() {
      this.getOrders(this.filter)
        .then(({ meta }) => {
          this.pagination = {
            total: meta.total,
            from: meta.from,
            to: meta.to,
            page: meta.current_page,
            per_page: meta.per_page * 1
          };
        })
        .catch(() => {
          this.login({
            email: "oren@test.com",
            password: "12345"
          }).then(() => {
            this.init();
          });
        });
    },
    getQty(cart) {
      return cart.reduce((a, curr) => {
        return a + curr.quantity;
      }, 0);
    },
    getProfit(cart) {
      const profit = cart.reduce((a, curr) => {
        return a + curr.profit;
      }, 0);
      return profit.toFixed(2);
    },
    getSellingPrice(cart) {
      const selling_price = cart.reduce((a, curr) => {
        return a + curr.total_price;
      }, 0);
      return selling_price.toFixed(2);
    }
  },

  created() {
    this.init();
  },

  computed: {
    ...mapGetters({
      orders: "orders/items"
    }),
    mapedData() {
      return this.orders.map(order => {
        return {
          id: order.order_id,
          status: order.order_status.status_description,
          title: order.order_details[0].product_long_name,
          sku: "KG-KWL1-4017",
          article: order.order_details[0].target_platform_asin,
          image: "https://placehold.it/150x150",
          bsr: "294 033",
          qty: this.getQty(order.order_details),
          selling_price: `${order.currency.symbol}${this.getSellingPrice(
            order.order_details
          )}`,
          source: order.target_platform.platform_name,
          stock: true,
          cost: `${order.currency.symbol}${order.total_amount}`,
          profit: `${order.currency.symbol}${this.getProfit(
            order.order_details
          )}`,
          changed: {
            date: order.last_modified_at,
            who: "Xavier Guy"
          }
        };
      });
    }
  },

  data() {
    return {
      selected: [],
      filter: {
        page: 1,
        per_page: 10
      },
      pagination: {
        page: 1,
        per_page: 10,
        total: 0,
        from: 0,
        to: 0
      },
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
          label: "Title",
          field: "title",
          styled: true,
          style: "max-width: 180px"
        },
        {
          label: "BSR",
          sortable: true,
          field: "bsr",
          styled: true
        },
        {
          label: "Qty",
          sortable: true,
          field: "qty"
        },
        {
          label: "Selling price",
          sortable: true,
          field: "selling_price"
        },
        {
          label: "Source",
          sortable: true,
          field: "source",
          styled: true
        },
        {
          label: "Stock",
          sortable: true,
          field: "stock",
          styled: true,
          style: "max-width: 80px",
          centered: true
        },
        {
          label: "Cost",
          sortable: true,
          field: "cost"
        },
        {
          label: "Profit",
          sortable: true,
          field: "profit",
          styled: true
        },
        {
          label: "Last update",
          sortable: true,
          field: "changed",
          styled: true
        }
      ],
      iconStatuses: {
        Shipped: "check-circle",
        Pending: "hourglass-half",
        warning: "exclamation-triangle",
        Unshipped: "eye",
        Canceled: "trash"
      }
    };
  }
};
</script>