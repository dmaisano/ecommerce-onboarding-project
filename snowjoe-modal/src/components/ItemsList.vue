<template>
  <div>
    <div id="list-wrapper">
      <Item
        id="item"
        class="mb-6 md:mb-0"
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      ></Item>
    </div>

    <!-- <Modal> </Modal> -->
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
      // could also use await here if desired (async/await)
      fetch("/items.json")
        .then((response) => response.json())
        .then((items) => this.$store.dispatch("setShoppingItems", items))
        .then((items) => {
          this.items = items;
        });
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
