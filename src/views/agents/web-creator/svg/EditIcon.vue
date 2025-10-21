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
      d="M15 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M35 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M50 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
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