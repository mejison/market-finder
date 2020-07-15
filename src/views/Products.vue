<template>
  <div class="col">
    <div class="card">
      <div class="card-header border-0 d-flex align-items-center justify-content-between">
        <order-filters
          :can-do-actions="!!selected.length"
          @change-per-page="onChangePerPage"
          @search="onSearch"
          @delete="onDelete"
          @edit="onEdit"
        />
      </div>

      <product-table
        :columns="columns"
        :data="mapedData"
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

      <div class="order-details" :class="{'show': Object.keys(currentProduct).length}">
        <div class="order-details-overlay" @click="onCloseDetails"></div>
        <div class="header">
          <a href="#" @click="onCloseDetails">
            <i class="fas fa-chevron-left"></i>
            back to the list
          </a>
        </div>
        <vue-custom-scrollbar class="scroll-area">
          <div class="details-body">
            <product-details
              :product="currentProduct"
              @close="onCloseDetails"
              @remove-note="onRemoveNote"
              @editing="editingProduct = $event"
            ></product-details>
          </div>
        </vue-custom-scrollbar>
      </div>
      <product-details-popup :product="editingProduct" @close="editingProduct = {}" />
    </div>
  </div>
</template>

<script>
import { ProductTable, OrderFilters, ProductDetails } from "@/components";
import ProductDetailsPopup from "@/components/popups/product-details/ProductDetails";
import { mapActions, mapGetters } from "vuex";
import vueCustomScrollbar from "vue-custom-scrollbar";
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export default {
  name: "products",

  components: {
    ProductTable,
    OrderFilters,
    ProductDetails,
    vueCustomScrollbar,
    ProductDetailsPopup
  },

  methods: {
    ...mapActions("orders", ["getOrders", "deleteOrder"]),
    ...mapActions("auth", ["login"]),
    onCloseDetails() {
      this.currentProduct = {};
    },
    onRemoveNote(note) {
      const newNotes = this.currentProduct.notes.filter(
        itemNote => itemNote.id != note.id
      );
      this.currentProduct = {
        ...this.currentProduct,
        notes: newNotes
      };
    },
    onAction() {
      this.currentProduct = this.dummyProduct;
    },
    onEdit() {
      this.editingProduct = this.dummyProduct;
    },
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
          },
          ...order
        };
      });
    }
  },

  data() {
    return {
      selected: [],
      currentProduct: {},
      editingProduct: {},
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
      },
      dummyProduct: {
        title: "iLive IHB613B Audio CD Micro System with Bluetooth and FM",
        image: "/assets/img/product-image.jpg",
        asin: "B00BCSYZMS",
        sku: "KG-KWL1-4017",
        date_added: "May 26, 2020",
        current_price: "$113.23",
        listed_quantity: "5",
        shipping_delay: "7",
        sales: "WIP",
        bsr: "294,033",
        category: "Electronics",
        estimated_sales: "1 - 1 /Day",
        tracking_status: "Enabled",
        repricing_strategy: "Beat Lowest Price - Min Profit: $5.0",
        default_quantity: "5",
        last_updated: "Jun 09, 07:54 (7 minutes ago) - Ellie-Rose Rios",
        source: "Home Depot",
        cost: "$85.71",
        stock: "In Stock",
        profit: "$9.4",
        notes: [
          {
            id: 1,
            author: "by Domiana Long",
            comment: "Best Product"
          },
          {
            id: 2,
            author: "by O'Connor",
            comment: "New test Product"
          }
        ],
        history: [
          {
            status: "Done",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: null,
            price_change: {
              from: "225.14",
              to: "225.13"
            },
            warning: ""
          },
          {
            status: "Working",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: {
              from: "10",
              to: "0"
            },
            price_change: null,
            warning: ""
          },
          {
            status: "Done",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: null,
            price_change: {
              from: "126.94",
              to: "126.95"
            },
            warning: ""
          },
          {
            status: "Error",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: null,
            price_change: null,
            warning: "Could not get info from homedepot"
          },
          {
            status: "Done",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: {
              from: 5,
              to: 0
            },
            price_change: {
              from: "126.94",
              to: " 126.93"
            },
            warning: ""
          },
          {
            status: "Done",
            time: "June 5, 2020, 3:34 a.m.",
            stock_change: {
              from: 3,
              to: 1
            },
            price_change: null,
            warning: ""
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.order-details {
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s;
  width: calc(80vw);

  .scroll-area {
    height: 100%;
    padding-bottom: 100px;
  }

  .details-body {
    background: #f8f9fe;
    padding: 15px 30px;
  }

  .header {
    padding: 30px 24px;
    border-bottom: 1px solid #f8f9fe;
    font-size: 13px;
    font-weight: bold;
    color: #601ed1;
    text-transform: uppercase;

    a {
      display: flex;
      align-items: center;

      .fas {
        margin-right: 15px;
        font-size: 30px;
      }
    }
  }

  &.show {
    transform: translateX(0);

    .order-details-overlay {
      content: "";
      position: absolute;
      z-index: 999;
      top: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      width: calc(20vw);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>