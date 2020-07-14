<template>
  <div class="filters">
    <div class="d-flex justify-content-center align-items-center">
      <h3 class="mb-0">Items List</h3>
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
    <div class="actions" v-if="canDoActions">
      <button class="btn btn-success btn-sm">
        <i class="fas fa-panil"></i>
        Edit Listings
      </button>
      <button class="btn btn-success btn-sm">
        <i class="fas fa-eye"></i>
        Toggle Tracking
      </button>
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
</template>

<script>
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export default {
  name: "filters",

  props: {
    canDoActions: {
      type: Boolean,
      default: false
    },
    perPage: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      per_page: this.perPage,
      perPageOptions: [10, 15, 20, 50, 100]
    };
  },

  watch: {
    perPage() {
      this.per_page = this.perPage;
    }
  },

  methods: {
    onDelete() {
      swal
        .fire({
          title: "Are you sure?",
          text: `You won't be able to revert this!`,
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn btn-success btn-fill",
          cancelButtonClass: "btn btn-danger btn-fill",
          confirmButtonText: "Yes, delete it!",
          buttonsStyling: false
        })
        .then(result => {
          if (result.value) {
            this.$emit("delete");
          }
        });
    },
    onSearch(event) {
      this.$emit("search", event.target.value);
    },
    onChangePerPage() {
      this.$emit("change-per-page", this.per_page);
    }
  }
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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