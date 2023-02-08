<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <NewFriend @add-friend="addFriend"></NewFriend>
  <section id="friendsList">
    <ul>
      <FriendContact v-for="friend in friends" :key="friend.id" :friend="friend" @toggle-favorite="toggleFavorite" @delete-friend="deleteFriend"></FriendContact>
      <!-- <FriendContact :is-favorite="true" name="Sallam Rady" email-address="sallam@tes.com" phone="098 478 5619"></FriendContact>
      <FriendContact  name="Sallam Rady" email-address="sallam@tes.com" phone="098 478 5619"></FriendContact> -->
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendConcat.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  components: { FriendContact,NewFriend },
  data() {
    return {
      friends: [
        {
          id: "101",
          name: "Ibrahim El-Morshady",
          email: "ibrahim@test.com",
          phone: "098 478 5619",
          isFavorite:true
        },
        {
          id: "102",
          name: "Ahmed Ezzat",
          email: "ahmed@test.com",
          phone: "098 408 3579",
          isFavorite:false
        },
      ],
    };
  },
  methods:{
    toggleFavorite(friendId){
      let selectedFriend = this.friends.find(item=>item.id === friendId);
      selectedFriend.isFavorite = !selectedFriend.isFavorite;
    },
    addFriend(name,email,phone,isFavorite){
      let id = this.friends.length + 101;
      this.friends.push({id,name,email,phone,isFavorite});
    },
    deleteFriend(friendId){
      this.friends = this.friends.filter(item=>item.id != friendId);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#friendsList ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
