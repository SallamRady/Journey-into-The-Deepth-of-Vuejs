const app = Vue.createApp({
    data:function(){
        return {
            goals:[],
            enteredGoal:'',
            sallam:{
                name:'Sallam Rady',
                age:23,
                country:'Egypt',
                state:'Sohag',
                city:'Tahta'
            }
        }
    },
    methods: {
        addGoal(){
            if(this.enteredGoal.trim().length != 0){
                this.goals.push(this.enteredGoal);
                this.enteredGoal = '';
            }
        },
        removeGoal(idx){
            this.goals.splice(idx,1);
        }
    },
});

app.mount('body');