<template>
  <div class="modal fixed top-0 left-0 w-full h-full" :class="customClass">
    <div
      class="absolute top-0 left-0 w-full h-full z-40"
      style="background: rgba(43, 43, 43, 0.5);"
      @click="close()"
    ></div>
    <div
      class="modal-content absolute px-6 py-6 w-11/12 md:w-3/4 bg-white rounded shadow z-50 overflow-auto"
      style="top: 50%; left: 50%;"
    >
      <slot></slot>

      <!-- close button -->
      <button
        title="Close"
        class="close-modal text-gray-500 text-gray-700"
        @click="close()"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          class="h-8 w-8 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    customClass: String,
    close: Function,
  },
};
</script>

<style lang="postcss" scoped>
.modal .modal-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
}

.modal .close-modal {
  position: absolute;
  right: 0.75rem;
  top: 0.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
}

.modal .close_modal:hover {
  opacity: 0.9;
}
</style>
