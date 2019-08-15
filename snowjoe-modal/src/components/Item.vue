<template>
  <div
    class="mx-auto bg-gray-300 max-w-sm md:max-w-full md:w-11/12 rounded overflow-hidden shadow-lg"
  >
    <div
      class="bg-white py-2 cursor-pointer"
      @mouseover="imageUrl = item.image.hover"
      @mouseleave="imageUrl = item.image.static"
    >
      <img
        class="mx-auto w-3/4 md:w-1/3 content-center"
        :src="imageUrl"
        :alt="item.modelNumber"
      />
    </div>

    <div class="px-6 py-4">
      <div class="text-xl font-bold hover:text-brand-500 cursor-pointer">
        {{ item.name }}
      </div>
      <p class="pt-1 text-gray-900 text-base font-normal">
        {{ item.description }}
      </p>
      <p
        class="pt-1 text-gray-600 hover:text-gray-700 text-sm font-semibold cursor-pointer"
      >
        Model# {{ item.modelNumber }}
      </p>
      <p class="pt-1 text-gray-900 text-lg font-semibold inline-flex">
        <span>$</span>
        <span id="price-dollars">{{ dollarAmount }}</span>
        <span id="price-cents" class="text-xs">{{ coinAmount }}</span>
      </p>

      <button class="mt-2 w-full btn btn-brand uppercase" @click="addCartItem">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      imageUrl: "",
      dollarAmount: 0,
      coinAmount: 0,
    };
  },
  props: {
    item: Object,
  },
  mounted: function() {
    this.imageUrl = this.item.image.static;

    this.dollarAmount = this.item.price.split(".")[0];
    this.coinAmount = this.item.price.split(".")[1];
  },
  methods: {
    addCartItem: function() {
      // push the item to the store
      this.$store.commit("ADD_CART_ITEM", this.item);
    },
  },
};
</script>

<style lang="postcss" scoped>
#price-dollars {
  margin-left: 0.0625rem;
}

#price-cents {
  margin-left: 0.0625rem;
}
</style>
