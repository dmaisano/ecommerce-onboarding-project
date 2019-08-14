<template>
  <div id="app" class="antialiased">
    <Header />

    <main class="m-10">
      <h1 class="text-indigo-600">hello</h1>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header,
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
