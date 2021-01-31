<script>
  import { onMounted, ref, watch, defineProps, defineEmit } from 'vue';

  let YT;
  const cbs = [];
  const onMountedAndYtAvailable = (cb) => {
    onMounted(() => {
      if (YT) cb();
      else cbs.push(cb);
    });
  };

  document.head.append(
    Object.assign(document.createElement('script'), {
      src: 'https://www.youtube.com/iframe_api',
    }),
  );

  window.onYouTubeIframeAPIReady = () => {
    YT = window.YT;
    cbs.forEach((cb) => cb());
    delete window.onYouTubeIframeAPIReady;
    delete window.onYTReady;
  };
</script>

<script setup>
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmit(['ended']);

  const iframe = ref(null);
  onMountedAndYtAvailable(() => {
    const player = new YT.Player(iframe.value, {
      host: 'https://www.youtube-nocookie.com',
      videoId: props.id,
      playerVars: {
        // autoplay: 1,
      },
      events: {
        onStateChange({ data }) {
          if (data === 0) {
            emit('ended');
            console.log('ended');
          }
        },
      },
    });

    console.log(player);

    watch(
      () => props.id,
      (videoId) => {
        player.cueVideoById({ videoId });
        player.playVideo();
      },
    );
  });
</script>

<template>
  <div ref="iframe" />
</template>
