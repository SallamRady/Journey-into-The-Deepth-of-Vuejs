<template>
  <li>
    <ResourceCard>
      <div>
        <header>
          <h3>{{ item.title }}</h3>
          <BaseButton mode="flat" @click="removeResource(index)">
            Delete
          </BaseButton>
        </header>
      </div>
      <p>{{ item.description }}</p>
      <nav>
        <a :href="item.link">View Resource</a>
      </nav>
    </ResourceCard>
  </li>
</template>

<script>
import ResourceCard from "../UI/ResourceCard.vue";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { ResourceCard, BaseButton },
  props: ['item','index'],
  inject: ["removeResource"],
};
</script>

<style>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
