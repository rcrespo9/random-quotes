<template>
  <div class="quote">
    <blockquote class="quote__block" id="random-quote" aria-live="polite">
      <p class="quote__text">{{ quote }}</p>
      <footer class="quote__footer">
        <cite class="quote__author"><span class="author__dash" aria-hidden="true">-</span>{{ author }}</cite>
      </footer>
    </blockquote>

    <button class="quote__btn" @click="fetchQuote" type="button" aria-label="Next Quote">
      <img class="btn__img" src="../assets/next-arrow.svg" alt="Arrow pointing to the right">
    </button>
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
  width: 100%;
  padding: 0 .75rem;
}

  .quote__block {
    max-width: 41.956rem;
    margin: 0 auto 1.777rem;
    font-family: "adobe-caslon-pro", Georgia, Times, serif;
  }

    .quote__text {
      margin: 0 0 1.777rem;
      font-size: 2.368rem;
      line-height: 1.333;
    }

    .quote__author {
      font-size: 1.333rem;
      font-style: italic;
    }

      .author__dash {
        display: inline-block;
        vertical-align: middle;
        margin-right: .138rem;
      }

  .quote__btn {
    position: absolute;
    bottom: 1.777rem;
    right: 1.777rem;
    width: 3.052rem;
    padding: 0;
    border: none;
    background-color: transparent;
    appearance: none;
  }

  .quote__btn:hover {
    cursor: pointer;
  }

    .btn__img {
      width: 100%;
      height: auto;
    }

</style>