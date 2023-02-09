<template>
  <div>
    <TheHeader></TheHeader>
    <!-- <BadgeList></BadgeList>
    <TheUser
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></TheUser>
    <CourseGoal>
      <template #goalItem="slotProps">
        <span><strong>Goal {{ slotProps.index + 1 }} : </strong>{{ slotProps.goal }}</span>
      </template>
    </CourseGoal> -->
    <div class="controller">
      <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
      <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    </div>
    <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"></ActiveGoals>
    <ManageGoals v-if="selectedComponent == 'ManageGoals'"></ManageGoals> -->
    <KeepAlive>
      <component :is="selectedComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

// import BadgeList from "./components/BadgeList.vue";
// import TheUser from "./components/TheUser.vue";
// import CourseGoal from "./components/CourseGoal.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals /* BadgeList, TheUser,CourseGoal*/,
  },
  data() {
    return {
      activeUser: {
        name: "Sallam Rady Ramadan",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "ActiveGoals",
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
.controller {
  margin: 1rem 0.5rem;
}

.controller button {
  padding: 0.5rem;
  border: 1px solid black;
  background-color: #8080804a;
  color: gray;
  font-size: 1rem;
  margin: 0.2rem;
  font-weight: 600;
  border-radius: 0.3rem;
  cursor: pointer;
}

.controller button:hover {
  box-shadow: 1px 1px 2px gray;
}
</style>
