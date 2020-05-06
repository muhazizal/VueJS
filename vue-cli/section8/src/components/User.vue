<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>Name: {{ users.name }}</p>
    <button @click="changeName()">Change Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :users="users" @click="resetName(), $event" :changeAge="changeAge"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :users="users"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data: function() {
    return {
      users: {
        name: "Aziz",
        age: 20
      }
    };
  },
  methods: {
    changeName() {
      this.users.name = "Sharfina";
    },
    changeAge() {
      this.users.age = "21";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
