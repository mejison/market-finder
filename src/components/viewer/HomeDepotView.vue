<template>
  <div class="home-depot-wrapper">
    <div class="form-group d-flex">
      <h1 class="d-flex align-items-center">
        <img src="/assets/img/home-depot.jpg" alt="home-depot" class="mr-2" />
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
              <span>Price</span>
              <span class="value">{{ product.price }}</span>
            </li>
            <li class="list-group-item">
              <span>Stock</span>
              <span class="value">
                <span v-if="product.stock">
                  <i class="fas fa-check"></i>
                  In Stock
                </span>
                <span v-else>
                  <i class="fas fa-times"></i>
                  Not in Stock
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-depot-view",

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home-depot-wrapper {
  padding: 18px 24px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32325d;
  }

  .fa-check {
    color: #21d196;
  }

  .fa-times {
    color: #d12121;
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