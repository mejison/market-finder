<template>
  <div class="col">
    <div class="dashboard-wrapper">
      <div class="row">
        <div class="col" v-for="(card, index) in cards" :key="index">
          <card-calc :data="card" />
        </div>
      </div>
      <div class="row">
        <div class="col" v-for="(box, index) in boxes" :key="index">
          <box-calc :data="box" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <date-range />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BoxCalc, CardCalc, DateRange } from "@/components";

export default {
  name: "dashboard",

  components: {
    CardCalc,
    BoxCalc,
    DateRange
  },

  data() {
    return {
      cards: [
        {
          title: "Profit since last day",
          percent: "3.48%",
          type: "up",
          left: {
            title: "New Profit",
            subtitle: "today's",
            value: "$35"
          },
          right: {
            title: "Sales",
            subtitle: "today's",
            value: "10"
          }
        },
        {
          title: "Profit since last week",
          percent: "0.17%",
          type: "down",
          left: {
            title: "New Profit",
            subtitle: "weekly",
            value: "$35"
          },
          right: {
            title: "Sales",
            subtitle: "weekly",
            value: "10"
          }
        },
        {
          title: "Profit since last day",
          percent: "5.34%",
          type: "up",
          left: {
            title: "New Profit",
            subtitle: "monthly",
            value: "$35"
          },
          right: {
            title: "Sales",
            subtitle: "monthly",
            value: "10"
          }
        },
        {
          title: "Profit since last year",
          percent: "4.33%",
          type: "up",
          left: {
            title: "New Profit",
            subtitle: "total",
            value: "$35"
          },
          right: {
            title: "Sales",
            subtitle: "total",
            value: "10"
          }
        },
        {
          title: "Profit since last month",
          percent: "1.12%",
          type: "up",
          left: {
            title: "New Profit",
            subtitle: "Avarage (Monthly)",
            value: "$35"
          },
          right: {
            title: "Sales",
            subtitle: "Avarage (Monthly)",
            value: "10"
          }
        }
      ],
      boxes: [
        {
          title: "Opened Scrapping tasks",
          icon: "server",
          count: "2",
          desc: "tasks in process",
          link: "#",
          color: "#21d196"
        },
        {
          title: "messages to check on Amazon",
          icon: "comment-dots",
          count: "5",
          desc: "new messages",
          link: "#",
          color: "#21d196"
        },
        {
          title: "Out of stock items",
          icon: "users",
          count: "1",
          desc: "item",
          link: "#",
          color: "#d12121"
        },
        {
          title: "Mismatched items (AZ and source)",
          icon: "info-circle",
          count: "3",
          desc: "items",
          link: "#",
          color: "#d12121"
        },
        {
          title: "haven’t received tracking number yet",
          icon: "bell",
          count: "7",
          desc: "orders",
          link: "#",
          color: "#efcc25"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
}
</style>