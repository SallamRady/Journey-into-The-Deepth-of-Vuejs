<template>
  <div class="backdrop" @click="$emit('close')"></div>
  <dialog open class="animateDialog">
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

.animateDialog {
  animation: blockentering 0.4s ease-out forwards;
}

@keyframes blockentering {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  25% {
    opacity: 0.25;
    transform: translateY(-75px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-50px);
  }
  75% {
    opacity: 0.75;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
