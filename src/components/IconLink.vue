<script setup>
  import BaseIcon from '@components/BaseIcon.vue';
  import { defineProps } from 'vue';

  defineProps({
    href: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <a :href="href">
    <BaseIcon><slot /></BaseIcon>
  </a>
</template>
