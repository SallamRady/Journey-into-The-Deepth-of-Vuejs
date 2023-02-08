<template>
  <li>
    <!-- &#9825; &#10084; -->
    <h2>
      {{ friend.name }}
      <button class="heart" @click="toggleFavorite">
        <span v-if="friend.isFavorite">&#10084;</span>
        <span v-else>&#9825;</span>
      </button>
    </h2>
    <button @click="toggleDetails">
      <span v-if="!showDetails">Show</span>
      <span v-else>Hide</span>
      Details
    </button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props:data comming from parent component
  props: {
    friend: {
      type: Object,
      required: true,
    },
    // name: {
    //   type:String,
    //   required:true
    // },
    // emailAddress: {
    //   type:String,
    //   required:true
    // },
    // phone: String,
    // // isFavorite: {
    // //   type:String,
    // //   required:false,
    // //   default:'0',
    // //   validator:function(value){
    // //     return value === "1" || value === "0";
    // //   }
    // // },
    // isFavorite: {
    //   type:Boolean,
    //   required:false,
    //   default:false
    // },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id) return true;
      console.warn("Id is missing!");
      return false;
    },
    "delete-friend": function (id) {
      if (id) return true;
      console.warn("Id is missing!");
      return false;
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.friend.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.friend.id);
    },
  },
};
</script>

<style>
#friendsList li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#friendsList h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#friendsList button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0.2rem;
}

#friendsList button:hover,
#friendsList button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
button.heart {
  border-radius: 50%;
  text-align: center;
  padding: 0.19rem;
  margin: 0.4rem;
}
</style>
