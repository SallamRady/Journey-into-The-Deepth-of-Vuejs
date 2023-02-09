<template>
  <TheHeader title="Learning Resources"></TheHeader>
  <ResourcesGrid></ResourcesGrid>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ResourcesGrid from "./components/resources/ResourcesGrid.vue";

export default {
  components: { TheHeader, ResourcesGrid },
  data() {
    return {
      resources: [
        {
          id: 101,
          title: "Vue Js Guide",
          description:
            "Vue Js is a great JS framework for building a great UserInterfaces for our Apps.",
          link: "https://vuejs.org/",
        },
        {
          id: 102,
          title: "Google",
          description:
            "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software.",
          link: "https://google.org",
        },
      ],
    };
  },
  methods: {
    addResource(resource) {
      this.resources.unshift(resource);
    },
    removeResource(id) {
      this.resources = this.resources.filter(
        item=>item.id !== id
      );
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
