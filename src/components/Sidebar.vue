<template>
  <side-bar>
    <template slot="links">
      <sidebar-item :link="{ name: 'Research', icon: 'fas fa-search', collapsed: false }">
        <sidebar-item
          :link="{
            name: 'Products Lister',
            path: '/products-lister'
          }"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: 'Product Viewer',
            path: '/products-viewer'
          }"
        ></sidebar-item>
      </sidebar-item>
      <sidebar-item :link="{ name: 'Prepare', icon: 'fas fa-list-ul', collapsed: false }">
        <sidebar-item
          :link="{
            name: 'Saved Products',
            path: '/products-items'
          }"
        ></sidebar-item>
      </sidebar-item>
      <sidebar-item :link="{ name: 'Sell', icon: 'fas fa-shopping-cart', collapsed: false }">
        <sidebar-item
          :link="{
            name: 'Your lists',
            icon: 'ni ni-align-left-2 text-default',
            path: '/products/lists'
          }"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: 'Your orders',
            icon: 'ni ni-align-left-2 text-default',
            path: '/orders'
          }"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: 'Your Seller Accounts',
            icon: 'ni ni-align-left-2 text-default',
            path: '/platforms'
          }"
        ></sidebar-item>
      </sidebar-item>
    </template>
  </side-bar>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style lang="scss">
.sidebar-menu-item {
  .nav-link-text {
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #601ed1;
  }
}
</style>