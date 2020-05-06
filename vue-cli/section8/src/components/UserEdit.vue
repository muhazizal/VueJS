<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Age: {{ users.age }}</p>
    <button @click="changeAgeTwice()">Change Age Twice</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    users: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeAgeTwice() {
      this.users.age = 40;
      //   eventBus.$emit("changeAgeTwice", this.users.age);
      eventBus.changeAgeTwice(this.users.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
