<template>
  <main id="app">
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
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
