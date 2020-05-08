<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            class="form-control"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="getData">Get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="user in usersData"
            :key="user.username"
          >{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      usersData: [],
      resource: ""
    };
  },

  methods: {
    submit() {
      // this.$http
      //   .post("data.json", this.user)
      //   .then(response => {
      //     console.log(response.json());
      //   })
      //   .catch(() => {
      //     console.log("error");
      //   });
      // this.resource.save({}, this.user);
      this.resource.saveAlternative(this.user);
    },

    getData() {
      // this.$http
      //   .get("data.json")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(responseJson => {
      //     let arrayResult = [];
      //     for (let key in responseJson) {
      //       arrayResult.push(responseJson[key]);
      //     }
      //     this.usersData = arrayResult;
      //   })
      //   .catch(() => {
      //     console.log("error");
      //   });
      this.resource
        .getData()
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          let arrayResult = [];
          for (let key in responseJson) {
            arrayResult.push(responseJson[key]);
          }
          this.usersData = arrayResult;
        })
        .catch(() => {
          console.log("error");
        });
    }
  },

  created() {
    const customAction = {
      saveAlternative: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("alternative.json", {}, customAction);
  }
};
</script>

<style>
</style>
