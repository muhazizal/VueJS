<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "editUser",
        params: {
          id: this.$route.params.id
        },
        query: {
          name: "aziz",
          age: 20
        },
        hash: "#data"
      }
    };
  },

  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>