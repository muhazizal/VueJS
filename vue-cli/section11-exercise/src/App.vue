<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->

          <!-- edited as exercise 3 -->
          <app-fullname v-model.lazy="fullname"></app-fullname>

          <!-- Mail -->
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" v-model.trim="email" />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model.trim="password" />
          </div>
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label for="yes">
              Yes
              <input type="radio" id="yes" value="Yes" v-model="storeData" />
            </label>
            <label for="no">
              No
              <input type="radio" id="no" value="No" v-model="storeData" />
            </label>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <button class="btn btn-primary" @click.prevent="submitData">Submit</button>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullname }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullnameVue from "./Fullname.vue";

export default {
  components: {
    "app-fullname": FullnameVue
  },
  data() {
    return {
      fullname: "Muhammad Aziz",
      email: "",
      password: "",
      storeData: "",
      isSubmitted: false
    };
  },
  methods: {
    submitData() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
