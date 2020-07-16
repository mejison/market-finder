<template>
  <div class="col">
    <div class="row">
      <div class="col">
        <lister-wizard />
      </div>
      <div class="col col-lg-4">
        <bulk-uploads />
      </div>
    </div>
  </div>
</template>

<script>
import { ListerWizard, BulkUploads } from "@/components";

export default {
  name: "lister",

  components: {
    ListerWizard,
    BulkUploads
  }
};
</script>