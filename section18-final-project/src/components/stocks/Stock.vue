<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header bg-success">
        <div class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{stock.price}})</small>
        </div>
      </div>
      <div class="card-body">
        <div class="float-left mr-3">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: checkFunds}"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="checkQuantity || checkFunds"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },

    checkFunds() {
      return this.quantity * this.stock.price > this.funds;
    },

    checkQuantity() {
      return this.quantity <= 0;
    }
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
