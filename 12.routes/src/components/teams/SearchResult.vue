<template>
  <h3>There is {{ result.length }} results for your search.</h3>
  <ul>
    <teams-item
      v-for="team in result"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script>
import TeamsItem from "./TeamsItem.vue";

export default {
  components: {
    TeamsItem,
  },
  inject: ["teams"],
  data() {
    return {
      result: [],
    };
  },
  methods: {
    searchInTeams() {
      let { search } = this.$route.query;
      this.teams.map((item) => {
        console.log(item);
        let str = item.name.toLowerCase();
        search = search.toLowerCase();
        if (str.indexOf(search) != -1) {
          this.result.push(item);
        }
      });
    },
  },
  created() {
    this.searchInTeams();
  },
  watch: {
    $route() {
      this.result = [];
      this.searchInTeams();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
