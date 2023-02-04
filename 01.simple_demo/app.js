/*
//Just JS
// Declaration
let btn = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");

// add event listener
btn.addEventListener("click", () => {
  let content = input.value;
  let li = document.createElement("li");
  li.textContent = content;
  list.appendChild(li);
  input.value = "";
});
*/

//working with Vue JS
Vue.createApp({
    data(){
        return {
            goals:[],
            enteredData:''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredData);
            this.enteredData = '';
        }
    },
}).mount('#app');