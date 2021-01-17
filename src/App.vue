<script setup>
  import { mainRoutes } from '@router';
</script>

<template>
  <main>
    <h1>favorites.lenny.fyi</h1>
    <nav class="nav">
      <RouterLink
        v-for="{ name } of mainRoutes"
        :key="name"
        :to="{ name }"
        class="nav__item"
        exact-active-class="nav__item--active"
      >
        {{ name }}
      </RouterLink>
    </nav>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
    <footer>
      <span>© 2021 – Lenny Anders</span>
      <a href="https://lenny.fyi/">Personal Homepage</a>
      <a href="https://lenny.fyi/legal">Legal</a>
      <a href="https://lenny.fyi/privacy">Privacy Policy</a>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
  main {
    max-width: 56rem;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }

  h1 {
    text-align: center;
  }

  .nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    &__item {
      padding: 0.5rem;
      color: #888;
      border-bottom: 2px solid #191919;
      font-weight: bold;

      &--active {
        border-color: #e92063;
        color: #ddd;
      }
    }
  }

  footer {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    border-top: 2px solid #191919;
    color: #ddd;

    a:first-of-type {
      margin-right: auto;
    }
  }
</style>

<style>
  @import url('./fonts.css');

  body {
    padding: 5rem 1rem 0;
    margin: 0;
    font-family: 'atkinson_hyperlegible', Helvetica, Arial, sans-serif;
    background-color: #111;
    color: #f9f9f9;
    overflow-y: scroll;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }
</style>
