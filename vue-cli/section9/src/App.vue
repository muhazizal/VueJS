<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="CSelected = 'app-quotes'">Quotes</button>
        <button @click="CSelected = 'app-new-quotes'">New Quotes</button>
        <button @click="CSelected = 'app-author'">Author</button>
        <keep-alive>
          <component :is="CSelected"></component>
        </keep-alive>
        <!-- <app-quotes>
          <h3 slot="title">Quotes of The Day!</h3>
          <p slot="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, hic.</p>
        </app-quotes>-->
      </div>
    </div>
  </div>
</template>

<script>
import QuotesVue from "./components/Quotes.vue";
import NewQuotesVue from "./components/NewQuotes.vue";
import AuthorVue from "./components/Author.vue";

export default {
  data: function() {
    return {
      CSelected: "app-quotes"
    };
  },
  components: {
    "app-quotes": QuotesVue,
    "app-new-quotes": NewQuotesVue,
    "app-author": AuthorVue
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
