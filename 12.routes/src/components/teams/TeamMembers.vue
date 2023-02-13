<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  props: ["id"],
  inject: ["teams", "users"],
  data() {
    return {
      teamName: "Test",
      members: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("Route Guard from Component");
    next();
  },
  created() {
    // let { id } = this.$route.params;
    let team = this.teams.find((item) => item.id === this.id);
    this.teamName = team.name;
    for (const memberId in team.members) {
      let user = this.users.find((item) => item.id === team.members[memberId]);
      this.members.push(user);
    }
  },
  mounted() {
    console.log("Team Details : ", this.$route.meta);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
