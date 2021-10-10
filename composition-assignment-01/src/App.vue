<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <!-- <h3 v-if="isVisible">{{ courseGoal }}</h3> -->
    <h3 v-if="goal.visibility">{{ goal.title }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="setVisibleCourseGoal">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script>
import { ref } from 'vue';
// import { reactive } from 'vue';
export default {
  // data() {
  //   return {
  //     courseGoal: 'Learning Composition API',
  //     isVisible: false
  //   };
  // },
  // methods: {
  //   setVisibleCourseGoal() {
  //     this.isVisible = !this.isVisible;
  //   }
  // }
  setup() {
    // *Separate refs
    // const courseGoal = ref('Learning Composition API');
    // const isVisible = ref(false);

    // const setVisibleCourseGoal = () => {
    //   isVisible.value = !isVisible.value;
    // };

    // *Ref object
    const goal = ref({
      title: 'Learning Composition API',
      visibility: false
    });

    const setVisibleCourseGoal = () => {
      goal.value.visibility = !goal.value.visibility;
    };

    // *Reactive object
    // const goal = reactive({
    //   title: 'Learning Composition API',
    //   visibility: false
    // });

    // const setVisibleCourseGoal = () => {
    //   goal.visibility = !goal.visibility;
    // };

    return { goal, setVisibleCourseGoal };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
