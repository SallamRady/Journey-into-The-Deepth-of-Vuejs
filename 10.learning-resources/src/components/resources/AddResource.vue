<template>
  <ResourceCard>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          v-model="description"
          rows="3"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" v-model="link" type="url" />
      </div>
      <div>
        <BaseButton @click.prevent="handleSubmit" type="submit"
          >Add Resource</BaseButton
        >
      </div>
    </form>
    <Teleport to="body">
      <ErrorDialog
        v-if="error"
        :title="errorHeader"
        @close-dialog="confirmError"
      >
        <template #default>
          <p>All Fields are required!</p>
        </template>
      </ErrorDialog>
    </Teleport>
  </ResourceCard>
</template>

<script>
import ResourceCard from "../UI/ResourceCard.vue";
import BaseButton from "../UI/BaseButton.vue";
import ErrorDialog from "../UI/ErrorDialog..vue";

export default {
  components: { ResourceCard, BaseButton, ErrorDialog },
  data() {
    return {
      error: false,
      errorHeader: "",
      title: "",
      description: "",
      link: "",
    };
  },
  inject: ["addResource"],
  methods: {
    handleSubmit() {
      if (!this.title.trim()) {
        this.error = true;
        this.errorHeader = "Title is missing!";
      } else if (!this.description.trim()) {
        this.error = true;
        this.errorHeader = "Description is missing!";
      } else if (!this.link.trim()) {
        this.error = true;
        this.errorHeader = "Link is missing!";
      } else {
        let id = this.title + Math.random();
        this.addResource({
          id,
          title: this.title,
          description: this.description,
          link: this.link,
        });
      }
    },
    confirmError() {
      this.error = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
