<template>
  <div>
    <div id="list-wrapper">
      <Item
        id="item"
        class="mb-6 md:mb-0"
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>

    <Modal
      id="recommended-modal"
      v-if="recommendedModal && selectedItem"
      v-bind="{
        customClass: 'recommended-modal',
        visibility: recommendedModal,
        close: toggleModal,
      }"
    >
      <div>
        <h1 class="text-3xl flex justify-start border-b-4 border-brand-500">
          Want to add one of these?
        </h1>
        <div class="mt-1 text-gray-600 font-semibold">
          <span>Customers who bought the </span>
          <span class="text-gray-900 font-extrabold">{{
            selectedItem.name
          }}</span>
          <span> also bought these popular items:</span>
        </div>
        <div id="item-wrapper" class="mt-2">
          <Item
            v-for="(item, key) in recommendedItems"
            :key="key"
            id="item"
            v-bind="{
              item,
              recommendedItem: true,
            }"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Item from "./Item";
import Modal from "./Modal";

export default {
  name: "Items-List",
  components: {
    Item,
    Modal,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    selectedItem: function() {
      return this.$store.getters.selectedItem;
    },
    recommendedItems: function() {
      return this.$store.getters.recommendedItems;
    },
    recommendedModal: function() {
      return this.$store.getters.recommendedModal;
    },
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
    }
  },
  methods: {
    toggleModal: function() {
      this.$store.dispatch("setRecommendedModal", !this.recommendedModal);
    },
  },
};
</script>

<style lang="postcss" scoped>
#item:last-child {
  margin-bottom: 0;
}

#recommended-modal >>> #item:first-child {
  border-top: 2px solid black;
}

@media screen and (min-width: 768px) {
  #list-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  #recommended-modal >>> #item:first-child {
    border-top: none;
  }

  #recommended-modal >>> #item-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
  }
}
</style>
