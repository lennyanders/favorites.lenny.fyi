<script setup>
  import MediaItem from '@components/MediaItem.vue';

  const shorts = Object.entries(
    import.meta.globEager('../data/shorts/*.json'),
  ).map(([key, short]) => ({ ...short.default, id: key }));

  const toReadableList = (list) =>
    list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
</script>

<template>
  <ul class="media-list">
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
  </ul>
</template>

<style lang="scss" scoped>
  .media-list {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: grid;
    gap: 0.5rem;
  }
</style>
