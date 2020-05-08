<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <br />
        <!-- <select name="animation" id="animation" class="form-control" v-model="animate">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />-->

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

        <!-- <transition :name="animate" type="animation" mode="out-in">
          <div class="alert alert-info" v-if="!show" key="info">Animation</div>
          <div class="alert alert-danger" v-else key="danger">Animation</div>
        </transition>-->

        <!-- <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="!load"></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert'
            ? selectedComponent = 'app-danger-alert'
            : selectedComponent = 'app-success-alert'"
        >Toggle Component</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>-->

        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br />
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="deleteItem(index)"
              style="cursor: pointer;"
            >{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessAlert from "./SuccessAlert.vue";
import DangerAlert from "./DangerAlert.vue";

export default {
  components: {
    "app-success-alert": SuccessAlert,
    "app-danger-alert": DangerAlert
  },
  data() {
    return {
      show: false,
      animate: "fade",
      load: true,
      elWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3]
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("Before Enter");
      this.elWidth = 100;
      el.style.width = this.elWidth;
      +"px";
    },

    enter(el, done) {
      console.log("Enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },

    afterEnter(el) {
      console.log("After Enter");
    },

    enterCancelled(el) {
      console.log("Enter Cancelled");
    },

    beforeLeave(el) {
      console.log("Before Leave");
      this.elWidth = 300;
      el.style.width = this.elWidth + "px";
    },

    leave(el, done) {
      console.log("Leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },

    afterLeave(el) {
      console.log("After Leave");
    },

    leaveCancelled(el) {
      console.log("Leave Cancelled");
    },

    addItem() {
      const randomNumber = Math.floor(Math.random() * this.numbers.length);
      this.numbers.push(randomNumber + 1);
    },

    deleteItem(index) {
      this.numbers.splice(index, 1);
    }
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
  position: absolute;
  display: none;
}

.slide-move {
  transition: transform 1s;
}
</style>
