<template>
  <div>
    <sidebar />
    <div class="main-content" id="panel">
      <navbar />
      <div class="container-fluid mt--6">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar } from "@/components";

export default {
  name: "public-layout",

  components: {
    Sidebar,
    Navbar
  }
};
</script>