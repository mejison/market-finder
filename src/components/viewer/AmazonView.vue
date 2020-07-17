<template>
  <div class="amazon-view-wrapper">
    <template v-if="fined">
      <div class="form-group d-flex">
        <h1 class="d-flex align-items-center">
          <img src="/assets/img/amazon-png-27.jpg" alt="amazon" class="mr-2" />
          {{ product.name }}
        </h1>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-4">
            <div class="img-box">
              <img :src="product.image" alt="amazon-view" />
            </div>
          </div>
          <div class="col-8">
            <ul class="list-group">
              <li class="list-group-item">
                <span>ASIN</span>
                <span class="value">
                  <a href="#">{{ product.asin }}</a>
                </span>
              </li>
              <li class="list-group-item">
                <span>BSR</span>
                <span class="value">{{ product.bsr }}</span>
              </li>
              <li class="list-group-item">
                <span>Category</span>
                <span class="value">{{ product.category }}</span>
              </li>
              <li class="list-group-item">
                <span>Sales per Day</span>
                <span class="value">{{ product.sales_per_day }}</span>
              </li>
              <li class="list-group-item">
                <span>Lowest Offer Price</span>
                <span class="value">{{ product.lowest_offer_price }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="amazon-not-found">
        <h1>Product not found on</h1>
        <img src="/assets/img/amazon-not-found.jpg" alt="not-found-amazon" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "amazon-view",

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {};
  },

  computed: {
    fined() {
      return !!Object.keys(this.product).length;
    }
  }
};
</script>

<style lang="scss" scoped>
.amazon-view-wrapper {
  padding: 18px 24px;

  .amazon-not-found {
    min-height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-align: center;
      color: #231f20;
      text-transform: uppercase;
    }
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32325d;
  }

  .img-box {
    border: 1px solid #e9ecef;
    border-radius: 5px;
    object-fit: cover;

    img {
      width: 100%;
    }
  }

  .img-prod {
    width: 75px;
    height: 75px;

    img {
      width: 100%;
    }
  }

  .list-group-item {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.08;
    color: #546080;
    display: flex;

    span {
      width: 100%;
    }
  }
}
</style>