<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h1>Routing</h1>
        <hr />
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    "app-header": Header
  }
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(500px);
  }
}

.slide-enter-active {
  animation: slide-in 0.3s;
}

.slide-leave-active {
  animation: slide-out 0.3s;
}
</style>
