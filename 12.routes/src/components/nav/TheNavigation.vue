<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link :to="{ name: 'teams' }">Teams</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/activites' }">My Activites</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <form @submit.prevent="handleSubmit">
            <input type="search" v-model="search" />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ["set-page"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    setActivePage(page) {
      this.$emit("set-page", page);
    },
    handleSubmit(){
      console.log(this.search);
      this.$router.push({name:'TeamSearching',query:{search:this.search}});
    }
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
