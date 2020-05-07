<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <br />
        <select name="animation" id="animation" class="form-control" v-model="animate">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />

        <!-- <transition :name="animate" type="animation">
          <div class="alert alert-info" v-if="show">Animation</div>
        </transition>

        <transition :name="animate" type="animation">
          <div class="alert alert-info" v-if="show">Animation</div>
        </transition>-->

        <!-- <transition name="slide" appear>
          <div class="alert alert-info">Animation</div>
        </transition>-->

        <!-- <transition
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <div class="alert alert-info" v-if="show">Animation</div>
        </transition>-->

        <transition :name="animate" type="animation" mode="out-in">
          <div class="alert alert-info" v-if="!show" key="info">Animation</div>
          <div class="alert alert-danger" v-else key="danger">Animation</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      animate: "fade"
    };
  }
};
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
}

.fade-enter-active {
  animation: fade-in 1s ease-in;
}

.fade-leave-active {
  animation: fade-out 1s ease-out;
}

.slide-enter-active {
  animation: slide-in 1s ease-in;
}

.slide-leave-active {
  animation: slide-out 1s ease-out;
}
</style>
