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
  <IconLink :href="`https://amvnews.ru/index.php?go=Files&in=view&id=${id}`">
    <image href="../assets/amvnewsIcon.ico" x="4" y="4" height="16" width="16" />
  </IconLink>
</template>
