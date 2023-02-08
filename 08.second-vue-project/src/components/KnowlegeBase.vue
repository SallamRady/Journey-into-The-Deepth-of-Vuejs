<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowlegeGrid
      :topics="topics"
      @select-topic="$emit('select-topic', $event)"
    ></KnowlegeGrid>
  </section>
</template>

<script>
import KnowlegeGrid from "./KnowlegeGrid.vue";

export default {
  components: { KnowlegeGrid },
  props: ["topics"],
  emits: ["select-topic"],
};
</script>
