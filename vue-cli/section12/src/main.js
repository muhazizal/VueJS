import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    let time = 0;
    if (binding.modifiers['delay']) {
      time = 3000;
    }
    setTimeout(() => {
      binding.arg == "background"
        ? (el.style.backgroundColor = binding.value)
        : (el.style.color = binding.value);
    }, time);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
