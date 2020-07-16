<template>
  <div class="history-wrapper">
    <a href class="toggle-history" @click.prevent="onToggle">
      <div class="title">Upload History</div>
      <span>
        <i v-if="toggle" class="fas fa-chevron-up"></i>
        <i v-else class="fas fa-chevron-down"></i>
      </span>
    </a>
    <div class="history-list" :class="{'show': toggle}">
      <table-history :data="data" :columns="columns">
        <template v-slot:file_name="{ row }">
          <a href="#" @click="onClickDownload(row)">
            <i class="fas fa-download"></i>
            {{ row.file_name }}
          </a>
        </template>
        <template v-slot:created_at="{ row }">{{ row.created_at }}</template>
        <template v-slot:status="{ row }">
          <div style="text-align: center">
            <i :class="`fas fa-${getIconByStatus(row.status)}`"></i>
          </div>
        </template>
        <template v-slot:results="{ row }">
          <a href="#" @click="onClickResultsDownload(row)">
            <i class="fas fa-download"></i>
            Results.{{ getExt(row.file_name) }}
          </a>
        </template>
      </table-history>
    </div>
  </div>
</template>

<script>
import { Table as TableHistory } from "@/components";

export default {
  name: "history",

  components: {
    TableHistory
  },

  props: {
    data: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  data() {
    return {
      columns: [
        {
          label: "source file",
          field: "file_name",
          styled: true
        },
        {
          label: "time",
          field: "created_at",
          styled: true
        },
        {
          label: "status",
          field: "status",
          styled: true
        },
        {
          label: "results",
          field: "results",
          styled: true
        }
      ],
      toggle: !!this.data.length
    };
  },

  watch: {
    data() {
      this.toggle = !!this.data.length;
    }
  },

  methods: {
    getExt(fileName) {
      return fileName.substr(fileName.lastIndexOf(".") + 1);
    },
    downloadFile(file) {
      let element = document.createElement("a");
      let base64 = file.results.replace(`data:${file.type};base64,`, "");
      element.href = `data:${file.type};charset=utf-8,${base64}`;
      element.download = file.file_name;
      element.click();
    },
    onClickDownload(row) {
      this.downloadFile(row);
    },
    onClickResultsDownload(row) {
      this.downloadFile(row);
    },
    onToggle() {
      this.toggle = !this.toggle;
    },
    getIconByStatus(status) {
      return {
        Uploaded: "check-circle",
        InProgress: "eye"
      }[status];
    }
  }
};
</script>

<style lang="scss" scoped>
.history-wrapper {
  .toggle-history {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 24px 21px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    color: #32325d;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.1),
      0 1px 3px 0 rgba(0, 0, 0, 0.08);
    background-color: #fcfcfd;
  }

  .title {
    margin: 0;
  }

  .history-list {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s;

    &.show {
      max-height: 500px;
    }
  }
}
</style>