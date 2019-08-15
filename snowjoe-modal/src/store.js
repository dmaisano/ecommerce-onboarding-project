import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingItems: [],
    cart: {
      items: [],
      totalItems: 0,
    },
  },
  mutations: {
    SET_SHOPPING_ITEMS: (state, payload) => {
      state.shoppingItems = payload;
    },
    ADD_CART_ITEM: (state, payload) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item.modelNumber === payload.modelNumber,
      );

      if (itemIndex !== -1) {
        state.cart.items[itemIndex].quantity++;
        state.cart.totalItems++;
      } else {
        // the spread syntax has the same performance as Array.prototype.push.apply
        // when working with large arrays it is better to use concat() for performance
        state.cart = {
          items: [
            ...state.cart.items,
            {
              ...payload,
              quantity: 1,
            },
          ],
          totalItems: ++state.cart.totalItems,
        };
      }
    },
  },
  actions: {
    setShoppingItems: ({ commit, state }, items) => {
      commit("SET_SHOPPING_ITEMS", items);
      return state.shoppingItems;
    },
  },
  getters: {
    cart: (state) => {
      return state.cart;
    },
  },
});
