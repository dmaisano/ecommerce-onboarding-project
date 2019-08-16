<template>
  <div class="home">
    <ItemsList />
  </div>

  <!-- close breaks modal -->
  <!-- <Modal
    v-if="cartModal === true"
    v-bind="{
      customClass: 'cart-modal',
      visibility: cartModal,
      close: toggleCart(!cartModal),
    }"
  >
    <h1 class="text-xl md:text-2xl text-gray-900 font-semibold text-center">
      Shopping Cart
    </h1>
    <div class="cart-table-head mt-3 mb-2">
      <p class="inline-flex items-center text-lg font-semibold">
        Item
      </p>
      <p class="inline-flex items-center text-lg font-semibold">
        Unit Price
      </p>
      <p class="inline-flex items-center text-lg font-semibold uppercase">
        QTY
      </p>
      <p class="inline-flex items-center text-lg font-semibold">
        Total
      </p>
    </div>
    <div
      class="cart-table-item text-sm md:text-base"
      v-for="(item, index) in cart.items"
      :key="index"
    >
      <p class="text-justify block md:hidden">
        {{ item.modelNumber }}
      </p>
      <p class="text-justify hidden md:block">
        {{ item.name | truncate }}
      </p>
      <p class="inline-flex items-center font-semibold">${{ item.price }}</p>
      <p class="inline-flex items-center">
        {{ item.quantity }}
      </p>
      <p class="inline-flex items-center font-semibold">
        {{ (item.price * item.quantity) | price }}
      </p>
    </div>

    <p class="mt-4 text-lg flex justify-center">
      <span class="text-gray-800 font-semibold">Total: </span>
      <span class="ml-2">{{ cartTotal | price }}</span>
    </p>

    <div class="mt-4 cart-actions w-full flex flex-col md:flex-row md:-mx-1">
      <button
        @click="toggleCart(false)"
        class="mb-2 mx-auto md:mx-1 md:mb-0 w-3/4 md:w-1/2 btn btn-brand"
      >
        Keep Shopping
      </button>
      <button
        @click="toggleCart(false)"
        class="mx-auto md:mx-1 w-3/4 md:w-1/2 btn btn-brand-solid"
      >
        Checkout
      </button>
    </div>
  </Modal> -->
</template>

<script>
import ItemsList from "@/components/ItemsList.vue";

export default {
  name: "home",
  components: {
    ItemsList,
  },
};
</script>
