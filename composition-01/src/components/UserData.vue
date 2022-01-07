<template>
  <div>
    <h2>Fullname: {{ fullname }}</h2>
    <p>Age: {{ age }}</p>
  </div>
</template>
<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
export default {
  props: ['firstname', 'lastname'],
  setup(props) {
    const fullname = computed(() => `${props.firstname} ${props.lastname}`);
    const age = inject('userAge');

    // context.emit('on-something', null);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return { fullname, age };
  }
};
</script>
