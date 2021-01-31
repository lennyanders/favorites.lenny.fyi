<script setup>
  import { onMounted, ref, watch, defineProps, defineEmit } from 'vue';
  import Player from '@vimeo/player';

  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmit(['ended']);

  const iframe = ref(null);
  onMounted(() => {
    const player = new Player(iframe.value);

    player.on('ended', () => {
      emit('ended');
      console.log('ended');
    });

    watch(
      () => props.id,
      (videoId) => {
        player.loadVideo(videoId);
        player.play();
      },
    );
  });
</script>

<!-- iframe so vimeo does not create the iframe as child and reuses this one =/ -->
<template>
  <iframe
    v-once
    ref="iframe"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    :src="`https://player.vimeo.com/video/${id}?dnt=1`"
  />
</template>
