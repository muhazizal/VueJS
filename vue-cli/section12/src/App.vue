<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Strong HTML Text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delay="'red'">Color this!</p>
        <p
          v-local-highlight:background.delay.blink="{mainColor: 'red', secondColor: 'blue', delay: '500'}"
        >Color this, too!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let time = 0;
        if (binding.modifiers["delay"]) {
          time = 3000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              binding.arg == "background"
                ? (el.style.backgroundColor = currentColor)
                : (el.style.color = currentColor);
            }, binding.value.delay);
          }, time);
        } else {
          setTimeout(() => {
            binding.arg == "background"
              ? (el.style.backgroundColor = binding.value.mainColor)
              : (el.style.color = binding.value.mainColor);
          }, time);
        }
      }
    }
  }
};
</script>

<style>
</style>
