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
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert';

export default {
  mixins: [alertMixin],
  components: {
    UserAlert,
  },
  data() {
    return {
      title: 'Add a User?',
    };
  },
};
</script>
