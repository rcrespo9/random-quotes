<template>
  <div>
    <blockquote class="quote">
      <p class="quote__text">{{ quote }}</p>
      <footer class="quote__footer">
        <cite class="quote__author">{{ author }}</cite>
      </footer>
    </blockquote>

    <button v-on:click="fetchQuote">Next Quote</button>
  </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp';

export default {
  name: 'Quote',
  data() {
    return {
      quote: '',
      author: '',
    };
  },
  methods: {
    fetchQuote() {
      const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en';

      fetchJsonp(url, {
        jsonpCallback: 'jsonp',
      })
      .then(response => response.json())
      .then((data) => {
        const { quoteText, quoteAuthor } = data;

        this.quote = quoteText;
        this.author = quoteAuthor;
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
    },
  },
  mounted() {
    this.fetchQuote();
  },
};
</script>

<style scoped>
blockquote {
  color: red;
}
</style>