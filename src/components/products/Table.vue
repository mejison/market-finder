<template>
  <div>
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th
              class="column"
              v-for="(column, index) in columns"
              :key="index"
              :class="{'up': column.field == sort.field && sort.type == 'desc', 'down': column.field == sort.field && sort.type == 'asc'}"
            >
              {{ column.label }}
              <a
                v-if="column.sortable"
                href="#"
                @click.stop="onSort(column)"
                v-html="icons['sort-arrows']"
                class="sort-icon"
              ></a>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr v-for="(row, index) in data" :key="index">
            <td>
              <input type="checkbox" />
            </td>
            <th v-for="(column, index2) in columns" :key="index2">
              <slot v-if="column.styled" :name="column.field" :row="row" :data="row[column.field]"></slot>
              <div v-else>{{ row[column.field] }}</div>
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card-footer py-4">
      <nav>
        <ul class="pagination justify-content-end mb-0">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              <i class="fas fa-angle-left"></i>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-angle-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import icons from "@/icons";

export default {
  name: "products-table",

  props: {
    columns: {
      type: Array,
      default: () => {
        [];
      }
    },
    data: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  data() {
    return {
      icons,
      sort: {
        field: "id",
        type: "desc"
      }
    };
  },

  methods: {
    onSort(column) {
      if (this.sort.field == column.field) {
        if (this.sort.type == "asc") {
          this.sort = {
            field: column.field,
            type: "desc"
          };
        } else {
          this.sort = {
            field: column.field,
            type: "asc"
          };
        }
        return;
      }

      this.sort = {
        field: column.field,
        type: "desc"
      };

      this.$emit("sort", this.sort);
    }
  }
};
</script>

<style lang="scss">
.column {
  .sort-icon {
    svg {
      height: 12px;
      width: 12px;
      fill: #c4ced7;
    }
  }

  &.up {
    .lf {
      fill: #525f7f;
    }
  }

  &.down {
    .rt {
      fill: #525f7f;
    }
  }
}

.image-product {
  width: 80px;

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
