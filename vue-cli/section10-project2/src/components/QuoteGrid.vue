<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >{{ quote }}</app-quote>
  </div>
</template>

<script>
import QuoteVue from "./Quote.vue";

export default {
  props: {
    quotes: {
      type: Array,
      required: true
    }
  },
  components: {
    "app-quote": QuoteVue
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style scoped>
</style>