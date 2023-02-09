<template>
  <section>
    <h1>Manage Goals</h1>
    <input type="text" ref="goalInput" />
    <button @click="setGoal">Set Goal</button>
    <Teleport to="body">
      <ErrorAlert v-if="error">
        <h4>Invalid Input!</h4>
        <p>Goal can't be empty.</p>
        <button @click="confimError">OK!</button>
      </ErrorAlert>
    </Teleport>
  </section>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    setGoal() {
      let { value } = this.$refs.goalInput;
      if (value.trim() === "") {
        this.error = true;
      } else {
        //set goal.
      }
    },
    confimError() {
      this.error = false;
    },
  },
};
</script>
