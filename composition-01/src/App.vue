<template>
  <section class="container">
    <user-data :firstname="firstname" :lastname="lastname"></user-data>
    <hr />
    <button @click="setAge">Change Age</button>
    <br /><br /><br /><br />
    <input v-model="firstname" type="text" placeholder="Input Firstname" />
    <br /><br />
    <input ref="lastnameInput" type="text" placeholder="Input Lastname" />
    <br /><br />
    <button @click="setLastname">Set Lastname</button>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// import { reactive } from 'vue';
export default {
  components: {
    UserData: UserData
  },
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const lastnameInput = ref(null);
    const age = ref(21);
    // const user = reactive({
    //   name: 'Muhammad Aziz Al-assad',
    //   age: 21
    // });

    provide('userAge', age);

    const fullname = computed(() => `${firstname.value} ${lastname.value}`);

    watch([age, fullname], (newValue, oldValue) => {
      console.log('new value:', newValue);
      console.log('old value:', oldValue);
    });

    const setAge = () => {
      age.value += 1;
    };

    // const setFirstname = event => {
    //   firstname.value = event.target.value;
    // };

    // const setLastname = event => {
    //   lastname.value = event.target.value;
    // };

    const setLastname = () => {
      lastname.value = lastnameInput.value.value;
    };

    return {
      fullname,
      firstname,
      lastname,
      lastnameInput,
      setLastname,
      age,
      setAge
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
