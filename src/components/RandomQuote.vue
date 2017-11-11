<template>
	<div class="error" v-if="error">
		<h1 class="error__text">The random quotes generator is broken.</h1>
	</div>

  <div class="quote" v-else>
		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="next-arrow" viewBox="0 0 49.12 40">
					<title id="next-arrow-title">Next Arrow</title>
					<desc id="next-arrow-desc">Arrow pointing to the right.</desc>
					<polygon class="cls-1" points="24.88 0 43.38 18.5 0 18.5 0 21.5 43.38 21.5 24.88 40 29.12 40 49.12 20 29.12 0 24.88 0"/>
				</symbol>
			</defs>
		</svg>

    <blockquote class="quote__block" id="random-quote" aria-live="polite">
      <p class="quote__text">{{ quote }}</p>
      <footer class="quote__footer">
        <cite class="quote__author"><span class="author__dash" aria-hidden="true">-</span>{{ author }}</cite>
      </footer>
    </blockquote>

    <button class="quote__btn" @click="fetchQuote" type="button" aria-label="Next Quote">
      <svg class="btn__img" role="img" aria-labelledby="next-arrow-title next-arrow-desc"><use xlink:href="#next-arrow"></use></svg>
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
      error: false,
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
        this.error = true;
        throw new Error(`Parsing failed: ${ex.message}`);
      });
    },
  },
  mounted() {
    this.fetchQuote();
  },
};
</script>

<style scoped>
.quote,
.error {
  width: 100%;
  padding: 0 .75rem;
  font-family: "adobe-caslon-pro", Georgia, Times, serif;
}

  .error {
    text-align: center;
  }

    .error__text {
      margin: 0;
      font-size: 2.368rem;
      font-weight: 400;
      line-height: 1.333;
    }

  .quote__block {
    max-width: 41.956rem;
    margin: 0 auto 1.777rem;
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
    padding: 0;
    border: none;
    background-color: transparent;
    appearance: none;
    transition: transform .2s ease-in-out;
  }

  .quote__btn:hover {
    cursor: pointer;
    transform: translateX(.317rem);
  }

    .btn__img {
      width: 3.063rem;
      height: 2.5rem;
      fill: #444144;
    }

</style>