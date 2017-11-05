<template>
  <main id="app">
    <Quote />
  </main>
</template>

<script>
import Quote from './components/Quote';

export default {
  name: 'app',
  components: {
    Quote,
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
