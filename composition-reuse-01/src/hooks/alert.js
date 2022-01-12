import { ref } from 'vue';

export default function useAlert(params = { visibility: false }) {
  const alertIsVisible = ref(params.visibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return {
    alertIsVisible,
    showAlert,
    hideAlert,
  };
}
