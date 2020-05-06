<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="CSelected = 'app-blue'">Load Blue Template</button>
        <button class="btn btn-success" @click="CSelected = 'app-green'">Load Green Template</button>
        <button class="btn btn-danger" @click="CSelected = 'app-red'">Load Red Template</button>
        <component :is="CSelected">
          <p>Content</p>
        </component>
        <hr />
        <app-blue>
          <p slot="blue">Blue</p>
        </app-blue>
        <app-green>
          <p slot="green">Green</p>
        </app-green>
        <app-red>
          <p slot="red">Red</p>
        </app-red>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      CSelected: "app-blue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
