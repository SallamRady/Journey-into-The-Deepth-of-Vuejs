<template>
  <section>
    <BaseCard>
      <template v-slot:cardHeader>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script>
import BaseBadge from "./BaseBadge.vue";
import BaseCard from "./BaseCard.vue";

export default {
  components: { BaseBadge, BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

<!-- <style scoped> -->
<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
