<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 10"
    :height="height || 10"
    :fill="color || 'currentColor'"
    viewBox="0 0 60 60"
    :class="className"
  >
    <path
      fill-rule="evenodd"
      d="M50.591 20.409a2.25 2.25 0 0 1 0 3.182L33.005 41.177a4.25 4.25 0 0 1-6.01 0L9.409 23.59a2.25 2.25 0 0 1 3.182-3.182L30 37.818l17.409-17.409a2.25 2.25 0 0 1 3.182 0"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 10
  },
  height: {
    type: Number,
    default: 10
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