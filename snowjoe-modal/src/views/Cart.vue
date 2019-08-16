<template>
  <div class="cart">
    <h1 class="text-xl md:text-2xl text-gray-900 font-semibold text-center">
      Shopping Cart
    </h1>

    <div v-if="cart.items.length">
      <div class="cart-table-head mt-3 mb-2 -mx-2">
        <p class="px-2 w-2/5 inline-flex items-center text-lg font-semibold">
          Item
        </p>
        <p class="px-2 w-1/5 inline-flex items-center text-lg font-semibold">
          Unit Price
        </p>
        <p
          class="px-2 w-1/5 inline-flex items-center text-lg font-semibold uppercase"
        >
          QTY
        </p>
        <p class="px-2 w-1/5 inline-flex items-center text-lg font-semibold">
          Total
        </p>
      </div>
      <div
        class="cart-table-head mt-3 mb-2 -mx-2"
        v-for="(item, index) in cart.items"
        :key="index"
      >
        <p class="px-2 w-2/5 inline-flex md:hidden items-center">
          {{ item.modelNumber }}
        </p>
        <p class="px-2 w-2/5 hidden md:inline-flex items-center">
          {{ item.name | truncate(50) }}
        </p>
        <p class="px-2 w-1/5 inline-flex items-center font-semibold">
          ${{ item.price }}
        </p>
        <p class="px-2 w-1/5 inline-flex items-center uppercase">
          {{ item.quantity }}
        </p>
        <p class="px-2 w-1/5 inline-flex items-center font-semibold">
          {{ item.price * item.quantity }}
        </p>
      </div>

      <p class="mt-4 text-lg flex justify-center">
        <span class="text-gray-800 font-semibold">Total: </span>
        <span class="ml-2">{{ cartTotal | price }}</span>
      </p>

      <div class="mt-4 cart-actions w-full flex flex-col md:flex-row md:-mx-1">
        <router-link
          to="/"
          class="mb-2 mx-auto md:mx-1 md:mb-0 w-3/4 md:w-1/2 btn btn-brand text-center"
        >
          Keep Shopping
        </router-link>
        <button
          class="mx-auto md:mx-1 w-3/4 md:w-1/2 btn btn-disabled"
          disabled
        >
          Checkout
        </button>
      </div>
    </div>

    <div v-else>
      <p class="mt-16 text-xl text-red-500 capitalize text-center">
        No Items In Cart!
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cart",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    cartTotal: function() {
      return this.$store.getters.cartTotal;
    },
  },
  mounted: function() {},
};
</script>
