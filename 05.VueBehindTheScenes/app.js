const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
    //   this.message = this.currentUserInput;
      this.message = this.$refs.userMessage.value;
    },
  },
  //Vue App Life cycle methods
  beforeCreate() {
    console.log('beforeCreate():before create our app.');
  },
  created() {
    console.log('created():after create our app.');
  }, 
  beforeMount() {
    console.log('beforeMount():before mount our app content to DOM.');
  },  
  mounted() {
    console.log('mounted():after mount our app content to DOM.');
  },
  beforeUpdate() {
    console.log('beforeUpdate():before any update of our app dependances.');
  },
  updated() {
    console.log('updated():after updated our changes in DOM.');
  },
  beforeUnmount() {
    console.log('beforeUnmount():before remove our (vue app/component).');
  },
  mounted() {
    console.log('mounted():after remove our (vue app/component) from DOM.');
  },
});

app.mount("#app1");

const app2 = Vue.createApp({
  template: `
        <h2>App2 Message</h2>
        <p>{{ message }}</p>
    `,
  data: function () {
    return {
      message:
        "Life is hard sallam, so you must work hard to change your life to better",
    };
  },
});
app2.mount('#app2');

//JS have less reactivity.
let message = "Hello";
let logMessage = message + " World!";
console.log(logMessage); //Hello World!
message = "Welcome";
console.log(logMessage); //Hello World!

//Vue JS has a great reactivity
const data = {
  msg: "",
  logMsg: "",
};
const handler = {
  set(target, key, value) {
    if (key == "msg") {
      target.logMsg = value + " World!";
    }
    target.msg = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.msg = "Hello";
console.log(proxy.logMsg);
proxy.msg = "Hi";
console.log(proxy.logMsg);
