export const mixin = {
  computed: {
    CReverseText() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    CCountWord() {
      return `${this.text} (${this.text.length})`;
    }
  }
}