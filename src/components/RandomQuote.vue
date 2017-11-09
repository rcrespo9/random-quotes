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
  }

    .quote__text {
      max-width: 31.475rem;
      margin: 0 0 1.333rem;
      font-size: 1.777rem;
      font-weight: 700;
      line-height: 1.333;
    }

    .quote__author {
      font-size: .75rem;
      font-style: normal;
      letter-spacing: .075rem;
      text-transform: uppercase;
    }

    .quote__author:before {
      content: "—";
      margin-right: .317rem;
    }
</style>