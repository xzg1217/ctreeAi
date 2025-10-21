<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 14"
    :height="height || 14"
    :fill="color || 'currentColor'"
    viewBox="0 0 60 60"
    :class="className"
  >
    <path
      fill-rule="evenodd"
      d="M8.349 52.96c-7.127-7.127-7.127-18.682 0-25.81L27.356 8.145c6.956-6.956 18.234-6.956 25.19 0s6.956 18.234 0 25.19l-14.49 14.49c-4.128 4.127-10.819 4.127-14.946 0s-4.127-10.817 0-14.944l13.517-13.517a2.25 2.25 0 1 1 3.182 3.182L26.292 36.062a6.068 6.068 0 0 0 8.581 8.58l14.49-14.49c5.2-5.199 5.2-13.627 0-18.826-5.198-5.198-13.627-5.198-18.825 0L11.53 30.333c-5.37 5.37-5.37 14.075 0 19.445l1.208 1.208a2.25 2.25 0 0 1-3.182 3.182z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 14
  },
  height: {
    type: Number,
    default: 14
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  className: {
    type: String,
    default: ''
  }
});
</script>