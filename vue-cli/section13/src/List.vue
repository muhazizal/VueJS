<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filteredText" />
    <ul>
      <li v-for="item in filteredItems" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { itemsMixin } from "./itemsMixin";

export default {
  mixins: [itemsMixin],
  created() {
    console.log("Created inside List vue");
  }
};
</script>