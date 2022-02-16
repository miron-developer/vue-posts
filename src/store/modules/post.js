const ADD_POST = "addPost";
const REMOVE_POST = "removePost";
const EDIT_POST = "editPost";
const nameInStorage = "posts";

const addPrefix = (prefix, value) => {
  return prefix + "/" + value;
};

export function addPost(payload) {
  return {
    payload,
    type: addPrefix("posts", ADD_POST),
  };
}

export function removePost(payload) {
  return {
    payload,
    type: addPrefix("posts", REMOVE_POST),
  };
}

export function editPost(payload) {
  return {
    payload,
    type: addPrefix("posts", EDIT_POST),
  };
}

const getDefaultState = () => {
  let posts = window.localStorage?.getItem(nameInStorage);
  if (posts) {
    posts = JSON.parse(posts);
  } else {
    posts = [];
  }

  return {
    posts,
    next_free_id: posts.length + 1,
  };
};

export default {
  namespaced: true,
  state: {
    ...getDefaultState(),
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    post(state) {
      return (id) => {
        id = parseInt(id);
        return state.posts.find((p) => p.id === id);
      };
    },
  },
  mutations: {
    [ADD_POST](state, payload) {
      state.posts.push({ id: state.next_free_id, ...payload });
      state.next_free_id += 1;
      window.localStorage?.setItem(nameInStorage, JSON.stringify(state.posts));
    },
    [REMOVE_POST](state, payload) {
      state.posts = state.posts.filter((p) => p.id !== payload.id);
      window.localStorage?.setItem(nameInStorage, JSON.stringify(state.posts));
    },
    [EDIT_POST](state, payload) {
      const i = state.posts.findIndex((p) => p.id === payload.id);
      if (i === -1) return;

      state.posts[i] = { ...state.posts[i], ...payload };
      state.posts = [...state.posts];
      window.localStorage?.setItem(nameInStorage, JSON.stringify(state.posts));
    },
  },
  actions: {
    [ADD_POST]({ commit }, { payload }) {
      commit(ADD_POST, payload);
    },
    [REMOVE_POST]({ commit }, { payload }) {
      commit(REMOVE_POST, payload);
    },
    [EDIT_POST]({ commit }, { payload }) {
      commit(EDIT_POST, payload);
    },
  },
};
