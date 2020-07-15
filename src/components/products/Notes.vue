<template>
  <div class="wrapper-notes">
    <div class="note-item" v-for="(item, index) in items" :key="index">
      <span class="comment">{{ item.comment }}</span>
      <span class="author">{{ item.author }}</span>
      <span class="delete" @click="onClickDelete(item)">
        <i class="fas fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",

  props: {
    items: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  methods: {
    onClickDelete(note) {
      this.$emit("remove", note);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-notes {
  display: flex;

  .note-item {
    min-width: 234px;
    border-radius: 17px;
    background-color: #f6f7f8;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    margin-left: 15px;

    .delete {
      font-size: 11px;
      margin-left: 15px;
      cursor: pointer;
    }

    .comment {
      font-size: 13px;
      color: #546080;
      margin-right: 5px;
    }

    .author {
      font-size: 13px;
      line-height: 1.08;
      font-style: italic;
      color: #8898aa;
    }
  }
}
</style>