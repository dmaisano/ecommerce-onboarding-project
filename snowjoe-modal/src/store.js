import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingItems: [],
    selectedItem: null,
    cart: {
      items: [],
      totalItems: 0,
    },
    recommendedModal: false,
  },
  mutations: {
    SET_SHOPPING_ITEMS: (state, payload) => {
      state.shoppingItems = payload;
    },
    SET_SELECTED_ITEM: (state, payload) => {
      state.selectedItem = payload;
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
    SET_RECOMMENDED_MODAL: (state, payload = true) => {
      state.recommendedModal = payload;
    },
  },
  actions: {
    setShoppingItems: ({ commit, state }, items) => {
      commit("SET_SHOPPING_ITEMS", items);
      return state.shoppingItems;
    },
    setSelectedItem: ({ commit, state }, items) => {
      commit("SET_SELECTED_ITEM", items);
      return state.shoppingItems;
    },
    addCartItem: ({ commit, state }, item) => {
      commit("ADD_CART_ITEM", item);
      return state.item;
    },
    setRecommendedModal: ({ commit, state }, payload) => {
      commit("SET_RECOMMENDED_MODAL", payload);
      return state.recommendedModal;
    },
  },
  getters: {
    cart: (state) => {
      return state.cart;
    },
    selectedItem: (state) => {
      return state.selectedItem;
    },
    cartTotal: (state) => {
      return state.cart.items
        .map((item) => item.price)
        .reduce((total, amount) => {
          return (total += +amount);
        }, 0);
    },
    recommendedItems: (state) => {
      const items = [];

      if (state.selectedItem === null || state.selectedItem === undefined) {
        return items;
      }

      for (const id of state.selectedItem.recommended) {
        for (const item of state.shoppingItems) {
          if (item.id === id) {
            items.push(item);
            break;
          }
        }
      }

      return items;
    },
    recommendedModal: (state) => {
      return state.recommendedModal;
    },
  },
});
