<template>
<div>
  <div class="container"  @keyup="handleEnter">
    <div class="search__container">
      <div class="form__container" v-bind:class="{'column-direction' : col,
       'row-direction' : row }">
        <router-link to="/" class="form__content">
          <h1>Github </h1>
          <span>Search</span>
        </router-link>
       <div class="input__container">
        <input type="text" v-bind:placeholder="inputLabel" v-model="userInput">
        <a href="#" v-on:click.prevent="update" class="button-search"> 

          <img src="../assets/search.png" alt="">

        </a>
       </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router'
import Profile from './Profile.vue'

import axios from 'axios'

export default {
  props:[
    'row',
    'col',
    'inputLabel',
  ],
  name: 'Browser',
  components:{
    Profile
  },
  data(){
    return{
      userStorage: localStorage.getItem('username'),
      userInput: '',
      repos: [],
      allStars: [],
      sumStars: 0,
      isRow: row,
      isCol: col
    }
  },

  methods: {
    update: function(){

      this.setUser(this.userInput)
      this.$emit('update')
      this.userInput = ''
      router.push('result')
      
    },

    handleEnter(e){
      if (e.keyCode === 13) {    
        this.update()
      }    
    },
    setUser(userLogin){
      if(userLogin != undefined && userLogin != null){
        localStorage.setItem('username', userLogin)
        this.userInput = ''
        router.push('result')

      }else{
        localStorage.setItem('userFound', 'O preenchimento do campo é obrigatório')
        router.push('/')
        }
      }
    }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

body, * {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body a, * a {
  text-decoration: none;
  color: unset;
}

input {
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
.input__container {
  display: flex;
  max-width: 700px;
  height: 50px;
  margin: 0 60px;
}

.input__container .button-search {

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
  justify-content: center;
  display: none;


}

.row-direction{

  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  padding:  20px;
      -ms-flex-direction: row;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
}
.column-direction{
  height:120px;

  display: flex;
  flex-direction: column;
            -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
          justify-content: space-between;
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

.form__content h1{
  font-family: 'Roboto Mono', sans-serif;
  font-weight: 700;
  font-size: 34px;
}

.form__content span {
  margin-left: 30px;
  font-size: 34px;
  font-style: italic;
  font-weight: 300;
}
h2{
  text-align: center;
}
@media screen and (max-width: 680px){
  input {
  width: auto;
  }
}
</style>