import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
  methods: {
    changeAgeTwice(age) {
      this.$emit('changeAgeTwice', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
