<template>
  <div>
    <h3>Edit the User</h3>
    <p>Name: {{ $route.query.name }}</p>
    <p>Age: {{ $route.query.age }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>

    <div style="height: 1000px"></div>
    <p id="data">Hashed Link</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },

  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>