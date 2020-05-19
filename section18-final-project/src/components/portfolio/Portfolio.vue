<template>
  <div class="row mt-5">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockVue from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },

  components: {
    "app-stock": StockVue
  }
};
</script>

<style>
</style>