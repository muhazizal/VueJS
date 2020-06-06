<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>your email: {{ email }}</p>
  </div>
</template>

<script>
import axios from "../../auth";

export default {
  data() {
    return {
      email: ""
    };
  },

  created() {
    axios
      .get("/users.json")
      .then(resposne => console.log(resposne))
      .catch(error => console.log(error));

    axios
      .get("/users.json")
      .then(response => {
        const data = response.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        this.email = users[0].email;
      })
      .catch(error => console.log("error"));
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>