import Vue from 'vue';
import RandomQuote from '@/components/RandomQuote';

describe('RandomQuote.vue', () => {
  const Constructor = Vue.extend(RandomQuote);
  const vm = new Constructor().$mount();

  it('should render the correct quote text', () => {
    expect(vm.$el.querySelector('.quote__text').textContent)
      .to.equal('To be or not to be, that is the question.');
  });

  it('should render the correct quote author', () => {
    expect(vm.$el.querySelector('.quote__author').textContent)
      .to.equal('Hamlet');
  });
});
