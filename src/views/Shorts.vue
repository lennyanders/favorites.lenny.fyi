<script setup>
  import ImdbLink from '@components/ImdbLink.vue';
  import VimeoLink from '@components/VimeoLink.vue';
  import YoutubeLink from '@components/YoutubeLink.vue';
  import WebLink from '@components/WebLink.vue';

  const shorts = Object.entries(
    import.meta.globEager('../data/shorts/*.json'),
  ).map(([key, short]) => ({ ...short.default, id: key }));

  const toReadableList = (list) =>
    list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
</script>

<template>
  <div class="filters">filter yay</div>
  <ul class="media-list">
    <li v-for="short in shorts" :key="short.id" class="media-item">
      <div class="media-item__top">
        <h2>{{ short.title }}</h2>
        <ImdbLink v-if="short.imdbId" :id="short.imdbId" />
        <YoutubeLink v-if="short.youtubeId" :id="short.youtubeId" />
        <VimeoLink v-if="short.vimeoId" :id="short.vimeoId" />
        <WebLink v-if="short.homepage" :url="short.homepage" />
      </div>
      {{ short.releaseYear }} | {{ short.duration }} min | {{ toReadableList(short.directors) }} |
      {{ toReadableList(short.styles) }}
      <template v-if="short.franchises?.length">
        | {{ toReadableList(short.franchises) }}
      </template>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .filters {
    width: 100%;
    height: 3rem;
    margin: 1rem 0;
    background-color: #888;
  }
  .media-list {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: grid;
    gap: 0.5rem;
  }

  .media-item {
    display: grid;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #191919;
    border-radius: 0.25rem;
    color: #ddd;

    &__top {
      display: flex;
      gap: 0.25rem;
      color: #fafafa;

      > h2 {
        flex: 1;
      }
    }
  }

  h2 {
    margin: 0;
  }
</style>
