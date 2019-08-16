<template>
  <div>
    <header
      class="bg-gray-900 pl-4 md:pr-4 py-4 w-full inline-flex items-center justify-between"
    >
      <div id="brand" class="inline-flex items-center select-none">
        <router-link to="/" class="w-1/5">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <router-link
          to="/"
          class="text-2xl md:text-3xl font-semibold pl-4 text-gray-300"
        >
          Snow Joe
        </router-link>
      </div>

      <router-link
        v-if="routePath !== '/cart'"
        id="cart-btn"
        to="/cart"
        class="font-medium inline-flex items-center px-4 text-gray-400 cursor-pointer hover:font-bold hover:text-white"
        @click="toggleCart(true)"
      >
        <p class="hidden md:block">Cart</p>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="shopping-cart"
          class="ml-2 h-5 w-5 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          ></path>
        </svg>
        <span
          v-if="cart.totalItems > 0"
          id="cart-items"
          class="ml-2 px-2 bg-brand-500 rounded-full"
        >
          {{ cart.totalItems }}
        </span>
      </router-link>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data: function() {
    return {
      routePath: this.$route.path,
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  watch: {
    $route(to) {
      this.routePath = to.path;
    },
  },
};
</script>

<style lang="postcss" scoped>
#brand img {
  min-width: 80px;
}

#brand h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#cart-btn:hover > #cart-items {
  @apply bg-brand-400;
}

.modal .cart-table-head,
.modal .cart-table-item {
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr 1fr;
  grid-column-gap: 0.5rem;
}
</style>
