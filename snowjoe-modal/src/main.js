import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// custom filters
Vue.filter("truncate", function(text, maxLength = 30) {
  if (text.length >= maxLength) {
    const words = text.split(" ");

    let res = "";
    for (const word of words) {
      if (res.length < maxLength) {
        console.log("i ran");
        res += ` ${word}`;
      } else {
        break;
      }
    }

    return `${res.trim()}...`;
  } else {
    return text.trim();
  }
});

Vue.filter("price", function(itemPrice) {
  itemPrice = `$${itemPrice}`;

  if (!itemPrice.includes(".")) {
    return `${itemPrice}.00`;
  }

  // missing a trailing zero
  if (itemPrice.split(".")[1].length === 1) {
    return `${itemPrice}0`;
  }

  return itemPrice;
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
