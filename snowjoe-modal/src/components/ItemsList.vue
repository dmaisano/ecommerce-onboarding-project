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
      let items = await fetch("/items.json").then((res) => res.json());

      console.log(items);

      this.items = items;
    } catch (error) {
      console.error({ erorr });

      // TODO: show error modal
    }
  },
  updated: function() {
    this.$nextTick(function() {
      console.log("owo");
    });
  },
};
</script>

<style lang="postcss" scoped>
/* styles go here */
</style>
