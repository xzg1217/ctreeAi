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
      d="M30 2.75C14.95 2.75 2.75 14.95 2.75 30S14.95 57.25 30 57.25 57.25 45.05 57.25 30 45.05 2.75 30 2.75"
    ></path>
    <path
      :fill="fillColor || '#fff'"
      d="M41.59 21.591a2.25 2.25 0 1 0-3.181-3.182L30 26.818l-8.408-8.409a2.25 2.25 0 0 0-3.182 3.182L26.818 30l-8.408 8.409a2.25 2.25 0 1 0 3.182 3.182L30 33.18l8.409 8.41a2.25 2.25 0 0 0 3.182-3.182l-8.409-8.41z"
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
  fillColor: {
    type: String,
    default: '#fff'
  },
  className: {
    type: String,
    default: ''
  }
});
</script>