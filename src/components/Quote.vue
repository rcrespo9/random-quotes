<template>
  <blockquote class="quote">
    <p class="quote__text">{{ quote }}</p>
    <footer class="quote__footer">
      <cite class="quote__author">{{ author }}</cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  data() {
    return {
      quote: 'To be or not to be, that is the question.',
      author: 'Hamlet',
    };
  },
};
</script>

<style scoped>
blockquote {
  color: red;
}
</style>