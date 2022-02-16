<script>
import { addPost, editPost } from "@/store/modules/post";

import Input from "./Input.vue";
import Textarea from "./Textarea.vue";

export default {
  name: "PostPopup",
  props: {
    id: Number,
    title: String,
    info: String,
    isEdit: Boolean,
  },
  data() {
    return {
      errors: {},
      data: {
        title: this.title,
        info: this.info,
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.isEdit) {
        this.$store.dispatch(editPost({ ...this.data, id: this.id }));
      } else {
        this.$store.dispatch(addPost(this.data));
      }
      this.$emit("done");
    },
    update(value, field) {
      this.data[field] = value;
    },
  },
  components: { Input, Textarea },
};
</script>

<template>
  <div class="manage-post">
    <form action="/" method="POST" @submit="submit">
      <Input
        label="Post title"
        placeholder="type here post title"
        name="title"
        type="text"
        :defaultValue="title"
        @update="(v) => update(v, 'title')"
        :error="errors['title']"
      />

      <Textarea
        label="Post info"
        placeholder="type here post description"
        name="info"
        :defaultValue="info"
        @update="(v) => update(v, 'info')"
        :error="errors['info']"
      />

      <button type="submit">Save!</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

button {
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  background: #00871d;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0 #00000052;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #000;
    background: $primary-color;
    transition: 0.5s;
  }
}
</style>
