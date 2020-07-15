<template>
  <div class="card">
    <div class="card-body">
      <div class="head d-flex justify-content-between align-items-center">
        <h1>{{ product.title }}</h1>
        <div>
          <button class="btn btn-success btn-sm" @click="onClickEditListings">
            <i class="fas fa-pencil-alt"></i>
            Edit Listings
          </button>
          <button class="btn btn-success btn-sm">
            <i class="fas fa-eye"></i>
            Toggle Tracking
          </button>
          <button class="btn btn-danger btn-sm">
            <i class="fas fa-times"></i>
            Delete Selected
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="box image">
          <img :src="product.image" alt="product-image" />
        </div>
        <div class="box details">
          <div class="detail-item">
            <div class="left">
              <label>ASIN</label>
              <span>
                <a href="#">{{ product.asin }}</a>
              </span>
            </div>
            <div class="right">
              <label>Estimated Sales</label>
              <span>{{ product.estimated_sales }}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>SKU</label>
              <span>
                <a href="#">{{ product.sku }}</a>
              </span>
            </div>
            <div class="right">
              <label>Tracking Status</label>
              <span>
                <i class="fas fa-play-circle"></i>
                {{ product.tracking_status }}
              </span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Date Added</label>
              <span>{{ product.date_added }}</span>
            </div>
            <div class="right">
              <label>Repricing Strategy</label>
              <span>{{ product.repricing_strategy }}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Current Price</label>
              <span>{{ product.current_price }}</span>
            </div>
            <div class="right">
              <label>Default Quantity</label>
              <span>{{ product.default_quantity }}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Listed Quantity</label>
              <span>{{ product.listed_quantity }}</span>
            </div>
            <div class="right">
              <label>Last Updated</label>
              <span>{{ product.last_updated }}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Shipping Delay</label>
              <span>{{ product.shipping_delay }}</span>
            </div>
            <div class="right">
              <label>Source</label>
              <span>
                <a href="#">{{ product.source }}</a>
              </span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Sales</label>
              <span>{{ product.sales }}</span>
            </div>
            <div class="right">
              <label>Cost</label>
              <span>{{ product.cost }}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>BSR</label>
              <span>{{ product.bsr }}</span>
            </div>
            <div class="right">
              <label>Stock</label>
              <span>
                <i class="fas fa-check"></i>
                {{ product.stock }}
              </span>
            </div>
          </div>
          <div class="detail-item">
            <div class="left">
              <label>Category</label>
              <span>{{ product.category }}</span>
            </div>
            <div class="right">
              <label>Profit</label>
              <span>{{ product.profit }}</span>
            </div>
          </div>
          <div class="details-item common">
            <label>Notes</label>
            <notes :items="product.notes" @remove="onRemoveNote" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <history :data="product.history"></history>
    </div>
  </div>
</template>

<script>
import Notes from "./Notes";
import History from "./History";

export default {
  components: {
    Notes,
    History
  },

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  watch: {
    product() {
      const show = !!Object.keys(this.product).length;
      if (show) {
        document.body.style = "overflow:hidden";
        return;
      }
      document.body.style = "overflow:auto";
    }
  },

  methods: {
    onClickEditListings() {
      this.$emit("editing", this.product);
    },
    close() {
      this.$emit("close");
    },
    onRemoveNote(note) {
      this.$emit("remove-note", note);
    }
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 28px;
  font-weight: bold;
  color: #32325d;
}

.product-info {
  display: flex;
  padding-top: 15px;

  .box {
    border-radius: 5px;
    border: solid 1px #e9ecef;

    &.image {
      width: 30%;
      margin-right: 25px;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fa-check,
    .fa-play-circle {
      color: #21d196;
    }

    &.details {
      width: 70%;
      display: flex;
      flex-direction: column;

      .common {
        display: flex;
        align-items: center;
        padding: 15px 19px;

        label {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #546080;
          margin-right: 135px;
        }
      }

      .detail-item {
        display: flex;
        align-items: center;
        border-bottom: solid 1px #e9ecef;

        &:last-child {
          border-bottom: none;
        }

        .left,
        .right {
          display: flex;
          justify-content: space-between;
          width: 100%;

          label,
          span {
            margin: 0;
            padding: 15px 19px;
          }

          span {
            font-size: 13px;
            color: #546080;
          }

          label {
            font-size: 13px;
            font-weight: 600;
            color: #546080;
          }
        }

        .left {
        }

        .right {
          border-left: solid 1px #e9ecef;
        }
      }
    }
  }
}
</style>