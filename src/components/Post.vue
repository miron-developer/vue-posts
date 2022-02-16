<script>
import { removePost } from "@/store/modules/post";

export default {
  name: "PostItem",
  props: {
    id: Number,
    title: String,
    info: String,
    isNeedClipInfo: Boolean,
    openPopup: Function,
  },
  computed: {
    postInfo400() {
      if (!this.isNeedClipInfo || this?.info?.length < 400) return this.info;
      return this?.info?.slice(0, 400) + "...";
    },
    link() {
      return "/posts/" + String(this.id);
    },
  },
  methods: {
    edit() {
      this.openPopup({ id: this.id, title: this.title, info: this.info });
    },
    remove() {
      this.$store.dispatch(removePost({ id: this.id }));
    },
  },
};
</script>

<template>
  <div class="post">
    <div class="post-info">
      <h3>
        Title: <span>{{ title }}</span>
      </h3>

      <p><span>Info: </span> {{ postInfo400 }}</p>
    </div>

    <div class="post-actions">
      <button class="edit" @click="edit">
        <i class="fas fa-pencil"></i>
        <span>Edit</span>
      </button>

      <button class="remove" @click="remove">
        <i class="fas fa-trash-alt"></i>
        <span>Remove</span>
      </button>
    </div>

    <RouterLink class="link-item" :to="link" v-if="isNeedClipInfo">
      Read more
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.post {
  position: relative;
  padding: 20px;
  background: $primary-color;
  border-radius: 5px;
  box-shadow: 7px 7px 6px 0 #00000026;

  .post-info {
    h3 {
      margin-bottom: 15px;
      font-size: 22px;
      color: #005011;
      text-transform: uppercase;

      span {
        color: $textColor;
        text-transform: none;
      }
    }

    p {
      margin-bottom: 15px;

      span {
        color: #005011;
        text-transform: uppercase;
      }

      color: $textColor;
    }
  }

  .post-actions {
    position: absolute;
    right: 10px;
    top: 10px;

    button {
      padding: 5px 10px;
      margin: 2px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 5px 5px 6px 0 #00000026;
      transition: 0.5s;

      &:hover {
        background: $primary-hover-color;
        transition: 0.5s;
      }
    }

    .edit {
      background: blue;
    }

    .remove {
      background: red;
    }
  }
}
</style>
