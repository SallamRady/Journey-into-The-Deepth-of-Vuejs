<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      isFinished: false,
    };
  },
  mounted() {
    console.log(this.$route.meta);
    setTimeout(() => {
      this.isFinished = true;
    }, 4000);
  },
  beforeRouteLeave(to, from, next) {
    if (this.isFinished) next();

    const leave = confirm(
      "Are you sure you want to leave?your data unsaved yet!"
    );

    if (leave) next(leave);
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
</style>
