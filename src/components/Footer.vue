<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer>
    Posts app created by
    <a href="https://github.com/miron-developer">miron-developer</a>
    and powered with
    <a href="https://vuejs.org/">Vue</a>,
    <a href="https://vuex.vuejs.org/">Vuex</a>,
    <a href="https://router.vuejs.org/"> Vue-Router</a>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
  padding: 10px;
  background: $header-bg;
  white-space: pre;

  a {
    text-decoration: none;
    color: blue;
  }
}
</style>
