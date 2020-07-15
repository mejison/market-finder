<template>
  <div class="modal fade" :class="{'show': show}" :style="{'display': show ? 'block': 'none'}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Listing: KG-KWL1-4017</h5>
          <button type="button" class="close" @click="onClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
              <a
                class="nav-link"
                href="#"
                :class="{'active': tab.name == active.name}"
                @click="active = tab"
              >
                <i class="fas" :class="tab.icon"></i>
                {{ tab.name }}
              </a>
            </li>
          </ul>
          <component v-if="active" :is="active.component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from "./Notes";
import PriceQty from "./PriceQty";
import Source from "./Source";
import Tracking from "./Tracking";

export default {
  name: "product-details-popup",

  components: {
    Tracking,
    Notes,
    "source-tab": Source,
    PriceQty
  },

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  watch: {
    product() {
      this.show = !!Object.keys(this.product).length;
    }
  },

  created() {
    this.active = this.tabs[0];
  },

  data() {
    return {
      show: false,
      active: false,
      tabs: [
        {
          name: "Price & Quantity",
          icon: "fa-dollar-sign",
          component: "price-qty"
        },
        {
          name: "Tracking",
          icon: "fa-eye",
          component: "tracking"
        },
        {
          name: "Source",
          icon: "fa-link",
          component: "source-tab"
        },
        {
          name: "Notes",
          icon: "fa-pen",
          component: "notes"
        }
      ]
    };
  },

  methods: {
    onClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-tabs {
  margin-left: -1.5rem !important;
  margin-right: -1.5rem;
  padding-left: 15px;
}

.nav-link {
  padding: 18px 22px;
  font-size: 14px;
  font-weight: bold;
  color: #586584;
  opacity: 0.6;
  background: #e5e5e5;
  border: 1px solid #aebdccf2;
  border-bottom: 0;
  margin: 0 5px;

  i {
    color: #586584;
  }

  &.active {
    color: #21d196;
    opacity: 1;
    overflow: hidden;
    position: relative;
    background-color: #fff;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      right: 0;
      height: 3px;
      background-color: #21d196;
    }

    i {
      color: #21d196;
    }
  }
}
</style>