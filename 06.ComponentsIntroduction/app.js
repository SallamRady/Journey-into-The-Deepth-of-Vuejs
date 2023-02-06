const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "101",
          name: "Ibrahim El-Morshady",
          email: "ibrahim@test.com",
          phone: "098 478 5619",
        },
        {
          id: "102",
          name: "Ahmed Ezzat",
          email: "ahmed@test.com",
          phone: "098 408 3579",
        },
      ],
    };
  },
});

// components
app.component("friend_card", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>  
  `,
  data: function () {
    return {
      showDetails: false,
      friend: {
        id: "101",
        name: "Ibrahim El-Morshady",
        email: "ibrahim@test.com",
        phone: "098 478 5619",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
