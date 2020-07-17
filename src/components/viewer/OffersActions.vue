<template>
  <div class="offers-actions-wrapper">
    <div class="d-flex align-items-center">
      <h1>Product Offers</h1>
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
        <select class="form-control form-control-sm" v-model="per_page" @change="onChangePerPage">
          <option v-for="(page, index) in perPageOptions" :key="index" :value="page">{{ page }}</option>
        </select>
        <span>entries</span>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <btn type="outline-success btn-sm">
        <i class="fas fa-plus-circle"></i>
        Add Select
        <i class="fas fa-chevron-down"></i>
      </btn>
      <btn type="success btn-sm ml-2">
        <i class="fas fa-play-circle"></i>
        Run Selected
      </btn>
    </div>
  </div>
</template>

<script>
import { Btn } from "@/components";

export default {
  name: "offers-actions",

  components: {
    Btn
  },

  data() {
    return {
      per_page: 5,
      perPageOptions: [5, 10, 15, 30, 50, 100]
    };
  },

  methods: {
    onChangePerPage() {
      this.$emit("change-per-page", this.per_page);
    },
    onSearch(e) {
      this.$emit("search", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.offers-actions-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;

  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #32325d;
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
}
</style>