import Vue from 'vue';
import RandomQuote from '@/components/RandomQuote';

describe('RandomQuote.vue', () => {
  const Constructor = Vue.extend(RandomQuote);
  const vm = new Constructor().$mount();
});
