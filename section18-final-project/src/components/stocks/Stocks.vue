<template>
  <div class="row mt-5">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import StockVue from "./Stock.vue";

export default {
  components: {
    "app-stock": StockVue
  },

  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style></style>
