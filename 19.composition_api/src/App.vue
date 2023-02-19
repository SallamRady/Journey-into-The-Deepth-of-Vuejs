<template>
  <main>
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
  <!-- <h1>Name : {{ fullName }}</h1>
  <h1>{{ userName }}</h1>
  <h2>{{ age }}</h2>
  <hr />
  <h1>{{ user.name }}</h1>
  <h2>{{ user.age }}</h2>
  <hr />
  <h2>{{ post.name }}</h2>
  <h2>{{ post.content }}</h2>
  <hr />
  <h4>
    Counter : {{ counter }} - <button @click="increaseCounter">Add</button>
  </h4>
  <hr />
  <div>{{ key }} : {{ value }}</div>
  <input type="text" v-model="key" />
  <input type="text" v-model="value" />
  <hr />
  <div>
    City Name :
    <input type="text" ref="cityInput" />
    <button @click="setCity">Set City</button>
    <br />
    <h5>{{ user.name }} city is : {{ city }}</h5>
  </div> -->
</template>

<script>
// import { ref, reactive, computed, watch } from "vue";
// export default {
//   name: "App",
//   setup(props, context) {
//     console.log(props, context);
//     // declaration data variables
//     let counter = ref(0);
//     let key = ref("");
//     let value = ref("");
//     let user = ref({
//       firstName: "Sallam",
//       lastName: "Rady",
//       age: 22,
//     });
//     let post = reactive({
//       id: "p101",
//       name: "Post 101",
//       content: "This is post 101",
//     });
//     let cityInput = ref(null);
//     let city = ref("");

//     //watchers...
//     watch(counter, function (newValue, oldValue) {
//       console.log("counter is changed from ", oldValue, " to ", newValue);
//     });
//     watch([key, value], function (newValues, oldValues) {
//       console.log(
//         "key and value are changed from: ",
//         oldValues,
//         " to: ",
//         newValues
//       );
//     });
//     //computed
//     let fullName = computed(() => {
//       return user.value.firstName + " " + user.value.lastName;
//     });
//     //methods
//     function increaseCounter() {
//       counter.value++;
//     }
//     setTimeout(() => {
//       user.value.age = 23;
//       post.name = "Post 102";
//       post.content = "This is post 102";
//       console.log("user and post are updated.");
//     }, 2000);
//     function setCity() {
//       console.log(cityInput.value.value);
//       city.value = cityInput.value.value;
//     }

//     // return object which compossed with vue.
//     return {
//       userName: user.value.name,
//       age: user.value.age,
//       user,
//       post,
//       counter,
//       increaseCounter,
//       fullName,
//       key,
//       value,
//       setCity,
//       cityInput,
//       city,
//     };
//   },
// };

import USER_DATA from "./dummy-data.js";

import UserList from "./components/users/UserList.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import { ref } from "vue";
export default {
  components: {
    UserList,
    ProjectsList,
  },
  setup() {
    // data
    const activeUsers = USER_DATA;
    const selectedUser = ref(null);

    //methods
    function selectUser(uid) {
      selectedUser.value = activeUsers.find((usr) => usr.id === uid);
    }

    return {
      activeUsers,
      selectedUser,
      selectUser,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
