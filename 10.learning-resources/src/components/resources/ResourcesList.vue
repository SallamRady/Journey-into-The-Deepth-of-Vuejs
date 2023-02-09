<template>
  <ul>
    <ResourceItem
      v-for="(resource,index) in resources"
      :key="resource.id"
      :item="resource"
      :index="index"
    ></ResourceItem>
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  components: { ResourceItem },
  inject: ["resources"],
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
