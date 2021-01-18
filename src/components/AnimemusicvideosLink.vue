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
  <IconLink :href="`https://www.animemusicvideos.org/members/members_videoinfo.php?v=${id}`">
    <image href="../assets/animemusicvideosIcon.ico" x="4" y="4" height="16" width="16" />
  </IconLink>
</template>
