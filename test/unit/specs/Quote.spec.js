import Vue from 'vue';
import Quote from '@/components/Quote';

describe('Quote.vue', () => {
  const Constructor = Vue.extend(Quote);
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
