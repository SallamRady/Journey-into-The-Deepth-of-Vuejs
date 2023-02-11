<template>
  <div class="container">
    <BaseButton @click="loadSubmittedApps"
      >Load Submitted Applications</BaseButton
    >
    <p class="loadingMsg" v-if="isLoading">Loading...</p>
    <div class="result" v-if="applications.length && !isLoading">
      <h1>Jop Applications</h1>
      <ul>
        <JobApplication
          v-for="application in applications"
          :key="application.id"
          :name="application.name"
          :age="application.age"
          :hearby="application.hearBy"
          :JsLevel="application.JsLevel"
        ></JobApplication>
      </ul>
    </div>
  </div>
</template>

<script>
import JobApplication from "./JobApplication.vue";
import BaseButton from "./UI/BaseButton.vue";

export default {
  components: { JobApplication, BaseButton },
  props: [],
  data() {
    return {
      applications: [],
      isLoading: false,
    };
  },
  methods: {
    loadSubmittedApps() {
      let url =
        "https://vue-demo101-default-rtdb.firebaseio.com/job_applications.json";
      this.isLoading = true;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          let results = [],
            app;
          console.log(result);
          for (const id in result) {
            app = result[id];
            app.id = id;
            results.push(app);
          }
          this.applications = results;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
div.container {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
div.container p.loadingMsg {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin: 1.3rem auto;
  text-shadow: 1px 1px 3px;
}
</style>
