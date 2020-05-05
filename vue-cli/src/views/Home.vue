<template>
  <div class="home">
    <app-server v-for="server in 5" :key="server"></app-server>
  </div>
</template>

<script>
import ServerStatus from "@/components/ServerStatus.vue";

export default {
  components: {
    "app-server": ServerStatus
  }
};
</script>
