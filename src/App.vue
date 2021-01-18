<script setup>
  import { routes } from '@router';
</script>

<template>
  <main>
    <h1>favorites.lenny.fyi</h1>
    <nav class="nav">
      <RouterLink
        v-for="{ name } of routes"
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
    flex-wrap: wrap;
    padding: 0 0.75rem;
    gap: 0.5rem;
    text-transform: uppercase;
    border-bottom: 2px solid #191919;

    &__item {
      position: relative;
      padding: 0.5rem;
      color: #888;
      font-weight: bold;
      transition: color 0.2s ease;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: #e92063;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      &--active {
        color: #ddd;

        &::after {
          opacity: 1;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
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
    padding: 5rem 0.5rem 0;
    margin: 0;
    font-family: 'atkinson_hyperlegible', Helvetica, Arial, sans-serif;
    background-color: #111;
    color: #f9f9f9;
    overflow-y: scroll;
    line-height: 1.5;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h2 {
    padding-left: 1rem;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  @media screen and (min-width: 32rem) {
    body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
