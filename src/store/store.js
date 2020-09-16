import { createStore } from "vuex";
import navbarStore from "../modules/navbarStore";
import general from "../modules/general"
import createNews from "../modules/createNews"
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    navbarStore,
    general,
    createNews
  },
});
