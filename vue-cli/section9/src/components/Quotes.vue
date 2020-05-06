<template>
  <div>
    <h3>Quotes</h3>
    <p>Number: {{ counter }}</p>
    <button @click="counter++">Increase</button>
    <!-- <div class="title">
      <slot name="title"></slot>
      <span>
        <slot name="subtitles">Subtitles</slot>
      </span>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>-->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  deactivated() {
    console.log("Deactiveated");
  },
  activated() {
    console.log("Activated");
  }
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h3 {
  color: darkblue;
}

span {
  color: rgb(58, 58, 58);
}

.title {
  font-style: italic;
}
</style>