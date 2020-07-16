<template>
  <div class="uploader-wrapper">
    <div class="head">
      <h1>
        Bulk Uplodas
        <i class="fas fa-info-circle"></i>
      </h1>
      <btn type="outline-success btn-sm">
        <i class="fas fa-download"></i>
        Download Template
      </btn>
    </div>
    <div class="body">
      <div class="form-group">
        <span class="info-label">Upload a .CSV file to begin managing inventory and pricing.</span>
      </div>
      <div class="form-group">
        <text-field-with-title
          label="Browse"
          position="right"
          :disabled="true"
          placeholder="Select file"
          @click="onUpload"
          :value="file.name"
        />
      </div>
      <div class="from-group">
        <btn type="success btn-block" @click="doUpload" :disabled=" ! existFile">
          <i class="fas fa-upload"></i>
          Upload
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
import { Btn, TextFieldWithTitle } from "@/components";

export default {
  name: "bulk-uploader",

  components: {
    Btn,
    TextFieldWithTitle
  },

  data() {
    return {
      file: {}
    };
  },

  computed: {
    existFile() {
      return this.file instanceof File;
    }
  },

  methods: {
    reset() {
      this.file = {};
    },
    onUpload() {
      let input = document.createElement("input");
      input.type = "file";
      input.onchange = event => {
        const [file] = event.target.files;
        this.file = file;
      };
      input.click();
    },
    doUpload() {
      this.$emit("uploaded", [this.file]);
      this.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.uploader-wrapper {
  display: flex;
  flex-direction: column;
  padding: 24px;

  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h1 {
      font-size: 18px;
      font-weight: bold;
      color: #32325d;

      .fas {
        color: #21d196;
      }
    }
  }

  .body {
    .info-label {
      font-size: 14px;
      color: #8898aa;
    }
  }
}
</style>