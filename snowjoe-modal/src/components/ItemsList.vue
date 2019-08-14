<template>
  <div>
    <h1>list</h1>
  </div>
</template>

<script>
export default {
  name: "Items-List",
  data() {
    return {};
  },
  mounted: async function() {
    try {
      // fetch the mock items data
      let items = await fetch("/items.json").then((res) => res.json());

      console.log(items);
    } catch (error) {
      console.error({ erorr });

      // TODO: show error modal
    }
  },
};
</script>

<style lang="postcss" scoped>
/* foo */
</style>
