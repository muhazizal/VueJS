<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p v-if="show">{{ name }}</p>
        <button v-custom:click="showName" class="btn btn-primary">Show Name</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "muhazizal",
      show: false
    };
  },
  methods: {
    showName() {
      this.show = !this.show;
    }
  },
  directives: {
    custom: {
      bind(el, binding, vnode) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  }
};
</script>