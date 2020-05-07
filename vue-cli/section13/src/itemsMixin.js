export const itemsMixin = {
  data() {
    return {
      items: ["Car", "Truck", "Motorcycle", "Bicycle", "Sports Car"],
      filteredText: ""
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(element => {
        return element.match(this.filteredText);
      });
    }
  },
  created() {
    console.log('Created inside itemsMixin');
  }
}