<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HomeView />
</template>

<style>
/* CSS GLOBAL: Biar background website jadi gelap (Deep Space) */
body {
  background: linear-gradient(to bottom, #0f172a, #1e1b4b, #0f172a);
  color: white;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Quicksand', sans-serif; /* Default Font */
}

/* Font Heading khusus */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Fredoka', sans-serif;
}
</style>