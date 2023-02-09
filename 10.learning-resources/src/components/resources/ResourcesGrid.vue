<template>
  <div>
    <BaseButton
      @click="setSelectedComponent('ResourcesList')"
      :mode="showResourcesMode"
      >Show Resources
    </BaseButton>
    <BaseButton
      @click="setSelectedComponent('AddResource')"
      :mode="addResourcesMode"
      >Add Resource
    </BaseButton>
  </div>
  <KeepAlive>
    <component :is="selectedComponent"></component>
  </KeepAlive>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import AddResource from "./AddResource.vue";
import ResourcesList from "./ResourcesList.vue";

export default {
  components: { BaseButton, AddResource, ResourcesList },
  data() {
    return {
      selectedComponent: "ResourcesList",
    };
  },
  computed: {
    showResourcesMode() {
      if (this.selectedComponent === "ResourcesList") return "";
      return "flat";
    },
    addResourcesMode() {
      if (this.selectedComponent === "AddResource") return "";
      return "flat";
    },
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>

<style scoped>
div {
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-around;
  width: 75%;
}
</style>
