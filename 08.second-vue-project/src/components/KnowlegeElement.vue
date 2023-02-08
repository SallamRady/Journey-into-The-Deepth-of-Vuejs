<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectedTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ["id", "topicName", "description"],
  inject:['selectedTopic']
};
</script>
