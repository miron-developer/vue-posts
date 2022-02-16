import { createStore } from "vuex";

import postModule from "@/store/modules/post";

const store = createStore({
  modules: {
    posts: postModule,
  },
});

export default store;
