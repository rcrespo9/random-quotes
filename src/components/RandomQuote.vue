<template>
  <div class="quote">
    <blockquote class="quote__block">
      <p class="quote__text">{{ quote }}</p>
      <footer class="quote__footer">
        <cite class="quote__author">{{ author }}</cite>
      </footer>
    </blockquote>

    <button class="quote__btn" v-on:click="fetchQuote" type="button">Next Quote</button>
  </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp';

export default {
  name: 'RandomQuote',
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
        this.author = quoteAuthor || 'Unknown';
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
.quote {
  padding: 0 .75rem;
}

  .quote__block {
    margin: 0 0 1.777rem;
    font-family: "adobe-caslon-pro", Georgia, Times, serif;
  }

    .quote__text {
      max-width: 41.956rem;
      margin: 0 0 1.777rem;
      color: #1D1C1D;
      font-size: 2.368rem;
      line-height: 1.333;
    }

    .quote__author {
      font-size: 1.333rem;
      font-style: italic;
    }

    .quote__author:before {
      content: "-";
      display: inline-block;
      vertical-align: middle;
      margin-right: .238rem;
    }
</style>