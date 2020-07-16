<template>
  <div class="bulk-uploads-wrapper">
    <div class="card">
      <uploader @uploaded="onUploaded" />
    </div>
    <div class="card">
      <history :data="files" />
    </div>
  </div>
</template>

<script>
import History from "./uploads/History";
import Uploader from "./uploads/Uploader";

export default {
  name: "BulkUploads",

  components: {
    History,
    Uploader
  },

  data() {
    return {
      files: []
    };
  },

  methods: {
    onUploaded(files) {
      files.forEach(file => {
        this.readFile(file);
      });
    },
    readFile(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
          this.files = [
            ...this.files,
            {
              file_name: file.name,
              size: file.size,
              type: file.type,
              created_at: new Date().toLocaleDateString(),
              status: "Uploaded",
              results: reader.result
            }
          ];
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    }
  }
};
</script>