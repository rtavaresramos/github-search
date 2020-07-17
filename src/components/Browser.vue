<template>
  <div class="container"  @keyup="handleEnter">
    <div class="search__container">
      <div class="form__container" v-bind:class="{'column-direction': coll, 'row-direction': row}">
        <div class="form__content">
          <h1>Github </h1>
          <span>Search</span>
        </div>
       <div class="input__container">
        <input v-model="userInput" type="text" v-bind:placeholder="user.login">
        <a href="#" v-on:click.prevent="()=>{
          
          loaded = false
          getUser(userInput)
          this.getRepos(userInput)
          userInputValidator = ''
          }
        " class="button-search"> 

          <img src="../assets/search.png" alt="">

         </a>
       </div>
      </div>
    </div>
  <div class="profile__place">
    <Profile :user="user" :github="github"
    v-if="userInputValidator == '' && loaded == true"
     />

  <h2 v-else >{{userInputValidator}}</h2>
</div>
  </div>
</template>

<script>
import Profile from './Profile.vue'

import axios from 'axios'

export default {
  name: 'Browser',
  components:{
    Profile
  },
  data(){
    return{
      github: {
        url: 'https://api.github.com/users',
        client_id: '6dd2bb42360aaf81c4a6',
        cliente_secret: '0ea7c88eb9dc409f0ec90e9a96e55bd11eafc4e1',
        count: 7,
        sort:'created: asc'
      },
      user: [],
      repos: [],
      userInput: '',
      userInputValidator: '',
      coll: true,
      row: false,
      loaded: true

    }
  },
  methods: {
    chagenClass(){
      this.coll = false

    },
    handleEnter(e){
      if (e.keyCode === 13) {
        this.loaded = false          
        this.getUser(this.userInput)
        this.userInputValidator = ''
      }    
    },
    getUser(userLogin){
      
      const { url, client_id, client_secret, count, sort } = this.github 
      axios.get(
      `${url}/${userLogin}?cliente_id=${client_id}&client_secret=${client_secret}`
      ).then(({data})=> {
        this.userInput = ''
        this.coll ? this.coll = false : this.coll = this.coll
        this.row ? this.row = this.row : this.row = true 
        this.loaded = true
        this.user = data
        })
        .catch(e => {
        this.userInputValidator = "Nenhum usuário foi encontrado!"
        this.coll ? this.coll = this.coll : this.coll = true 
        this.row ? this.row = false : this.row = this.row
        this.loaded = false


})
      }
    }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
body, * {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body a, * a {
  text-decoration: none;
  color: unset;
}

body input, * input {
  width: 600px;
  height: 100%;
  background: #FFFFFF;
  border: 2px solid #000000;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
  ::-webkit-input-placeholder {
    color: #757575;
  }
.profile__place{
  margin: 30px 0
}
body{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
body .input__container, * .input__container {
  display: flex;
  width: 700px;
  height: 50px;

}

body .input__container .button-search, * .input__container .button-search {

  border: none;
  border-bottom: 2px solid #000;
  color: white;
  background: #000000;
  border-radius: 0px;
}

.input__container input{
  background: #FFFFFF;
  border: 2px solid #000000;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;  
  -webkit-appearance: none;
  appearance: none;
  height: 100%;
  font-size: 24px;
  padding:10px
}

.button-search{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100vw;
}
 
.form__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  transition: 2s ease;


}

.row-direction{

  display: flex;
  width: 100vw;
  padding:  20px;
      -ms-flex-direction: row;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
border-bottom: 1px solid rgba(0,0,0,.3);
}
.column-direction{
  height:120px;
  flex-direction: column;
            -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
          justify-content: space-between;
  transition: 2s ease;
}

.form__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  margin: 10 40px;

}

.form__content h1 {
  font-weight: 600;
  font-size: 34px;
}

.form__content span {
  margin-left: 30px;
  font-size: 34px;
  font-style: italic;
  font-weight: 300;
}
</style>