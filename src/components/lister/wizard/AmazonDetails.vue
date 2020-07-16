<template>
  <div class="amazon-details-wrapper">
    <div class="form-group d-flex">
      <div class="img-prod mr-2">
        <img :src="product.image" alt="alt" class="img-thumbnail" />
      </div>
      <h1 class="d-flex align-items-center">
        <img src="/assets/img/amazon-png-27.jpg" alt="amazon" class="mr-2" />
        {{ product.name }}
      </h1>
    </div>
    <div class="form-group">
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
          <span>Total Offers</span>
          <span class="value">{{ product.total_offers }}</span>
        </li>
        <li class="list-group-item">
          <span>Lowest Offer Price</span>
          <span class="value">{{ product.lowest_offer_price }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "amazon-details",

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.amazon-details-wrapper {
  h1 {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32325d;
    margin: 20px 0;
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