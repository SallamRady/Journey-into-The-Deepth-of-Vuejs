<template>
  <ul>
    <activite-item
      v-for="activite in notActiveActivites"
      :key="activite.id"
      :title="activite.title"
      :isActive="activite.isActive"
    ></activite-item>
  </ul>
</template>

<script>
import ActiviteItem from "./ActiviteItem.vue";

export default {
  components: {
    ActiviteItem,
  },
  inject: ["activites"],
  data() {
    return {
      notActiveActivites: this.activites.filter((item) => !item.isActive),
    };
  },
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
