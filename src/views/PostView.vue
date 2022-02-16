<script>
import { mapGetters } from "vuex";

import Popup from "@/components/Popup.vue";
import Post from "@/components/Post.vue";
import PostPopup from "@/components/PostPopup.vue";

export default {
  name: "post-page",
  components: { Post, Popup, PostPopup },
  data() {
    return {
      isOpenPopup: false,
      currPost: {},
    };
  },
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
    ...mapGetters("posts", ["post"]),
  },
};
</script>

<template>
  <main>
    <Post
      :isNeedClipInfo="false"
      :openPopup="openPopup"
      v-bind="post(this.$route.params.id)"
    />
  </main>

  <Popup @popup-close="closePopup" title="Edit post" v-if="isOpenPopup">
    <post-popup @done="closePopup" v-bind="currPost" :isEdit="true" />
  </Popup>
</template>

<style lang="scss" scoped>
main {
  padding: 50px;
}
</style>
