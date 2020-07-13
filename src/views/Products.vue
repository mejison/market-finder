<template>
  <div class="col">
    <div class="card">
      <div class="card-header border-0">
        <h3 class="mb-0">Items List</h3>
      </div>

      <product-table :columns="columns" :data="data">
        <template v-slot:status="{ row }">
          <div>
            <i :class="`fas fa-${iconStatuses[row.status]}`"></i>
          </div>
        </template>

        <template v-slot:image="{ row }">
          <div class="image-product">
            <img class="img-thumbnail" :src="row.image" alt="image" />
          </div>
        </template>
      </product-table>
    </div>
  </div>
</template>

<script>
import { ProductTable } from "@/components";

export default {
  name: "products",

  components: {
    ProductTable
  },

  data() {
    return {
      columns: [
        {
          label: "Status",
          sortable: true,
          field: "status",
          styled: true
        },
        {
          label: "",
          sortable: true,
          field: "image",
          styled: true
        },
        {
          label: "Title",
          field: "title",
          styled: false
        },
        {
          label: "BSR",
          sortable: true,
          field: "bsr"
        },
        {
          label: "Qty",
          sortable: true,
          field: "qty"
        },
        {
          label: "Selling price",
          sortable: true,
          field: "selling_price"
        },
        {
          label: "Source",
          sortable: true,
          field: "source"
        },
        {
          label: "Stock",
          sortable: true,
          field: "stock"
        },
        {
          label: "Cost",
          sortable: true,
          field: "cost"
        },
        {
          label: "Profit",
          sortable: true,
          field: "profit"
        },
        {
          label: "Last update",
          sortable: true,
          field: "last_updated"
        }
      ],

      data: [
        {
          status: "complete",
          title: "iLive IHB613B Audio CD Micro System with Bluetooth and FM",
          image: "https://placehold.it/150x150",
          bsr: "294 033",
          qty: "5",
          selling_price: "$113.25",
          source: "Home Depot",
          stock: true,
          cost: "$85.71",
          profit: "$9.42",
          last_updated: "06/07/2020 14:01"
        },
        {
          status: "inprogress",
          title: 'Jonard Tools FTS-240 Fish Tape, 240"',
          image: "https://placehold.it/150x150",
          bsr: "821 243",
          qty: "5",
          selling_price: "$145.08",
          source: "Home Depot",
          stock: true,
          cost: "$67.57",
          profit: "$54.3",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "warning",
          title: "Commercial Electric 8 in. Cable Tie - Natural (1000-Pack)",
          image: "https://placehold.it/150x150",
          bsr: "299 049",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "watched",
          title: "Ideal 30-654 Wing-Nut 454 Wire Connector, Blue, Keg …",
          image: "https://placehold.it/150x150",
          bsr: "-",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "deleted",
          title: "Husky Diamond Tip Magnetic Screwdriver Set (6-Piece)",
          image: "https://placehold.it/150x150",
          bsr: "182 525",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "complete",
          title: "iLive IHB613B Audio CD Micro System with Bluetooth and FM",
          image: "https://placehold.it/150x150",
          bsr: "294 033",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "inprogress",
          title: "Jonard Tools FTS-240 Fish Tape, 240",
          image: "https://placehold.it/150x150",
          bsr: "821 243",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "warning",
          title: "Commercial Electric 8 in. Cable Tie - Natural (1000-Pack)",
          image: "https://placehold.it/150x150",
          bsr: "299 049",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "watched",
          title: "Ideal 30-654 Wing-Nut 454 Wire Connector, Blue, Keg …",
          image: "https://placehold.it/150x150",
          bsr: "-",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        },
        {
          status: "deleted",
          title: "Husky Diamond Tip Magnetic Screwdriver Set (6-Piece)",
          image: "https://placehold.it/150x150",
          bsr: "182 525",
          qty: "5",
          selling_price: "$74.24",
          source: "Overstock",
          stock: true,
          cost: "$32.34",
          profit: "$30.02",
          last_updated: "06/07/2020 13:59"
        }
      ],

      iconStatuses: {
        complete: "check-circle",
        inprogress: "hourglass-half",
        warning: "exclamation-triangle",
        watched: "eye",
        deleted: "trash"
      }
    };
  }
};
</script>