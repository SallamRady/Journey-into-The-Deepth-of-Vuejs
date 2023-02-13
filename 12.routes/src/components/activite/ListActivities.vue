<template>
  <ul class="options">
    <li>
      <router-link :to="{ name: 'activeActivites' }"
        >Active Activites</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'notActiveActivites' }"
        >Not Active Activites</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
export default {
  inject: ["activites"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
ul.options {
  display: flex;
  justify-content: space-between;
}
</style>
