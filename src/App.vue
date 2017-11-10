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
html {
  font-size: 12px;
}

@media screen and (min-width: 20em) {
  html {
    font-size: calc(12px + 8 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 62.5em) {
  html {
    font-size: 20px;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
