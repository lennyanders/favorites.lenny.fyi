<script setup>
  import MediaList from '@components/MediaList.vue';
  import MediaItem from '@components/MediaItem.vue';
  import { toReadableList, toMediaItemList } from '@utils';

  const amvs = toMediaItemList(import.meta.globEager('../data/amvs/*.json'));
</script>

<template>
  <MediaList>
    <MediaItem
      v-for="amv in amvs"
      :key="amv.id"
      :title="amv.title"
      :youtubeId="amv.youtubeId"
      :vimeoId="amv.vimeoId"
      :animemusicvideosId="amv.animemusicvideosId"
      :amvnewsId="amv.amvnewsId"
      :akrossId="amv.akrossId"
      :homepage="amv.homepage"
    >
      {{ amv.releaseYear }} | {{ toReadableList(amv.creators) }} | {{ amv.music }} |
      {{ toReadableList(amv.franchises) }}
    </MediaItem>
  </MediaList>
</template>
