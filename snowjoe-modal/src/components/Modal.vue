<template>
  <div
    v-show="visibility"
    class="modal fixed top-0 left-0 w-full h-full z-50"
    :class="customClass"
  >
    <div class="overlay" @click="close()"></div>
    <div class="modal_content shadow">
      <slot></slot>
      <!-- <button
        v-show="defaultClose"
        title="Close"
        class="close_modal"
        @click="closeCallback()"
      >
        Close
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visibility: Boolean,
    customClass: String,
    close: Function,
    defaultClose: Boolean, // if true will render the default close btn
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.modal .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(43, 43, 43, 0.5);
}

.modal .modal_content {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7); */
  text-align: center;
  border-radius: 4px;
  width: 520px; /* This just a default width */
}

.modal .modal_content > h2 {
  font-size: 28px;
  font-weight: 200;
  margin: 20px 0 40px;
  text-align: center;
}

.modal .modal_content .buttons_wrapper {
  padding: 20px;
}

.modal .close_modal {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
}

.modal .close_modal:hover {
  opacity: 0.9;
}
</style>
