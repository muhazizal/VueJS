<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Select a server to see the detail</p>
    <p v-else>Server #{{ server.id }} | Status: {{ server.status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    changeStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    serverBus.$on("showDetail", server => {
      this.server = server;
    });
  }
};
</script>

<style scoped>
</style>
