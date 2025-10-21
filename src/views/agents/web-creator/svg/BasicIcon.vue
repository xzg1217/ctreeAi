<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 18"
    :height="height || 18"
    :fill="color || 'currentColor'"
    viewBox="0 0 60 60"
    :class="className"
  >
    <path
      :fill="fillColor || '#00C3AE'"
      d="M10.436 34.245h9.186v21.063c0 3.1 3.924 4.563 6.005 2.223l22.504-25.159c1.962-2.194.387-5.616-2.586-5.616h-9.186V5.692c0-3.1-3.924-4.563-6.005-2.223L7.85 28.628c-1.932 2.194-.357 5.617 2.586 5.617"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 18
  },
  height: {
    type: Number,
    default: 18
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  fillColor: {
    type: String,
    default: '#00C3AE'
  },
  className: {
    type: String,
    default: ''
  }
});
</script>