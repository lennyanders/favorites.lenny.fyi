<script setup>
  import IconLink from '@components/IconLink.vue';
  import { defineProps } from 'vue';

  defineProps({
    id: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <IconLink :href="`https://akross.ru/index.cgi?video=${id};l=e`">
    <image href="../assets/akrossIcon.ico" x="2" y="2" height="20" width="20" />
  </IconLink>
</template>
