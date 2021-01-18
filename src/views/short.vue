<script setup>
  import MediaList from '@components/MediaList.vue';
  import MediaItem from '@components/MediaItem.vue';
  import { toReadableList } from '@utils';

  const shorts = Object.entries(
    import.meta.globEager('../data/shorts/*.json'),
  ).map(([key, short]) => ({ ...short.default, id: key }));
</script>

<template>
  <h2>My Favorite Short Films</h2>
  <MediaList class="media-list">
    <MediaItem
      v-for="short in shorts"
      :key="short.id"
      :title="short.title"
      :imdbId="short.imdbId"
      :youtubeId="short.youtubeId"
      :vimeoId="short.vimeoId"
      :homepage="short.homepage"
    >
      {{ short.releaseYear }} | {{ short.duration }} min | {{ toReadableList(short.directors) }} |
      {{ toReadableList(short.styles) }}
      {{ short.franchises?.length ? ` | ${toReadableList(short.franchises)}` : '' }}
    </MediaItem>
  </MediaList>
</template>
