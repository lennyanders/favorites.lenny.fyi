<script setup>
  import MediaList from '@components/MediaList.vue';
  import MediaItem from '@components/MediaItem.vue';
  import { toReadableList } from '@utils';

  const amvs = Object.entries(import.meta.globEager('../data/amvs/*.json')).map(([key, short]) => ({
    ...short.default,
    id: key,
  }));

  console.log(amvs);
</script>

<template>
  <h2>My Favorite AMVs</h2>
  <MediaList>
    <MediaItem
      v-for="amv in amvs"
      :key="amv.id"
      :title="amv.title"
      :youtubeId="amv.youtubeId"
      :vimeoId="amv.vimeoId"
      :homepage="amv.homepage"
    >
      {{ amv.releaseYear }} | {{ toReadableList(amv.creators) }} |
      {{ toReadableList(amv.franchises) }}
    </MediaItem>
  </MediaList>
</template>
