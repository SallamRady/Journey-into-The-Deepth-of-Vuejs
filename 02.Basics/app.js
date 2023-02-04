const app = Vue.createApp({
  data() {
    return {
      goalA: "Finish the course and learn Vue!",
      goalB: "Master Vue and build amazing apps!",
      link: "https://vuejs.org/",
      note: "<mark><i>Note :Life is hard man,so you should be strong to live.</i></mark>",
      counter: 0,
      name: "",
      email: "",
      boxA:false,
      boxB:false,
      boxC:false,
    };
  },
  watch:{
    counter(newValue,oldValue){
      if(newValue < 0 || this.counter > 60){
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      if (this.name === "") return "";
      return this.name + " Rady";
    },
  },
  methods: {
    outputGoal() {
      const level = Math.random() * 10;
      if (level < 5) {
        return "Learn Vue!";
      }
      return "Master Vue!";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    seName(event, lasName) {
      // this.name = event.target.value + " " + lasName;
      this.name = event.target.value;
    },
    selectBox(code){
      switch(code){
        case 'A':
          this.boxA = !this.boxA;
          break;
        case 'B':
          this.boxB = !this.boxB;
          break;
        case 'C':
          this.boxC = !this.boxC;
          break;
      }
    }
  },
});

app.mount("body");
