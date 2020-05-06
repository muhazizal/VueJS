<template>
  <li class="list-group-item" @click="showDetail" style="cursor: pointer">Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    showDetail() {
      serverBus.$emit("showDetail", this.server);
    }
  }
};
</script>