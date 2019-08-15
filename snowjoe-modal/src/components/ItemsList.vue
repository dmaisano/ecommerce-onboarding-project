<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <Item v-bind="item"></Item>
    </div>
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
      // fetch the mock items data
      // ? using fetch here in order to simulate retrieving data via HTTP through an arbitrary DB or API
      let items = await fetch("/items.json").then((res) => res.json());

      console.log(items);

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
/* styles go here */
</style>
