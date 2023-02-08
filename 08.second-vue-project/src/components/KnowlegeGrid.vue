<template>
  <ul>
    <KnowlegeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></KnowlegeElement>
  </ul>
</template>

<script>
import KnowlegeElement from "./KnowlegeElement.vue";

export default {
  components: { KnowlegeElement },
  // props: ["topics"],
  inject:['topics'],
};
</script>
