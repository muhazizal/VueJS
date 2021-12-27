<template>
  <section class="container">
    <h2>Fullname: {{ fullname }}</h2>
    <p>Age: {{ age }}</p>
    <hr />
    <button @click="setAge">Change Age</button><br /><br />
    <input
      v-model="firstname"
      type="text"
      placeholder="Input Firstname"
    /><br /><br />
    <input v-model="lastname" type="text" placeholder="Input Lastname" />
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
// import { reactive } from 'vue';
export default {
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const age = ref(21);
    // const user = reactive({
    //   name: 'Muhammad Aziz Al-assad',
    //   age: 21
    // });

    const fullname = computed(() => `${firstname.value} ${lastname.value}`);

    const setAge = () => {
      age.value = 22;
    };

    watch([age, fullname], (newValue, oldValue) => {
      console.log('new value:', newValue);
      console.log('old value:', oldValue);
    });

    // const setFirstname = event => {
    //   firstname.value = event.target.value;
    // };

    // const setLastname = event => {
    //   lastname.value = event.target.value;
    // };

    return { fullname, firstname, lastname, age, setAge };
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
