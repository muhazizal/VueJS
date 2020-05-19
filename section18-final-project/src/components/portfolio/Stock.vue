<template>
  <div class="col-sm-6 col-md-12 mb-3">
    <div class="card">
      <div class="card-header bg-info">
        <div class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}} )</small>
        </div>
      </div>
      <div class="card-body">
        <div class="float-left mr-3">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: checkQuantity}"
          />
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="sellStock" :disabled="checkQuantity">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    checkQuantity() {
      return this.quantity <= 0 || this.quantity > this.stock.quantity;
    }
  },

  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
