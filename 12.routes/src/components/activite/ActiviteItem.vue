<template>
  <li>
    <h3>{{ title }}</h3>
    <div class="role" :class="roleClass">
      {{ isActive ? "Active" : "Not Active" }}
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "isActive"],
  computed: {
    roleClass() {
      if (this.isActive) {
        return "role--active";
      }
      return "role--not-active";
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--not-active {
  background-color: blue;
  color: white;
}

.role--active {
  background-color: #af003a;
  color: white;
}
</style>
