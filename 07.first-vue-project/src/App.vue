<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <section id="app">
    <ul>
      <FriendContact></FriendContact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendConcat.vue";

export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "101",
          name: "Ibrahim El-Morshady",
          email: "ibrahim@test.com",
          phone: "098 478 5619",
        },
        {
          id: "102",
          name: "Ahmed Ezzat",
          email: "ahmed@test.com",
          phone: "098 408 3579",
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
