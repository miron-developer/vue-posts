<script>
import { mapGetters } from "vuex";

import Post from "@/components/Post.vue";
import Popup from "@/components/Popup.vue";
import PostPopup from "@/components/PostPopup.vue";

export default {
  name: "posts-page",
  data() {
    return {
      isOpenPopup: false,
      currPost: {},
    };
  },
  components: { Post, Popup, PostPopup },
  methods: {
    closePopup() {
      this.isOpenPopup = false;
      this.currPost = {};
    },
    openPopup(post) {
      this.closePopup();

      // on next circle set
      setTimeout(() => {
        this.isOpenPopup = true;
        this.currPost = post;
      }, 0);
    },
  },
  computed: {
    ...mapGetters("posts", ["posts"]),
  },
};
</script>

<template>
  <main>
    <h1>Posts</h1>

    <div class="posts" v-if="posts.length > 0">
      <Post
        v-for="post in posts"
        :isNeedClipInfo="true"
        :key="post?.id"
        :openPopup="openPopup"
        v-bind="post"
      />
    </div>

    <span v-else>Not have posts yet</span>
  </main>

  <Popup @popup-close="closePopup" title="Edit post" v-if="isOpenPopup">
    <post-popup @done="closePopup" v-bind="currPost" :isEdit="true" />
  </Popup>
</template>

<style lang="scss" scoped>
main {
  padding: 50px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  .posts {
    padding: 10px;

    & > div {
      margin-bottom: 20px;
    }
  }
}
</style>
