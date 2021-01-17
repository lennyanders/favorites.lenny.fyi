<script setup>
  import { mainRoutes } from '@router';
</script>

<template>
  <main>
    <h1>favorites.lenny.fyi</h1>
    <nav>
      <RouterLink v-for="{ name } of mainRoutes" :key="name" :to="{ name }">{{ name }}</RouterLink>
    </nav>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped>
  main {
    max-width: 56rem;
    width: 100%;
    margin: 0 auto;
  }

  h1,
  nav {
    text-align: center;
  }
</style>

<style>
  body {
    padding: 1rem;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #111;
    color: #f9f9f9;
  }
</style>
