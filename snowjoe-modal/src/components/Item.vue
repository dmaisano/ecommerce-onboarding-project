<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="bg-white py-2">
      <img
        class="mx-auto w-3/4 content-center"
        :src="imageUrl"
        @mouseover="imageUrl = image.hover"
        @mouseleave="imageUrl = image.static"
        :alt="modelNumber"
      />
    </div>

    <div class="px-6 py-4">
      <div class="text-xl font-bold">{{ name }}</div>
      <p class="pt-1 text-gray-900 text-base font-normal">
        {{ description }}
      </p>
      <p class="pt-2 text-gray-600 text-sm font-semibold">
        Model# {{ modelNumber }}
      </p>
      <p
        class="pt-1 text-gray-900 text-xl font-semibold inline-flex items-start"
      >
        $<span>{{ dollarAmount }}</span>
        <span>{{ coinAmount }}</span>
      </p>

      <button class="mt-2 w-full btn btn-brand uppercase">Add To Cart</button>
    </div>
    <!-- <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#photography</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#travel</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >#winter</span
      >
    </div> -->
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
    modelNumber: String,
    name: String,
    description: String,
    image: Object,
    price: String,
  },
  mounted: function() {
    this.imageUrl = this.image.static;

    const tmp = this.price.split(".");

    this.dollarAmount = this.price.split(".")[0];
    this.coinAmount = this.price.split(".")[1];
  },
};
</script>

<style lang="postcss" scoped>
/* styles go here */
</style>
