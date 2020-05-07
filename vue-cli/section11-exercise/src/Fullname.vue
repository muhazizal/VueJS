<template>
  <div>
    <div class="form-group">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        class="form-control"
        :value="firstname"
        @input="changeName(true, $event)"
      />
    </div>
    <div class="form-group">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        class="form-control"
        :value="lastname"
        @input="changeName(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    changeName(isFisrt, event) {
      let name = "";
      if (isFisrt) {
        name = event.target.value + " " + this.lastname;
      } else {
        name = this.firstname + " " + event.target.value;
      }
      this.value = name;
      this.$emit("input", this.value);
    }
  },
  computed: {
    firstname() {
      return this.value.split(" ")[0];
    },
    lastname() {
      return this.value.split(" ")[1];
    }
  }
};
</script>