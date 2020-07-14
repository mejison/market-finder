<template>
  <div>
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th>
              <input type="checkbox" @change="onSelectAll($event.target.checked)" />
            </th>
            <th
              class="column"
              v-for="(column, index) in columns"
              :key="index"
              :class="{'up': column.field == sort.field && sort.type == 'desc', 'down': column.field == sort.field && sort.type == 'asc'}"
              :style="column.style"
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
              <input type="checkbox" :checked="isChecked[row.id]" @click="onToggleSelected(row)" />
            </td>
            <th
              v-for="(column, index2) in columns"
              :key="index2"
              :class="{'centered': column.centered}"
            >
              <slot v-if="column.styled" :name="column.field" :row="row" :data="row[column.field]"></slot>
              <div v-else>{{ row[column.field] }}</div>
            </th>
            <td>
              <actions />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination
      :total="pagination.total"
      :page="pagination.page"
      :from="pagination.from"
      :to="pagination.to"
      :per-page="pagination.per_page"
      @change="onChangePage"
      @next="onChangePage"
      @prev="onChangePage"
    />
  </div>
</template>

<script>
import icons from "@/icons";
import Actions from "./Actions.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "products-table",

  components: {
    Actions,
    Pagination
  },

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
    },
    pagination: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      icons,
      sort: {
        field: "id",
        type: "desc"
      },
      selected: []
    };
  },

  computed: {
    isChecked() {
      return this.data.reduce((a, row) => {
        return {
          ...a,
          [row.id]: !!this.selected.find(
            rowSelected => rowSelected.id == row.id
          )
        };
      }, {});
    }
  },

  methods: {
    onChangePage(page) {
      this.$emit("change-page", page);
    },
    onToggleSelected(row) {
      const exist = this.selected.find(item => item.id == row.id);
      if (!exist) {
        this.selected = [...this.selected, row];
        this.$emit("select", this.selected);
        return;
      }
      this.selected = [...this.selected.filter(item => item.id != row.id)];
      this.$emit("select", this.selected);
    },
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
    },
    onSelectAll(toggle) {
      if (toggle) {
        this.selected = [...this.data];
        this.$emit("select", this.selected);
        return;
      }
      this.selected = [];
      this.$emit("select", this.selected);
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
  width: 65px;
  height: 65px;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.centered {
  text-align: center;
}

.status {
  display: flex;
  justify-content: center;
  align-items: center;

  .Shipped {
    color: #21d196;
  }

  .Unshipped {
  }

  .warning {
    color: #e16813;
  }

  .Canceled {
    color: #d12121;
  }
}

tbody {
  tr {
    vertical-align: middle;
  }
}

.sku {
  margin-left: 15px;
}

.who,
.sku {
  color: #b0b4b9;
}

.title {
  margin-bottom: 8px;
  white-space: normal;
}

.stock {
  &.correct {
    color: #21d196;
  }

  &.incorrect {
    color: #d12121;
  }
}

.profit {
  color: #21d196;
}
</style>
