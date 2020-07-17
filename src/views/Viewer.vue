<template>
  <div class="col">
    <div class="card form-group">
      <viewer-nav @view="onView" />
    </div>

    <template v-if="isStarted">
      <div class="form-group">
        <div class="row">
          <div class="col">
            <div class="card mb-1">
              <amazon-view :product="product" />
            </div>
          </div>
          <div class="col">
            <div class="card mb-1">
              <home-depot-view :product="homeDepotProduct" />
            </div>
          </div>
        </div>
      </div>

      <div class="form-group" v-if="product && product.offers && product.offers.length">
        <div class="row">
          <div class="col">
            <product-offers :data="product.offers" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <start-page-viewer />
    </template>
  </div>
</template>

<script>
import {
  ViewerNav,
  ProductOffers,
  AmazonView,
  HomeDepotView,
  StartPageViewer
} from "@/components";

export default {
  name: "viewer",

  components: {
    ViewerNav,
    ProductOffers,
    HomeDepotView,
    AmazonView,
    StartPageViewer
  },

  data() {
    return {
      isStarted: false,
      product: {},
      products: [
        {
          name: "Jonard Tools FTS-240 Fish Tape, 240'",
          bsr: "821243",
          category: "Tools & Home Improvement",
          source_url: "https://www.homedepot.com/p/304345220",
          sales_per_day: "0 - 1 sales /day",
          total_offers: "14+",
          lowest_offer_price: "$93.96",
          image: "/assets/img/product-image.jpg",
          asin: "B00BCSYZMS",
          offers: [
            {
              seller: "Norex Supply - Save up to 70% on everything!",
              price: "$120.14",
              profit: "$33.35",
              prime: "",
              condition: "new",
              fb30: "17",
              fb90: "56",
              fbyear: "139",
              fbtotal: "1142"
            },
            {
              seller: "AEROSSI",
              price: "$125.12",
              profit: "$37.53",
              prime: "",
              condition: "new",
              fb30: "3",
              fb90: "4",
              fbyear: "8",
              fbtotal: "11"
            },
            {
              seller: "Hardware & Garden Supplies",
              price: "$131.16",
              profit: "$42.6",
              prime: "",
              condition: "new",
              fb30: "171",
              fb90: "475",
              fbyear: "1659",
              fbtotal: "5676"
            },
            {
              seller: "Norex Supply - Save up to 70% on everything!",
              price: "$125.12",
              profit: "$37.53",
              prime: "",
              condition: "new",
              fb30: "3",
              fb90: "4",
              fbyear: "8",
              fbtotal: "11"
            },
            {
              seller: "Norex Supply - Save up to 70% on everything!",
              price: "$125.12",
              profit: "$37.53",
              prime: "",
              condition: "new",
              fb30: "3",
              fb90: "4",
              fbyear: "8",
              fbtotal: "11"
            }
          ]
        }
      ],
      homeDepotProduct: {
        name: "Jonard 1/8 in. x 240 ft. Steel Fish Tape",
        image: "/assets/img/product-image.jpg",
        price: "$67.57",
        stock: true
      }
    };
  },

  methods: {
    onView(view) {
      this.isStarted = true;
      if (view.asin || view.source_url) {
        const fined = this.products.find(product => {
          return (
            product.asin == view.asin || product.source_url == view.source_url
          );
        });
        this.product = fined ? fined : {};
        return;
      }

      this.isStarted = false;
    }
  }
};
</script>