<template>
  <base-container title="Vuex">
    <h4>Counter : {{ counter }}</h4>
    <h4 style="color: tomato">favorite Number {{ favoriteNum }}</h4>
    <button @click="increaseOne">Add 1</button>
    <button @click="increaseBy">Add 5</button>
    <button @click="decreaseOne">-</button>
    <br />
    <button @click="AsyncAdd">Async Add</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseContainer,
  },
  computed: {
    ...mapGetters(["counter", "favoriteNumber"]),
    // counter() {
    //   return this.$store.getters.counter;
    // },
    // favoriteNum() {
    //   return this.$store.getters.favoriteNumber;
    // },
  },
  methods: {
    increaseOne() {
      this.$store.commit("increaseByOne");
    },
    decreaseOne() {
      this.$store.state.counter--;
    },
    increaseBy() {
      // this.$store.commit("increaseByValue", { value: 5 });
      this.$store.commit({ type: "increaseByValue", value: 5 });
    },
    AsyncAdd() {
      this.$store.dispatch("increase");
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
</style>
