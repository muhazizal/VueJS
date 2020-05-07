<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1 -->
        <!-- Build a Local Filter which reverse the text it is applied on -->
        <p>{{ text | reverseText }}</p>
        <hr />

        <!-- Exercise 2 -->
        <!-- Build a Global Filter which count the length of a word and it appends it -->
        <!-- Like this: "Test" => get filtered to: "Test (4)" -->
        <p>{{ text | countWord }}</p>
        <hr />

        <!-- Exercise 3 -->
        <!-- Do the same as in exercise 1 and 2, now with Computed Properties -->
        <p>{{ CReverseText }}</p>
        <p>{{ CCountWord }}</p>
        <hr />

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from "./mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      text: "muhazizal"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
