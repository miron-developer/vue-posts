<script>
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    RouterView,
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />

  <RouterView />

  <Footer />
</template>

<style lang="scss">
@import "@/assets/styles/base.scss";
@import "@/assets/styles/variables.scss";

header {
  padding: 20px;
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

      &.router-link-active {
        background: $primary-color;
      }
    }
  }
}
</style>
