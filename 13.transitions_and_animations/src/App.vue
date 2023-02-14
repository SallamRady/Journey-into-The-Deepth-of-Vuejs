<template>
  <div class="container">
    <div class="block" :class="{ animate: animateBlock }"></div>
    <button @click="animatedBlock">Animate</button>
  </div>
  <div class="container">
    <Transition>
      <p v-if="displayParagraph">Life is hard Sallam, so you must be strong.</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph!</button>
  </div>
  <BaseModel @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </BaseModel>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import BaseModel from "./components/BaseModel.vue";

export default {
  components: { BaseModel },
  data() {
    return {
      displayParagraph: false,
      dialogIsVisible: false.valueOf,
      animateBlock: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animatedBlock() {
      this.animateBlock = true;
    },
    toggleParagraph() {
      this.displayParagraph = !this.displayParagraph;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.35s ease-in-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-170px); */
  animation: moveBlock 0.37s ease-in forwards;
  /*forwards:mean when you finish animation keep this state and don't go to 0% again*/
}

@keyframes moveBlock {
  0% {
    transform: translateX(-50px) scale(0.9);
  }
  35% {
    transform: translateX(-100px) scale(1.1);
  }
  70% {
    transform: translateX(-150px) scale(1.051);
  }
  100% {
    transform: translateX(-200px) scale(1);
  }
}

.v-enter-from,
.v-leave-from {
  opacity: 0;
  transform: translateY(-50px);
}

.v-enter-active,
.v-leave-active {
  opacity: 0.5;
  transform: translateY(-27px);
}

.v-enter-to,
.v-leave-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
