export default {
    namespaced: true,
    state: {
        isFollowContentNewsFilter: false
    },
      mutations: {
        showFollowContentNews(state) {
            state.isFollowContentNewsFilter = !state.isFollowContentNewsFilter;
        }
    }
  };
  