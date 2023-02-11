<template>
  <the-form></the-form>
  <ListResult></ListResult>
</template>

<script>
import TheForm from './components/TheForm.vue';
import ListResult from './components/ListResult.vue';

export default {
  components: {
    TheForm,ListResult
  }  
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>