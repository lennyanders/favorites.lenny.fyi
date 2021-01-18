<script setup>
  import ImdbLink from '@components/ImdbLink.vue';
  import VimeoLink from '@components/VimeoLink.vue';
  import YoutubeLink from '@components/YoutubeLink.vue';
  import AnimemusicvideosLink from '@components/AnimemusicvideosLink.vue';
  import AmvnewsLink from '@components/AmvnewsLink.vue';
  import AkrossLink from '@components/AkrossLink.vue';
  import WebLink from '@components/WebLink.vue';
  import { defineProps } from 'vue';

  defineProps({
    title: {
      type: String,
      required: true,
    },
    imdbId: Number,
    youtubeId: String,
    vimeoId: Number,
    animemusicvideosId: Number,
    amvnewsId: Number,
    akrossId: Number,
    homepage: String,
  });
</script>

<template>
  <li class="media-item">
    <div class="media-item__top">
      <h3>{{ title }}</h3>
      <AnimemusicvideosLink v-if="animemusicvideosId" :id="animemusicvideosId" />
      <AmvnewsLink v-if="amvnewsId" :id="amvnewsId" />
      <AkrossLink v-if="akrossId" :id="akrossId" />
      <ImdbLink v-if="imdbId" :id="imdbId" />
      <YoutubeLink v-if="youtubeId" :id="youtubeId" />
      <VimeoLink v-if="vimeoId" :id="vimeoId" />
      <WebLink v-if="homepage" :url="homepage" />
    </div>
    <slot />
  </li>
</template>

<style lang="scss" scoped>
  .media-item {
    display: grid;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: #191919;
    border-radius: 0.25rem;
    color: #ddd;

    &__top {
      display: flex;
      gap: 0.25rem;
      color: #fafafa;

      > h3 {
        flex: 1;
      }
    }
  }
</style>
