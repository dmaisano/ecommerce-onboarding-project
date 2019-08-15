import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_CART_ITEM: (state, payload) => {
      // the spread syntax has the same performance as Array.prototype.push.apply
      // when working with large arrays it is better to use concat() for performance
      state.cart = [...state.cart, payload];
    },
  },
  actions: {},
  getters: {
    cart: (state) => {
      return state.cart;
    },
  },
});
