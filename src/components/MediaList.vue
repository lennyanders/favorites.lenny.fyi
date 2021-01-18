<template>
  <ul class="media-list">
    <slot />
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
