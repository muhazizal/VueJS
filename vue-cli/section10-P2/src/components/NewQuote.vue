<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <label for="Quote">Quote</label>
      <textarea class="form-control" name="quote" rows="3" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      if (
        this.quote === null ||
        this.quote === undefined ||
        this.quote === ""
      ) {
        return alert("You cant insert empty quote");
      }
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped>
</style>