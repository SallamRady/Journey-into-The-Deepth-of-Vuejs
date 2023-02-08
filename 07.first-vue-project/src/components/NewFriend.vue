<template>
  <div class="add-friend">
    <h1>Add Friend</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-controller">
        <label><strong>Name : </strong></label>
        <input type="text" v-model="name"/>
      </div>
      <div class="input-controller">
        <label><strong>Email : </strong></label>
        <input type="email" v-model="email"/>
      </div>
      <div class="input-controller">
        <label><strong>Phone : </strong></label>
        <input type="text" v-model="phone"/>
      </div>
      <div class="input-controller">
        <label><strong>Favorite ? </strong></label>
        <input type="checkbox" v-model="isFavorite"/>
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            email:'',
            phone:'',
            isFavorite:false
        }
    },
    emits:{
        'add-friend':function(name,email,phone,isFavorite){
            return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && isFavorite;
        }
    },
    methods:{
        handleSubmit(){
            this.$emit('add-friend',this.name,this.email,this.phone,this.isFavorite);
        }
    }
};
</script>

<style>
.add-friend {
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.add-friend h1 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
.input-controller {
  margin: 0.2rem 0;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 26%);
}
</style>
