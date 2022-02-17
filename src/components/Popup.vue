<script>
export default {
  name: "AppPopup",
  data() {
    return {
      animationStart: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    close() {
      this.animationStart = false;
      setTimeout(() => {
        this.$emit("popup-close");
      }, 100);
    },
  },
  mounted() {
    setTimeout(() => {
      this.animationStart = true;
    }, 100);
  },
};
</script>

<template>
  <div class="popup" :class="animationStart && 'open'">
    <h2 class="title">{{ this.title }}</h2>

    <span class="close" @click="close">
      <i class="fas fa-window-close"></i>
    </span>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.popup {
  position: fixed;
  left: -100vw;
  top: 50%;
  padding: 10px;
  width: 50vw;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background: #00ff80;
  box-shadow: 0 0 7px 7px #0000003b;
  z-index: 10;
  transition: 0.5s;

  &.open {
    left: 50%;
    transition: 0.5s;
  }

  .title {
    text-align: center;
    width: 50%;
    margin: auto;
    color: white;
    border-bottom: 1px dashed black;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    color: red;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #000;
      transition: 0.5s;
    }
  }

  .content {
    margin: 30px 10px;
  }
}
</style>
