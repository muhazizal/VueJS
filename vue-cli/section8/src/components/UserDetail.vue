<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name: {{ users.name }} | Age: {{ users.age }}</p>
    <button @click="resetName()">Reset Name</button>
    <button @click="changeAge()">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    users: {
      type: Object,
      required: true
    },
    changeAge: {
      type: Function,
      required: true
    }
  },
  methods: {
    reverseName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.users.name = "Aziz";
      this.$emit("resetName", this.users.name);
    }
  },
  created() {
    eventBus.$on("changeAgeTwice", data => {
      this.users.age = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
