<template>
  <div>
    <h2>Fullname: {{ fullname }}</h2>
    <p>Age: {{ age }}</p>
  </div>
</template>
<script>
import { computed } from 'vue';
export default {
  props: ['firstname', 'lastname', 'age'],
  setup(props) {
    const fullname = computed(() => `${props.firstname} ${props.lastname}`);

    return { fullname };
  }
};
</script>
