export default {
    namespaced: true,
    state: {
        configListActive: false
    },
      mutations: {
        showConfigListNews(state) {
            state.configListActive = !state.configListActive;
            console.log(state.configListActive)
        }
    }
  };