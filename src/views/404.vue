<script>
import { RouterLink } from "vue-router";

export default {
  name: "404-page",
  components: { RouterLink },
};
</script>

<template>
  <main>
    <h1>404</h1>
    <h2>Not found</h2>

    <RouterLink to="/">Go home</RouterLink>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

main {
  padding: 50px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 100px;
    color: red;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
  }

  a {
    padding: 5px 10px;
    text-decoration: none;
    color: $textColor;
    background: $primary-color;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #979797;
    transition: 0.5s;

    &:hover {
      color: white;
      background: $primary-hover-color;
      transition: 0.5s;
    }
  }
}
</style>
