<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click an quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGridVue from "./components/QuoteGrid.vue";
import NewQuoteVue from "./components/NewQuote.vue";
import HeaderVue from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ["test"],
      maxQuotes: 10
    };
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length == this.maxQuotes) {
        return alert(
          "Quotes is full, please delete some quote to insert new quote"
        );
      } else if (this.quotes.includes(quote)) {
        return alert("You cant insert the same quote");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    "app-header": HeaderVue,
    "app-quote-grid": QuoteGridVue,
    "app-new-quote": NewQuoteVue
  }
};
</script>

<style>
</style>
