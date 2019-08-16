<template>
  <div>
    <div
      v-if="!recommendedItem"
      class="mx-auto bg-gray-300 max-w-sm md:max-w-full md:w-full rounded overflow-hidden shadow-lg"
    >
      <div
        class="bg-white py-2"
        @mouseover="imageUrl = item.image.hover"
        @mouseleave="imageUrl = item.image.static"
      >
        <img
          class="mx-auto w-1/2 content-center"
          :src="imageUrl"
          :alt="item.modelNumber"
        />
      </div>

      <div class="flex-col px-4 py-4">
        <div>
          <div class="text-lg font-bold hover:text-brand-500">
            {{ item.name | truncate }}
          </div>
          <p class="pt-1 text-gray-900 text-base font-normal">
            {{ item.description }}
          </p>
          <p
            class="pt-1 text-gray-600 hover:text-gray-700 text-sm font-semibold"
          >
            Model# {{ item.modelNumber }}
          </p>
          <p class="pt-1 text-gray-900 text-lg font-semibold inline-flex">
            <span>$</span>
            <span id="price-dollars">{{ dollarAmount }}</span>
            <span id="price-cents" class="text-xs">{{ coinAmount }}</span>
          </p>
        </div>

        <button
          id="add-cart-btn"
          class="mt-2 w-full btn btn-brand"
          @click="addCartItem(false)"
        >
          Add To Cart
        </button>
      </div>
    </div>

    <div v-else>
      <!-- small viewport -->
      <div
        id="recommended-item"
        class="block lg:hidden py-4 bg-white w-full flex border-b-2 border-gray-900"
      >
        <div
          class="img-wrapper flex items-center w-1/4"
          @mouseover="imageUrl = item.image.hover"
          @mouseleave="imageUrl = item.image.static"
        >
          <img :src="imageUrl" :alt="item.modelNumber" />
        </div>
        <div class="w-3/4">
          <h1 class="text-lg font-bold hover:text-brand-500">
            {{ item.name | truncate(50) }}
          </h1>
          <p
            class="pt-1 text-gray-600 hover:text-gray-700 text-sm font-semibold"
          >
            Model# {{ item.modelNumber }}
          </p>
          <p class="mt-2 text-gray-900 text-2xl font-semibold inline-flex">
            <span>$</span>
            <span id="price-dollars">{{ dollarAmount }}</span>
            <span id="price-cents" class="text-xs">{{ coinAmount }}</span>
          </p>
          <button
            id="add-cart-btn"
            class="block mt-1 text-gray-700 capitalize hover:text-gray-900 focus:font-bold focus:shadow-none"
            style="box-shadow: none;"
            @click="addModalCartItem()"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <!-- large viewport cards -->
      <div
        id="recommended-item-lg"
        class="hidden lg:block mx-auto bg-white w-full flex-col justify-center rounded overflow-hidden"
      >
        <div
          class="img-wrapper bg-white py-2"
          @mouseover="imageUrl = item.image.hover"
          @mouseleave="imageUrl = item.image.static"
        >
          <img :src="imageUrl" :alt="item.modelNumber" />
        </div>

        <div class="flex-col py-4 ">
          <h1 class="text-lg font-bold hover:text-brand-500">
            {{ item.name | truncate(50) }}
          </h1>
          <p
            class="pt-1 text-gray-600 hover:text-gray-700 text-sm font-semibold"
          >
            Model# {{ item.modelNumber }}
          </p>
        </div>

        <div class="mb-2 px-1">
          <p class="my-2 text-gray-900 text-2xl font-semibold inline-flex">
            <span>$</span>
            <span id="price-dollars">{{ dollarAmount }}</span>
            <span id="price-cents" class="text-xs">{{ coinAmount }}</span>
          </p>

          <div id="add-cart-btn">
            <button
              class="mt-auto w-full btn btn-brand-solid"
              @click="addModalCartItem()"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data: function() {
    return {
      imageUrl: "",
      dollarAmount: 0,
      coinAmount: 0,
      modalVisibility: false,
    };
  },
  props: {
    item: Object,
    recommendedItem: {
      type: Boolean,
      default: false,
    },
  },
  mounted: function() {
    this.imageUrl = this.item.image.static;

    this.dollarAmount = this.item.price.split(".")[0];
    this.coinAmount = this.item.price.split(".")[1];
  },
  methods: {
    addCartItem: function() {
      // push the item to the store
      this.$store.dispatch("addCartItem", this.item);
      this.$store.dispatch("setSelectedItem", this.item);
      this.$store.dispatch("setRecommendedModal", true);
    },
    addModalCartItem: function() {
      // push the item to the store
      this.$store.dispatch("addCartItem", this.item);
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

@media screen and (min-width: 768px) {
  #recommended-item > .img-wrapper > img,
  #recommended-item-lg > .img-wrapper > img {
    height: 125px;
    width: 125px;
    margin: auto;
  }
}
</style>
