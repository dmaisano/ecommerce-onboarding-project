import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// custom filters
Vue.filter("truncate", function(text, maxLength = 30) {
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

  // if (text.length >= maxLength) {
  //   return `${text.substring(0, maxLength).trim()}...`;
  // } else {
  //   return text.trim();
  // }
});

Vue.filter("price", function(itemPrice) {
  return `$${itemPrice.toFixed(2)}`;
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
