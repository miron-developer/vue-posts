<script>
import { RouterLink } from "vue-router";

import PostPopup from "./PostPopup.vue";
import Popup from "./Popup.vue";

export default {
  name: "AppHeader",
  data() {
    return {
      isOpenPopup: false,
    };
  },
  components: {
    RouterLink,
    PostPopup,
    Popup,
  },
  methods: {
    closePopup() {
      this.isOpenPopup = false;
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <RouterLink class="link-item" to="/">Home</RouterLink>
      <RouterLink class="link-item" to="/posts">Posts</RouterLink>
    </nav>

    <div class="create-post" @click="isOpenPopup = true">
      Create post
      <i class="fas fa-plus"></i>
    </div>
  </header>

  <Popup @popup-close="closePopup" title="Add post" v-if="isOpenPopup">
    <post-popup @done="closePopup" />
  </Popup>
</template>

<style lang="scss">
@import "@/assets/styles/variables.scss";

header {
  padding: 20px;
  display: flex;
  align-items: center;
  background: $header-bg;

  nav {
    width: max-content;
    margin: auto;

    .link-item {
      margin: 0 5px;
      padding: 5px 10px;
      color: $textColor;
      text-decoration: none;
      background: white;
      border-radius: 5px;
      box-shadow: 5px 3px 13px 0 #00000024;
      transition: 0.5s;

      &.router-link-active,
      &:hover {
        transition: 0.5s;
        background: $primary-color;
      }
    }
  }

  .create-post {
    padding: 5px 10px;
    background: $primary-color;
    cursor: pointer;
    box-shadow: 5px 3px 13px 0 #00000024;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      background: $primary-hover-color;
      color: white;
      transition: 0.5s;
    }
  }
}
</style>
