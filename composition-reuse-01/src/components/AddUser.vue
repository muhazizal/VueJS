<template>
  <div>
    <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
      <p>Do you want to continue with adding a user?</p>
    </user-alert>
    <section>
      <h2>Add a User</h2>
      <button @click="showAlert">Add User</button>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const title = ref('Add a User?');
    const alertParams = reactive({
      visibility: true,
    });
    const { alertIsVisible, showAlert, hideAlert } = useAlert(alertParams);

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      title,
    };
  },
};
</script>
