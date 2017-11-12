<template>
  <div id="app">
    <a class="skip-to-quote" href="#random-quote">Skip to quote</a>
    <main class="page-content" id="app">
      <RandomQuote />
    </main>
  </div>
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

/* 320px */
@media screen and (min-width: 20em) {
  html {
    font-size: calc(12px + 12 * ((100vw - 320px) / 1280));
  }
}

/* 1000px */
@media screen and (min-width: 62.5em ) {
  html {
    font-size: 20px;
  }
}

/* 1600px */
@media screen and (min-width: 100em) {
  html {
    font-size: 24px;
  }
}

body {
  color: #1D1C1D;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.skip-to-quote {
  position: absolute;
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border-bottom: 2px solid;
  color: inherit;
  font-size: 1.333rem;
  text-decoration: none;
}

.skip-to-quote:focus,
.skip-to-quote:active {
  top: 1rem;
  left: 1rem;
  width: auto;
  height: auto;
  overflow: visible;
}

.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
