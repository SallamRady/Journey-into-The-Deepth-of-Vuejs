<template>
  <li>
    <p>
      <span class="highlight">Name : {{ name }}</span> <br/>
      <span class="highlight">Age : {{ age }} years old.</span> <br/>
      <span class="highlight">Hearing about Us By : {{ hearby }}</span> <br/>
      his/here Level in JS is 
      <span :class="ratingClass">{{ JsLevel }}</span
      >.
    </p>
  </li>
</template>

<script>
export default {
  props: ["name", "hearby","JsLevel","age"],
  computed: {
    ratingClass() {
      return "highlight rating--" + this.JsLevel;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>
