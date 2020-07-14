<template>
  <div class="card-footer py-4 d-flex align-items-center justify-content-between">
    <div class="pagination-description">Showing {{ from }} to {{ to }} of {{ total }} entries</div>
    <nav v-if="pages && pages.length > 1">
      <ul class="pagination justify-content-end mb-0">
        <li class="page-item" :class="{ 'disabled': ! canPrev }" :disabled=" ! canPrev">
          <a class="page-link" href="#" @click.prevent="onClickPrevent">
            <i class="fas fa-angle-left"></i>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="(item, index) in pages"
          :class="{'active': index + 1 == page}"
          class="page-item"
          :key="index"
          @click.prevent="onClickPage(index + 1)"
        >
          <a class="page-link" href="#">{{ index + 1 }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': ! canNext }" :disabled=" ! canNext">
          <a class="page-link" href="#" @click.prevent="onClickNext">
            <i class="fas fa-angle-right"></i>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "pagination",

  data() {
    return {};
  },

  props: {
    page: {
      type: Number,
      default: 1
    },
    from: {
      type: Number,
      default: 1
    },
    to: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 15
    },
    total: {
      type: Number,
      default: 0
    }
  },

  computed: {
    pages() {
      return [...new Array(Math.ceil(this.total / this.perPage))];
    },
    canNext() {
      return this.page == this.pages.length - 1;
    },
    canPrev() {
      return this.page > 1;
    }
  },

  methods: {
    onClickPage(page) {
      this.$emit("change", page);
    },
    onClickPrevent() {
      if (this.canPrev) {
        this.$emit("prev", this.page - 1);
      }
    },
    onClickNext() {
      if (this.canNext) {
        this.$emit("next", this.page + 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-description {
  font-size: 13px;
  color: #525f7f;
}
</style>