<template>
  <div id="app" class="bg-gray-200 min-h-full antialiased">
    <Header />

    <main class="m-10">
      <ItemsList />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

export default {
  name: "app",
  components: {
    Header,
    ItemsList,
  },
};
</script>

<style src="./assets/css/main.css" />

<style>
#app {
  font-family: "Open Sans", "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
