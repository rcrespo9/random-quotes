<template>
  <main class="page-content" id="app">
    <RandomQuote />
  </main>
</template>

<script>
import RandomQuote from './components/RandomQuote';

export default {
  name: 'app',
  components: {
    RandomQuote,
  },
};
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
