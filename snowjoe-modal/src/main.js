import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

// custom filters
Vue.filter("truncate", (text, maxLength = 30) => {
  if (text.length < maxLength) return text.trim();

  let res = "";
  for (const word of text.split(" ")) {
    if (res.length + word.length + 1 <= maxLength) {
      res += ` ${word}`;
    } else if (res.length + word.length + 1 <= maxLength) {
      res += word;
    } else {
      break;
    }
  }

  return `${res.trim()}...`;
});

Vue.filter("price", (itemPrice = 0) => {
  return `$${itemPrice.toFixed(2)}`;
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
