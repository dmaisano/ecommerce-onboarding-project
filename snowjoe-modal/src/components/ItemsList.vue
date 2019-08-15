<template>
  <div id="list-wrapper">
    <Item
      id="item"
      class="mb-6"
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    ></Item>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Items-List",
  components: {
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted: async function() {
    try {
      // ? using fetch here in order to simulate retrieving data via HTTP through an arbitrary DB or backend API
      let items = await fetch("/items.json").then((res) => res.json());

      this.items = items;
    } catch (error) {
      console.error({
        error,
      });

      // TODO: show error modal
    }
  },
};
</script>

<style lang="postcss" scoped>
#item:last-child {
  margin-bottom: 0;
}

@media screen and (min-width: 768px) {
  #list-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
}
</style>
